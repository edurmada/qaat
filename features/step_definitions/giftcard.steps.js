import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page.js';
import { ProductDetailPage } from '../../pages/productdetail.page.js';

let homePage;
let productDetailPage;

Given('I am on the homepage', async function() {
  const { page, baseURL } = this;
  homePage = new HomePage(page, baseURL);
  await homePage.goto();
});

When('I search for {string}', async function(searchTerm) {
  const searchBox = this.page.locator('#k');
  await searchBox.fill(searchTerm);
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
