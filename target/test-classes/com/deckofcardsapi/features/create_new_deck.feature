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


  @DrawCardsNewDeck
  Scenario Outline: Verify if cards are being successfully drawn from the deck
    Given user wants to execute "drawing cards from new deck" service
    When user calls "createNewDeckAndDrawCard" with "Get" http request with specific "<count>" of cards
    Then the API call is success with status code 200
    And remaining number of cards in response body is "<count>" number of cards less



    Examples:
      | count |
      | 1     |
      | 2     |
      | 3     |
      | 52    |
      | 80    |
      | 0     |
      | -1    |


