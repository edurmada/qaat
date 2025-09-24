import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';

// Set default timeout to 60 seconds for all steps
setDefaultTimeout(60 * 1000);

Before(async function() {
  await this.init();
});

After(async function() {
  await this.cleanup();
});
