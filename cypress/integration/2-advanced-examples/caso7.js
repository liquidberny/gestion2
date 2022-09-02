describe("Segundo conjunto de casos de pruebas avanzadas", function () {
    before(function(){
        //cargaomos los valores del archivo example.json. en un objeto de datos
        cy.fixture('datoscaso7.json').then(function(datos){
            this.datos=datos
        })
    })
  beforeEach(() => {
    //ingresamos a la pagina de formulario
    cy.visit("https://accounts.google.com/signup");
  });

  
  it("Llenamos nuestro segundo formulario utilizando data", function () {
    cy.get('#firstName').type(this.datos.nombre)
    cy.get('#lastName').type(this.datos.apellido)
    cy.get('#username').type(this.datos.username)
    cy.get('#passwd').type(this.datos.password)
    cy.get('#confirm-passwd').type(this.datos.password)
    cy.get('#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div.SdBahf.Fjk18.OcVpRe.DbQnIe.ia6RDd > div.EcjFDf > div > div.ci67pc > div > div > div.enBDyd > div').click({force:true})
    cy.get('#accountDetailsNext ').click()
    cy.get('#phoneNumberId').type(this.datos.telefono)
    cy.get('.qhFLie > .FliLIb > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
  
  });





  Cypress.on('uncaught:exception',(err,runnable)=>{
    console.log("err :"+err)
    console.log("runnable :"+runnable)
    return false
  })

  
});