it('sees changing text', () => {

  cy.visit('/')
  cy.get('h1')
    .should('have.text', 'My favourite color is black')
  
});