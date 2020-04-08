package com.deckofcardsapi.utilities;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;

import static io.restassured.RestAssured.*;

public class Utils {

    public RequestSpecification req;

    public RequestSpecification requestSpecification() {


        if (req == null) {
            PrintStream log = null;
            try {
                log = new PrintStream(new FileOutputStream("logging.txt"));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            baseURI = ConfigurationReader.getProperty("deckofcards_base_url");
            req = new RequestSpecBuilder().setBaseUri(baseURI)
                    .addFilter(RequestLoggingFilter.logRequestTo(log))
                    .addFilter(ResponseLoggingFilter.logResponseTo(log))
                    .setContentType(ContentType.JSON).build();
            return req;
        }
        return req;
    }


    public String getJsonPath(Response response, String key){
        String resp = response.asString();
        JsonPath js = new JsonPath(resp);
        return js.get(key).toString();

    }
}
