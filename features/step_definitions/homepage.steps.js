import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page.js'

let homePage;
let productSearchTerm = 'U.S. Military Surplus Waterproof M2A1 .50 Caliber Ammo Can, Used';

Given('I navigate to the homepage', async function() {
  const { page, baseURL } = this;
  homePage = new HomePage(page, baseURL);
  await homePage.goto();
});

When('the page loads', async function() {
  // Page is already loaded from the previous step
  // This step is for clarity and potential future enhancements
  console.log('Page loads');
});

Then('I should see the site header', async function() {
  await expect(homePage.locators.siteHeader).toBeVisible();
});

When('I search for a product', async function () {
  console.log(`Searching for: ${productSearchTerm}`);
  await expect(homePage.locators.searchBar).toBeVisible();
  await expect(homePage.locators.searchButton).toBeVisible();
  await homePage.search(productSearchTerm);
})

Then('Search results are listed on PLP', async function () {
  await expect(homePage.locators.searchBar).toBeVisible();
  await expect(homePage.locators.searchButton).toBeVisible();
  await expect(homePage.locators.productCards.first()).toBeVisible();
  console.log('Search results are shown');
});

When('I add product to cart', async function () {
  await homePage.addToCart();
  console.log('Product added to cart');
});

Then('cart page is shown', async function () {
  await expect(homePage.locators.cartSummary).toBeVisible();
})

When('I search for a gitCard', async function () {
  await expect(homePage.locators.searchBar).toBeVisible();
  await expect(homePage.locators.searchButton).toBeVisible();
  await homePage.search('Gift Card');
  console.log('GiftCard PDP is shown');
})

When('I add gitCard to cart', async function () {
  await homePage.addGiftCardToCart();
  console.log('GiftCard added to cart');
})

