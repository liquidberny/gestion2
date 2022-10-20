import {Given,Then,And} from "cypress-cucumber-preprocessor/steps"

  Then('I should see web audit results', function () {
    cy.lighthouse({
      performance: 95,
      accessibility: 100,
      "best-practices": 95,
      seo: 85,
      pwa: 100,
    }
  );
  Then('I should see web audit results', function () {
    cy.lighthouse(lighthousemetrics);
  })
  })