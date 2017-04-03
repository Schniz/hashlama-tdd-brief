Feature: Angular.js integration testing

  Scenario: Seeing a default name
    Given I am visiting the main page
    Then I should see "Hello, mouse"

  Scenario: Modifying the name
    Given I am visiting the main page
    When I change the main page's textbox to "Gal"
    Then I should see "Hello, Gal"
