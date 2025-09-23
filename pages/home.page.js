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

  async search(term) {
    await this.locators.searchBar.fill(term);
    await this.page.waitForTimeout(1000);
    //await this.locators.searchBar.press('Enter');
    await this.locators.searchButton.click();
  }

  async openCart() {
    await this.locators.cartIcon.click();
  }

  async viewCart() {
    await this.locators.viewCartButton.click();
  }

  async checkout() {
    await this.locators.checkoutCartButton.click();
  }

  async openProfile() {
    await this.locators.accountIcon.click();
  }

  async openProductDetail() {
    await this.locators.productDetails.click();
  }

  async addToCart() {
    await this.locators.productCards.first().click();
    await this.locators.addToCartButton.click();
    await this.locators.viewCartButton.click();
  }
}
