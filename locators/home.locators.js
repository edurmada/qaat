export class HomeLocators {
  constructor(page) {
    this.page = page;
    this._siteHeader = page.locator('#site-header');
    this._searchBar = page.locator('.nav-container .site-search input');
    this._searchButton = page.locator('.nav-container .site-search button');
    this._addToCartButton = page.locator('#btnAddItemToCart');
    this._accountIcon = page.locator('#stickyMobileNav #mini-account button');
    this._cartIcon = page.locator('#mini-cart a');
    this._wishList = page.locator('#mini-wish a');
    this._checkoutButton = page.locator('#checkout-button');
    this._productCards = page.locator('.products-grid .product-tile a');
    this._viewCartButton = page.locator('#mini-cart-actions a[href="/cart/viewcart"]');
    this._checkoutCartButton = page.locator('#mini-cart-actions a[href="/authenticate/checkoutlogin"]');

    // CART
    this._cartSummary = page.locator('div.cart-summary');
  }

  get siteHeader() {
    return this._siteHeader;
  }

  get searchBar() {
    return this._searchBar;
  }

  get searchButton() {
    return this._searchButton;
  }

  get addToCartButton() {
    return this._addToCartButton;
  }

  get accountIcon() {
    return this._accountIcon;
  }

  get cartIcon() {
    return this._cartIcon;
  }

  get wishList() {
    return this._wishList;
  }

  get checkoutButton() {
    return this._checkoutButton;
  }

  get productCards() {
    return this._productCards;
  }

  get viewCartButton() {
    return this._viewCartButton;
  }

  get checkoutCartButton() {
    return this._checkoutCartButton;
  }

  get cartSummary() {
    return this._cartSummary;
  }
}