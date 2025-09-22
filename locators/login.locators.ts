import { Page, Locator } from '@playwright/test';

export class LoginLocators {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly forgotEmailButton: Locator;
  readonly createAccountButton: Locator;
  readonly nextButton: Locator;
  readonly passwordInput: Locator;
  readonly showPasswordCheckbox: Locator;
  readonly forgotPasswordButton: Locator;
  readonly accountNotFoundError: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator('input[name="identifier"]');
    this.forgotEmailButton = page.getByRole('button', { name: 'Forgot email?' });
    this.createAccountButton = page.getByRole('button', { name: 'Create account' });
    this.nextButton = page.getByRole('button', { name: 'Next' });

    this.showPasswordCheckbox = page.getByLabel('Show password');
    this.passwordInput = page.locator('input[name="Passwd"]');
    this.forgotPasswordButton = page.locator('#forgotPassword button');

    // Errors
    this.accountNotFoundError = page.getByText("Couldn't find your Google Account");
  }
}