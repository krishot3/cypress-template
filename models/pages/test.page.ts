export default class TestPage {
  get baseElement() {
    return cy.get('elementSelector');
  }

  anotherElement(name: TestPage.Test.ItemType) {
    return this.baseElement.find(`:contains("${name}")`);
  }
}
