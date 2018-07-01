describe("Spoiler Alert! testing", () => {
  it("goes to a pantry", () => {
    cy.visit('http://localhost:8080/#/');
    cy.get('input').type('userName')
  })
  it("should be able to add a food item", () => {
    cy.get('button').click()
  })
})
