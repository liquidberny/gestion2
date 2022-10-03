//agrega esta lina para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>
// Suite de casos que contiene cada caso

//
describe("Primer conjunto de casos de prueba",function(){
    

    
    it('Agregar un elemento de la tienda al carrito',function(){
        cy.visit("https://www.amazon.com.mx/")
        
        cy.get('[href="/stores/node/12273534011/?field-lbr_brands_browse-bin=Amazon+Basics&ref_=nav_cs_amazonbasics"]').click()
        
        cy.wait(1000)

        //obtenemos los productos y los botones
        cy.get('.ProductGrid__grid__3Rvh5').as('Productos')
        cy.get('div.ProductGridItem__item__2jj5r.ProductGridItem__item-with-best-seller__2WzoC > div.ProductGridItem__itemInfo__s_dZ2 > div.ProductGridItem__addToCart__1vm-9 > div > button').as('Botones')

        //ciclamos los productos
        cy.get('@Productos').find('.style__overlay__2qYgu').each(($el,index, list)=>{
             
                //Comprobamos el titulo y el precio del producto
                if($el.attr('href') === '/Amazon-Basics-protectores-entrenamiento-cachorros/dp/B00MW8G3YU?ref_=ast_sto_dp&th=1&psc=1'){
                    cy.log("Se ha encontrado el elemento buscado")
                    cy.log("Se ha encontrado el precio buscado")
                    //Cuando se encuentre en el indece se dara clic en el boton de añadir al carrito
                    cy.get('@Botones').eq(index).click()
                }
            
        })

        cy.wait(2000)
        cy.get('#nav-cart').click()

        cy.get('#sc-subtotal-label-buybox').should('contain.text','Subtotal (1 producto):')    
    })
  
    
    // caso de prueba 3
    it('Verificamos que el drop down de ropa, tenga los elementos necesarios',function(){
        cy.visit("https://www.gandhi.com.mx/")

        //cy.wait(10000)

        cy.get('section.ammenu-menu-wrapper.-desktop > nav > ul > li.ammenu-item.category-item.-main.-full.nav-3.audiolibros > div').invoke('attr','class','ammenu-submenu-container ammenu-submenu -full showMenuCategory')
        
        cy.wait(1000)

        cy.get('a[title="Novedades"]').should('be.visible')
        cy.get('a[title="Los más vendidos"]').should('be.visible')
        cy.get('a[title="Narrado por los autores"]').should('be.visible')
        cy.get('a[title="Ficción y literatura"]').should('be.visible')
        cy.get('a[title="Jóvenes"]').should('be.visible')
        cy.get('a[title="Literatura infantil"]').should('be.visible')
        cy.get('a[title="Biografías y memorias"]').should('be.visible')
        cy.get('a[title="Misterio y suspenso"]').should('be.visible')
        cy.get('a[title="Romance"]').should('be.visible')
        cy.get('a[title="Negocios y finanzas"]').should('be.visible')
        cy.get('a[title="No ficción"]').should('be.visible')
        cy.get('a[title="Superación personal"]').should('be.visible')
        cy.get('a[title="Cuerpo, mente y espíritu"]').should('be.visible')
        cy.get('a[title="Autoaprendizaje de idiomas"]').should('be.visible')
        cy.get('a[title="Poesía"]').should('be.visible')
        cy.get('a[title="Religión"]').should('be.visible')
        cy.get('a[title="Salud y buena forma"]').should('be.visible')
        cy.get('a[title="Teatro"]').should('be.visible')
        cy.get('a[title="Historia"]').should('be.visible')
        cy.get('a[title="Arte"]').should('be.visible')
        cy.get('a[title="Romance"]').should('be.visible')
        cy.get('a[title="Ciencias políticas"]').should('be.visible')
        cy.get('a[title="Psicología"]').should('be.visible')
        cy.get('a[title="Filosofía"]').should('be.visible')
        cy.get('a[title="Gastronomía"]').should('be.visible')
        cy.get('a[title="Deportes y recreación"]').should('be.visible')
        

    })
})