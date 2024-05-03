/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('about page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en');

    cy.get('[data-testid="about us-header-link"]').eq(1).click();

    cy.url().should('include', '/en/about');
  });

  it('should correct handle author page', () => {
    cy.get('[data-testid="about us-header-link"]').eq(1).click();
    cy.get('[data-testid="author-link-1"]').click();

    cy.url().should('include', '/en/authors/1');

    cy.go(-1);

    cy.get('[data-testid="author-link-5"]').click();

    cy.url().should('include', '/en/authors/5');

    cy.go(-1);

    cy.url().should('include', '/en/about');
  });
});
