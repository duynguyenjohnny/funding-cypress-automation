const sampleForm = require("../fixtures/exampleForm.json");

const API_URL = Cypress.env("API_BASE_URL");
const authorization = `Bearer ${Cypress.env("FUNDING_ACCESS_TOKEN")}`;

Cypress.Commands.add("createForm", () => {
  cy.request({
    method: "POST",
    url: `${API_URL}api/users`,
    headers: { authorization },
    body: sampleForm,
  });
});

Cypress.Commands.add("putForm", () => {
  cy.request({
    method: "PUT",
    url: `${API_URL}api/users/2`,
    headers: { authorization },
    body: {
      name: "morpheus",
      job: "zion resident",
    },
  });
});

Cypress.Commands.add("patchForm", () => {
  cy.request({
    method: "PATCH",
    url: `${API_URL}api/users/2`,
    headers: { authorization },
    body: {
      name: "morpheus",
      job: "zion resident",
    },
  });
});

Cypress.Commands.add("registerForm", () => {
  cy.request({
    method: "POST",
    url: `${API_URL}api/register`,
    headers: { authorization },
    body: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });
});

Cypress.Commands.add("failRegisterForm", () => {
  cy.request({
    method: "POST",
    url: `${API_URL}api/register`,
    headers: { authorization },
    body: {
      email: "eve.holt@reqres.in",
    },
  });
});

Cypress.Commands.add("loginForm", () => {
  cy.request({
    method: "POST",
    url: `${API_URL}api/login`,
    headers: { authorization },
    body: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });
});

Cypress.Commands.add("failLoginForm", () => {
  cy.request({
    method: "POST",
    url: `${API_URL}api/login`,
    headers: { authorization },
    body: {
      email: "peter@klaven",
    },
  });
});
