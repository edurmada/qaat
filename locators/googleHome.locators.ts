import { Page, Locator } from '@playwright/test';

export class GoogleLocators {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly luckyButton: Locator;
  readonly gmailLink: Locator;
  readonly googleAppsButton: Locator;
  readonly signInLink: Locator;
  readonly firstResultLink: Locator;
  readonly firstResultTitle: Locator;

  constructor(page: Page) {
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