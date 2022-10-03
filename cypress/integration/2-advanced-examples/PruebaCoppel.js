//agrega esta lina para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>

// Suite de casos que contiene cada caso
describe("Primer conjunto de casos de prueba",function(){
    // Caso de prueba 1
    it("Ingresar a la pagina principal de atenea",function(){
        // Paso 1
        // Paso 2
        // Paso ...
        //cy.visit("https://www.google.com/")
        cy.visit("https://www.amazon.com.mx/b?node=21209618011&pf_rd_r=S29SA46XFHYK4HFW773W&pf_rd_p=05b6a8df-cd54-40b8-a8ce-90aed65fc5bb&pd_rd_r=ab4eda3b-bf9f-4d51-a931-2fe1dc1ab79a&pd_rd_w=MTxMv&pd_rd_wg=2Dl2I&ref_=pd_gw_unk")
        //cy.get('.login').click()

        //verificar la cantidad de elementos visibles
        //agregamos should para el manejo de las assertionError, en este caso la prueba es erronea
        //cy.get('#homefeatured .product-container').should('have.length',7)
        // productos ocultos
        cy.get('._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb :nth-child(1)')

        // productos visibles
        cy.get('._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb .s-card-container ')

    })

    // Caso de prueba 2


    // Caso de prueba 3

    
})