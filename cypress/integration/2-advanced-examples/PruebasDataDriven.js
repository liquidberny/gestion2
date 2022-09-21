//<reference types="cypress" />;

//suite de casos de prueba avanzados
describe("Segundo conjunto de casos de pruebas avanzadas", function () {
  before(function () {
    //cargaomos los valores del archivo example.json. en un objeto de datos
    cy.fixture("example.json").then(function (datos) {
      this.datos = datos;
      cy.fixture(this.datos.imagen).as("imagen");
    });
  });
  beforeEach(() => {
    //ingresamos a la pagina de formulario
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("Llenamos nuestro primer formulario utilizando data", function () {
    cy.Lista(this.datos);

    /*
    cy.get('input[name="gender"][value=' + this.datos.sexo + "]")
      .check({ force: true })
      .should("be.checked");
    cy.get("#userNumber").type(this.datos.telefono);
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select")
      .should("be.visible")
      .select(this.datos.fechaDeNacimiento[0]);
    cy.get(".react-datepicker__year-select")
      .should("be.visible")
      .select(this.datos.fechaDeNacimiento[1]);
    cy.get(
      ".react-datepicker__day--0" + this.datos.fechaDeNacimiento[2]
    ).click();
    cy.get("#dateOfBirthInput")
      .should("contain.value", this.datos.fechaDeNacimiento[0].substring(0, 3))
      .should("contain.value", this.datos.fechaDeNacimiento[1])
      .should("contain.value", this.datos.fechaDeNacimiento[2]);
    cy.get(".subjects-auto-complete__value-container").type(this.datos.materia);
    cy.get('div[id^="react-select-"]').click();

    cy.get(".subjects-auto-complete__value-container").should(
      "contains.text",
      this.datos.materia
    );
    if (
      cy
        .get(
          "#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label"
        )
        .contains(this.datos.Hobbies[0])
    ) {
      cy.get("#hobbies-checkbox-1").check({ force: true }).should("be.checked");
    }
    if (
      cy
        .get(
          "#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label"
        )
        .contains(this.datos.Hobbies[1])
    ) {
      cy.get("#hobbies-checkbox-3").check({ force: true }).should("be.checked");
    }

    cy.get("#uploadPicture").then(function ($el) {
      //convertir la imagen en un string de base64
      const blob = Cypress.Blob.base64StringToBlob(this.imagen, "image/png");

      const file = new File([blob], this.datos.imagen, { type: "image/png" });
      const list = new DataTransfer();

      list.items.add(file);
      const myFileList = list.files;

      $el[0].files = myFileList;
      $el[0].dispatchEvent(new Event("change", { bubbles: true }));
    });

    cy.get("#currentAddress").type(this.datos.direccion);

    cy.get("#state > div > div.css-1hwfws3 ")
      .click({ force: true })
      .type(this.datos.estado)
      .should("contain.text", this.datos.estado);
    cy.get("#react-select-3-option-0")
      .should("contain.text", this.datos.estado)
      .click({ force: true });

    cy.get("#city > div > div.css-1hwfws3 ")
      .click({ force: true })
      .type(this.datos.ciudad)
      .should("contain.text", this.datos.ciudad);
    cy.get("#react-select-4-option-0")
      .should("contain.text", this.datos.ciudad)
      .click({ force: true });
    
    cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
    cy.get('td:contains(Student Name)+td').should('have.text',this.datos.nombre+" "+this.datos.apellido)
    cy.get('td:contains(Student Email)+td').should('have.text',this.datos.email)
    cy.get('td:contains(Gender)+td').should('have.text',this.datos.sexo)
    cy.get('td:contains(Mobile)+td').should('have.text',this.datos.telefono)
    cy.get('td:contains(Date of Birth)+td').should('have.text',this.datos.fechaDeNacimiento[2]+" "+this.datos.fechaDeNacimiento[0]+","+this.datos.fechaDeNacimiento[1])
    cy.get('td:contains(Subjects)+td').should('have.text',this.datos.materia)
    cy.get('td:contains(Hobbies)+td').should('have.text',this.datos.Hobbies[0]+", "+this.datos.Hobbies[1])
    cy.get('td:contains(Picture)+td').should('have.text',this.datos.imagen)
    cy.get('td:contains(Address)+td').should('have.text',this.datos.direccion)
    cy.get('td:contains(State and City)+td').should('have.text',this.datos.estado+" "+this.datos.ciudad)
    //
*/
cy.get("#submit").click({ force: true });
    /* 
    this.datos.Hobbies[0] = 1
    cy.get('#hobbies-checkbox-'+this.datos.Hobbies[0]).check({force:true}).should('be.checked')
    this.datos.Hobbies[1] = 3
    cy.get('#hobbies-checkbox-'+this.datos.Hobbies[1]).check({force:true}).should('be.checked')
*/
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log("err :" + err);
    console.log("runnable :" + runnable);
    return false;
  });
});
