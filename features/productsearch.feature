Feature: Product Search
  As a user
  I want to search for products
  So that I can find products on PLP

  Scenario: Search for a product and verify results
    Given I navigate to homepage
    When I search product "U.S. Military Surplus Waterproof M2A1 .50 Caliber Ammo Can, Used"
    And I get Search results listed on PLP
    And I select the first cart result
    Then I get to the product card detail page
    And the add to cart button is visible

  Scenario: Add product to cart verify cart
    Given I navigate to homepage
    When I search product "U.S. Military Surplus Waterproof M2A1 .50 Caliber Ammo Can, Used"
    And I get Search results listed on PLP
    And I select the first cart result
    And I get to the product card detail page
    And I add the product to cart
    And I open the cart
    Then the cart total is visible
    And the checkout button is visible
    And the product quantity field is visible
    And the remove button is visible
    #And the product image is visible
    And the product name is visible
