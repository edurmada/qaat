Feature: Homepage Navigation
  As a user
  I want to navigate to the homepage
  So that I can access the site header

  Scenario: Verify homepage loads with site header
    Given I navigate to the homepage
    When the page loads
    Then I should see the site header
