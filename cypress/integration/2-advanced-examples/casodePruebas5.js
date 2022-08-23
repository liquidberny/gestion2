describe("quinto caso de prueba", function () {

  it("Verificar que los checkboxes estan funcionando", function () {
    cy.visit("https://www.amazon.com/");
    cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click()
    cy.get('[aria-label="Prime free shipping filter"] > :nth-child(2) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').check().should('be.checked')
    cy.get('[aria-label="Prime free shipping filter"] > :nth-child(4) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').check().should('be.checked')
    cy.get('[aria-label="Prime free shipping filter"] > :nth-child(3) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').should('not.be.checked')
  });
});
