$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/deckofcardsapi/features/create_new_deck.feature");
formatter.feature({
  "name": "Creating new deck",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Verify if deck is being successfully created using createNewDeckAPI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
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
  "name": "the API call is success with status code 200",
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
      "name": "@wip"
    },
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
});