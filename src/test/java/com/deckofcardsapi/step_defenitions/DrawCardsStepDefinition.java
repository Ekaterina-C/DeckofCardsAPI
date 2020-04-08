package com.deckofcardsapi.step_defenitions;
import com.deckofcardsapi.step_defenitions.CreateNewDeckStepDef.*;
import com.deckofcardsapi.utilities.DeckOfCardsAPIResources;
import com.deckofcardsapi.utilities.Utils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;

public class DrawCardsStepDefinition extends Utils {
    Response response;
    String cardCount;
    String id;


    @Given("user creates a new deck")
    public void user_creates_a_new_deck() {
        response = newDeckCreation();
        id = response.jsonPath().getString("deck_id");
        System.out.println(id);

    }

    @When("user calls {string} with {string} http request with specific {string} of cards in deck")
    public void user_calls_with_http_request_with_specific_of_cards_in_deck(String resource, String method, String count) {
        DeckOfCardsAPIResources resourceAPI = DeckOfCardsAPIResources.valueOf(resource);
        response = given().spec(requestSpecification()).queryParam("count", count).when().get(resourceAPI.getResource()+""+id+"/draw/");
    }



    @When("user calls {string} with {string} http request with specific {string} of cards")
    public void user_calls_with_http_request_with_specific_of_cards(String resource, String method, String count) {
        DeckOfCardsAPIResources resourceAPI = DeckOfCardsAPIResources.valueOf(resource);
        response = given().spec(requestSpecification()).queryParam("count", count).when().get(resourceAPI.getResource());
        int numberofCards = response.jsonPath().getInt("remaining");
     //   System.out.println(numberofCards);
    }

    @Then("remaining number of cards in response body is {string} number of cards less")
    public void remaining_number_of_cards_in_response_body_is_number_of_cards_less(String count) {
        int expRemainingCards = 52 - Integer.parseInt(count);
        cardCount = getJsonPath(response, "remaining");
        assertEquals("Expected card count doesn't match actual", expRemainingCards, Integer.parseInt(cardCount));
    }

}
