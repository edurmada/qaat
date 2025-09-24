export class ProductDetailLocators {
  constructor(page) {
    this.page = page;
    this.giftCardAmountField = page.locator('#select_value_label_0');
    this.giftCardTypeField = page.locator('#select_value_label_4');
    this.addToCartButton = page.locator('#btnAddItemToCart');
    this.quantityField = page.locator('#quantity');
    this.productDetailImage = page.locator('#details-image');
  }
}
