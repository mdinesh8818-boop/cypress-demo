describe('New Automation Test', () => {

    it('runs basic flow', () => {
  
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      cy.url().should('include', '/commands/actions')
  
      cy.get('.action-email')
        .type('test@example.com')
        .should('have.value', 'test@example.com')
  
    })
  
  })