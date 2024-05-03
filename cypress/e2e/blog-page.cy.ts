/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('blog page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en');

    cy.get('[data-testid="blog-header-link"]').eq(1).click();

    cy.url().should('include', '/en/blog');
  });

  it('should handle page change', () => {
    cy.url().should('include', '/en');

    cy.get('[data-testid="blog-header-link"]').eq(1).click();

    cy.get('[data-testid="nextButton"]').click();
    cy.get('[data-testid="nextButton"]').should('be.disabled');

    cy.get('[data-testid="prevButton"]').click();
    cy.get('[data-testid="prevButton"]').should('be.disabled');
  });
});
