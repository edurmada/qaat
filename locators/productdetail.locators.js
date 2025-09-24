export class ProductDetailLocators {
  constructor(page) {
    this.page = page;
    this.giftCardAmountField = page.locator('#select_value_label_0');
    this.giftCardTypeField = page.locator('#select_6');
    this.addToCartButton = page.locator('#btnAddItemToCart');
    this.quantityField = page.locator('#quantity');
    this.productDetailImage = page.locator('#details-image');
    this.customizeMyEGiftCardPrompt = page.locator('h1:has-text("Customize My E-Gift Card")');
    this.selectEmailToCurrentUser = page.locator('md-radio-button:has-text("Email the e-gift card to me (the bill-to email at checkout)")');
    this.saveDetailsButton = page.locator('button:has-text("Save Details")');
  }
}
