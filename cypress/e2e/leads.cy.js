describe('Check if Leads page renders correct data', () => {
  beforeEach(() => {
    cy.login('text20@gmail.com', '@DNCReact1#')
    cy.visit('http://localhost:5173/leads')
  })

  it('should display leads form', () => {
    cy.get('form').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should display leads list area', () => {
    cy.get('#leads-title').should('be.visible')
  })
})