export default function () {
  Cypress.Commands.add("customCommand", (message: string) => {
    return cy.log(message);
  });
}
