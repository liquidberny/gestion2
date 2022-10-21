context("measure performance metrics", () => {
    beforeEach(() => {
      clearDatabase();
      setupTestDatabase();
      createUserAndLogin();
    });
  });

  it("measures page load on the home page", () => {
    cy.visit("http://www.google.com ", {
      onBeforeLoad: (win) => {
        win.performance.mark("start-loading");
      }
    })
    .its("performance").then((performance) => {
      cy.get("body").should("have.text", "Hello World!")
      .then(() => performance.mark("end-loading"))
      .then(() => {
        performance.measure("pageLoad", "start-loading", "end-loading");
        // Retrieve the timestamp we just created
        const measure = performance.getEntriesByName("pageLoad")[0]; 
        // This is the total amount of time (in milliseconds) between the start and end
        const duration = measure.duration;
        assert.isAtMost(duration, 5000);
        cy.log(
            `[PERFORMANCE] Page load duration for HOME: ${duration / 1000} seconds`)
      });
    });
  });