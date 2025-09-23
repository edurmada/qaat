import { test, expect } from '../fixtures/home.fixture.js';

test.describe('Google Landing Page', () => {
  test('Verify homepage elements are visible', async ({ homePage }) => {
    await expect(homePage.locators.searchBox).toBeVisible();
    await expect(homePage.locators.searchBox).toBeEnabled();
    await expect(homePage.locators.searchButton).toBeVisible();
    await expect(homePage.locators.searchButton).toBeEnabled();
    await expect(homePage.locators.signInLink).toBeVisible();
    await expect(homePage.locators.googleAppsButton).toBeVisible();
  });

  test('Search for "playwright" and verify first result', async ({ homePage }) => {
    await homePage.search('playwright');
    await homePage.page.waitForSelector('div.tF2Cxc');

    const result = await homePage.getFirstResult();
    console.log('First search result:', result);

    expect(result.title?.toLowerCase()).toContain('playwright');
    expect(result.url).toContain('playwright.dev');
  });
});


