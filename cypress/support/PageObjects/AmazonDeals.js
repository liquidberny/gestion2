class AmazonDeals{
    getHeadphonesCheckbox(){
        return cy.get(':nth-child(20) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7');
    }
    getProductoButton(){
        //cambiar producto cada dia
        return cy.get(':nth-child(12) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > .DealCard-module__linkOutlineOffset_2fc037WfeGSjbFp1CAhOUn > .a-row > .a-image-container > img');
    }
}
export default AmazonDeals;