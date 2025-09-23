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
    const env = (process.env.ENV || process.env.TEST_ENV || 'dev').toLowerCase();
    const ENV_TO_BASE_URL = {
      prod: 'https://www.sportsmansguide.com/',
      dev: 'https://www.guidectdev.com/',
      stage: 'https://www.guidectstage.com/',
    };
    return ENV_TO_BASE_URL[env] || ENV_TO_BASE_URL.dev;
  }

  async init() {
    const headless = process.env.HEADLESS !== 'false';
    this.browser = await chromium.launch({ headless });
    
    // Set up basic auth if credentials are provided
    const contextOptions = {};
    if (process.env.BASIC_AUTH_USERNAME && process.env.BASIC_AUTH_PASSWORD) {
      contextOptions.httpCredentials = {
        username: process.env.BASIC_AUTH_USERNAME,
        password: process.env.BASIC_AUTH_PASSWORD,
      };
    }
    
    const context = await this.browser.newContext(contextOptions);
    this.page = await context.newPage();
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
