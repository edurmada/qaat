import { defineConfig } from '@cucumber/cucumber';

export default defineConfig({
  paths: ['features/**/*.feature'],
  require: ['features/step_definitions/**/*.js'],
  format: ['pretty', 'html:cucumber-report'],
  formatOptions: {
    html: {
      output: 'cucumber-report/index.html',
    },
  },
  worldParameters: {
    // This will be populated by Playwright test runner
  },
});
