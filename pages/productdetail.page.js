import { ProductDetailLocators } from '../locators/productdetail.locators.js';
import { CartPage } from './cart.page.js';

export class ProductDetailPage extends CartPage {
  constructor(page, baseURL) {
    super(page, baseURL);
    this.page = page;
    this.pdplocators = new ProductDetailLocators(page, baseURL);
  }

  async verifyOnProductDetailPage() {
    // Wait for any product detail element to be visible instead of URL checking
    await this.pdplocators.addToCartButton.waitFor({ state: 'visible', timeout: 30000 });
  }

  async hasProductDetailPageElements() {
    await this.pdplocators.giftCardAmountField.waitFor({ state: 'visible', timeout: 20000 });
    await this.pdplocators.giftCardTypeField.waitFor({ state: 'visible', timeout: 20000 });
    await this.pdplocators.addToCartButton.waitFor({ state: 'visible', timeout: 20000 });
    await this.pdplocators.quantityField.waitFor({ state: 'visible', timeout: 20000 });
    await this.pdplocators.productDetailImage.waitFor({ state: 'visible', timeout: 20000 });
    return true;
  }

  async addGiftCardValue(amount) {
    // Then, select the gift card amount
    await this.pdplocators.giftCardAmountField.click();
    await this.page.waitForTimeout(500);
    
    // Select the option that contains the amount
    const amountSelector = `md-option:has-text("$${amount}")`;
    await this.page.locator(amountSelector).click();
    
    // Wait for the dropdown to close and value to be selected
    await this.page.waitForTimeout(1000);
  }

  async addGiftCardType(cardType) {

    // First, select the gift card type (eGift or Gift)
    await this.pdplocators.giftCardTypeField.click();
    await this.page.waitForTimeout(500);
    
    const cardTypeSelector = `md-option:has-text("${cardType} Card")`;
    await this.page.locator(cardTypeSelector).click();
    await this.page.waitForTimeout(500);
    
  }
}
