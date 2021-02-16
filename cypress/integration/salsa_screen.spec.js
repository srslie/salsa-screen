/* eslint-disable no-undef */
/// <reference types="Cypress" />
/* eslint-disable jest/valid-expect-in-promise */


describe('Salsa Screen', () => {
  beforeEach(() => {
    cy.fixture('movieStubs.json')
      .then((movies) => {
        cy.intercept('GET', 
          'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', 
          { statusCode: 200,
            body: movies
          })
        })
      .then((movie) => {
        cy.intercept('GET', 
          'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/', 
          { statusCode: 200,
            body: movie
          })
        })
      .then((videos) => {
        cy.intercept('GET', 
        'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', 
          { statusCode: 200,
            body: videos
          })
        })
    cy.visit('http://localhost:3000')
  }); 

  // it('should always show a header', () => {
  //   cy
  //     .get('header').children('h1', 'button', 'button')
  //     .get('h1').contains('Salsa Screen')
  // });

  // it('should show a footer', () => {
  //   cy
  //     .get('footer').children('p')
  //     .get('p').contains('© srslie - 2021')
  // });
  
  // it('should show a loading page until movies data is loaded', () => {
  //   cy.clock()
  //   cy
  //     .get('.loading').children('p')
  //     .get('p').contains('Loading...')
  // });

  it('should populate home view with all movies and searchbar after page loads', () => {
    cy.get('.movies')
      // .children('.card')
      // .get('.searchBar').type('this')
      // .get('form>button').click(functioncall)
      //   .get(home)
  });

  // it('should let a user search for a movie and display search results', () => {
  //   cy
  //     .get('form input[type=text]').type('alan@bla')
  // })


  it('should show a page not found redirect for a bad path', () => {
    cy.visit('http://localhost:3000/nowhere')
    // cy
    //   .get('.notFound').children('p', 'Link')
    //   .get('Link').click({ multiple: true })
  });

  it('should let a user click on a movie and see a new view of those movie details and videos', () => {
    cy.get('.movies')
      .get('.card:first').click()
    cy.url().should('include', '694919')
  
    cy.get('.selectedMovie').children('.banner', '.banner-info', '.banner-info-title', 'Link', 'h1', '.banner-info-rating', '.rating', '.info', '.trailers')
    .find('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')
  });

  // it('should let a user exit the movie details page and return to a home view', () => {
  //   cy.visit('http://localhost:3000/movies/694919')
  //   cy.get('.selectedMovie').get('.exit').click({ multiple: true })
  // });
 
  // it('should let a user click on the header page name to return to the home view', () => {
  //   cy.get('header').

  // });

});

describe('Error page', () => {
  it('should show an error page for a bad fetch response (500)', () => {
    cy.intercept('GET', 
        'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', 
        { statusCode: 500
        }
    )
    // cy.intercept('GET', 
    //   'https://rancid-tomatillos.herokuapp.com/api/v2/movies694919/', 
    //   { statusCode: 500
    //   }  
    // )
    // cy.intercept('GET', 
    // 'https://rancid-tomatillos.herokuapp.com/api/v2/movies694919/videos', 
    //   { statusCode: 500
    //   }
    // // )
    cy.visit('http://localhost:3000')
     cy.get('.error')
     .get('p').contains('Sorry we\'re having trouble loading the movies, have some chips and try reloading!')


      
  });
});