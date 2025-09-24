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

Then('I should be on the product detail page', async function() {
  productDetailPage = new ProductDetailPage(this.page);
  await productDetailPage.verifyOnProductDetailPage();
});

Then('the product detail page displays correctly', async function() {
    productDetailPage = new ProductDetailPage(this.page);
    await productDetailPage.hasProductDetailPageElements();
});
