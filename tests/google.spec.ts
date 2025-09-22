import { test, expect } from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

test.describe('Google Search Tests', () => {
  let googlePage: GooglePage;

  test.beforeEach(async ({ page }) => {
    googlePage = new GooglePage(page);
    await googlePage.navigateToGoogle();
  });

  test('should search for Playwright and verify results', async () => {
    const searchQuery = 'Playwright automation testing';
    
    await googlePage.searchFor(searchQuery);
    
    const isResultsVisible = await googlePage.isSearchResultsVisible();
    expect(isResultsVisible).toBe(true);
    
    const firstResult = await googlePage.getFirstResultText();
    expect(firstResult).toBeTruthy();
    expect(firstResult.length).toBeGreaterThan(0);
  });

  test('should display search results when searching for a valid term', async () => {
    const searchQuery = 'JavaScript';
    
    await googlePage.searchFor(searchQuery);
    
    const searchResults = await googlePage.getSearchResults();
    expect(searchResults.length).toBeGreaterThan(0);
    
    const firstResult = await googlePage.getFirstResultText();
    expect(firstResult).toContain('JavaScript');
  });
});
