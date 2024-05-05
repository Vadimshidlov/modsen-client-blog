/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('about page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en');

    cy.getByTestId('about us-header-link').eq(1).click();

    cy.url().should('include', '/en/about');
  });

  it('should correct handle author page', () => {
    cy.getByTestId('about us-header-link').eq(1).click();
    cy.getByTestId('author-link-1').click();

    cy.url().should('include', '/en/authors/1');

    cy.go(-1);

    cy.getByTestId('author-link-5').click();

    cy.url().should('include', '/en/authors/5');

    cy.go(-1);

    cy.url().should('include', '/en/about');
  });
});
