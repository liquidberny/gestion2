//agrega esta lina para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>
describe("Pruebas amazon",function(){

    it('Añadir producto al carrito',function(){
        
        //entramos a la pagina de ddtech
        
        cy.visit("https://ddtech.mx/productos/computadoras/escritorio",{failOnStatusCode: false})
        cy.wait(5000)

        cy.get('.products').as('Resultados')
        
        cy.wait(1000)
        cy.log("Esperando")

        cy.get('@Resultados').find('.name > a').each(($el,index,$list) => {
            if($el.attr("title") === 'Computadora PRIDE GAMING OSTRICH / NVIDIA GEFORCE RTX 3050 / Intel Core i5-10400F / 16GB RAM / 500GB SSD M.2 / DISIPADOR POR AIRE RGB / 500W 80+ PLUS'){
                
                // entramos a la pagina del producto
                //cy.get('@ProductosPopulares').eq(index)
                
               cy.log("Se ha encontrado el elemento buscado")

               //Cuando se encuentre en el indece se dara clic en el boton de añadir al carrito
               cy.get('@Resultados').eq(index).contains('Agregar').click()
            }
        })
    })
})