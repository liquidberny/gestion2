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
    
}
export default HomePage;