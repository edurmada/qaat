import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '../tests',
  use: {
    headless: false,
    baseURL: 'https://www.google.com',
  },
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
      },
    },
    {
      name: 'android',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'ios',
      use: {
        ...devices['iPhone 13'],
      },
    },
  ],
});

// To run tests for a specific project/device, use: npx playwright test --project=<project-name>


