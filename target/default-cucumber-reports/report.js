$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/deckofcardsapi/features/create_new_deck.feature");
formatter.feature({
  "name": "Creating new deck",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify if deck is being successfully created using createNewDeckAPI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"creation of deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeck\" with \"Get\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_calls_with_http_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 209",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.the_API_call_is_success_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if deck with Jokers is being successfully created",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateDeckWithJokers"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"creation of deck with Jokers\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeck\" with \"Get\" http request adding Jokers",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_calls_with_http_request_adding_Jokers(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.the_API_call_is_success_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "number of cards in deck is 54",
  "keyword": "And "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.number_of_cards_in_deck_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/deckofcardsapi/features/draw_cards.feature");
formatter.feature({
  "name": "Draw cards from deck",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"\u003ccount\u003e\" of cards in deck",
  "keyword": "When "
});
formatter.step({
  "name": "remaining number of cards in response body is \"\u003ccount\u003e\" number of cards less",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "count"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "52"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "55"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_creates_a_new_deck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"1\" of cards in deck",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards_in_deck(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"1\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_creates_a_new_deck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"2\" of cards in deck",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards_in_deck(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"2\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_creates_a_new_deck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"10\" of cards in deck",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards_in_deck(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"10\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_creates_a_new_deck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"52\" of cards in deck",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards_in_deck(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"52\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_creates_a_new_deck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"0\" of cards in deck",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards_in_deck(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"0\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_creates_a_new_deck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"55\" of cards in deck",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards_in_deck(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"55\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Expected card count doesn\u0027t match actual expected:\u003c-3\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(DrawCardsStepDefinition.java:49)\r\n\tat ✽.remaining number of cards in response body is \"55\" number of cards less(file:///C:/Users/innoc/IdeaProjects/DeckOfCardsAPIProject/src/test/resources/com/deckofcardsapi/features/draw_cards.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCards"
    }
  ]
});
formatter.step({
  "name": "user creates a new deck",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_creates_a_new_deck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"drawCard\" with \"Get\" http request with specific \"-1\" of cards in deck",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards_in_deck(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"-1\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Expected card count doesn\u0027t match actual expected:\u003c53\u003e but was:\u003c1\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(DrawCardsStepDefinition.java:49)\r\n\tat ✽.remaining number of cards in response body is \"-1\" number of cards less(file:///C:/Users/innoc/IdeaProjects/DeckOfCardsAPIProject/src/test/resources/com/deckofcardsapi/features/draw_cards.feature:7)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"\u003ccount\u003e\" of cards",
  "keyword": "When "
});
formatter.step({
  "name": "remaining number of cards in response body is \"\u003ccount\u003e\" number of cards less",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "count"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "52"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "55"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"1\" of cards",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"1\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"2\" of cards",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"2\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"10\" of cards",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"10\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"52\" of cards",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"52\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"0\" of cards",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"0\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"55\" of cards",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"55\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Expected card count doesn\u0027t match actual expected:\u003c-3\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(DrawCardsStepDefinition.java:49)\r\n\tat ✽.remaining number of cards in response body is \"55\" number of cards less(file:///C:/Users/innoc/IdeaProjects/DeckOfCardsAPIProject/src/test/resources/com/deckofcardsapi/features/draw_cards.feature:23)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify if cards are being successfully drawn from the deck",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DrawCardsNewDeck"
    }
  ]
});
formatter.step({
  "name": "user wants to execute \"drawing cards from new deck\" service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.user_wants_to_execute_service(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"createNewDeckAndDrawCard\" with \"Get\" http request with specific \"-1\" of cards",
  "keyword": "When "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.user_calls_with_http_request_with_specific_of_cards(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remaining number of cards in response body is \"-1\" number of cards less",
  "keyword": "Then "
});
formatter.match({
  "location": "com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Expected card count doesn\u0027t match actual expected:\u003c53\u003e but was:\u003c1\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat com.deckofcardsapi.step_defenitions.DrawCardsStepDefinition.remaining_number_of_cards_in_response_body_is_number_of_cards_less(DrawCardsStepDefinition.java:49)\r\n\tat ✽.remaining number of cards in response body is \"-1\" number of cards less(file:///C:/Users/innoc/IdeaProjects/DeckOfCardsAPIProject/src/test/resources/com/deckofcardsapi/features/draw_cards.feature:23)\r\n",
  "status": "failed"
});
});