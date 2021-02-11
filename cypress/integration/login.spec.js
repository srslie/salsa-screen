cy.describe('login form')




it('should see homepage when logged in properly', () => {
  cy.fixture('example.json').then((data) => {
    cy.intercept('POST', 'URL', {
    statusCode: 200,
    body: data.sucess
  })

  cy 
    .get('form input[type=email]').type('alan@bla')
    .get('form input[type=password]').type('this')
    .get('form>button').click()
      .get(home)

})