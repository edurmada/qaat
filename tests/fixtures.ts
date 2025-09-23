import { test as base, expect } from '@playwright/test';

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

export const test = base.extend<{ testContext: TestContext }>({
  testContext: async ({}, use) => {
    const context: TestContext = {
      testData: {},
      environment: process.env.ENV || 'staging',
      startTime: Date.now(),
      username: process.env.BASIC_AUTH_USERNAME || 'name',
      password: process.env.BASIC_AUTH_PASSWORD || 'passt17#',
      addData: (key: string, value: any) => {
        context.testData[key] = value;
      },
      getData: (key: string) => context.testData[key],
      getEnvironment: () => context.environment,
      getTestDuration: () => Date.now() - context.startTime,
    };

    await use(context);
  },
});

export { expect };


