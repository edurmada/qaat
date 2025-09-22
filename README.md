# Playwright Test Automation Framework

A comprehensive test automation framework built with Playwright, featuring Page Object Model pattern and Gherkin syntax support for behavior-driven development.

## Framework Structure

```
├── tests/                    # Playwright test files
│   └── google.spec.ts       # Example test file
├── pages/                   # Page Object Models
│   └── GooglePage.ts        # Google page object
├── features/                # Gherkin feature files
│   └── google.feature       # Example feature file
├── step-definitions/        # Step definition files
│   └── google.steps.ts      # Example step definitions
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
   export BASE_URL=https://your-custom-url.com
   ```
   If not set, the framework defaults to `https://www.google.com`

## Configuration

The framework is configured through `playwright.config.ts`:

- **Base URL**: Uses `process.env.BASE_URL` or defaults to Google
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
npx cucumber-js features/google.feature --require step-definitions/google.steps.ts
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
import { test, expect } from '@playwright/test';
import { YourPage } from '../pages/YourPage';

test('your test', async ({ page }) => {
  const yourPage = new YourPage(page);
  await yourPage.navigateToPage();
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

- `BASE_URL`: The base URL for your application (defaults to Google)

## Best Practices

1. **Page Object Model**: Use page objects to encapsulate page interactions
2. **Environment Variables**: Use environment variables for configuration
3. **Meaningful Test Names**: Write descriptive test names and scenarios
4. **Wait Strategies**: Use proper wait strategies for element interactions
5. **Error Handling**: Implement proper error handling and retries
6. **Reporting**: Leverage Playwright's built-in reporting features

## Troubleshooting

### Common Issues

1. **Browser Installation**: Run `npx playwright install` if browsers are missing
2. **Environment Variables**: Ensure BASE_URL is set correctly
3. **Dependencies**: Run `npm install` to install all required packages

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
