class HolaZodiac
{
    getZodiacArea(){
        return cy.get('#horoscopes')
      }
  getZodiacSigno(){
    return cy.get('article > ul > :nth-child(11) > a')
  }
  getZodiacFuturo(){
    return cy.get('#resultados')
  }
  getZodiacComp(){
    return cy.get('.compatibilidad > .zodiacSignsCover > :nth-child(7)')
  }
  getZodiacCompResult(){
    return cy.get('#resultados')
  }
}
export default HolaZodiac;