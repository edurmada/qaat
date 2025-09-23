Feature: Gift Card Search
  As a user
  I want to search for gift cards
  So that I can find gift card products

  Scenario: Search for gift cards and verify results
    Given I am on the homepage
    When I search for "gift card"
    Then I should be on the product detail page
    And the product detail page displays correctly
