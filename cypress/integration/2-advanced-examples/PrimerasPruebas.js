//Agrega esta linea para agilizar el uso de los metodos correctamente "."
    /// <reference types="Cypress"/>
     
    //Suite de casos que contiene cada caso
    describe('Primer conjunto de casos de prueba',function()
    {
        before(function () {
            //cargaomos los valores del archivo example.json. en un objeto de datos
            cy.fixture('primerasPruebasCarrito.json').then(function (datos) {
              this.datos = datos;
            //   cy.fixture(this.datos.imagen).as("imagen");
            });
          });
          this.beforeEach(()=>{
            //ingresar a la pagina de compra de articulos tecnologicos
            cy.visit("http://automationpractice.com/index.php")
        })
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
    
    it('Agregar el elemento de tipo "blouse" al carrito de compra desde la pagina principal', function(){
     
        cy.AgregarVestido(this.datos.vestido1)
        cy.AgregarVestido(this.datos.vestido2)
        cy.get('[title="View my shopping cart"] > .ajax_cart_quantity').contains(2)
    })
    /*
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
    //caso 4
    it('Verificar que los checkboxes estan funcionando',function(){
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('#layered_category_9').check().should('be.checked')
        cy.get('#layered_category_10').should('not.be.checked')
        cy.get('#layered_category_11').should('not.be.checked')
    })*/
    /*
//caso 5

    it('Verificar que los dropdowns de arreglos esten funcionando',function(){
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('#selectProductSort').select('In stock').should('have.value','quantity:desc')
      
    })
*/
    


})