/* eslint-disable @typescript-eslint/consistent-type-definitions */
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      customCommand: (message: string) => Chainable<void>;
    }
  }
}
