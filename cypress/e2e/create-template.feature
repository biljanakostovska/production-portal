Feature: Templates Management

 Scenario: Create a new template
    Given I am logged in to the Production Portal
    And I navigate to "Configurations" page
    And I open the "Templates" tab
    When I click on the "Create Template" button
    And I enter a name in the "Template name" field
    And I enable the "Set as default" toggle
    And I click the "Save" button
    Then I see a "Template created" message