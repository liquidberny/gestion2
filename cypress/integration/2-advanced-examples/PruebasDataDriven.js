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
    cy.get('#lastName').type(this.datos.apellido)
    cy.get('#userEmail').type(this.datos.email)
    cy.get('input[name="gender"][value='+this.datos.sexo+']').check({force:true}).should('be.checked')
    cy.get('#userNumber').type(this.datos.telefono)
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.fechaDeNacimiento[0])
    cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.fechaDeNacimiento[1])
    cy.get('.react-datepicker__day--0'+this.datos.fechaDeNacimiento[2]).should('be.visible').select(this.datos.fechaDeNacimiento[2])
    cy.get('.react-datepicker__day--0'+this.datos.fechaDeNacimiento[2]).should('be.visible').select(this.datos.fechaDeNacimiento[2])

    cy.get('#hobbies-checkbox-1').click().select(this.datos.Hobbies[0])
    //cy.get('#hobbies-checkbox-'+this.datos.Hobbies[2]).click().select(this.datos.Hobbies[2])
  });


  Cypress.on('uncaught:exception',(err,runnable)=>{
    console.log("err :"+err)
    console.log("runnable :"+runnable)
    return false
  })

});