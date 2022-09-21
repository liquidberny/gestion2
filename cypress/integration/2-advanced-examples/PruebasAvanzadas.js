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
    cy.AgregarElementoAlCarrito(this.datos.telefono1)
    cy.AgregarElementoAlCarrito(this.datos.telefono2)
    cy.AgregarElementoAlCarrito(this.datos.telefono3)

    })
    
})