import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { config } from 'dotenv';

// Load .env file
config();

class CustomWorld {
  constructor() {
    this.page = null;
    this.browser = null;
    this.baseURL = this.getBaseURL();
  }

  getBaseURL() {
    const env = (process.env.ENV || process.env.TEST_ENV || 'stg').toLowerCase();
    const ENV_TO_BASE_URL = {
      prod: 'https://www.sportsmansguide.com/',
      dev: 'https://www.guidectstage.com/',
      stage: 'https://www.guidectstage.com/',
    };
    return ENV_TO_BASE_URL[env] || ENV_TO_BASE_URL.dev;
  }

  async init() {
    const headless = process.env.HEADLESS !== 'false';
    this.browser = await chromium.launch({ headless });
    
    // Set up basic auth if credentials are provided
    const contextOptions = {
      defaultTimeout: 20000,
      actionTimeout: 20000,
      navigationTimeout: 20000,
    };
    if (process.env.BASIC_AUTH_USERNAME && process.env.BASIC_AUTH_PASSWORD) {
      contextOptions.httpCredentials = {
        username: process.env.BASIC_AUTH_USERNAME,
        password: process.env.BASIC_AUTH_PASSWORD,
      };
    }
    
    const context = await this.browser.newContext(contextOptions);
    this.page = await context.newPage();
    
    // Set default timeout to 20 seconds
    this.page.setDefaultTimeout(20000);
    
    // Maximize browser window
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
