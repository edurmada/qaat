import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page.js';
import { ProductDetailPage } from '../../pages/productdetail.page.js';

let homePage;
let productDetailPage;

Given('I am on the homepage', async function() {
  const { page, baseURL } = this;
  const miniAccount = page.locator('#mini-account');
  homePage = new HomePage(page, baseURL);
  await homePage.goto();
  expect(miniAccount).toBeVisible();
});

When('I search for {string}', async function(searchTerm) {
  const searchBox = this.page.locator('#k');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await searchBox.click();
  // Wait for the opacity style to change to blue
  await this.page.waitForFunction(
    "() => document.getElementById('search-label').style.opacity === 0.5"
  );
  await searchBox.fill(searchTerm);
  // Wait a moment before pressing Enter
  await new Promise(resolve => setTimeout(resolve, 1000));
  await searchBox.press('Enter');
});

Then('I get to the product detail page', async function() {
  productDetailPage = new ProductDetailPage(this.page);
  await productDetailPage.verifyOnProductDetailPage();
});

Then('the product detail page displays correctly', async function() {
    productDetailPage = new ProductDetailPage(this.page);
    await productDetailPage.hasProductDetailPageElements();
});

Then('the product detail add to cart button is visible', async function() {
    productDetailPage = new ProductDetailPage(this.page);
    await productDetailPage.locators.addToCartButton.waitFor({ state: 'visible', timeout: 20000 });
});


Then('the giftcard amount field is visible', async function() {
    productDetailPage = new ProductDetailPage(this.page);
    await productDetailPage.locators.giftCardAmountField.waitFor({ state: 'visible', timeout: 20000 });
});

Then('the giftcard type field is visible', async function() {
    productDetailPage = new ProductDetailPage(this.page);
    await productDetailPage.locators.giftCardTypeField.waitFor({ state: 'visible', timeout: 20000 });
});

Then('the quantity field is visible', async function() {
    productDetailPage = new ProductDetailPage(this.page);
    await productDetailPage.locators.quantityField.waitFor({ state: 'visible', timeout: 20000 });
});

Then('the product detail image is visible', async function() {
    productDetailPage = new ProductDetailPage(this.page);
    await productDetailPage.locators.productDetailImage.waitFor({ state: 'visible', timeout: 20000 });
});