describe("Segunda evidencia ", function () {
  //nuevo push

  it("Encontrar y agregar una algo al carrito de compra", function () {
      //ingresamos a la pagina
      cy.visit("https://www.amazon.com/");
//Conseguimos el contenedor de articulos
      cy.get("#desktop-grid-2").as("Categorias");
      cy.get("@Categorias").find(".grid-row-1 > .quadrant-container-0").click();
  
      cy.get(
        "._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb > :nth-child(2)"
      ).as("Producto");
      cy.get("@Producto")
        .find(".s-card-container")
  
        .each(($el, index, $list) => {
          if (
            //buscamos el articulo por su nombre
            $el.attr("title") ===
            "HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A), white"
          ) {
            cy.log("Se ha encontrado el elemento buscado");
          }
          cy.get("@Producto").click();
          cy.get("#wishListMainButton > .a-button-inner > .a-button-text").as(
            "Carrito"
            
          );
          cy.log('Se agrego un item al carrito o wishlist');
          //lo agregamos al carrito de compras
          cy.get("@Carrito").click();
          cy.get('.a-padding-extra-large > .a-spacing-small').should('contains.text','Sign in')
          

        });
    });

  it("Verificar el dropdown y comprobar que los elementos existan.", function () {
    cy.visit("https://www.amazon.com/");
    cy.get('#nav-flyout-accountList').invoke('attr', 'style','display: block')

    cy.get('#nav-al-wishlist > a:nth-child(2) > span').should('be.visible')
cy.get('#nav-al-wishlist > a:nth-child(3) > span').should('be.visible')
cy.get('#nav-al-wishlist > a:nth-child(4) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(2) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(3) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(4) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(5) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(6) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(7) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(8) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(9) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(10) > span').should('be.visible')
cy.get('#nav-al-your-account > a:nth-child(11) > span').should('be.visible')

  });

});
