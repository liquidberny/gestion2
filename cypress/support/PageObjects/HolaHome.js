class HolaHome
{
    getAdAcceptButton(){
        return cy.get('#didomi-notice-agree-button')
    }

    getNotaUnoTitle(){
        return cy.get('.slider > :nth-child(1) > a')
    }
    getNotaDosTitle(){
        return cy.get('.slider > :nth-child(2) > a')
    }
    getNotaTresTitle(){
        return cy.get('.slider > :nth-child(3) > a')
    }
    getNotaCuatroTitle(){
        return cy.get('.slider > :nth-child(4) > a')
    }
    getNotaCincoTitle(){
        return cy.get('.slider > :nth-child(5) > a')
    }
}
export default HolaHome;