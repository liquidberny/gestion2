//agrega esta lina para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>

// Suite de casos que contiene cada caso
describe("Primer conjunto de casos de prueba",function(){
    
    //accedemos al archivo
    before(function(){
        //cargamos los valores del archivo example.json en un obeto de datos
        cy.fixture('dataExamen1').then(function (datos){
            //creamos nuestra variable de datoss
            this.datos = datos
        })
    })

    beforeEach(()=>{
        //cambiamos la dimension de la pagina
        cy.viewport(1366,720)
        cy.visit("https://www.miniso.com.mx")
    })

    //examen
    it("Validaremos la compra de un celular",function(){
        
        //Mostramos la parte de categoriasn y verificamos que este visible
        cy.get('div[class*="vtex-menu-2-x-submenuWrapper vtex-menu-2-x-submenuWrapper--subcategory vtex-menu-2-x-submenuWrapper--isClosed vtex-menu-2-x-submenuWrapper--subcategory--isClosed absolute left-0 bg-base pt4 pb4 bw1 bb b--muted-3 z-2 dn w-100"]')
        .invoke('attr','class','vtex-menu-2-x-submenuWrapper vtex-menu-2-x-submenuWrapper--subcategory vtex-menu-2-x-submenuWrapper--isOpen vtex-menu-2-x-submenuWrapper--subcategory--isOpen absolute left-0 bg-base pt4 pb4 bw1 bb b--muted-3 z-2 flex w-100')
        .should('be.visible')
        
        //Entramos a la categoria de baño
        cy.get('a[href*="bano"]').click()
        
        //Desplegamos el apartado de sub categoria
        cy.wait(15000)

        cy.get('div[role="button"]:contains(Sub)').click({force: true})

        cy.wait(5000)
        //marcamos un checkbox
        cy.get('div[class="vtex-checkbox__line-container flex items-start relative pointer"]:has(input[id="category-3-esponja-de-bano"]) input').check({force: true}).should('be.checked')

        cy.wait(5000)
        //obtenemos todos los articulos y declaramos una variable con estos
        cy.get('div[class="vtex-search-result-3-x-galleryItem vtex-search-result-3-x-galleryItem--normal pa4"]').as('articulos')
        cy.get('@articulos').each(($el,index,$list) => {
            
            //recorremos la lista en la parte de a
            cy.get(' .vtex-product-summary-2-x-productBrand').eq(index).then(function ($el1) {
                let producto = $el1.text()
                cy.log(producto)
                
                //verificamos que la etiqueta tenga el nombre dado
                
                if(producto.includes(this.datos.articulo1)){
                    cy.log("se ha encontrado el elemento buscado")
                    cy.get('@articulos').eq(index).find('button:contains(A MI BOLSA)').click({force: true})
                }
            })
            
        })

        cy.wait(5000)
        //obtenemos todos los articulos y declaramos una variable con estos
        cy.get('div[class="vtex-search-result-3-x-galleryItem vtex-search-result-3-x-galleryItem--normal pa4"]').as('articulos')
        cy.get('@articulos').each(($el,index,$list) => {
            
            //recorremos la lista en la parte de a
            cy.get(' .vtex-product-summary-2-x-productBrand').eq(index).then(function ($el1) {
                let producto = $el1.text()
                cy.log(producto)
                
                //verificamos que la etiqueta tenga el nombre dado
                
                if(producto.includes(this.datos.articulo2)){
                    cy.log("se ha encontrado el elemento buscado")
                    cy.get('@articulos').eq(index).find('button:contains(A MI BOLSA)').click({force: true})
                }
            })
            
        })

        cy.wait(5000)
        //obtenemos todos los articulos y declaramos una variable con estos
        cy.get('div[class="vtex-search-result-3-x-galleryItem vtex-search-result-3-x-galleryItem--normal pa4"]').as('articulos')
        cy.get('@articulos').each(($el,index,$list) => {
            
            //recorremos la lista en la parte de a
            cy.get(' .vtex-product-summary-2-x-productBrand').eq(index).then(function ($el1) {
                let producto = $el1.text()
                cy.log(producto)
                
                //verificamos que la etiqueta tenga el nombre dado
                
                if(producto.includes(this.datos.articulo3)){
                    cy.log("se ha encontrado el elemento buscado")
                    cy.get('@articulos').eq(index).find('button:contains(A MI BOLSA)').click({force: true})
                }
            })
            
        })

        cy.wait(5000)
        //nos vamos al carrito de compra
        cy.get('.vtex-minicart-2-x-minicartIconContainer').click()

        //cy.wait(5000)
        //validamos la cantidad de elementos y el precio del carrito
        //cy.get('#product-list-quantity-stepper-4007').should('contain.value','1')
        //cy.get('.vtex-checkout-summary-0-x-price').should('contain.text','$129.90')
        
        
    })
})
Cypress.on('uncaught:exception', (err, runnable) =>{
    console.log("err: " + err)
    console.log("runnable: " + runnable)
    return false
})