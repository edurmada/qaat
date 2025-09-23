import { HomePage } from './home.page.js';

export class CartPage extends HomePage {
  constructor(page, baseURL) {
    super(page, baseURL);
    this.locators = new CartLocators(page);
  }

  async proceedToCheckout() {
    await this.locators.checkoutButton.click();
  }

  async getCartItemsCount() {
    return await this.locators.cartTitle;
  }

  async getCartTotal() {
    return await this.locators.getCartTotal;
  }
}