Feature: segundo conjuto de pruebas cucumber. añadir item a carrito de amazon

    Este feature esta siendo adaptado desde un formato de pom hacia cucumber

    Scenario: Añadir un producto al carrete de amazon
        Given el usuario se encuentra en la pagina de amazon
        Then entra a la seccion de Todays deals
        And selecciona el checkbox de audifonos
        Then selecciona los audifonos
        And agrega los audifonos al carrete
        Then verifica que haya un producto en el carrete
