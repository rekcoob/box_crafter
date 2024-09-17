describe('template spec', () => {
  it('renders the default elements on the screen', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="cypress-tittle"]')
      .should('exist')
      .should('have.text', 'Box Crafter')
  })

  it('renders the buttons  on the screen ', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="btn 3"]').should('exist')
    cy.get('[data-testid="btn 4"]').should('exist')
    cy.get('[data-testid="btn 5"]').should('exist')
  })
})
