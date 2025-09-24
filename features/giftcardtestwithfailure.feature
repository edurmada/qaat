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
    And the giftcard type field is not visible
    And the quantity field is visible
    And the product detail image is visible
    And the product detail page displays correctly
    When I set the gift card value in $250 
    And I set the gift card type as "eGift"
    When I try to add the product to the cart
    Then I should see the Customize My E-Gift Card prompt
    When I select the option to email to me
    And I save the details
    Then I should be able to add to cart
    
