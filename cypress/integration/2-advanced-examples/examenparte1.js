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
      ":nth-child(13) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7"
    )
      .click({ force: true })
      .should("be.checked");

    cy.get("[data-testid=grid-deals-container] ").as("contenedorDeProductos");

    cy.get("@contenedorDeProductos").each(($el, index, $list) => {
      cy.get(
        ":nth-child(7) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid=deal-card] > :nth-child(5) > .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW"
      )
        .eq(index)
        .then(function ($el1) {
          let producto = $el1.text();
          cy.log(producto);

          if (producto.includes(this.datos.electronico1)) {
            cy.log("Se ha encontrado el elemento buscado");

            cy.get("@contenedorDeProductos").eq(index).find(
                ':nth-child(7) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid=deal-card] > .DealCard-module__linkOutlineOffset_2fc037WfeGSjbFp1CAhOUn > .a-row > .a-image-container > img')
              .should("be.visible", { multiple: true })
              .click({ multiple: true });
              cy.get("#productTitle").should(
                "contain.text",
                "Outdoor Indoor Digital TV Antenna 200+ Miles Long Range with Built-in Amplifier, 33FT Long Coax Cable HDTV Antenna for All Television, for Local Channels 4K HD 1080P VHF UHF"
              );
             
              cy.get('#add-to-cart-button').click();
              cy.go(-2)   
          }
        });
    });

    cy.get("@contenedorDeProductos").each(($el, index, $list) => {
      cy.get(
        ":nth-child(9) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid=deal-card] > :nth-child(5) > .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW"
      )
        .eq(index)
        .then(function ($el1) {
          let producto = $el1.text();
          cy.log(producto);

          if (producto.includes(this.datos.electronico2)) {
            cy.log("Se ha encontrado el elemento buscado");

            cy.get("@contenedorDeProductos").eq(index).find(
                ':nth-child(9) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > .DealCard-module__linkOutlineOffset_2fc037WfeGSjbFp1CAhOUn > .a-row > .a-image-container > img')
              .should("be.visible", { multiple: true })
              .click({ multiple: true });
              cy.get("#productTitle").should(
                "contain.text",
                "PurelySound E7 Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 20H Playtime, Rich Deep Bass, Comfortable Memory Foam Ear Cups for Travel, Home Office - Black"
              );
              cy.get("#add-to-cart-button").click();
              cy.go(-2)
          }
        });
    });


    
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
    });

//cy.get("#sw-ptc-form > input[type=hidden] ").should("value", "3");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log("err :" + err);
    console.log("runnable :" + runnable);
    return false;
  });
});
