import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import HolaHome from '../../../../support/PageObjects/HolaHome'
import HolaZodiac from "../../../../support/PageObjects/HolaZodiac"


const holahome = new HolaHome()
const holaZodiac = new HolaZodiac()

Given('ubicar el signo de acuario, click',  () => {
    cy.visit('http://mx.hola.com/')
    holahome.getAdAcceptButton().click();
    cy.wait(5000);
    
    holaZodiac.getZodiacArea().scrollIntoView().should('be.visible');
    holaZodiac.getZodiacSigno().contains('Acuario').click({ force: true });
})

Then('verificar mi futuro que describe el signo zodiacal', () =>{
    holaZodiac.getZodiacFuturo().contains('Predicción para hoy 09 de Noviembre de 2022').should('be.visible');
  
})

And('ver mi compatibilidad con el signo zodiacal libra',()=>{
    holaZodiac.getZodiacComp().contains("Acuario con Libra").click({ force: true }).should('be.visible');
    holaZodiac.getZodiacCompResult().contains("Compatibilidad de Acuario con Libra").should('be.visible');

})