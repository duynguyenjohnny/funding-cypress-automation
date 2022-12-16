const sampleForm = require("../fixtures/exampleForm.json");

const BASE_URL = Cypress.env("BASE_URL");

describe("Funding UI Testing", () => {
  it("open website", () => {
    cy.visit(BASE_URL);
  });

  it.only("click on statistics in the top navigation bar", () => {
    cy.get("#nav-menu__item").eq(3).click();
  });

  it("verify total funded displayed or not.", () => {
    cy.get("#detailNumber text-center").eq(0).should("be.visible");
  });

  it("verify no of financing displayed or not.", () => {
    cy.get("#detailNumber text-center").eq(1).should("be.visible");
  });

  it("verify default rate displayed or not.", () => {
    cy.get("#detailNumber text-center").eq(2).should("be.visible");
  });

  it("verify financing fulfillment rate displayed or not.", () => {
    cy.get("#detailNumber text-center").eq(3).should("be.visible");
  });

  it("verify General tab displayed or not", () => {
    cy.contains("General").should("be.visible");
  });

  it("verify Repayment tab displayed or not", () => {
    cy.contains("Repayment").should("be.visible");
  });

  it("verify Disbursement tab displayed or not", () => {
    cy.contains("Disbursement").should("be.visible");
  });

  it("go to General tab and get the total approved loans, total amount disbursed and default rate", () => {
    cy.contains("General").should("be.visible").click();
    cy.get('input[id="toggle-approved"]')
      .should("be.visible")
      .then(($approved) => {
        cy.wrap($approved).invoke("show");
        cy.log($approved.text());
      });
    cy.get('input[id="toggle-disbursed"]')
      .should("be.visible")
      .then(($disbursed) => {
        cy.wrap($disbursed).invoke("show");
        cy.log($disbursed.text());
      });
    cy.get('input[id="toggle-default"]')
      .should("be.visible")
      .then(($default) => {
        cy.wrap($default).invoke("show");
        cy.log($default.text());
      });
  });

  it("go to Repayment tab and get total repayment amount, principal amount and interest amount", () => {
    cy.contains("Repayment").should("be.visible").click();
    cy.get(
      "#highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
    )
      .eq(0)
      .should("be.visible")
      .then(($total) => {
        cy.wrap($total).invoke("show");
        cy.log($total.text());
      });
    cy.get(
      "#highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
    )
      .eq(1)
      .should("be.visible")
      .then(($principle) => {
        cy.wrap($principle).invoke("show");
        cy.log($principle.text());
      });
    cy.get(
      "#highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
    )
      .eq(2)
      .should("be.visible")
      .then(($interest) => {
        cy.wrap($interest).invoke("show");
        cy.log($interest.text());
      });
  });

  it("go to Disbursement tab and store all industry names according percentage (increasing order)", () => {
    cy.contains("Disbursement").should("be.visible").click();
  });
});
