import os
import time
from datetime import datetime

from dotenv import load_dotenv

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException

from sqlalchemy import create_engine, inspect, Column, String, Integer, Float, exc
from sqlalchemy.orm import declarative_base, sessionmaker, scoped_session
from sqlalchemy_utils import database_exists, create_database

load_dotenv()

VALUE_ADJUSTMENT = 0.95



class StockDataRetriever:
    def __init__(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--disable-notifications")
        options.add_argument('--ignore-ssl-errors=yes')
        options.add_argument('--ignore-certificate-errors')
        options.add_argument('--headless')
        options.add_argument('--log-level=3')
        self.driver = webdriver.Chrome(options=options)
    
    def parse_date(self, chosen_date):
        try:
            parsed_date = datetime.strptime(chosen_date, "%Y-%m-%d")
            # self.driver.get(url)
        except ValueError:
            parsed_date = datetime.strptime(chosen_date, "%Y_%m_%d")
            # self.driver.get(url)
        except:
            print(f"Error while parsing date")
            return None
        return parsed_date
    
    def accept_cookies(self):
        accept_cookie_button = "/html/body/div[3]/div/div[2]/div[3]/div/button[2]"
        try:
            cookie_button = WebDriverWait(self.driver, 5).until(
                EC.element_to_be_clickable((By.XPATH, accept_cookie_button))
            )
            cookie_button.click()
        except Exception as e:
            print(f"Error while accepting cookie files: {e}")
    
    def create_database_session(self):
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

    def retrieve_stock_data(self, chosen_date):
        parsed_date = self.parse_date(chosen_date)
        if not parsed_date:
            return
        
        chosen_date_ = parsed_date.strftime("%d_%m_%Y")
        
        self.driver.get(f'https://www.money.pl/gielda/gpw/akcje/?date={chosen_date}')
        self.accept_cookies()

        Base = declarative_base()
        class StockData(Base):
            __tablename__ = f'stock_data_{chosen_date_}'
            id = Column(Integer, primary_key=True)
            company_name = Column(String)
            value_change = Column(Float)
            end_day_value = Column(Float)
            trading_value = Column(Integer)
            max_value = Column(Float)
            trade_date = chosen_date_

            # def __init__(self, date):
            #     """
            #     Initializes a StockData instance with the provided date.
            #     Args:
            #         date (datetime.date): The date for which the stock data is retrieved.
            #     """
            #     self.__tablename__ = f'stock_data_{chosen_date_}'

        
        session = self.create_database_session()


        time.sleep(2)



        if inspect(session.bind).has_table(StockData.__tablename__):
            print(f"Table {StockData.__tablename__} already exists, skipping creation.")
        else:
            print(f"Table {StockData.__tablename__} doesn't exist, creating it.")
            Base.metadata.create_all(session.bind)

            try:
                all_div_elements = WebDriverWait(self.driver, 4).until(
                EC.visibility_of_all_elements_located((By.CSS_SELECTOR, "div.rt-tr-group")))
            except Exception as e:
                print(f"Error while retrieving elements: {str(e)}")
                
            number_of_elements = len(all_div_elements)

            i = 0

            while i < number_of_elements:
                i += 1
                
                company_names = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)"
                value_change = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)"
                end_day_value = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
                trading_amount = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1)"
                max_value = f"div.rt-tr-group:nth-child({i}) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1)"

                elements_list = [company_names, value_change, end_day_value, trading_amount, max_value]
                
                try:
                    elements = [WebDriverWait(self.driver, 4).until(
                        EC.visibility_of_element_located((By.CSS_SELECTOR, element))) for element in elements_list]
                    
                    def replace_decimal_separator(text):
                        text = text.replace(',', '.').replace(' ', '').replace('—', '0')
                        return float(text)

                    company_name = elements[0].text
                    value_change = replace_decimal_separator(elements[1].text)
                    end_day_value = replace_decimal_separator(elements[2].text)
                    trading_value = replace_decimal_separator(elements[3].text)
                    max_value = replace_decimal_separator(elements[4].text)
                    max_value = round(max_value * VALUE_ADJUSTMENT, 2)
                    
                    stock_data = StockData(company_name=company_name, value_change=value_change, end_day_value=end_day_value, trading_value=trading_value, max_value=max_value)
                    session.add(stock_data)
                    session.commit()

                except StaleElementReferenceException:
                    print(f"Error while retrieving from div {i}: Element is stale")
                    i -= 1

                except Exception as e:
                    print(f"Error while retrieving from div {i}: {str(e)}")

        self.driver.quit()
        # print("Finished")
# date = '2024-03-20'
def main(date):
    # parser = argparse.ArgumentParser(description="Stock data downloader")
    # parser.add_argument("date", type=str, help="Date in format YYYY-MM-DD")
    # args = parser.parse_args()
    # date = args.date
    # print(f"Downloading data for date: {date}")
    
    retriever = StockDataRetriever()
    try:
        retriever.retrieve_stock_data(date)
    except Exception as e:
        print(f"An error occurred: {str(e)}")
    finally:
        retriever.driver.quit()

if __name__ == '__main__':
    main()