class HomePage{
    
    getSearchBoxInput(){
        return cy.get('#search_query_top')
    }

    getSearchBoxButton(){
        return cy.get('#searchbox > .btn')
    }

    getAddToCardElementButton(productDescription){
        return cy.get('.ajax_add_to_cart_button > span')

    }

    getProceedToCheckoutButton(){
        return cy.get('.button-container > .button-medium > span')
    }
}
export default HomePage;