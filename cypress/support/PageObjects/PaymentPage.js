class PaymentPage{
    getPayByBankWireOptionButton(){
        cy.get('.bankwire')
    }
    getIconfirmMyOrderButton(){
        cy.get('.cart_navigation > .button')
    }
    getDescriptionTitleText(){
        cy.get('.cheque-indent > .dark')
    }

   
}
export default PaymentPage;