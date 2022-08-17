//Agrega esta linea para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Tercer ejercico de pruebas',function() 
{
    //Caso de prueba 1
    it('Ingresar a la pagina principal de amazon', function(){
       

        //ingresamos a la pagina
       // cy.visit("https://www.amazon.com/")

        //verificar la cantidad de elemntos visibles
        //agregamos should para el manejo de assertionError, en este caso la prueba es erronea
        //cy.get('.a-cardui-body ').should('have.length',21)
    })

    //Caso de prueba 2
    it('Agregar algo al carrito de compra',function(){
        //ingresamos a la pagina
        cy.visit("https://www.amazon.com/")
      
      cy.get('#desktop-grid-2').as('Categorias')
      cy.get('@Categorias')
      .find('.grid-row-1 > .quadrant-container-0').click()


      cy.get('._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb > :nth-child(2)').as('Producto')
        //Iteramos para encontrar un producto con nombre x
         cy.get('@Producto')
        .find('.s-card-container')
        .each(($el,index, $list)=>{
            if($el.attr('title') === 'Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls'){
                cy.log('Se ha encontrado el elemento buscado')
               
        } 
        cy.get('@Producto').click()
        cy.get('#wishListMainButton > .a-button-inner > .a-button-text').as('Carrito')
        cy.get('@Carrito').click()
        cy.get('.a-padding-extra-large > .a-spacing-small').should('contains.text','Sign-In')
        
    }
        
        )
        

    })

    
    
} )