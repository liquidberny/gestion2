class ShoppingPage{
    getTermsOfServiceCheckbox(){
        cy.get('#cgv')
    }
    getProceedToCheckoutButton(){
        cy.get('.cart_navigation > .button')
    }

}
export default ShoppingPage;