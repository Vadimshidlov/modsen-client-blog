/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('contacts page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en/contacts');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en/contacts');
  });

  it('should correct render conversation form', () => {
    cy.get('[data-testid="conversation-form"]').should('exist');
  });

  it('should correct render conversation map', () => {
    cy.get('[data-testid="conversation-map"]').should('exist');
    cy.get('.mapboxgl-marker.mapboxgl-marker-anchor-center').should('exist');
  });

  it('should correct validate form inputs', () => {
    cy.scrollTo('bottom');

    cy.get('[data-testid="userName-input"]').click();

    cy.get('[data-testid="email-input"]').click();

    cy.get('[data-testid="message-input"]').click();

    cy.get('[data-testid="conversation-select"]').select('Startup');

    cy.contains('Name is required!').should('be.visible');

    cy.contains('Email is required!').should('be.visible');

    cy.contains('Message is required!').should('be.visible');

    cy.get('[data-testid="userName-input"]').type('John');

    cy.get('[data-testid="email-input"]').type('john-doe@gmail.com');

    cy.get('[data-testid="message-input"]').type('Hello! It is Message from John Doe!');

    cy.contains('Name is required!').should('not.exist');

    cy.contains('Email is required!').should('not.exist');

    cy.contains('Message is required!').should('not.exist');
  });
});
