// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })










//Importamos Clases de Page Objects
/*
import AddressPage from '../support/PageObjects/AddressPage'
import AuthenticationPage from '../support/PageObjects/AuthenticationPage'
import HomePage from '../support/PageObjects/HomePage'
import PaymentPage from '../support/PageObjects/PaymentPage'
import ShippingPage from '../support/PageObjects/ShippingPage'
import ShoppingCartSummaryPage from '../support/PageObjects/ShoppingCartSummaryPage'

const addressPage = new AddressPage()
const authenticationPage = new AuthenticationPage()
const homePage = new HomePage()
const paymentPage = new PaymentPage()
const shippingPage = new ShippingPage()
const shoppingSummaryCart = new ShoppingCartSummaryPage()

Cypress.Commands.add("agregarElementoAlCarrito", (nombreDeProducto) => {
    cy.get('div[class="product-thumb"]').as('contenedorDeProductos')

        //Recorremos la variable de contenedorDeProductos
        cy.get('@contenedorDeProductos').each(($el,index,$list) => {
            
            //recorremos la lista en la parte de a
            cy.get(":has(.content a)").eq(index).then(function ($el1) {
                let producto = $el1.text()
                cy.log(producto)

                //verificamos que la etiqueta tenga el nombre dado
                if(producto.includes(nombreDeProducto)){
                    cy.log("se ha encontrado el elemento buscado")
                    cy.get('@contenedorDeProductos').eq(index).find('button[aria-label="Add to Cart"]').click()
                }
            })
            
        })
})

Cypress.Commands.add("marcarMultipleCheckBox",(elemento1,elemento2) =>{
    cy.get('div[id="hobbiesWrapper"] input').as('checkboxes')
        cy.get('div[id="hobbiesWrapper"] label').each(($el,index,$list) => {
            cy.log($el.text())
            //Comprobamos el titulo y el precio del producto
            if($el.text().includes(elemento1) || $el.text().includes(elemento2)){
                cy.log("Se ha encontrado el elemento buscado")
                cy.log("Se ha encontrado el precio buscado")
                //Cuando se encuentre en el indece se dara clic en el boton de añadir al carrito
                cy.get('@checkboxes').eq(index - 1).click({force: true})
            }
        })
})

Cypress.Commands.add("iniciarSesion", (data) =>{
    cy.get('#email').type(data.email)
    cy.get('#passwd').type(data.contrasena)
    cy.wait(10000)
    cy.get('#SubmitLogin').click()
})

Cypress.Commands.add("entrarPagina", () => {
    cy.visit("http://automationpractice.com/index.php")
})

Cypress.Commands.add("buscarArticulo", () => {
    homePage.getSearchBox().type('Blouse')
    homePage.getSearchBoxButton().click()
})

Cypress.Commands.add("agregarAlCarrito", () => {
    cy.wait(5000)
    homePage.getAddToCardElementButton("Blouse").click()
    cy.wait(5000)
    homePage.getProceedToCheckoutButton().click({force: true})
})

Cypress.Commands.add("verificarPrecio", () => {
    shoppingSummaryCart.getProductNameText().should('contain.text', 'Blouse')
    shoppingSummaryCart.getProductPriceText().should('containt.text', '27.00')
})

Cypress.Commands.add("finalizaCompra", () => {
    shoppingSummaryCart.getProceedToCheckoutButton().click()

    authenticationPage.getEmailAddressInput().type('cypress@ateneaconocimientos.net')
    authenticationPage.getPasswordInput().type('Atenea')
    authenticationPage.getSignInButton().click()

    addressPage.getProceedToCheckoutButton().click()

    shippingPage.getTermsOfServiceCheckbox().check().should('be.checked')
    shippingPage.getProceedToCheckoutButton().click()

    paymentPage.getPayByBankWireOptionButton().click()
    paymentPage.getIConfirmMyOrderButton().click()
})

Cypress.Commands.add("verificarPrecio", () => {
    shoppingSummaryCart.getProductNameText().should('contain.text', 'Blouse')
    shoppingSummaryCart.getProductPriceText().should('containt.text', '27.00')
})

Cypress.Commands.add("verificarOrden", () => {
    paymentPage.getDescriptionTitleText().should('contain.text', 'Your order on My Store is complete')
})
*/