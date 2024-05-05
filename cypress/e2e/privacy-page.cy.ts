/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('privacy page tests', () => {
  beforeEach(() => {
    cy.visit('/privacy');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en/privacy');
  });
});
