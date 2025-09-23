export class GoogleLocators {
  constructor(page) {
    this.page = page;

    // Home
    this.searchBox = page.locator('textarea[name="q"]');
    this.searchButton = page.locator('input[name="btnK"]:visible');
    this.luckyButton = page.locator('input[name="btnI"]:visible');

    // Header
    this.gmailLink = page.locator('a[href*="mail.google.com"]');
    this.googleAppsButton = page.locator('a[role="button"][href*="about/products"]');
    this.signInLink = page.locator('a[href*="ServiceLogin"]');

    // Results
    this.firstResultLink = page.locator('div.tF2Cxc a').first();
    this.firstResultTitle = page.locator('div.tF2Cxc h3').first();
  }
}


