import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

// Map ENV aliases to canonical keys
const rawEnv = (process.env.ENV || 'prod').toLowerCase();
const env = rawEnv === 'stg' ? 'stage' : rawEnv;
const ENV_TO_BASE_URL = {
  prod: 'https://www.sportsmansguide.com/',
  dev: 'https://www.guidectdev.com/',
  stage: 'https://www.guidectstage.com/',
};

// Resolve basic auth credentials for environments that need them
const credentialsByEnv = {
  dev: {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,
  },
  stage: {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,
  },
};

const httpCredentials = ['dev', 'stage'].includes(env)
  ? credentialsByEnv[env]
  : undefined;

export default defineConfig({
  testDir: '../tests',
  reporter: [['html', { open: 'never' }]],
  timeout: 60000, // 60 seconds global timeout
  use: {
    headless: true,
    baseURL: ENV_TO_BASE_URL[env] || ENV_TO_BASE_URL.dev,
    httpCredentials,
    actionTimeout: 30000, // 30 seconds for individual actions
  },
});


