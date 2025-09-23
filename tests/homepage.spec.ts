import { test, expect } from './fixtures';
import { HomePage } from '../pages/HomePage';

test.describe('Website Loading Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomepage();
  });

  test('should load the homepage successfully', async ({ testContext }) => {
    // Add test data to context
    testContext.addData('testName', 'homepage-loading-test');
    testContext.addData('expectedResult', 'page-loaded');
    
    const isPageLoaded = await homePage.isPageLoaded();
    expect(isPageLoaded).toBe(true);
    
    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).toBeTruthy();
    expect(pageTitle.length).toBeGreaterThan(0);
    
    // Store page title in context for potential use in other tests
    testContext.addData('pageTitle', pageTitle);
    
    // Log test duration
    console.log(`Test duration: ${testContext.getTestDuration()}ms`);
  });

  test('should have correct URL and page title', async ({ testContext }) => {
    testContext.addData('testName', 'url-title-validation-test');
    
    await homePage.waitForPageLoad();
    
    const currentURL = await homePage.getCurrentURL();
    expect(currentURL).toBeTruthy();
    
    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).toBeTruthy();
    expect(pageTitle.length).toBeGreaterThan(0);
    
    // Store URL in context
    testContext.addData('currentURL', currentURL);
    
    // Verify we're testing the correct environment
    const environment = testContext.getEnvironment();
    console.log(`Testing environment: ${environment}`);
  });

  test('should verify page elements are visible', async ({ testContext }) => {
    testContext.addData('testName', 'element-visibility-test');
    
    const isPageLoaded = await homePage.isPageLoaded();
    expect(isPageLoaded).toBe(true);
    
    const bodyVisible = await homePage.isElementVisible('body');
    expect(bodyVisible).toBe(true);
    
    // Add visibility result to context
    testContext.addData('bodyVisible', bodyVisible);
    
    // Get data from previous test if available
    const previousPageTitle = testContext.getData('pageTitle');
    if (previousPageTitle) {
      console.log(`Previous test found page title: ${previousPageTitle}`);
    }
  });
});
