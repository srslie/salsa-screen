beforeEach(() => {
  cy.visit('http://localhost:3000')
});

describe('Salsa Screen', () => {

  it('should always show a header', () => {
    cy
      .get('header').children('h1', 'button', 'button')
      .get('h1').contains('Salsa Screen')
  });

