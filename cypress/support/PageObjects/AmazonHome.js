class AmazonHome{
    getDealsButton(){
        return cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]');
    }
}
export default AmazonHome;