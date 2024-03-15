describe('UI test title', () => {
  it('UI test', () => {
    pom('testPage').anotherElement('test')
    .then($element => expect($element).to.eq('Hello World!'))
  });
});
