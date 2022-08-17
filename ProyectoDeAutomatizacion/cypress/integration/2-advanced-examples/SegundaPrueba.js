//Agrega esta linea para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Segundo conjunto de casos de prueba',function() 
{
    //Caso de prueba 1
    it('Ingresar a la pagina principal de Amazon', function(){
        
        cy.visit("https://www.amazon.com/")
        cy.get('.a-cardui-body ').should('have.length',14)

    })




    
    
} )