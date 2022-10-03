class AddressPage{

    getProceedToCheckoutButton(){
        return cy.get('.cart_navigation > .button > span')
    }
}
export default AddressPage;