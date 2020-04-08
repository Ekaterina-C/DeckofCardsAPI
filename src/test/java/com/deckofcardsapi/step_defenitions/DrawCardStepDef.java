package com.deckofcardsapi.step_defenitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class DrawCardStepDef {

//
//
//
//    @When("user calls {string} with {string} http request with specific {string} of cards")
//    public void user_calls_with_http_request_with_specific_of_cards(String resource, String method, String count) {
//        int countNum = Integer.parseInt(count);
//        res = given().spec(requestSpecification()).queryParam("count", count);
//        user_calls_with_http_request(resource, method);
//    }
//
//    @Then("remaining number of cards in response body is {string} number of cards less")
//    public void remaining_number_of_cards_in_response_body_is_number_of_cards_less(String count) {
//        int expRemainingCards = 52 - Integer.parseInt(count);
//        cardCount = getJsonPath(response, "remaining");
//        assertEquals("Expected card count doesn't match actual", expRemainingCards, Integer.parseInt(cardCount));
//    }
}
