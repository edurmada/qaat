import { test as baseTest, expect } from '@playwright/test';
import { GoogleHomePage } from '../pages/googleHome.page.js';

export const test = baseTest.extend({
  homePage: async ({ page }, use) => {
    const home = new GoogleHomePage(page);
    await use(home);
  },
});

export { expect } from '@playwright/test';


