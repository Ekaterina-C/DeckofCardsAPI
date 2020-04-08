Feature: Draw cards from deck

    @DrawCards
  Scenario Outline: Verify if cards are being successfully drawn from the deck
    Given user creates a new deck
    When user calls "drawCard" with "Get" http request with specific "<count>" of cards in deck
    Then remaining number of cards in response body is "<count>" number of cards less

    Examples:
      | count |
      | 1     |
      | 2     |
      | 10    |
      | 52    |
      | 0     |
      | 55    |
      | -1    |

  @DrawCardsNewDeck
  Scenario Outline: Verify if cards are being successfully drawn from the deck
    Given user wants to execute "drawing cards from new deck" service
    When user calls "createNewDeckAndDrawCard" with "Get" http request with specific "<count>" of cards
    Then remaining number of cards in response body is "<count>" number of cards less


    Examples:
      | count |
      | 1     |
      | 2     |
      | 10    |
      | 52    |
      | 0     |
      | 55    |
      | -1    |

