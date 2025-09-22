import { test as baseTest } from '@playwright/test';
import { GoogleHomePage } from '../pages/googleHome.page';

export const test = baseTest.extend<{
  homePage: GoogleHomePage;
}>({
  homePage: async ({ page }, use) => {
    const home = new GoogleHomePage(page);
    await use(home);
  },
});

export { expect } from '@playwright/test';