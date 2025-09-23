import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';

test.describe('Homepage actions', () => {
  let home;
  let searchTerm = 'U.S. Military Surplus Waterproof M2A1 .50 Caliber Ammo Can, Used';
  //let searchTerm = 'U.S. Military Surplus Waterproof M2A1';

  test.beforeEach(async ({ page, baseURL }) => {
    home = new HomePage(page, baseURL);
    await home.goto();
  });

  test('Navigate to homepage and verify #site-header is visible', async () => {
    await expect(home.locators.siteHeader).toBeVisible();
  });

  test('Search for a term and verify search results appear', async () => {
    await home.search(searchTerm);
    await expect(home.locators.searchBar).toBeVisible();
    await expect(home.locators.searchButton).toBeVisible();
    await expect(home.locators.productCards.first()).toBeVisible();
  });

  test('Add item to cart and verify cart summary', async () => {
    await home.search(searchTerm);
    await home.addToCart();
    await expect(home.locators.cartSummary).toBeVisible();
  });
});
