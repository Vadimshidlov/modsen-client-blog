/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('contacts page tests', () => {
  beforeEach(() => {
    cy.visit('/contacts');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en/contacts');
  });

  it('should correct render conversation form', () => {
    cy.getByTestId('conversation-form').should('exist');
  });

  it('should correct render conversation map', () => {
    cy.getByTestId('conversation-map').should('exist');
    cy.get('.mapboxgl-marker.mapboxgl-marker-anchor-center').should('exist');
  });

  it('should correct validate form inputs', () => {
    cy.scrollTo('bottom');

    cy.getByTestId('userName-input').click();

    cy.getByTestId('email-input').click();

    cy.getByTestId('message-input').click();

    cy.getByTestId('conversation-select').select('Startup');

    cy.contains('Name is required!').should('be.visible');

    cy.contains('Email is required!').should('be.visible');

    cy.contains('Message is required!').should('be.visible');

    cy.getByTestId('userName-input').type('John');

    cy.getByTestId('email-input').type('john-doe@gmail.com');

    cy.getByTestId('message-input').type('Hello! It is Message from John Doe!');

    cy.contains('Name is required!').should('not.exist');

    cy.contains('Email is required!').should('not.exist');

    cy.contains('Message is required!').should('not.exist');
  });
});
