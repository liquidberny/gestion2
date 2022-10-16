class AmazonCheckout{
    getItemCount(){
        return cy.get('#sc-subtotal-label-buybox');
    }
    
}
export default AmazonCheckout;