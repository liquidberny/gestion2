describe('caso de prueba6',function(){
it("Unificar todo lo aprendido",function(){
    //entrar a la pagina
    cy.visit("http://automationpractice.com/index.php")
    //buscar la blusa
    cy.get('#search_query_top').type('blouse')
    cy.get('#searchbox > .btn').click()
    //validar que se encuentra la blusa
    cy.get('#center_column > ul > li > div > div.right-block > h5 > a').should('contain.text','Blouse').should('be.visible')
    cy.get('#center_column > ul > li').invoke('attr', 'style','display: block')
    //añadir al carrito
    cy.get('.ajax_add_to_cart_button > span').click()
   // cy.get('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default').click()
   //continuar a checkout
   cy.wait(5000)
   cy.get('.button-container > .button-medium > span').click()
    //validar que el resumen se encuentre la blusa y el precio correcto
    cy.get('.cart_description > .product-name > a').should('contain.text','Blouse').should('be.visible')
    cy.get('#product_price_2_7_0 > .price').should('contain.text','$27.00').should('be.visible')
    cy.get('.cart_navigation > .button > span').click()
    //iniciar sesion para realizar la compra
    cy.get('#email').type('aaronpena104@gmail.com')
    cy.get('#passwd').type('Prueba1')
    cy.get('#SubmitLogin > span').click()
    //continuamos a pasar los datos de la calle
    cy.get('.cart_navigation > .button > span').click()
    //aceptamos terminos y condiciones
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
    //agreamos metodo de pago
    cy.get('.bankwire > span').click()
    cy.get('#cart_navigation > .button > span').click()
    //confirmados el pedido
    cy.get('.cheque-indent > .dark').should('contain','Your order on My Store is complete.').should('be.visible')

    
    })
})