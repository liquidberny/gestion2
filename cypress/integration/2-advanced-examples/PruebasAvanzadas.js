/// <reference types="Cypress" />;

//Suite de casos de prueba avanzadas
describe('Tercer feature de casos avanzados',function(){
    before(function () {
        //cargaomos los valores del archivo example.json. en un objeto de datos
        cy.fixture('carritosDeCompras.json').then(function (datos) {
          this.datos = datos;
        //   cy.fixture(this.datos.imagen).as("imagen");
        });
      });
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
    
    if(producto.includes(this.datos.telefono1)){
        cy.log('Se ha encontrado el elemento buscado')
       
        cy.get('@contenedorDeProductos').eq(index).find("button[aria-label='Add to Cart']").click()
        }
    })
})

cy.get('@contenedorDeProductos')
.each(($el,index, $list) => {
    cy.get(':has(.description) h4 a').eq(index).then(function($el1){
       let producto= $el1.text()
        cy.log(producto)
    
    if(producto.includes(this.datos.telefono2)){
        cy.log('Se ha encontrado el elemento buscado')
       
        cy.get('@contenedorDeProductos').eq(index).find("button[aria-label='Add to Cart']").click()
        }
    })
})

cy.get('@contenedorDeProductos')
.each(($el,index, $list) => {
    cy.get(':has(.description) h4 a').eq(index).then(function($el1){
       let producto= $el1.text()
        cy.log(producto)
    
    if(producto.includes(this.datos.telefono3)){
        cy.log('Se ha encontrado el elemento buscado')
       
        cy.get('@contenedorDeProductos').eq(index).find("button[aria-label='Add to Cart']").click()
        }
    })
})

})
})