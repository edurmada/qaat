import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js'

let cartPage;
//let productSearchTerm = 'U.S. Military Surplus Waterproof M2A1 .50 Caliber Ammo Can, Used';

Given('I navigate to the homepage', async function() {
  const { page, baseURL } = this;
  cartPage = new CartPage(page, baseURL);
  await cartPage.goto();
});

When('I search for {string}', async function(productSearchTerm) {
  console.log(`Searching for: ${productSearchTerm}`);
  await expect(cartPage.locators.searchBar).toBeVisible();
  await expect(cartPage.locators.searchButton).toBeVisible();
  await cartPage.search(productSearchTerm);
})

When('I get Search results listed on PLP', async function () {
  await expect(cartPage.locators.searchBar).toBeVisible();
  await expect(cartPage.locators.searchButton).toBeVisible();
  await expect(cartPage.locators.productCards.first()).toBeVisible();
  console.log('Search results are shown');
});

When('I select the first cart result', async function () {
    await cartPage.locators.productCards.first().click();
});

Then('I get to the product detail page', async function () {
    await expect(cartPage.locators.cartSummary).toBeVisible();
});

When('the add to cart button is visible', async function () {
    await expect(cartPage.locators.addToCartButton).toBeVisible();
})

When('the cart total is visible', async function () {
    await expect(cartPage.locators.cartTotal).toBeVisible();
})

When('the checkout button is visible', async function () {
    await expect(cartPage.locators.checkoutButton).toBeVisible();
})

When('the quantity field is visible', async function () {
    await expect(cartPage.locators.quantityField).toBeVisible();
})

When('the remove button is visible', async function () {
    await expect(cartPage.locators.removeButton).toBeVisible();
})

When('the product detail image is visible', async function () {
    await expect(cartPage.locators.productPicture).toBeVisible();
})

When('the product name is visible', async function () {
    await expect(cartPage.locators.productName).toBeVisible();
})
