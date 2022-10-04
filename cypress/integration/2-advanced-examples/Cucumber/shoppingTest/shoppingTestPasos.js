import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import AddressPage from '../../../../support/PageObjects/AddressPage'
import AuthenticationPage from '../../../../support/PageObjects/AuthenticationPage'
import HomePage from '../../../../support/PageObjects/HomePage'
import PaymentPage from '../../../../support/PageObjects/PaymentPage'
import ShippingPage from '../../../../support/PageObjects/ShippingPage'
import ShoppingCartSummaryPage from '../../../../support/PageObjects/ShoppingCartSummaryPage'

const addressPage = new AddressPage()
const authenticationPage = new AuthenticationPage()
const homePage = new HomePage()
const paymentPage = new PaymentPage()
const shippingPage = new ShippingPage()
const shoppingCartSummaryPage = new ShoppingCartSummaryPage()

Given('el usuario se encuentra en la pagina de compra',  () => {
    cy.visit('http://automationpractice.com/index.php')
})
And('busca un articulo llamado blusa',()=>{
    homePage.getSearchBoxInput().type("Blouse")
    homePage.getSearchBoxButton().click()
})
When('agrega una blusa al carrito', () =>{
    homePage.getAddToCardElementButton("Blouse").click()
    homePage.getProceedToCheckoutButton().click()
})

Then('el valor del articulo es de 27.00 dolares', () =>{
    shoppingCartSummaryPage.getProductName().should('contain.text','Blouse')
    shoppingCartSummaryPage.getProductPriceText().should('contain.text','27.00')

    shoppingCartSummaryPage.getProceedToCheckoutButton().click()
})

When('finaliza la compra de los articulos', () =>{
    authenticationPage.getEmailAddressInput().type('cypress@ateneaconocimientos.net')
    authenticationPage.getPasswordInput().type('Atenea')
    authenticationPage.getSingInButton().click()
    cy.wait(3000)
    addressPage.getProceedToCheckoutButton().click()

    shippingPage.getTermsOfServiceCheckbox().check().should('be.checked')
    shippingPage.getProceedToCheckoutButton().click()
})

Then('el mensaje de orden completada deberia aparecer', () =>{
    paymentPage.getPayByBankWireOptionButton().click()
    paymentPage.getIconfirmMyOrderButton().click()
    paymentPage.getDescriptionTitleText().should('contain.text','Your order on My Store is complete.')
})
