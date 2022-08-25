describe('caso de prueba6',function(){
it("Unificar todo lo aprendido",function(){
    cy.visit("http://automationpractice.com/index.php")
    cy.get('#search_query_top').type('blouse')
    cy.get('#searchbox > .btn').click()

    cy.get('#center_column > ul > li > div > div.right-block > h5 > a').contains('Blouse')
cy.get('#center_column > ul > li').invoke('attr', 'style','display: hovered')
cy.get('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default').click()
cy.get('.button-container > .button-medium > span').click()
cy.get('.cart_description > .product-name > a').contains('Blouse')
cy.get('#product_price_2_7_0 > .price').contains('$27.00')
cy.get('.cart_navigation > .button > span').click()
cy.get('#email').type('aaronpena104@gmail.com')
cy.get('#email').type('Prueba1')
cy.get('#SubmitLogin > span').click()

    
    })
})