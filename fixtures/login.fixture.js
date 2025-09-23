import { test as baseTest, expect } from '@playwright/test';
import { GoogleHomePage } from '../pages/googleHome.page.js';
import { LoginPage } from '../pages/login.page.js';

export const test = baseTest.extend({
  homePage: async ({ page }, use) => {
    const homePage = new GoogleHomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';


