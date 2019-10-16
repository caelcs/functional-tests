Feature: Lumartex home page tests

  @e2e-test
  Scenario: Access home page
    When I'm at Lumartex
    Then it should have a navigation bar
    And it should have a footer
    And it should have a product button

  @e2e-test
  Scenario: menu should have all items
    When I'm at Lumartex
    Then it should have a navigation bar
    And it should contains all the menu items
      | name     |
      | products |
      | about us |
      | contact  |
      | support  |

