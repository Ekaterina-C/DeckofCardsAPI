Feature: Creating new deck


  @CreateDeck
  Scenario: Verify if deck is being successfully created using createNewDeckAPI
    Given endpoint for creating new deck is valid
    When  user calls "createNewDeck" with "Get" http request
    Then the API call is success with status code 200


  @CreateDeckWithJokers
  Scenario: Verify if deck with Jokers is being successfully created
    Given endpoint for creating new deck is valid
    When  user calls "createNewDeck" with "Post" http request adding 2 Jokers
    Then  the API call is success with status code 200


  @DrawCards
  Scenario Outline: Verify if cards are being successfully drawn from the deck
    Given deck was already created
    When user calls "drawCard" with "Get" http request with specific "<count>" of cards
    Then the API call is success with status code 200
    And "remaining" in response body is "<count>" number of cards less



    Examples:
      | count |
      | 1     |
      | 2     |
      | 3     |
      | 52    |
      | 80    |
      | 0     |
      | -1    |


