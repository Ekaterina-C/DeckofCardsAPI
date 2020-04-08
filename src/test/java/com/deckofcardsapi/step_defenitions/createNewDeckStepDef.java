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
import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class CreateNewDeckStepDef extends Utils{
    RequestSpecification res;
    Response response;
    ResponseSpecification resSpec;
    static String cardCount;
     static Logger log = Logger.getLogger(CreateNewDeckStepDef.class);

    @Given("user wants to execute {string} service")
    public void user_wants_to_execute_service(String service) {
        log.info("We are going to execute service" + service);
    }

    @When("user calls {string} with {string} http request")
    public void user_calls_with_http_request(String resource, String method) {
        res = given().spec(requestSpecification());
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
        res = given().spec(requestSpecification()).param("jokers_enabled", "true");
        DeckOfCardsAPIResources resourceAPI = DeckOfCardsAPIResources.valueOf(resource);
        resSpec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();
        if (method.equalsIgnoreCase("POST"))
            response = res.when().post(resourceAPI.getResource());
        else if (method.equalsIgnoreCase("GET"))
            response = res.when().get(resourceAPI.getResource());

    }

    @Then("number of cards in deck is {int}")
    public void number_of_cards_in_deck_is(Integer int1) {
        cardCount = getJsonPath(response, "remaining");
        assertEquals("Actual card count doesn't match expected card count", "54", cardCount);
    }



}
