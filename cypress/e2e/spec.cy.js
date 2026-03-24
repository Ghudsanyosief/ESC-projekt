describe('template spec', () => {
  it('passes', () => {
    cy.visit('./static/index.html')
    cy.get('h1').should('have.text','Hacker Escape Rooms' )
  })
})