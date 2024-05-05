/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getByTestId: (dataTestId: string) => Chainable<Subject>;
    }
  }
}

export const getByTestId = (dataTestId: string) => {
  return cy.get(`[data-testid="${dataTestId}"]`);
};
