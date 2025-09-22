Feature: Google Search Functionality
  As a user
  I want to search for information on Google
  So that I can find relevant results

  Scenario: Search for Playwright and verify results
    Given I am on the Google homepage
    When I search for "Playwright automation testing"
    Then I should see search results
    And the first result should contain relevant information

  Scenario: Search for JavaScript and verify results
    Given I am on the Google homepage
    When I search for "JavaScript programming"
    Then I should see search results
    And the search results should contain "JavaScript"
