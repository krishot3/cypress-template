export default class TestPage {
  get baseElement() {
    return cy.get('elementSelector');
  }

  anotherElement(name: Pages.Test.ItemType) {
    return cy.get('elementSelector').find(`:contains("${name}")`);
  }
}
