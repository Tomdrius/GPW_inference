import os
import io
import unittest
from unittest.mock import patch
from downloader import StockDataRetriever, main
from sqlalchemy import create_engine, inspect, Column, String, Integer, Float, exc
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy_utils import database_exists, create_database
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException

postgres_username = os.environ['POSTGRES_USERNAME']
postgres_password = os.environ.get('POSTGRES_PASSWORD')
postgres_host = os.environ['POSTGRES_HOST']
postgres_dbname = os.environ['POSTGRES_DB']

Base = declarative_base()
URL = "https://www.money.pl/gielda/gpw/akcje/?date=2024-02-23"
PAGE_NAME = "NotowaniaGPW.htm"


class TestRetrieveStockData(unittest.TestCase):

    @patch("downloader.webdriver.Chrome")
    def setUp(self, mocked_driver):
        self.retriever = StockDataRetriever()
        self.mocked_driver = mocked_driver.return_value

    @patch("downloader.webdriver.Chrome")
    def test_retrieve_stock_data_parses_date_correctly(self, mocked_driver):
        chosen_date = "2024-02-23"
        
        self.retriever.retrieve_stock_data(chosen_date)
        
        self.mocked_driver.get.assert_called_once_with(f"https://www.money.pl/gielda/gpw/akcje/?date={chosen_date}")

        
    @patch("downloader.webdriver.Chrome")
    def test_retrieve_stock_data_builds_correct_url(self, mocked_driver):
        chosen_date = "2024-02-23"
        expected_url = f"https://www.money.pl/gielda/gpw/akcje/?date={chosen_date}"
        
        self.retriever.retrieve_stock_data(chosen_date)
        
        self.mocked_driver.get.assert_called_once_with(expected_url)
    
    
    def test_parse_correct_date_format(self):
        chosen_date = "2024-02-23"
        expected_parsed_date = "2024-02-23"
        parsed_date = self.retriever.parse_date(chosen_date)
        self.assertEqual(parsed_date, expected_parsed_date)

    def test_parse_incorrect_date_format(self):
        chosen_date = "2024_02_23"
        expected_parsed_date = "2024-02-23"
        parsed_date = self.retriever.parse_date(chosen_date)
        self.assertEqual(parsed_date, expected_parsed_date)

    def test_parse_no_date(self):
        chosen_date = ""
        parsed_date = self.retriever.parse_date(chosen_date)
        self.assertIsNone(parsed_date)

    def test_parse_value_error(self):
        chosen_date = "2024-02-45"  # Nieprawidłowa data
        parsed_date = self.retriever.parse_date(chosen_date)
        self.assertIsNone(parsed_date)

    def test_parse_other_exceptions(self):
        chosen_date = "2024_02_23"
        parsed_date = self.retriever.parse_date(chosen_date)
        self.assertIsNone(parsed_date)
        



if __name__ == "__main__":
    unittest.main()




# class TestRetrieveStockData(unittest.TestCase):

#     def setUp(self):
#         # Konfiguracja przeglądarki
#         chrome_options = Options()
#         chrome_options.headless = True  # Uruchamiamy przeglądarkę w trybie headless, bez interfejsu graficznego
#         service = Service('C:\Python\Projekty\Selenium\chromedriver.exe')  # Ścieżka do chromedriver.exe
#         self.driver = webdriver.Chrome(service=service, options=chrome_options)

#     def test_retrieve_stock_data(self):
#         # Przechodzimy do strony z notowaniami GPW dla określonej daty
#         chosen_date = "2024-02-23"
#         url = f"https://www.money.pl/gielda/gpw/akcje/?date={chosen_date}"
#         self.driver.get(url)
        
#         # Tutaj możemy przetestować, czy strona się poprawnie załadowała i zawiera oczekiwane elementy
        
#         # Wywołujemy funkcję retrieve_stock_data() z odpowiednią datą
#         your_object = StockDataRetriever()
#         your_object.retrieve_stock_data(chosen_date)
        
#         # Tutaj możemy przetestować, czy dane zostały pobrane poprawnie i zapisane w bazie danych

#     def tearDown(self):
#         # Zamknięcie przeglądarki
#         self.driver.quit()

# if __name__ == "__main__":
#     unittest.main()






# Mock silnika bazy danych
# mock_engine = create_engine(f'postgresql://{postgres_username}:{postgres_password}@{postgres_host}/{postgres_dbname}')
# # Mock sesji bazy danych
# mock_session = sessionmaker(bind=mock_engine)()

# # Mock funkcji `database_exists`
# @patch('sqlalchemy_utils.database_exists')
# def mock_database_exists(mock_database_exists, *args, **kwargs):
#     mock_database_exists.return_value = True

# # Mock funkcji `create_database`
# @patch('sqlalchemy_utils.create_database')
# def mock_create_database(mock_create_database, *args, **kwargs):
# 	pass

# # Mock funkcji `inspect.has_table`
# @patch('sqlalchemy.inspect.has_table')
# def mock_has_table(mock_has_table, *args, **kwargs):
# 	mock_has_table.return_value = False

# class TestMainFile(unittest.TestCase):

#     @patch('builtins.print')  # Mockuje funkcję print
#     @patch('downloader.StockDataRetriever.retrieve_stock_data')
#     def test_main_with_error(self, mock_retrieve_stock_data, mock_print):
#         mock_retrieve_stock_data.side_effect = TypeError("Command.__init__() got an unexpected keyword argument 'standalone_mode'")
#         main(date=None)  # Przekazujemy fałszywy argument date
#         mock_print.assert_called_with("An error occurred: Command.__init__() got an unexpected keyword argument 'standalone_mode'")


# class TestStockDataRetriever(unittest.TestCase):

# 	def test_init(self):
# 		retriever = StockDataRetriever()
# 		self.assertIsNotNone(retriever.driver)

# 	@patch('downloader.WebDriverWait')
# 	def test_retrieve_stock_data_success(self, mock_WebDriverWait):
# 		# Mock obiektu WebDriverWait
# 		mock_wait = mock_WebDriverWait.return_value
# 		# Mock elementu 'accept_cookie_button'
# 		mock_cookie_button = mock_wait.until.return_value

# 		retriever = StockDataRetriever()
# 		retriever.retrieve_stock_data("2023-03-21")

# 		# Sprawdzenia
# 		self.assertEqual(mock_cookie_button.click.call_count, 1)
# 		self.assertEqual(mock_has_table.call_count, 1)
# 		self.assertEqual(mock_session.add.call_count, 5)
# 		self.assertEqual(mock_session.commit.call_count, 1)

# 	@patch('downloader.WebDriverWait')
# 	def test_retrieve_stock_data_database_error(self, mock_WebDriverWait):
# 		# Mock błędu bazy danych
# 		mock_session.add.side_effect = exc.DBAPIError()

# 		retriever = StockDataRetriever()
# 		with self.assertRaises(exc.DBAPIError):
# 			retriever.retrieve_stock_data("2023-03-21")

# 	@patch('downloader.WebDriverWait')
# 	def test_replace_decimal_separator(self, mock_WebDriverWait):
# 		self.assertEqual(replace_decimal_separator("1,234.56"), 1234.56)
# 		self.assertEqual(replace_decimal_separator("1 234,56"), 1234.56)
# 		self.assertEqual(replace_decimal_separator("—"), 0)

if __name__ == '__main__':
	unittest.main()
