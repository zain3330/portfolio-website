import time
import re
import csv
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


def init():
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument(
        "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36")
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")

    # Add additional headers if needed
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    return webdriver.Chrome(options=chrome_options)


def crawlPage(driver):
    # Send a GET request to the website
    url = "https://api.bizbuysell.com/bff/v2/BbsBfsSearchResults"
    driver.get(url)

    # Wait for the JavaScript content to load
    driver.implicitly_wait(10)

    # Scroll to the bottom of the page to load all the content
    driver.execute_script("window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });")

    # Wait for 5 seconds to allow content to load
    time.sleep(3)

    # Get the HTML content of the page
    return driver.page_source


def parseHtml(html):
    # Create a BeautifulSoup object to parse the HTML content
    return BeautifulSoup(html, "html.parser")


def findSection(soup):
    # Find all div elements with class "css-zu9cdh eu4oa1w0"
    jobsSection = soup.find("ul", class_="css-zu9cdh eu4oa1w0")
    # print(smartCollectionSection)
    print("Total Containers: " + str(len(jobsSection)))
    return jobsSection


def findJobs(jobsSection):
    return jobsSection.find_all("li", class_="css-5lfssm eu4oa1w0")


def extract_job_details(job):
    # Extract job title
    jobCard = job.find("div", class_="job_seen_beacon")
    if jobCard is None:
        print("jobCard is None. Skipping this job.")
        return None
    jobHeader = jobCard.find("table", class_="big6_visualChanges css-1v79ar eu4oa1w0")

    tbody = jobHeader.find("tbody")
    # print("================================tbody======================")
    # print(tbody)
    # Extract h2 element containing the job title
    jobTitleElement = tbody.find("h2", class_="jobTitle css-198pbd eu4oa1w0")
    if jobTitleElement is None:
        print("jobTitleElement is None. Skipping this job.")
    jobTitleSpan = jobTitleElement.find("span")
    if jobTitleSpan is None:
        print("jobTitleSpan is None. Skipping this job.")
    jobTitle = jobTitleSpan.text.strip()
    if jobTitle is None:
        print("jobTitleSpan is None. Skipping this job.")
    print("==========================jobtitle")
    print(jobTitle)

    jobCompany = tbody.find("div" , class_="company_location css-17fky0v e37uo190").text.strip()

    jobType =tbody.find("div" , class_="heading6 tapItem-gutter metadataContainer css-z5ecg7 eu4oa1w0").text.strip()

    return {
        "name": jobTitle,
        "company": jobCompany,
        "type": jobType,

    }



driver = init()
html = crawlPage(driver)
print("===========")
print(html)
# soup = parseHtml(html)
#
# # Find the section containing job listings
# jobsSection = findSection(soup)
#
# # Find all job listings
# jobs = findJobs(jobsSection)
#
# csvData = []
# for job in jobs:
#     jobDetails = extract_job_details(job)
#     if jobDetails:
#         # print("==============================================")
#         # print(jobDetails)
#         csvData.append(jobDetails)
# driver.quit()
#
#
# with open("jobs.csv", "w", newline="") as file:
#     writer = csv.writer(file)
#     writer.writerow(["Title","Company","Type"])
#     for job in csvData:
#         writer.writerow([job['name'],job['company'],job['type']])