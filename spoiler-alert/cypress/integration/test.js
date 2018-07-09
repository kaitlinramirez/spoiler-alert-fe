describe("Spoiler Alert! testing", () => {
  it("goes to the home page and enters a user", () => {
    cy.visit('http://localhost:8080');
    cy.get('input').type('Kaitlin')
  })
  it("should be able to take the user to their pantry", () => {
    cy.get('a').click()
    cy.url().should('include', '/pantry')
  })
  it("should show the user their pantry upon click", () => {
    cy.get('button').eq(2).click()
  })
})
