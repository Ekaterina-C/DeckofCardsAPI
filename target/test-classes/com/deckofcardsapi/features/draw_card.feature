Feature: Draw cards from deck

  @DrawCards
  Scenario Outline: Verify if cards are being successfully drawn from the deck
    Given user wants to execute "drawing cards from new deck" service
    When user calls "createNewDeck" with "Get" http request with specific "<count>" of cards
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