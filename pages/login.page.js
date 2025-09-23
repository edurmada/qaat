import { LoginLocators } from '../locators/login.locators.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.locators = new LoginLocators(page);
  }

  async goto() {
    await this.page.goto('https://accounts.google.com/');
  }

  async enterEmail(email) {
    await this.locators.emailInput.fill(email);
    await this.locators.nextButton.click();
  }

  async enterPassword(password) {
    await this.locators.passwordInput.waitFor({ state: 'visible' });
    await this.locators.passwordInput.fill(password);
    await this.locators.nextButton.click();
  }

  async toggleShowPassword() {
    await this.locators.showPasswordCheckbox.check();
  }

  async clickForgotEmail() {
    await this.locators.forgotEmailButton.click();
  }

  async clickForgotPassword() {
    await this.locators.forgotPasswordButton.click();
  }

  async clickCreateAccount() {
    await this.locators.createAccountButton.click();
  }

  async isAccountNotFoundErrorVisible() {
    return await this.locators.accountNotFoundError.isVisible();
  }

  async getAccountNotFoundErrorText() {
    if (await this.isAccountNotFoundErrorVisible()) {
      return await this.locators.accountNotFoundError.textContent();
    }
    return null;
  }
}


