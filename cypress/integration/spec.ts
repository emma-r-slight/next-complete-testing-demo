describe("application", () => {
  it("works", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /Hello, World!/ }).should("exist");
  });
});
