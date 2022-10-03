//agrega esta lina para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>

// Suite de casos que contiene cada caso
describe("Primer conjunto de casos de prueba",function(){
    // Caso de prueba 1
    
    beforeEach(()=>{
        cy.visit("https://www.miniso.com.mx")
    })

    it("Buscamos y filtramos",function(){
        cy.get('.vtex-store-drawer-0-x-menuIcon').click()

        cy.get('.vtex-menu-2-x-menuItemInnerDiv > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent').click()

        cy.get('.vtex-flex-layout-0-x-flexCol > :nth-child(3)').click()

        cy.wait(1000)
        cy.get(':nth-child(8) > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent').click()
        
        cy.wait(10000)
        cy.get('.vtex-search-result-3-x-filterPopupButton').click()

        cy.get('.vtex-search-result-3-x-accordionFilterContainer--sub-categoria > .vtex-search-result-3-x-accordionFilterItem > .vtex-search-result-3-x-accordionFilterContent').click()
        
        cy.wait(10000)
        //entramos a la pagina
        cy.get('div[class="vtex-checkbox__line-container flex items-start relative pointer"]:has(input[id*="Mujer"]) input').check()
    

        cy.wait(10000)
        cy.get('.vtex-search-result-3-x-filterApplyButtonWrapper > .vtex-button > .vtex-button__label').click()
    })
})