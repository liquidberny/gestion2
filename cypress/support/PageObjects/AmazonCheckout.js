class AmazonCheckout{
    getProceedToCheckoutButton(){
        return cy.get('#sw-gtc > .a-button-inner > .a-button-text');
    }
    getItemCount(){
        return cy.get('#sc-subtotal-label-buybox');
    }
    
}
export default AmazonCheckout;