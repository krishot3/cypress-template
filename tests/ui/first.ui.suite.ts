describe('UI test title', () => {
  it('UI test', () => {
    cy.log('UI test').then(() => pom('testPage').anotherElement('test'));
  });
});
