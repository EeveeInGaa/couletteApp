describe("Coulette App", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  //generate random color
  it("initially show random header color", () => {
    cy.get("[data-cy='hex-color-name-header']").should("exist");
  });

  it("should generate random color in header", () => {
    cy.get("[data-cy='generate-color-btn']").click();
  });
});
