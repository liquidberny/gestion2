//<reference types="cypress" />;

//suite de casos de prueba avanzados
describe("Segundo conjunto de casos de pruebas avanzadas", function () {
    before(function(){
        //cargaomos los valores del archivo example.json. en un objeto de datos
        cy.fixture('example.json').then(function(datos){
            this.datos=datos
        })
    })
  beforeEach(() => {
    //ingresamos a la pagina de formulario
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("Llenamos nuestro primer formulario utilizando data", function () {
    cy.get('#firstName').type(this.datos.nombre)
  });


  Cypress.on('uncaught:exception',(err,runnable)=>{
    console.log("err :"+err)
    console.log("runnable :"+runnable)
    return false
  })

});
