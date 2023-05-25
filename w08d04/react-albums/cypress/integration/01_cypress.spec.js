// Cypress uses mocha and chai internally

// describe(''); // optional - groups related tests together
// it(''); // individual test

describe('basic cypress test', () => {

  it('can run', () => {
    expect(true).to.equal(true);
  });

  it('can visit a website', () => {
    cy.visit('http://localhost:8765');
  });

});
