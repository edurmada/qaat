import { HomeLocators } from './home.locators.js';

export class CartLocators extends HomeLocators {
  constructor(page) {
    super(page);

    this._cartItems = page.locator('#cart-tiles-container .cart-tile');
    this._cartSummary = page.locator('div.cart-summary');
    this._cartTotal = page.locator('div.cart-summary .non-bc-price');
    this._cartItemsCount = page.locator('.cart-item-count');
    this._checkoutButton = page.locator('.checkout-button-container button');
    this._updateButton = page.locator('button:has-text("Update")');
    this._removeButton = page.locator('button:has-text("Remove")');
    this._moveToWishlistButton = page.locator('button:has-text("Move to Wish List")');
    this._productPicture = page.locator('div.cart-tile-img-container img');
    this._quantityField = page.locator('div.quantity-container input');
    this._productName = page.locator('div.cart-tile-info-container h2');
  }

  get cartSummary() {
    return this._cartSummary;
  }

  get cartItems() {
    return this._cartItems;
  }

  get cartTotal() {
    return this._cartTotal;
  }

  get cartTitle() {
    return this._cartItemsCount;
  }

  get checkoutButton() {
    return this._checkoutButton;
  }

  get updateButton() {
    return this._updateButton;
  }

  get removeButton() {
    return this._removeButton;
  }

  get moveToWishlistButton() {
    return this._moveToWishlistButton;
  }

  get productPicture() {
    return this._productPicture;
  }

  get quantityField() {
    return this._quantityField;
  }

  get productName() {
    return this._productName;
  }
}