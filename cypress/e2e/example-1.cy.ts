it('sees a heading', () => {

  cy.visit('/')
  cy.get('h1')
    .should('be.visible')
  
});