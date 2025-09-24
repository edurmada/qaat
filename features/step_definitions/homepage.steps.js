import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page.js';

let homePage;

Given('I navigate to the homepage', async function() {
  const { page, baseURL } = this;
  homePage = new HomePage(page, baseURL);
  await homePage.goto();
});

When('the page loads', async function() {
  // Page is already loaded from the previous step
  // This step is for clarity and potential future enhancements
  await expect(homePage.locators.siteHeader).toBeVisible();
});

Then('I should see the site header', async function() {
  await expect(homePage.locators.siteHeader).toBeVisible();
});
