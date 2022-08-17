//Agrega esta linea para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba',function() 
{
   this.beforeEach(()=>{
       //ingresamos a la pagina
       cy.visit("http://automationpractice.com/index.php")
   })

    //Caso de prueba 1
    it('Agregar el elemento de tipo "blouse" al carrito de compra desde la pagina principal',function(){
        //VErificar la cantidad de elementos visibles
        //cy.get('#homefeatured .product-container').should('have.length',7)
        //Obtenemosel el elemento homefeatured homefeatured .product-container como parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
        //Iteramos para encontrar un producto con nombre x
        cy.get('@ProductosPopulares')
        .find('.product-name')
        .each(($el,index, $list)=>{
            cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
            
            if($el.attr('title') === 'Printed Dress' && precio.includes('26.00') ){
                cy.log('Se ha encontrado el elemento buscado')
                cy.log('Se ha encontrado el precio buscado')
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
        }
        })
        
        cy.get('h2> .ajax_cart_product_txt').should('contains.text','There is 1 item in your cart.')

        })
    
    })




    //Caso de prueba 2
    
    
} )