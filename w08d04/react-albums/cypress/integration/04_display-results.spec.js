describe('testing retrieving info from an api', () => {

  it('can display search results to the user', () => {
    // visit the homepage
    cy.visit('/');

    // interrupt the GET request and return our data instead
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('intercept-api');

    // grab the input field and type in "Daft Punk"
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // check if the spinner exists
    cy.get('.spinner')
      .should('be.visible');

    // wait... until the API results load
    cy.wait('@intercept-api');

    // does it display Daft Punk albums?
    cy.get('main')
      .contains('Random Access Memories')
      .should('be.visible');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // assert that the explicit album does not appear in the search results
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});