import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CartPage } from '../../pages/cart.page.js';
import { ProductDetailPage } from '../../pages/productdetail.page.js';

let pomPage;

Given('I am on the homepage', async function() {
  const { page, baseURL } = this;
  const miniAccount = page.locator('#mini-account');
  pomPage = new ProductDetailPage(page, baseURL);
  await pomPage.goto();
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
  await pomPage.verifyOnProductDetailPage();
});

Then('the product detail page displays correctly', async function() {
    await pomPage.hasProductDetailPageElements();
});

Then('the product detail add to cart button is visible', async function() {
    await pomPage.locators.addToCartButton.waitFor({ state: 'visible', timeout: 20000 });
});


Then('the giftcard amount field is visible', async function() {
    await pomPage.pdplocators.giftCardAmountField.waitFor({ state: 'visible', timeout: 20000 });
});

Then('the giftcard type field is visible', async function() {
    await pomPage.pdplocators.giftCardTypeField.waitFor({ state: 'visible', timeout: 20000 });
});

Then('the giftcard type field is not visible', async function() {
    // This step should fail if the field is visible
    await pomPage.pdplocators.giftCardTypeField.waitFor({ state: 'hidden', timeout: 500 });
});

Then('the quantity field is visible', async function() {
    await pomPage.pdplocators.quantityField.waitFor({ state: 'visible', timeout: 20000 });
});

Then('the product detail image is visible', async function() {
    await pomPage.pdplocators.productDetailImage.waitFor({ state: 'visible', timeout: 20000 });
});

When('I set the gift card value in ${int}', async function (amount) {
    await pomPage.addGiftCardValue(amount);
    console.log('GiftCard value set');
});

When('I set the gift card type as {string}', async function (cardType) {
    await pomPage.addGiftCardType(cardType);
    console.log('GiftCard type set');
});

When('I try to add the product to the cart', async function () {
    await pomPage.pdplocators.addToCartButton.click();
    console.log('Product added to cart');
});

  Then('I should see the Customize My E-Gift Card prompt', async function () {
// Write code here that turns the phrase above into concrete actionsç
    await pomPage.pdplocators.customizeMyEGiftCardPrompt.waitFor({ state: 'visible', timeout: 20000 });
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Customize My E-Gift Card prompt is visible');
});

When('I select the option to email to me', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await pomPage.pdplocators.selectEmailToCurrentUser.click();
});

Then('I should be able to add to cart', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check that cart summary exists and contains at least one product image
    const cartSummary = this.page.locator('#cartSummary');
    await cartSummary.waitFor({ state: 'visible', timeout: 10000 });
    
    const productImages = cartSummary.locator('div.product-image');
    const count = await productImages.count();
    expect(count).toBeGreaterThan(0);
    
    console.log(`Product added to cart - found ${count} product image(s)`);
});

When('I save the details', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await pomPage.pdplocators.saveDetailsButton.click();
    console.log('Details saved');
});