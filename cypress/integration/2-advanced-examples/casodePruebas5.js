describe("quinto caso de prueba", function () {

  it("Verificar que los checkboxes estan funcionando", function () {
    cy.visit("https://www.amazon.com/");
    cy.get('#nav-xshop > a:nth-child(2)').click()
    cy.get('[aria-label="Prime free shipping filter"] > :nth-child(2) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').check().should('be.checked')

  });
});
