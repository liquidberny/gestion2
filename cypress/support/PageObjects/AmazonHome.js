class AmazonHome{
    getDealsButton(){
        return cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click({ force: true });
    }
}
export default AmazonHome;