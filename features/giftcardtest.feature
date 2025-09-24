Feature: Gift Card Search
  As a user
  I want to search for gift cards
  So that I can find gift card products

  Scenario: Search for gift cards and verify results
    Given I am on the homepage
    When I search for "gift card"
    And I get to the product detail page
    Then the product detail add to cart button is visible
    And the giftcard amount field is visible
    And the giftcard type field is visible
    And the quantity field is visible
    And the product detail image is visible
    And the product detail page displays correctly
