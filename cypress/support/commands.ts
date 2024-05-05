/// <reference types="cypress" />

import { getByTestId } from './customCommands';

Cypress.Commands.add('getByTestId', getByTestId);
