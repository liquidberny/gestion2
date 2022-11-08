import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import HolaHome from '../../../../support/PageObjects/HolaHome'

const holahome = new HolaHome()


Given('entrar a la pagina home de la revista Hola',  () => {
    cy.visit('http://mx.hola.com/')
})

Then('validar que esten 5 noticias en  parte principal', () =>{
    holahome.getAdAcceptButton().click();
    holahome.getNotaUnoTitle().should('be.visible');
    holahome.getNotaDosTitle().should('be.visible');
    holahome.getNotaTresTitle().should('be.visible');
    holahome.getNotaCuatroTitle().should('be.visible');
    holahome.getNotaCincoTitle().should('be.visible');
})