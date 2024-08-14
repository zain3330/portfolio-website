from playwright.sync_api import sync_playwright


def fetch_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('https://www.bizbuysell.com/')

        # Wait for the page to load
        page.wait_for_load_state('networkidle')

        # Extract the page content
        content = page.content()

        browser.close()
        return content


# Example usage
html_content = fetch_page()
print(html_content)
