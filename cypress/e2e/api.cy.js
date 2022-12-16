const sampleForm = require("../fixtures/exampleForm.json");

const API_URL = Cypress.env("API_BASE_URL");
const authorization = `Bearer ${Cypress.env("FUNDING_ACCESS_TOKEN")}`;

describe("Funding API", () => {
  it("retrieves my list users information", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/users?page=2`,
      headers: { authorization },
    }).should(({ status, body }) => {
      const { alias } = body;
      expect(status).to.eq(200);
      expect(alias).to.eq(Cypress.env("userAlias"));
    });
  });

  it("retrieves single user", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/users/2`,
      headers: { authorization },
    }).should(({ status }) => {
      expect(status).to.eq(200);
    });
  });

  it("retrieves single user not found", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/users/23`,
      headers: { authorization },
    }).should(({ status }) => {
      expect(status).to.eq(404);
    });
  });

  it("retrieves List Resource", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/unknown`,
      headers: { authorization },
    }).should(({ status }) => {
      expect(status).to.eq(200);
    });
  });

  it("retrieves Single Resource", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/unknown/2`,
      headers: { authorization },
    }).should(({ status }) => {
      expect(status).to.eq(200);
    });
  });

  it("retrieves SINGLE <RESOURCE> NOT FOUND", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/unknown/23`,
      headers: { authorization },
    }).should(({ status }) => {
      expect(status).to.eq(404);
    });
  });

  it("creates a user", () => {
    cy.createForm().should(({ status, body }) => {
      expect(status).to.eq(201);
    });
  });

  it("updates by puts a user", () => {
    cy.putForm().should(({ status, body }) => {
      expect(status).to.eq(200);
    });
  });

  it("updates by patches a user", () => {
    cy.patchForm().should(({ status, body }) => {
      expect(status).to.eq(200);
    });
  });

  it("deletes a user", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/users/2`,
      headers: { authorization },
    }).should(({ status }) => {
      expect(status).to.eq(200);
    });
  });

  it("register successful", () => {
    cy.registerForm().should(({ status, body }) => {
      expect(status).to.eq(200);
    });
  });

  it("register unsuccessful", () => {
    cy.failRegisterForm().should(({ status, body }) => {
      expect(status).to.eq(400);
    });
  });

  it("login successful", () => {
    cy.loginForm().should(({ status, body }) => {
      expect(status).to.eq(200);
    });
  });

  it("login unsuccessful", () => {
    cy.failLoginForm().should(({ status, body }) => {
      expect(status).to.eq(400);
    });
  });

  it("delayed response", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}api/users?delay=3`,
      headers: { authorization },
    }).should(({ status }) => {
      expect(status).to.eq(200);
    });
  });
});
