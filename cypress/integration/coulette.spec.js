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

  //save color to list
  it("should save generated color to list", () => {
    cy.get("[data-cy='save-color-btn']").click();

    cy.get("[data-cy='color-list']").should("exist");
    cy.get("[data-cy='color-list']").should("have.length", 1);
    cy.get("[data-cy='delete-button']").should("exist");
    cy.get("[data-cy='save-color-btn']").should("be.disabled");
  });
});
