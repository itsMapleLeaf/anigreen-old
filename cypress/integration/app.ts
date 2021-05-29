describe("app", () => {
  it("redirects to schedule when logged out", () => {
    cy.visit("http://localhost:3000")
    cy.location("pathname").should("contain", "/schedule")
  })

  it("redirects to watching when logged in", () => {
    // todo
  })
})
