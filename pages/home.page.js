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

  async addGiftCardToCart(type = 'Gift Card') {
    await this.locators.addToCartButton.click();
    
    await this.selectFirstGiftCardOption();
    await this.selectGiftCardTypeByText(type);
    await this.locators.addToCartButton.click();
    await this.locators.radioMailToMe.click();
    await this.locators.saveDetailsButton.click();

    await this.locators.addToCartButton.click();
    await this.locators.viewCartButton.click();
  }

  async selectFirstGiftCardOption() {
    await this.locators.giftCardOptions.first().waitFor({ state: 'visible' });

    const optionsCount = await this.locators.giftCardOptions.count();
    if (optionsCount > 1) {
      await this.locators.giftCardOptions.nth(1).click(); // index 0 is placeholder
    } else {
      throw new Error('No options available in the gift card dropdown');
    }
  }

  /**
   * Select a gift card option by its displayed text
   * @param {string} valueText
   */
  async selectGiftCardOptionByText(valueText) {
    const options = this.locators.giftCardOptions;
    const count = await options.count();

    for (let i = 0; i < count; i++) {
      const optionText = await options.nth(i).innerText();
      if (optionText.trim() === valueText) {
        await options.nth(i).click();
        return;
      }
    }

    throw new Error(`Option with text "${valueText}" not found`);
  }

  // either 'eGift Card' or 'Gift Card'
  async selectGiftCardTypeByText(valueText) {
  const options = this.locators.giftCardTypeOptions;
  const count = await options.count();

  for (let i = 0; i < count; i++) {
    const optionText = await options.nth(i).innerText();
    if (optionText.trim() === valueText) {
      await options.nth(i).click();
      return;
    }
  }

  throw new Error(`Gift card color option "${valueText}" not found`);
}
}
