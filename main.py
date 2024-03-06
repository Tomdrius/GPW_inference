import os
import sys
import time
from datetime import datetime, timedelta

from dotenv import load_dotenv

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException

from sqlalchemy import create_engine, inspect, Column, String, Integer, Float, exc
from sqlalchemy.orm import declarative_base, sessionmaker, scoped_session
from sqlalchemy_utils import database_exists, create_database

load_dotenv()

options = webdriver.ChromeOptions()
options.add_argument("--disable-notifications")
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--ignore-certificate-errors')
options.add_argument('--headless')
options.add_argument('--log-level=3')
driver = webdriver.Chrome(options=options)
# driver.get('https://www.money.pl/gielda/gpw/akcje/?date=2024-03-04')
driver.get('https://www.money.pl/gielda/gpw/akcje/')
accept_cookie_button = "/html/body/div[3]/div/div[2]/div[3]/div/button[2]"

def is_weekend():
    now = datetime.now()
    day_of_week = now.weekday()
    return day_of_week >= 5

try:
    if is_weekend():
        raise ValueError("It is a weekend")
    cookie_button = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.XPATH, accept_cookie_button))
    )
    cookie_button.click()
except ValueError as ve:
    print(f"Weekend exception: {ve}")
    sys.exit()
except Exception as e:
    print(f"Error while accepting cookie files: {e}")

time.sleep(4)

Base = declarative_base()

today_date = datetime.now().strftime('%d_%m_%Y')
yesterday_date = (datetime.now() - timedelta(days=1)).strftime('%d_%m_%Y')
day_before_yesterday_date = (datetime.now() - timedelta(days=2)).strftime('%d_%m_%Y')

if datetime.now().weekday() == 0:
    yesterday_date = (datetime.now() - timedelta(days=3)).strftime('%d_%m_%Y')
    # print(yesterday_date)
    day_before_yesterday_date = (datetime.now() - timedelta(days=4)).strftime('%d_%m_%Y')
    # print(day_before_yesterday_date)
elif datetime.now().weekday() == 1:
    # yesterday_date = (datetime.now() - timedelta(days=2)).strftime('%d_%m_%Y')
    print(yesterday_date)
    day_before_yesterday_date = (datetime.now() - timedelta(days=4)).strftime('%d_%m_%Y')
    print(day_before_yesterday_date)
class StockData(Base):
    __tablename__ = f'stock_data_{today_date}'
    # __tablename__ = f'stock_data_04_03_2024'
    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    end_day_value = Column(Float)
    trading_value = Column(Integer)

class YesterdayStockData(Base):
    __tablename__ = f'stock_data_{yesterday_date}'
    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    end_day_value = Column(Float)
    trading_value = Column(Integer)

class DayBeforeYesterdayStockData(Base):
    __tablename__ = f'stock_data_{day_before_yesterday_date}'
    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    end_day_value = Column(Float)
    trading_value = Column(Integer)


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
session = Session()

if inspect(postgres_engine).has_table(StockData.__tablename__):
    print(f"Table {StockData.__tablename__} already exists, skipping creation.")
else:
    print(f"Table {StockData.__tablename__} doesn't exist, creating it.")
    Base.metadata.create_all(postgres_engine)



    all_div_elements = WebDriverWait(driver, 4).until(
        EC.visibility_of_all_elements_located((By.CSS_SELECTOR, "div.rt-tr-group")))
    number_of_elements = len(all_div_elements)

    for i in range(1, number_of_elements + 1):
        company_names = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)"
        end_day_value = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
        trading_amount = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1)"
        elements_list = [company_names, end_day_value, trading_amount]
        
        try:
            elements = [WebDriverWait(driver, 4).until(
                EC.visibility_of_element_located((By.CSS_SELECTOR, element))) for element in elements_list]

            company_name = elements[0].text
            end_day_value = elements[1].text
            end_day_value = float(end_day_value.replace(',', '.').replace(' ', ''))

            trading_value = elements[2].text
            trading_value = int(trading_value.replace(' ', '').replace('—', '0'))
            # print(f" {i:3}: {company_name:21} | {end_day_value:6} | {trading_value}")

            stock_data = StockData(company_name=company_name, end_day_value=end_day_value, trading_value=trading_value)
            session.add(stock_data)
            session.commit()

        except StaleElementReferenceException:
            print(f"Error while retrieving from div {i}: Element is stale")

        except Exception as e:
            print(f"Error while retrieving from div {i}: {str(e)}")

driver.quit()

today_rows = session.query(StockData).filter(StockData.trading_value > 100000).all()
yesterday_rows = session.query(YesterdayStockData).filter(YesterdayStockData.trading_value > 100000).all()
day_before_yesterday_rows = session.query(DayBeforeYesterdayStockData).filter(DayBeforeYesterdayStockData.trading_value > 100000).all()

# for today_row in today_rows:
#     for yesterday_row in yesterday_rows:
#         for day_before_yesterday_row in day_before_yesterday_rows:
#             if today_row.end_day_value >= yesterday_row.end_day_value and yesterday_row.end_day_value >= day_before_yesterday_row.end_day_value:
#                 print(f"Think to buy this: {today_row.company_name}  {today_row.end_day_value}")
count = 0
for today_row, yesterday_row, day_before_yesterday_row in zip(today_rows, yesterday_rows, day_before_yesterday_rows):
    if today_row.end_day_value > yesterday_row.end_day_value and yesterday_row.end_day_value > day_before_yesterday_row.end_day_value:
        count = count +1
        print(f"Think to buy this: {today_row.company_name:21} | {today_row.end_day_value:6}  |  {today_row.trading_value}")
print(count)