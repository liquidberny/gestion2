class AuthenticationPage{
    getEmailAddressInput(){
        cy.get('#email')
    }
    getPasswordInput(){
        cy.get('#passwd')
    }
    getSingInButton(){
        cy.get('#SubmitLogin')
    }
}
export default AuthenticationPage;