import { ProductDetailLocators } from '../locators/productdetail.locators.js';

export class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.locators = new ProductDetailLocators(page);
  }

  async verifyOnProductDetailPage() {
    // Wait for any product detail element to be visible instead of URL checking
    await this.locators.addToCartButton.waitFor({ state: 'visible', timeout: 30000 });
  }

  async hasProductDetailPageElements() {
    await this.locators.giftCardAmountField.waitFor({ state: 'visible', timeout: 20000 });
    await this.locators.giftCardTypeField.waitFor({ state: 'visible', timeout: 20000 });
    await this.locators.addToCartButton.waitFor({ state: 'visible', timeout: 20000 });
    await this.locators.quantityField.waitFor({ state: 'visible', timeout: 20000 });
    await this.locators.productDetailImage.waitFor({ state: 'visible', timeout: 20000 });
    return true;
  }
}
