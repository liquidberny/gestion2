class HomePage
{
    getSearchBox()
    {
        return cy.get('#search_query_top')
    }
    getSearchBoxButton()
    {
        cy.get('#searchbox > .btn')
    }
    getAddToCardElementButton()
    {
        cy.get('.product-container:has(.product-name[title="'+productDescription+'"]) .ajax_add_to_cart_button') 
    }
    getProceedToCheckoutButton()
    {
        cy.get('.button-medium[title="Proceed to checkout"]')
    }
    
}
export default HomePage;