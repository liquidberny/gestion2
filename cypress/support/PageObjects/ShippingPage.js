class ShippingPage{

    getTermsOfServiceCheckbox(){
        return cy.get('p[class="checkbox"]:has(input[id="cgv"]) input')
    }

    getProceedToCheckoutButton(){
        return cy.get('.cart_navigation > .button > span')
    }
}
export default ShippingPage;