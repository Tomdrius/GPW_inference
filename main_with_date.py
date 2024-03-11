import os
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

VALUE_ADJUSTMENT = 0.95

options = webdriver.ChromeOptions()
options.add_argument("--disable-notifications")
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--ignore-certificate-errors')
options.add_argument('--headless')
options.add_argument('--log-level=3')
driver = webdriver.Chrome(options=options)

chosen_date = "2024_03_08"

driver.get(f'https://www.money.pl/gielda/gpw/akcje/?date={chosen_date}')
accept_cookie_button = "/html/body/div[3]/div/div[2]/div[3]/div/button[2]"

parsed_date = datetime.strptime(chosen_date, "%Y_%m_%d")
chosen_date = parsed_date.strftime("%d_%m_%Y")
print(chosen_date)


try:
    cookie_button = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.XPATH, accept_cookie_button))
    )
    cookie_button.click()
    
except Exception as e:
    print(f"Error while accepting cookie files: {e}")

time.sleep(4)

Base = declarative_base()

class StockData(Base):
    __tablename__ = f'stock_data_{chosen_date}'
    # __tablename__ = f'stock_data_04_03_2024'
    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    value_change = Column(Float)
    end_day_value = Column(Float)
    trading_value = Column(Integer)
    max_value = Column(Float)



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
        value_change = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)"
        end_day_value = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
        trading_amount = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1)"
        max_value = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1)"

        elements_list = [company_names, value_change, end_day_value, trading_amount, max_value]
        
        try:
            elements = [WebDriverWait(driver, 4).until(
                EC.visibility_of_element_located((By.CSS_SELECTOR, element))) for element in elements_list]

            company_name = elements[0].text
            value_change = elements[1].text
            value_change = float(value_change.replace(',', '.').replace('—', '0'))
            end_day_value = elements[2].text
            end_day_value = float(end_day_value.replace(',', '.').replace(' ', ''))

            trading_value = elements[3].text
            trading_value = int(trading_value.replace(' ', '').replace('—', '0'))
            max_value = elements[4].text
            max_value = float(max_value.replace(',', '.').replace(' ', '').replace('—', '0'))
            max_value = max_value * VALUE_ADJUSTMENT
            
            stock_data = StockData(company_name=company_name, value_change=value_change, end_day_value=end_day_value, trading_value=trading_value, max_value=max_value)
            session.add(stock_data)
            session.commit()

        except StaleElementReferenceException:
            print(f"Error while retrieving from div {i}: Element is stale")

        except Exception as e:
            print(f"Error while retrieving from div {i}: {str(e)}")

driver.quit()
print("Finished")