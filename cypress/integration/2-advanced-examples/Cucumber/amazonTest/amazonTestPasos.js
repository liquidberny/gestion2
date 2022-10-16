import {Given,Then,And} from "cypress-cucumber-preprocessor/steps"
import AmazonHome from '../../../../support/PageObjects/AmazonHome'
import AmazonDeals from '../../../../support/PageObjects/AmazonDeals'
import AmazonProducto from '../../../../support/PageObjects/AmazonProducto'
import AmazonCheckout from '../../../../support/PageObjects/AmazonCheckout'

const amazonhome = new AmazonHome()
const amazondeals = new AmazonDeals()
const amazonproducto = new AmazonProducto()
const amazoncheckout = new AmazonCheckout()

Given('el usuario se encuentra en la pagina de amazon',() => {
    cy.visit('http://www.amazon.com');
})
Then('entra a la seccion de Todays deals',()=>{
    amazonhome.getDealsButton().click({ force: true });
})
And('selecciona el checkbox de audifonos',()=>{
    amazondeals.getHeadphonesCheckbox().click({ force: true });
    
})
Then('selecciona los audifonos',()=>{
    amazondeals.getProductoButton().should('be.visible').click();
})
And('agrega los audifonos al carrete',()=>{
    amazonproducto.getAddToCartButton().click();
})
Then('verifica que haya un producto en el carrete',()=>{
    amazoncheckout.getProceedToCheckoutButton().click();
    amazoncheckout.getItemCount().should("contain.text", "Subtotal (1 item):");
})
