describe("quiz component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should start a quiz", () => {
    cy.get("button").contains("Start Quiz");
  });
  it("should start a quiz when the button is clicked", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get("button").contains("1");
  });
  it("should pick and answer", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get("button").contains("1");
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("1").click();
    cy.get("h2").contains("Quiz Completed");
  });
});
