


describe('Cypress Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
  it('Test h1 element contain correct text', () => {
    
    cy.visit('./static/index.html')
    cy.get('h1').should('have.text','Hacker Escape Rooms' )
  })
})
