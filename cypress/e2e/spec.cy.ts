describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('List of foods:')
  })
  it('Add food to the list')
  cy.createFood('1','apple','juicy','red','fruit')
    cy.contains('apple')
    it('Delete food to the list')
    cy.visit('/')
    cy.get('[id="food-list"]').contains('This isnt a real food').click()
      cy.should('not.include','apple')
})
