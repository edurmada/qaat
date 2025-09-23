import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';

test('Navigate to homepage and verify #account-mmenu present', async ({ page, baseURL }) => {
  const home = new HomePage(page, baseURL);
  await home.goto();
  await home.page.waitForSelector('#site-header');
});


