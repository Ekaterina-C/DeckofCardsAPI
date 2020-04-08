package com.deckofcardsapi.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/com/deckofcardsapi/features/",
        glue = "com/deckofcardsapi/step_defenitions",
        dryRun = false,
        tags = "@wip",
        plugin = {"html:target/default-cucumber-reports",
                "json:target/cucumber.json",
                "rerun:target/rerun.txt"}

)
public class TestRunner {
}
