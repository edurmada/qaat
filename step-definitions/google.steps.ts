import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

let googlePage: GooglePage;
let searchQuery: string;

Given('I am on the Google homepage', async function () {
  const { page } = this;
  googlePage = new GooglePage(page);
  await googlePage.navigateToGoogle();
});

When('I search for {string}', async function (query: string) {
  searchQuery = query;
  await googlePage.searchFor(query);
});

Then('I should see search results', async function () {
  const isResultsVisible = await googlePage.isSearchResultsVisible();
  expect(isResultsVisible).toBe(true);
});

Then('the first result should contain relevant information', async function () {
  const firstResult = await googlePage.getFirstResultText();
  expect(firstResult).toBeTruthy();
  expect(firstResult.length).toBeGreaterThan(0);
});

Then('the search results should contain {string}', async function (expectedText: string) {
  const firstResult = await googlePage.getFirstResultText();
  expect(firstResult).toContain(expectedText);
});
