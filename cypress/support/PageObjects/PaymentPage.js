class PaymentPage{

    getPayByBankWireOptionButton(){
        return cy.get('.bankwire')
    }

    getIconfirmMyOrderButton(){
        return cy.get('#cart_navigation > .button > span')
    }

    getDescriptionTitleText(){
        return cy.get('.cheque-indent > .dark')
    }
}
export default PaymentPage;