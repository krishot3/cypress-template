describe('API test title', () => {
  it('API test', () => {
    cy.log('API test').then(() => eom('testEndpoint').test());
  });
});
