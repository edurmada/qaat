import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { TestContext } from '../playwright.config';
import { HomePage } from '../pages/HomePage';

class DefaultTestContext implements TestContext {
  testData: Record<string, any> = {};
  environment: string = 'development';
  startTime: number = Date.now();
  username: string = '';
  password: string = '';
  status: string = '';
  logs: any[] = [];
  config: Record<string, any> = {};

  addData(key: string, value: any): void {
    this.testData[key] = value;
  }

  getData(key: string): any {
    return this.testData[key];
  }

  getEnvironment(): string {
    return this.environment;
  }

  getTestDuration(): number {
    return Date.now() - this.startTime;
  }
}

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  testContext: TestContext;
  homePage!: HomePage;

  constructor(options: any) {
    super(options);
    this.testContext = new DefaultTestContext();
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);