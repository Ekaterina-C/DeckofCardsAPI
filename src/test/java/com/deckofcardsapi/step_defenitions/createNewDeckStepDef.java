package com.deckofcardsapi.step_defenitions;

import com.deckofcardsapi.utilities.DeckOfCardsAPIResources;
import com.deckofcardsapi.utilities.Utils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import org.apache.log4j.Logger;

import static com.deckofcardsapi.utilities.Utils.getJsonPath;
import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.requestSpecification;
import static org.junit.Assert.assertEquals;

public class createNewDeckStepDef {
    RequestSpecification res;
    Response response;
    ResponseSpecification resSpec;
    JsonPath js;
    static String deck_id;
    String cardCount;
    static Logger log = Logger.getLogger(createNewDeckStepDef.class);

    @Given("user wants to execute {string} service")
    public void user_wants_to_execute_service(String service) {
        log.info("We are going to execute service" + service);
    }

    @When("user calls {string} with {string} http request")
    public void user_calls_with_http_request(String resource, String method) {

        res = given().spec(Utils.requestSpecification());

        DeckOfCardsAPIResources resourceAPI = DeckOfCardsAPIResources.valueOf(resource);

        resSpec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();

        if (method.equalsIgnoreCase("POST"))
            response = res.when().post(resourceAPI.getResource());

        else if (method.equalsIgnoreCase("GET"))
            response = res.when().get(resourceAPI.getResource());

    }


    @Then("the API call is success with status code {int}")
    public void the_API_call_is_success_with_status_code(Integer code) {
        assertEquals("Actual status code doesn't match expected status code", 200, response.getStatusCode());
    }

    @When("user calls {string} with {string} http request adding Jokers")
    public void user_calls_with_http_request_adding_Jokers(String resource, String method) {
        res = given().spec(Utils.requestSpecification()).queryParam("jokers_enabled", "true");
        user_calls_with_http_request(resource, method);



    }

    @Then("number of cards in deck is {int}")
    public void number_of_cards_in_deck_is(Integer int1) {
        cardCount = getJsonPath(response, "remaining");
        assertEquals("Actual card count doesn't match expected card count", 54, cardCount);
    }


    @When("user calls {string} with {string} http request with specific {string} of cards")
    public void user_calls_with_http_request_with_specific_of_cards(String resource, String method, String count) {
        res = given().spec(Utils.requestSpecification()).queryParam("count", count);
        user_calls_with_http_request(resource, method);
    }

    @Then("remaining number of cards in response body is {string} number of cards less")
    public void remaining_number_of_cards_in_response_body_is_number_of_cards_less(String count) {
       Integer expRemainingCards = 52 - Integer.valueOf(count);
        cardCount = getJsonPath(response, "remaining");
        assertEquals("Expected card count doesn't match actual", expRemainingCards, Integer.valueOf(cardCount));
    }



}
