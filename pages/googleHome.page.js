import { GoogleLocators } from '../locators/googleHome.locators.js';

export class GoogleHomePage {
  constructor(page) {
    this.page = page;
    this.locators = new GoogleLocators(page);
  }

  async goto() {
    await this.page.goto('https://www.google.com');
  }

  async search(term) {
    await this.locators.searchBox.fill(term);
    await this.locators.searchBox.press('Enter');
  }

  async clickSignIn() {
    await this.locators.signInLink.click();
  }

  async getFirstResult() {
    const title = await this.locators.firstResultTitle.textContent();
    const url = await this.locators.firstResultLink.getAttribute('href');
    return { title, url };
  }
}


