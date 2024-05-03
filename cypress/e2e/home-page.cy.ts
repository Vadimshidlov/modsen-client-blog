/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('home page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en');
  });

  it('should change locale', () => {
    cy.url().should('include', '/en');

    cy.get('[data-testid="locale-switcher"]').select('de');

    cy.url().should('include', '/de');

    cy.get('[data-testid="locale-switcher"]').select('en');

    cy.url().should('include', '/en');
  });

  it('should open modal window video', () => {
    cy.get('[data-testid="modal-video-button"]').click();
    cy.get('[data-testid="video-frame"]').should('exist');

    cy.get('[data-testid="modal-video-close-button"]').click();
    cy.get('[data-testid="video-frame"]').should('not.exist');
  });
});
