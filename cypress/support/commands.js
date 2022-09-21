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

Cypress.Commands.add('AgregarElementoAlCarrito',(nombreDeProducto)=>{
    cy.get("div[class='product-thumb']").as('contenedorDeProductos')
    cy.get('@contenedorDeProductos')
    .each(($el,index, $list) => {
        cy.get(':has(.description) h4 a').eq(index).then(function($el1){
           let producto= $el1.text()
            cy.log(producto)
        
        if(producto.includes(nombreDeProducto)){
            cy.log('Se ha encontrado el elemento buscado')
           
            cy.get('@contenedorDeProductos').eq(index).find("button[aria-label='Add to Cart']").click()
            }
        })
    })
})
// primeras pruebas
Cypress.Commands.add('AgregarVestido',(nombreDeVestido)=>{
    cy.get('#homefeatured .product-container').as('ProductosPopulares')
    cy.get('@ProductosPopulares')
    .find('.product-name')
    .each(($el,index, $list) => {
        cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1){
            let precio = $el1.text()
            cy.log(precio)
        
        if($el.attr('title') === nombreDeVestido ){
            cy.log('Se ha encontrado el elemento buscado')
            cy.log('Se ha encontrado el precio buscado')
            cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
           cy.wait(4000)
            cy.get('.continue > span').click()
        }
    })
    })
   
})
//pruebas data driven
Cypress.Commands.add('Lista',(datos)=>{
    cy.get("#firstName").type(datos.nombre);
    cy.get("#lastName").type(nombreLista);
    cy.get("#userEmail").type(nombreLista);
})


