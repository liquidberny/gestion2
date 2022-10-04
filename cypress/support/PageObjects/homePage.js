class HomePage
{
    getSearchBoxInput()
    {
        return cy.get('#search_query_top')
    }
    getSearchBoxButton()
    {
        return cy.get('#searchbox > .btn')
    }
    getAddToCardElementButton()
    {
        return cy.get('.product-container:has(.product-name[title="Blouse"]) .ajax_add_to_cart_button') 
    }
    getProceedToCheckoutButton()
    {
        return cy.get('.button-medium[title="Proceed to checkout"]')
    }
    
}
export default HomePage;