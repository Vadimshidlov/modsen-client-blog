/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('contacts page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en/blog');
  });

  it('should include valid routes', () => {
    cy.scrollTo('bottom');

    cy.get('[data-testid="category-link-business"]').click();

    cy.url().should('include', '/en/category/business');

    cy.go(-1);

    cy.get('[data-testid="category-link-economy"]').click();

    cy.url().should('include', '/en/category/economy');

    cy.go(-1);

    cy.get('[data-testid="category-link-technology"]').click();

    cy.url().should('include', '/en/category/technology');

    cy.go(-1);

    cy.get('[data-testid="category-link-startup"]').click();

    cy.url().should('include', '/en/category/startup');

    cy.go(-1);
  });

  it('should correct search posts with tag', () => {
    cy.visit('/category/startup');
    cy.get('[data-testid="searchTag-input"]').type('life');
    cy.get('[data-testid="searched-post-1"]').click();

    cy.url().should('include', 'en/posts');

    cy.go(-1);

    cy.get('[data-testid="searchTag-input"]').type('life');
    cy.get('[data-testid="searched-post-2"]').click();

    cy.url().should('include', 'en/posts');

    cy.go(-1);

    cy.url().should('not.include', 'en/posts');
  });
});
