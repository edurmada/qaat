import { Page, Locator } from '@playwright/test';

export class GooglePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly searchResults: Locator;
  readonly firstResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('input[name="q"]');
    this.searchButton = page.locator('input[name="btnK"]');
    this.searchResults = page.locator('#search');
    this.firstResult = page.locator('#search h3').first();
  }

  async navigateToGoogle(): Promise<void> {
    await this.page.goto('/');
  }

  async searchFor(query: string): Promise<void> {
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async getSearchResults(): Promise<string[]> {
    await this.searchResults.waitFor({ state: 'visible' });
    const results = await this.page.locator('#search h3').allTextContents();
    return results;
  }

  async getFirstResultText(): Promise<string> {
    await this.firstResult.waitFor({ state: 'visible' });
    return await this.firstResult.textContent() || '';
  }

  async isSearchResultsVisible(): Promise<boolean> {
    try {
      await this.searchResults.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}
