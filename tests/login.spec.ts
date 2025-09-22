import { test, expect } from '../fixtures/login.fixture';

test.describe('Google Login Tests', () => {
  test.skip('Navigate to login from Google home and perform login flow', async ({
     homePage,
     loginPage
    }) => {
    await homePage.clickSignIn();
    await loginPage.enterEmail('testuser@example.com');

    await loginPage.toggleShowPassword();
    await loginPage.enterPassword('SuperSecret123!');

    if (await loginPage.isAccountNotFoundErrorVisible()) {
      const errorText = await loginPage.getAccountNotFoundErrorText();
      console.log('Login error:', errorText);
    }

    expect(await loginPage.locators.passwordInput.isVisible()).toBe(true);
  });

  test('Login with invalid email shows error', async ({
    homePage, loginPage
}) => {
    await homePage.clickSignIn();

    const invalidEmail = 'invaliduser@example.com';
    await loginPage.enterEmail(invalidEmail);

    const isErrorVisible = await loginPage.isAccountNotFoundErrorVisible();
    expect(isErrorVisible).toBe(true);

    const errorText = await loginPage.getAccountNotFoundErrorText();
    console.log('Error shown:', errorText);
    expect(errorText?.toLowerCase()).toContain('couldn’t find');
  });
});