class AmazonDeals{
    getHeadphonesCheckbox(){
        return cy.get("nth-child(3) > span > ul > li:nth-child(20)");
    }
    getProductoButton(){
        return cy.get('[href="MURPISO-Cancelling-Bluetooth-Headphones"]');
    }
}
export default AmazonDeals;