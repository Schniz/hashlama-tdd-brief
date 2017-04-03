Feature: Calculator
  As a user
  I want to calculate sum of multiple numbers

  Scenario: Providing numbers
    Given I visit the calculator page
    When I fill in the numbers "1,2"
    And I click the Submit button
    Then I should see "Result: 3"

  Scenario: I provide one number
    Given I visit the calculator page
    When I fill in the numbers "1"
    And I click the Submit button
    Then I should see "Result: 1"

  Scenario: I provide no numbers at all
    Given I visit the calculator page
    When I click the Submit button
    Then I should see "Result: 0"

  Scenario: Padding with spaces should work as well
    Given I visit the calculator page
    When I fill in the numbers " 1   , 2   , 3   "
    And I click the Submit button
    Then I should see "Result: 6"
