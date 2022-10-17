class AmazonDeals{
    getHeadphonesCheckbox(){
        return cy.get(':nth-child(20) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7');
    }
    getProductoButton(){
        //cambiar producto cada dia
        return cy.get(':nth-child(7) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > :nth-child(5) > .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW')
    }
}
export default AmazonDeals;