/// <reference types="cypress" />

import { not } from 'rxjs/internal/util/not';

Cypress.on('uncaught:exception', () => false);

describe('home page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should include valid routes', () => {
    cy.url().should('include', '/en');
  });

  it('should change locale', () => {
    cy.url().should('include', '/en');

    cy.getByTestId('locale-switcher').select('de');

    cy.url().should('include', '/de');

    cy.getByTestId('locale-switcher').select('en');

    cy.url().should('include', '/en');
  });

  it('should open modal window video', () => {
    cy.getByTestId('modal-video-button').click();

    cy.getByTestId('video-frame').should('exist');

    cy.getByTestId('modal-video-close-button').click();

    cy.getByTestId('video-frame').should('not.exist');
  });
});
