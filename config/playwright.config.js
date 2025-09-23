import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

// Map TEST_ENV aliases to canonical keys
const rawEnv = (process.env.TEST_ENV || 'prod').toLowerCase();
const env = rawEnv === 'stg' ? 'stage' : rawEnv;
const ENV_TO_BASE_URL = {
  prod: 'https://www.sportsmansguide.com/',
  dev: 'https://www.guidectdev.com/',
  stage: 'https://www.guidectstage.com/',
};

// Resolve basic auth credentials for environments that need them
const credentialsByEnv = {
  dev: {
    username: process.env.DEV_BASIC_AUTH_USER || process.env.BASIC_AUTH_USER,
    password: process.env.DEV_BASIC_AUTH_PASS || process.env.BASIC_AUTH_PASS,
  },
  stage: {
    username: process.env.STAGE_BASIC_AUTH_USER || process.env.BASIC_AUTH_USER,
    password: process.env.STAGE_BASIC_AUTH_PASS || process.env.BASIC_AUTH_PASS,
  },
};

const httpCredentials = ['dev', 'stage'].includes(env)
  ? credentialsByEnv[env]
  : undefined;

export default defineConfig({
  testDir: '../tests',
  use: {
    headless: true,
    baseURL: ENV_TO_BASE_URL[env] || ENV_TO_BASE_URL.dev,
    httpCredentials,
  },
});


