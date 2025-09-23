# Playwright Test Automation Framework

A comprehensive test automation framework built with Playwright, featuring Page Object Model pattern and Gherkin syntax support for behavior-driven development.

## Framework Structure

```
├── tests/                    # Playwright test files
│   └── homepage.spec.ts     # Example test file
├── pages/                   # Page Object Models
│   └── HomePage.ts          # Homepage page object
├── features/                # Gherkin feature files
│   └── homepage.feature     # Example feature file
├── step-definitions/        # Step definition files
│   └── homepage.steps.ts    # Example step definitions
├── playwright.config.ts     # Playwright configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

3. **Set environment variables (optional):**
   ```bash
   # Preferred: use a .env file (loaded automatically)
   cp .env .env.local  # customize if needed

   # Or export variables in your shell
   export ENV=staging  # or 'stg', 'prod', 'production'
   export BASIC_AUTH_USERNAME=name
   export BASIC_AUTH_PASSWORD='passt17#'
   ```
   If not set, the framework defaults to `staging` environment. Basic auth is applied automatically when credentials are provided.

## Configuration

The framework is configured through `playwright.config.ts`:

- **Base URL**: Uses `process.env.ENV` to determine the target environment
  - `staging` or `stg` → `https://www.guidectstage.com/`
  - `prod` or `production` → `https://www.sportsmansguide.com`
  - Default → `https://www.guidectstage.com/`
- **Browsers**: Supports Chrome, Firefox, and Safari
- **Reporting**: HTML reports with screenshots and videos on failure
- **Retries**: 2 retries in CI, 0 in local development

## Running Tests

### Regular Playwright Tests

```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Debug tests
npm run test:debug

# View test report
npm run test:report
```

### Gherkin Tests

```bash
# Run Gherkin tests with Cucumber
npx cucumber-js features/homepage.feature --require step-definitions/homepage.steps.ts
```

## Writing Tests

### Page Object Model

Create page objects in the `pages/` directory:

```typescript
import { Page, Locator } from '@playwright/test';

export class YourPage {
  readonly page: Page;
  readonly element: Locator;

  constructor(page: Page) {
    this.page = page;
    this.element = page.locator('selector');
  }

  async navigateToPage(): Promise<void> {
    await this.page.goto('/your-path');
  }
}
```

### Regular Tests

Create test files in the `tests/` directory:

```typescript
import { test, expect } from './tests/fixtures';
import { HomePage } from '../pages/HomePage';

test('your test', async ({ page, testContext }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomepage();
  
  // Use test context to store and retrieve data
  testContext.addData('testName', 'your-test');
  const environment = testContext.getEnvironment();
  console.log(`Testing in: ${environment}`);
  
  // Your test logic here
});
```

### Gherkin Features

Create feature files in the `features/` directory:

```gherkin
Feature: Your Feature
  Scenario: Your scenario
    Given I am on the page
    When I perform an action
    Then I should see expected result
```

### Step Definitions

Create step definition files in the `step-definitions/` directory:

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the page', async function () {
  // Implementation
});

When('I perform an action', async function () {
  // Implementation
});

Then('I should see expected result', async function () {
  // Implementation
});
```

## Environment Variables

- `ENV`: The environment to test against
  - `staging` or `stg` → Tests against `https://www.guidectstage.com/`
  - `prod` or `production` → Tests against `https://www.sportsmansguide.com`
  - Default → `staging` environment
- `BASIC_AUTH_USERNAME`: Username for HTTP Basic Auth (optional)
- `BASIC_AUTH_PASSWORD`: Password for HTTP Basic Auth (optional)

## Test Context Fixture

The framework includes a custom `testContext` fixture that allows you to:

- **Store test data**: Share data between test steps
- **Track environment**: Get current environment information
- **Measure duration**: Track test execution time
- **Add custom data**: Store any key-value pairs

### Usage Examples

```typescript
// In regular Playwright tests
test('example test', async ({ page, testContext }) => {
  // Add data to context
  testContext.addData('userId', '12345');
  testContext.addData('testResult', 'passed');
  
  // Retrieve data from context
  const userId = testContext.getData('userId');
  const environment = testContext.getEnvironment();
  const duration = testContext.getTestDuration();
  
  console.log(`User ${userId} tested in ${environment} in ${duration}ms`);
});

// In Gherkin step definitions
Given('I am on the page', async function () {
  const { page, testContext } = this;
  testContext.addData('scenario', 'navigation-test');
  // Your implementation
});
```

### Available Methods

- `addData(key: string, value: any)` - Store data in context
- `getData(key: string)` - Retrieve data from context
- `getEnvironment()` - Get current environment (staging/prod)
- `getTestDuration()` - Get test execution time in milliseconds

## Best Practices

1. **Page Object Model**: Use page objects to encapsulate page interactions
2. **Environment Variables**: Use environment variables for configuration
3. **Test Context**: Leverage the test context fixture for data sharing
4. **Meaningful Test Names**: Write descriptive test names and scenarios
5. **Wait Strategies**: Use proper wait strategies for element interactions
6. **Error Handling**: Implement proper error handling and retries
7. **Reporting**: Leverage Playwright's built-in reporting features

## Troubleshooting

### Common Issues

1. **Browser Installation**: Run `npx playwright install` if browsers are missing
2. **Environment Variables**: Ensure ENV is set correctly
3. **Dependencies**: Run `npm install` to install all required packages

## CI with GitHub Actions

This repository includes a GitHub Actions workflow that runs Playwright tests on every push and pull request.

- Workflow file: `.github/workflows/ci.yml`
- Set repository variables/secrets as needed:
  - Repository variable `ENV` (default `staging` is used if not set)
  - Secrets `BASIC_AUTH_USERNAME`, `BASIC_AUTH_PASSWORD` for HTTP Basic Auth (optional)

Artifacts uploaded from CI:
- `playwright-report/` (HTML report)
- `test-results/` (screenshots/videos on failure)

### Debug Mode

Use debug mode to step through tests:

```bash
npm run test:debug
```

This will open the Playwright Inspector where you can:
- Step through tests line by line
- Inspect elements
- View network requests
- Take screenshots

## Contributing

1. Follow the existing code structure
2. Add meaningful comments for complex logic
3. Update documentation when adding new features
4. Ensure all tests pass before submitting changes
