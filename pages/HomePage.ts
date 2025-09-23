import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly body: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('title');
    this.body = page.locator('body');
  }

  async navigateToHomepage(): Promise<void> {
    await this.page.goto('/');
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async isPageLoaded(): Promise<boolean> {
    try {
      await this.body.waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  async isElementVisible(selector: string): Promise<boolean> {
    try {
      await this.page.locator(selector).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}
