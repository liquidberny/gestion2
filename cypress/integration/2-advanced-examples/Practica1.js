//agrega esta lina para agilizar el uso de los metodos correctamente "."
///<reference types="Cypress"/>

// Suite de casos que contiene cada caso
describe("Segundo conjunto de casos de pruebas avanzadas",function(){
    
    //accedemos al archivo
    before(function(){
        //cargamos los valores del archivo example.json en un obeto de datos
        cy.fixture('practica1').then(function (datos){
            //creamos nuestra variable de datoss
            this.datos = datos
        })
    })


    //Entramos a la pagina
    beforeEach(()=>{
        cy.visit("https://my.forms.app/form/63116cfcafe7f34ef880f713")
    })

    it('Llenamos nuestro primer formulario utilizando data', function(){
        //datos iniciales
        cy.get('#i-text-1').type(this.datos.nombre)
        cy.get('#i-text-2').type(this.datos.apellido)
        cy.get('#i-text-3').type(this.datos.email)


        //Seleccion del sexo
        cy.get('label[class="i-radio radio form-input-choice"] input').as('RadioButtons')
        cy.get('label[class="i-radio radio form-input-choice"]').as('notas')
        cy.get('@notas').each(($el,index,$list) => {
            cy.log($el.text())
            //Comprobamos el titulo y el precio del producto
            if($el.text().includes(this.datos.sexo)){
                cy.log("Se ha encontrado el elemento buscado")
                cy.log("Se ha encontrado el precio buscado")
                //Cuando se encuentre en el indece se dara clic en el boton de añadir al carrito
                cy.get('@RadioButtons').eq(index).click({force: true})
            }
        })

        cy.get('#i-text-4').type(this.datos.telefono)

        //Fecha
        cy.get('[data-v-56ae83be=""][data-v-5f7d9b5e=""] > .f-input').click()
        //año
        cy.get('.vc-title').click()
        cy.get('.vc-nav-title').click()
        cy.get('.vc-grid-cell-col-1 > .vc-nav-arrow > .vc-svg-icon').click()
        cy.get('.vc-grid-cell-col-1 > .vc-nav-arrow > .vc-svg-icon').click()
        cy.get('span[aria-label="' + this.datos.fechaDeNacimiento[1] + '"]').click()
        //Mes
        cy.get('span[aria-label="' + this.datos.fechaDeNacimiento[0] + ' ' + this.datos.fechaDeNacimiento[1] + '"]').click()
        //dia
        cy.wait(2000)
        cy.get('span[aria-label*="' + this.datos.fechaDeNacimiento[2] + '"][aria-label*="' + this.datos.fechaDeNacimiento[1] + '"]').click()

        //comparamos la fecha
        cy.wait(2000)
        cy.get('span > .f-input').should('contain.value', this.datos.fechaDeNacimiento[2]).should('contain.value', this.datos.fechaDeNacimiento[1])
    })
})
Cypress.on('uncaught:exception', (err, runnable) =>{
    console.log("err: " + err)
    console.log("runnable: " + runnable)
    return false
})