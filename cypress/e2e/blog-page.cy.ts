/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('blog page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en');

    cy.get('[data-testid="blog-header-link"]').eq(1).click();

    cy.url().should('include', '/en/blog');
  });

  it('should handle page change', () => {
    cy.url().should('include', '/en');

    cy.getByTestId('blog-header-link').eq(1).click();

    cy.getByTestId('nextButton').click();
    cy.getByTestId('nextButton').should('be.disabled');

    cy.getByTestId('prevButton').click();
    cy.getByTestId('prevButton').should('be.disabled');
  });
});
