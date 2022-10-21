import {Given,Then,And} from "cypress-cucumber-preprocessor/steps"

Given("I open OrangeHRM homepage",function(){
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

Then('I should see web audit results', function () {
  cy.lighthouse({
    performance: 95,
    accessibility: 100,
    "best-practices": 95,
    seo: 85,
    pwa: 100,
  }
);
})