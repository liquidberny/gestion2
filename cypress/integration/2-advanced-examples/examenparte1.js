describe("Primer examen GCS1 (PARTE 1) ", function () {
  //Bernardo Urquijo Mungarro
  //Aaron Peña Camarena
  before(function () {
    //cargaomos los valores del archivo example.json. en un objeto de datos
    cy.fixture('articulosExamen.json').then(function (datos) {
      this.datos = datos;
    //   cy.fixture(this.datos.imagen).as("imagen");
    });
  });
  this.beforeEach(() => {
    //ingresar a la pagina
    cy.visit("https://www.amazon.com/");
  });

  it("Validaremos la compra de un audifonos", function () {
    cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click({ force: true });

    cy.get(
      ":nth-child(14) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7"
    )
      .click({ force: true })
      .should("be.checked");
    cy.get("[data-testid=grid-deals-container] ").as("contenedorDeProductos");

    ////////////////////////////////////////////////////////////////////////
    cy.get("@contenedorDeProductos").each(($el, index, $list) => {
      cy.get(':nth-child(26) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > :nth-child(5) > .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW')
        .eq(index)
        .then(function ($el1) {
          let producto = $el1.text();
          cy.log(producto);

          if (producto.includes(this.datos.electronico1)) {
            cy.log("Se ha encontrado el elemento buscado");

            cy.get("@contenedorDeProductos").eq(index).find(':nth-child(26) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > .DealCard-module__linkOutlineOffset_2fc037WfeGSjbFp1CAhOUn > .a-row > .a-image-container > img')
              .should("be.visible").click();
              cy.get("#productTitle").should(
                "contain.text",
                "Cleaning Pen Kit Multi-Function Earbuds Cleaning Pen with Soft Brush Portable Phone Cleaner for Earbuds Case Phone Camera Computer"
              );
             
              cy.get('#add-to-cart-button').click();
              cy.go(-2)   
              cy.wait(7000)
          }
        });
    });
////////////////////////////////////////////////////////////////////////////
    cy.get("@contenedorDeProductos").each(($el, index, $list) => {
      cy.get(
        ":nth-child(23) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid=deal-card] > :nth-child(5) > .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW"
      )
        .eq(index)
        .then(function ($el1) {
          let producto = $el1.text();
          cy.log(producto);

          if (producto.includes(this.datos.electronico2)) {
            cy.log("Se ha encontrado el elemento buscado");

            cy.get("@contenedorDeProductos").eq(index).find(
                ':nth-child(23) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > .DealCard-module__linkOutlineOffset_2fc037WfeGSjbFp1CAhOUn > .a-row > .a-image-container > img')
              .should("be.visible").click();
              cy.get("#productTitle").should(
                "contain.text",
                "2022 Wireless Earbud with Wireless Charging Case Digital LED Display 48hrs Playtime Deep Bass Sport Earphones with Over Earhooks Built in Mic Sweatproof in Ear Headset for Gym "
              );
              cy.get("#add-to-cart-button").click();
             // cy.go(-2)
             cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
             cy.get('#sc-subtotal-label-buybox').should("contain.text", "Subtotal (2 items):");
             
          }
        });
        
    });
    

    /*
    cy.get("@contenedorDeProductos").each(($el, index, $list) => {
      cy.get(
        ":nth-child(15) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid=deal-card] > :nth-child(5) > .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW"
      )
        .eq(index)
        .then(function ($el1) {
          let producto = $el1.text();
          cy.log(producto);

          if (producto.includes(this.datos.electronico3)) {
            cy.log("Se ha encontrado el elemento buscado");

            cy.get("@contenedorDeProductos").eq(index).find(
                ':nth-child(15) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > .DealCard-module__linkOutlineOffset_2fc037WfeGSjbFp1CAhOUn > .a-row > .a-image-container > img')
              .should("be.visible", { multiple: true })
              .click({ multiple: true });
              cy.get("#productTitle").should(
                "contain.text",
                "Cleaning Pen Kit Multi-Function Earbuds Cleaning Pen with Soft Brush Portable Phone Cleaner for Earbuds Case Phone Camera Computer"
              );
              cy.get("#add-to-cart-button").click(); 
              cy.go(-2)
          }
        });
    });*/

  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log("err :" + err);
    console.log("runnable :" + runnable);
    return false;
  });
});
