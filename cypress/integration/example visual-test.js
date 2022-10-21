// visual-test.js
describe('Cypress Visual Testing', () => {
    it('Compare fullpage of Google page', () => {
    cy.visit("https://www.google.com/?hl=hi");
    cy.compareSnapshot('google-page');
    })
    })