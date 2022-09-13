describe('Primer examen GCS1 (PARTE 1) ',function(){
  
  
    this.beforeEach(()=>{
        //ingresar a la pagina 
        cy.visit("https://www.amazon.com/")
    })
	
    it("Validaremos la compra de un celular",function(){
        cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click({force:true})
        
        cy.get(':nth-child(13) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').click({force:true}).should('be.checked')
       
       cy.get("[data-testid=grid-deals-container] ").as('contenedorDeProductos')
cy.get('@contenedorDeProductos')
.each(($el,index, $list) => {
    cy.get('#grid-main-container > div.a-row.Grid-module__gridSection_1SEJTeTsU88s6aVeuuekAp > div > div:nth-child(2) > div > div > a:nth-child(5) > div').eq(index).then(function($el1){
       let producto= $el1.text()
        cy.log(producto)
    
    if(producto.includes('E7 Active')){
        cy.log('Se ha encontrado el elemento buscado')
       //cy.wait(5000)
       cy.get('@contenedorDeProductos').eq(index).find(':nth-child(2) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > .DealCard-module__linkOutlineOffset_2fc037WfeGSjbFp1CAhOUn > .a-row > .a-image-container > img').should('be.visible',{multiple:true}).click({multiple:true})
       

      
        
    }
})
})
        cy.get('#productTitle').should('contain.text','        PurelySound E7 Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 20H Playtime, Rich Deep Bass, Comfortable Memory Foam Ear Cups for Travel, Home Office - Black       ')
        cy.get('.selection').should('contain.text','Black')
        cy.get('#add-to-cart-button-ubb').click()
        cy.get('#sw-ptc-form > input[type=hidden] ').should('value','1')
    
    })
	
    Cypress.on("uncaught:exception", (err, runnable) => {
        console.log("err :" + err);
        console.log("runnable :" + runnable);
        return false;
      });
    })
