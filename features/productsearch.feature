Feature: Product Search
  As a user
  I want to search for products
  So that I can find products on PLP

  Scenario: Search for a product and verify results
    Given I am on the homepage
    When I search for "U.S. Military Surplus Waterproof M2A1 .50 Caliber Ammo Can, Used"
    And I get Search results listed on PLP
    And I select the first cart result
    Then I get to the product detail page
    And the add to cart button is visible
    And the cart total is visible
    And the checkout button is visible
    And the quantity field is visible
    And the remove button is visible
    And the product detail image is visible
    And the product name is visible
