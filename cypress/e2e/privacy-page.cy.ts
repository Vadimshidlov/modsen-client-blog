/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('privacy page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en/privacy');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en/privacy');
  });
});
