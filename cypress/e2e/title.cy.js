describe('Box Crafter App - Main Title', () => {
  it('renders the main title', () => {
    cy.visit('/') // Assumes `baseUrl` is set in Cypress config

    // Check if the title exists and has the correct text
    cy.get('[data-testid="cypress-tittle"]')
      .should('exist')
      .should('have.text', 'Box Crafter')
  })
})
