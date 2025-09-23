import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestContext } from '../playwright.config';

let homePage: HomePage;
let testContext: TestContext;

Given('I am on the website homepage', async function () {
  const { page } = this;
  homePage = new HomePage(page);
  testContext = this.testContext;
  
  // Add context data
  testContext.addData('scenario', 'homepage-navigation');
  testContext.addData('startTime', Date.now());
  
  await homePage.navigateToHomepage();
});

When('the page finishes loading', async function () {
  await homePage.waitForPageLoad();
  
  // Add loading completion data to context
  testContext.addData('pageLoadCompleted', true);
  testContext.addData('loadTime', Date.now());
});

Then('I should see the page loaded successfully', async function () {
  const isPageLoaded = await homePage.isPageLoaded();
  expect(isPageLoaded).toBe(true);
  
  // Store result in context
  testContext.addData('pageLoadedSuccessfully', isPageLoaded);
});

Then('the page should have a valid title', async function () {
  const pageTitle = await homePage.getPageTitle();
  expect(pageTitle).toBeTruthy();
  expect(pageTitle.length).toBeGreaterThan(0);
  
  // Store page title in context
  testContext.addData('pageTitle', pageTitle);
  
  // Log environment information
  const environment = testContext.getEnvironment();
  console.log(`Testing in environment: ${environment}`);
});

Then('the page body should be visible', async function () {
  const bodyVisible = await homePage.isElementVisible('body');
  expect(bodyVisible).toBe(true);
  
  // Store visibility result in context
  testContext.addData('bodyVisible', bodyVisible);
  
  // Log test duration
  const duration = testContext.getTestDuration();
  console.log(`Scenario duration: ${duration}ms`);
});
