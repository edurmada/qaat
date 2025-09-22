import { test as baseTest } from '@playwright/test';
import { GoogleHomePage } from '../pages/googleHome.page';
import { LoginPage } from '../pages/login.page';

export const test = baseTest.extend<{
  homePage: GoogleHomePage;
  loginPage: LoginPage;
}>({
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