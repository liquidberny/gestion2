/// <reference types="Cypress" />;

//Suite de casos de prueba avanzadas
describe('Tercer feature de casos avanzados',function(){
    this.beforeEach(()=>{
        //ingresar a la pagina de compra de articulos tecnologicos
        cy.visit("https://demo.opencart.com/index.php")
    })
    //caso 7
    it('realizar compras de celulares basadas en su titulo',function(){
cy.get("#menu ul a:contains('Phones & PDAs')").click()
//cy.get('div[class='product-thumb']:has(.description):contains(HTC Touch HD) button[aria-label="Add to Cart"]')
cy.get("div[class='product-thumb']").as('contenedorDeProductos')
cy.get('@contenedorDeProductos')
.each(($el,index, $list) => {
    cy.get(':has(.description) h4 a').eq(index).then(function($el1){
       let producto= $el1.text()
        cy.log(producto)
    
    if(producto.includes('HTC Touch HD')){
        cy.log('Se ha encontrado el elemento buscado')
       
        cy.get('@contenedorDeProductos').eq(index).find("button[aria-label='Add to Cart']").click()
    }
})

})

})
})