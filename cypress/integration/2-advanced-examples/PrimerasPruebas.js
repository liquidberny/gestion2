//Agrega esta linea para agilizar el uso de los metodos correctamente "."
    /// <reference types="Cypress"/>
     
    //Suite de casos que contiene cada caso
    describe('Primer conjunto de casos de prueba',function()
    {
   /* //Caso de prueba 1
    it('Contabilizar la cantidad de elementos en la seccion de pagina principal', function(){
     
        // ingresamos a la pagina
        
     
        //Verificar la cantidad de elementos visibles
        cy.get('#homefeatured .product-container').should('have.length',7)
     
        //Obtenemos el elemento homefeatured .product-container como un parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
     
        //Verificamos nuevamente la cantidad de elementos utilizando el parametro
        cy.get('@ProductosPopulares').should('have.length',7)
    })*/
     
    //Caso de prueba 2
    /*
    it('Agregar el elemento de tipo "blouse" al carrito de compra desde la pagina principal', function(){
     
         // ingresamos a la pagina
         cy.visit("http://automationpractice.com/index.php")
     
        //Obtenemos el elemento homefeatured .product-container como un parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
     
        //Iteramos para encontrar un producto con nombre X
        cy.get('@ProductosPopulares')
        .find('.product-name')
        .each(($el,index, $list) => {
            cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
            
            if($el.attr('title') === 'Printed Dress' && precio.includes('26.00')){
                cy.log('Se ha encontrado el elemento buscado')
                cy.log('Se ha encontrado el precio buscado')
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
            }
        })
        
        })
        cy.get('h2 > .ajax_cart_product_txt').should('contain.text','There is 1 item in your cart.').should('be.visible')
    })
    //Caso de prueba 3/
    
     it('Verificamos que el drop down de women, tenga los elementos necesarios', function(){
        cy.visit("http://automationpractice.com/index.php")
        //flotamos sobre un elementos
        cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr', 'style','display: block')
        cy.get('a[title="Tops"]').should('be.visible')
        cy.get('a[title="T-shirts"]').should('be.visible')
        cy.get('a[title="Blouses"]').should('be.visible') 
        cy.get('a[title="Dresses"]').should('be.visible')
        cy.get('a[title^="Casual"]').should('be.visible')
        cy.get('a[title^="Evening"]').should('be.visible')
        cy.get('a[title^="Summer"]').should('be.visible')   
    })
    */
    it('Verificar que los checkboxes estan funcionando',function(){
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('#layered_category_9').check().should('be.checked')
        cy.get('#layered_category_10').should('not.be.checked')
        cy.get('#layered_category_11').should('not.be.checked')
    })


})