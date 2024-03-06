# Stock Data Analyzer

This Python script retrieves stock market data from a financial website, stores it in a PostgreSQL database, and analyzes the data to identify potential investment opportunities. The script is designed to be run daily, excluding weekends, and creates separate tables for today's, yesterday's, and the day before yesterday's stock data.

## Requirements
- Python 3.x
- PostgreSQL
- Chrome browser (for web scraping)
- ChromeDriver installed and added to PATH

## Setup
1. Clone the repository:

    ```bash
    git clone https://github.com/Tomdrius/GPW_inference.git
    cd stock-data-analyzer
    ```

2. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

3. Set up your PostgreSQL environment and update the `.env` file with your database credentials.

4. Run the script:

    ```bash
    python main.py
    ```

## Overview
The script performs the following steps:

### Web Scraping:
- Uses Selenium and Chrome WebDriver to navigate to a financial website and retrieve stock market data.
- Handles the acceptance of cookie notifications.

### Database Configuration:
- Connects to a PostgreSQL database using SQLAlchemy.
- Checks if tables for today's stock data already exist and creates them if not.

### Data Storage:
- Parses the retrieved data and stores it in the corresponding tables (today, yesterday, and day before yesterday).

### Data Analysis:
- Queries the database to retrieve stock data with an end day value greater than 100.
- Compares the end day values for today, yesterday, and the day before yesterday to identify potential investment opportunities.

## Customization
You can customize the script by modifying the following:

- Change the financial website URL and CSS selectors in the script to match the structure of the website you want to scrape.
- Adjust the database table naming conventions or schema.
- Modify the criteria for identifying potential investment opportunities based on your preferences.

**Note:** It is essential to comply with the terms of use of any website you scrape and to be aware of the legal and ethical considerations associated with web scraping.

Feel free to contribute to and enhance the functionality of this stock data analyzer. Happy investing! 📈🚀
