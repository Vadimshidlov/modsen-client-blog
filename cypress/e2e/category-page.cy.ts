/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('contacts page tests', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });

  it('should include valid routes', () => {
    cy.scrollTo('bottom');

    cy.getByTestId('category-link-business').click();

    cy.url().should('include', '/en/category/business');

    cy.go(-1);

    cy.getByTestId('category-link-economy').click();

    cy.url().should('include', '/en/category/economy');

    cy.go(-1);

    cy.getByTestId('category-link-technology').click();

    cy.url().should('include', '/en/category/technology');

    cy.go(-1);

    cy.getByTestId('category-link-startup').click();

    cy.url().should('include', '/en/category/startup');

    cy.go(-1);
  });

  it('should correct search posts with tag', () => {
    cy.visit('/category/startup');
    cy.getByTestId('searchTag-input').type('life');
    cy.getByTestId('searched-post-1').click();

    cy.url().should('include', 'en/posts');

    cy.go(-1);

    cy.getByTestId('searchTag-input').type('life');
    cy.getByTestId('searched-post-2').click();

    cy.url().should('include', 'en/posts');

    cy.go(-1);

    cy.url().should('not.include', 'en/posts');
  });
});
