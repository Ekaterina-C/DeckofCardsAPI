@wip
Feature: Creating new deck


  @CreateDeck
  Scenario: Verify if deck is being successfully created using createNewDeckAPI
    Given user wants to execute "creation of deck" service
    When  user calls "createNewDeck" with "Get" http request
    Then the API call is success with status code 200


  @CreateDeckWithJokers
  Scenario: Verify if deck with Jokers is being successfully created
    Given user wants to execute "creation of deck with Jokers" service
    When  user calls "createNewDeck" with "Get" http request adding Jokers
    Then  the API call is success with status code 200
    And number of cards in deck is 54




