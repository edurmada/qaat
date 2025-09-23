import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CustomWorld } from '../features/world';
import { TestContext } from '../playwright.config';

Given('I am on the website homepage', async function (this: CustomWorld) {
  // Assume this.homePage is already initialized in the Before hook
  
  // Add context data
  this.testContext.addData('scenario', 'homepage-navigation');
  this.testContext.addData('startTime', Date.now());
  
  await this.homePage.navigateToHomepage();
});

When('the page finishes loading', async function () {
  await this.homePage.waitForPageLoad();
  
  // Add loading completion data to context
  this.testContext.addData('pageLoadCompleted', true);
  this.testContext.addData('loadTime', Date.now());
});

Then('I should see the page loaded successfully', async function () {
  const isPageLoaded = await this.homePage.isPageLoaded();
  expect(isPageLoaded).toBe(true);
  
  // Store result in context
  this.testContext.addData('pageLoadedSuccessfully', isPageLoaded);
});

Then('the page should have a valid title', async function () {
  const pageTitle = await this.homePage.getPageTitle();
  expect(pageTitle).toBeTruthy();
  expect(pageTitle.length).toBeGreaterThan(0);
  
  // Store page title in context
  this.testContext.addData('pageTitle', pageTitle);
  
  // Log environment information
  const environment = this.testContext.getEnvironment();
  console.log(`Testing in environment: ${environment}`);
});

Then('the page body should be visible', async function () {
  const bodyVisible = await this.homePage.isElementVisible('body');
  expect(bodyVisible).toBe(true);
  
  // Store visibility result in context
  this.testContext.addData('bodyVisible', bodyVisible);
  
  // Log test duration
  const duration = this.testContext.getTestDuration();
  console.log(`Scenario duration: ${duration}ms`);
});
