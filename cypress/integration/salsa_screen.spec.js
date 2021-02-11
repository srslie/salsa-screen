beforeEach(() => {
  cy.visit('http://localhost:3000')
});

describe('Salsa Screen', () => {

  it('should always show a header', () => {
    cy
      .get('header').children('h1', 'button', 'button')
      .get('h1').contains('Salsa Screen')
  });

  it('should show a footer', () => {
    cy
      .get('footer').children('p')
      .get('p').contains('© srslie - 2021')
  });
  
  it('should show a loading page until movies data is loaded', () => {
    cy.clock()
    cy
      .get('.loading').children('p')
      .get('p').contains('Loading...')
  });

