import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

const getBaseURL = () => {
  const env = process.env.ENV || 'staging';
  
  switch (env.toLowerCase()) {
    case 'stg':
    case 'staging':
      return 'https://www.guidectstage.com/';
    case 'prod':
    case 'production':
      return 'https://www.sportsmansguide.com';
    default:
      return 'https://www.guidectstage.com/';
  }
};

const baseURL = getBaseURL();

// Test context fixture
export interface TestContext {
  testData: Record<string, any>;
  environment: string;
  startTime: number;
  username: string;
  password: string;
  addData: (key: string, value: any) => void;
  getData: (key: string) => any;
  getEnvironment: () => string;
  getTestDuration: () => number;
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: baseURL,
    httpCredentials: process.env.BASIC_AUTH_USERNAME && process.env.BASIC_AUTH_PASSWORD ? {
      username: process.env.BASIC_AUTH_USERNAME,
      password: process.env.BASIC_AUTH_PASSWORD,
    } : undefined,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: undefined,
});

// Custom fixture for test context
export const testContext = async ({}, use: (context: TestContext) => Promise<void>) => {
  const context: TestContext = {
    testData: {},
    environment: process.env.ENV || 'staging',
    startTime: Date.now(),
    username: process.env.BASIC_AUTH_USERNAME || 'name',
    password: process.env.BASIC_AUTH_PASSWORD || 'passt17#',
    
    
    addData: (key: string, value: any) => {
      context.testData[key] = value;
    },
    
    getData: (key: string) => {
      return context.testData[key];
    },
    
    getEnvironment: () => {
      return context.environment;
    },
    
    getTestDuration: () => {
      return Date.now() - context.startTime;
    }
  };
  
  await use(context);
};
