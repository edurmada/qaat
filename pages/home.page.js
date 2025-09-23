import { HomeLocators } from '../locators/home.locators.js';

export class HomePage {
  constructor(page, baseURL) {
    this.page = page;
    this.baseURL = baseURL;
    this.locators = new HomeLocators(page);
  }

  async goto() {
    await this.page.goto(this.baseURL);
  }
}


