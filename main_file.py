import os
from datetime import datetime, timedelta
from downloader import main
from dotenv import load_dotenv

from sqlalchemy import create_engine, inspect, Column, String, Integer, Float, exc
from sqlalchemy.orm import declarative_base, sessionmaker, scoped_session
from sqlalchemy_utils import database_exists, create_database

from twilio.rest import Client

load_dotenv()

VALUE_ADJUSTMENT = 0.95
TRADING_VALUE_FILTER = 100000

account_sid = os.getenv('Account_SID')
auth_token = os.getenv('Auth_Token')
client = Client(account_sid, auth_token)

Base = declarative_base()

def set_date():
    today_date = datetime.now().strftime('%d_%m_%Y')
    yesterday_date = (datetime.now() - timedelta(days=1)).strftime('%d_%m_%Y')
    day_before_yesterday_date = (datetime.now() - timedelta(days=2)).strftime('%d_%m_%Y')

    if datetime.now().weekday() == 5:
        today_date = yesterday_date
        yesterday_date = (datetime.now() - timedelta(days=2)).strftime('%d_%m_%Y')
        day_before_yesterday_date = (datetime.now() - timedelta(days=3)).strftime('%d_%m_%Y')
        
    elif datetime.now().weekday() == 6:
        today_date = day_before_yesterday_date
        yesterday_date = (datetime.now() - timedelta(days=3)).strftime('%d_%m_%Y')
        day_before_yesterday_date = (datetime.now() - timedelta(days=4)).strftime('%d_%m_%Y')
        
    elif datetime.now().weekday() == 0:
        yesterday_date = (datetime.now() - timedelta(days=3)).strftime('%d_%m_%Y')
        day_before_yesterday_date = (datetime.now() - timedelta(days=4)).strftime('%d_%m_%Y')
        
    elif datetime.now().weekday() == 1:
        day_before_yesterday_date = (datetime.now() - timedelta(days=4)).strftime('%d_%m_%Y')
    return today_date, yesterday_date, day_before_yesterday_date

class StockData(Base):
    __tablename__ = f'stock_data_{set_date()[0]}'
    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    value_change = Column(Float)
    end_day_value = Column(Float)
    trading_value = Column(Integer)
    max_value = Column(Float)
    

class YesterdayStockData(Base):
    __tablename__ = f'stock_data_{set_date()[1]}'
    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    value_change = Column(Float)
    end_day_value = Column(Float)
    trading_value = Column(Integer)
    max_value = Column(Float)


class DayBeforeYesterdayStockData(Base):
    __tablename__ = f'stock_data_{set_date()[2]}'
    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    value_change = Column(Float)
    end_day_value = Column(Float)
    trading_value = Column(Integer)
    max_value = Column(Float)



def create_database_session():
        postgres_username = os.environ['POSTGRES_USERNAME']
        postgres_password = os.environ.get('POSTGRES_PASSWORD')
        postgres_host = os.environ['POSTGRES_HOST']
        postgres_dbname = os.environ['POSTGRES_DB']
        
        postgres_engine = create_engine(f'postgresql://{postgres_username}:{postgres_password}@{postgres_host}/{postgres_dbname}')
        
        if not database_exists(postgres_engine.url):
            try:
                create_database(postgres_engine.url)
            except exc.DatabaseError as e:
                print(f"Error while creating database: {e}")
                exit(1)
            
        Session = scoped_session(sessionmaker(bind=postgres_engine))
        return Session()
session = create_database_session()

if inspect(session.bind).has_table(StockData.__tablename__):
    print(f"Table {StockData.__tablename__} already exists, skipping creation.")
else:
    try:
        # date_today = datetime.now().strftime("%Y_%m_%d")
        date_today = (datetime.strptime(set_date()[0], "%d_%m_%Y").strftime("%Y_%m_%d"))
        print(date_today)
        main(date=date_today)
    except Exception as e:
        print(f"Error while retrieving elements: {str(e)}")
        
if inspect(session.bind).has_table(YesterdayStockData.__tablename__):
    print(f"Table {YesterdayStockData.__tablename__} already exists, skipping creation.")
else:
    try:
        date_yesterday = (datetime.strptime(set_date()[1], "%d_%m_%Y").strftime("%Y_%m_%d"))
        print(date_yesterday)
        main(date=date_yesterday)
    except Exception as e:
        print(f"Error while retrieving elements: {str(e)}")

if inspect(session.bind).has_table(DayBeforeYesterdayStockData.__tablename__):
    print(f"Table {DayBeforeYesterdayStockData.__tablename__} already exists, skipping creation.")
else:
    try:
        date_day_before_yesterday = (datetime.strptime(set_date()[2], "%d_%m_%Y").strftime("%Y_%m_%d"))
        print(date_day_before_yesterday)
        main(date=date_day_before_yesterday)
    except Exception as e:
        print(f"Error while retrieving elements: {str(e)}")
    

today_rows = session.query(StockData).filter(StockData.trading_value > TRADING_VALUE_FILTER).all()
yesterday_rows = session.query(YesterdayStockData).filter(YesterdayStockData.trading_value > TRADING_VALUE_FILTER).all()
day_before_yesterday_rows = session.query(DayBeforeYesterdayStockData).filter(DayBeforeYesterdayStockData.trading_value > TRADING_VALUE_FILTER).all()

rows = zip(today_rows, yesterday_rows, day_before_yesterday_rows)
sorted_rows = sorted(rows, key=lambda x: sum(row.value_change for row in x), reverse=True)
def odds_selection(sorted_rows):
    results = []
    for today_row, yesterday_row, day_before_yesterday_row in sorted_rows:
        if today_row.value_change > 0 and yesterday_row.value_change > 0 and day_before_yesterday_row.value_change > 0 and today_row.end_day_value >= today_row.max_value:
            all_grow = today_row.value_change + yesterday_row.value_change + day_before_yesterday_row.value_change
            result = f"Think to buy: {today_row.company_name:26} | {today_row.end_day_value:7}  |  {today_row.trading_value:8}  |  {round(all_grow, 2)}"
            print(result)
            results.append((result))
    combined_results = '\n'.join(results)
    return combined_results
sms_body = odds_selection(sorted_rows)
# message = client.messages.create(
#   from_=os.getenv('Phone_nr'),
#   to=os.getenv('My_Phone_nr'),
#   body=sms_body
# )

# print(message.sid)