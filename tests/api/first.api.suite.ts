describe('API test title', () => {
  it('API test', () => {
    eom('testEndpoint').test()
    .then($response => expect($response.body).to.eq('Hello World!'))
  });
});
