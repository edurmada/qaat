import { ProductDetailLocators } from '../locators/productdetail.locators.js';

export class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.locators = new ProductDetailLocators(page);
  }

  async verifyOnProductDetailPage() {
    // Wait for navigation to complete by checking URL pattern
    await this.page.waitForFunction(
      () => window.location.pathname.includes('/product/index/'),
      { timeout: 20000 }
    );
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
