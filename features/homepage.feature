Feature: Website Loading Functionality
  As a user
  I want to access the website homepage
  So that I can verify the page loads correctly

  Scenario: Load homepage and verify page loads successfully
    Given I am on the website homepage
    When the page finishes loading
    Then I should see the page loaded successfully
    And the page should have a valid title

  Scenario: Verify page elements are visible
    Given I am on the website homepage
    When the page finishes loading
    Then I should see the page loaded successfully
    And the page body should be visible
