/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="Cypress" />

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

  it('should always show a header with home link', () => {
    cy.get('header').children('a', '.menu-wrapper', '.search-bar') 
      .get('a').children('img')
      .get('.site-name').click()
    cy.url().should('contain', '/')
  });

  it('should show browse menu and display selected genre', () => {
    cy.get('header').children('.menu-wrapper')
      .get('.menu-wrapper').children('button').click()
    cy.get('ul').children('button')
      .get('.Action').click({multiple: true})
      cy.wait(5)
    cy.url().should('include', 'searchResults')
  })

  it('should show a footer', () => {
    cy.get('footer').children('nav').children('ol').children('li')
  });
  
  it('should show a loading page until movies data is loaded', () => {
    cy.clock()
    cy.get('.loading').children('p')
      .get('p').contains('Loading...')
  });

  it('should populate home view with all movies and featured movie after page loads', () => {
    cy.get('.scroll-movies').children('.featured-movie', '.movie-genres')
    cy.get('.featured-movie').children('.featured-backdrop', '.featured-info')
  });

  it('should populate a home view with scrolling genre divs', () => {
    cy.get('.scroll-movies').children('.featured-movie', '.movie-genres')
    cy.get('.movies-genres').children('.genre-row').children('.genre').children('h2', '.slider')
    cy.get('.genre-name').contains('Action')
    cy.get('.slider').children('.leftScroll', '.slider-cards', '.rightScroll')
    cy.get('.leftScroll').click().get('.slider-cards').scrollTo('right')
    cy.get('.rightScroll').click().get('.slider-cards').scrollTo('right')
  })

  it('should let a user search for a movie and display search results', () => {
    cy.get('form input[type=text]').type('money')
    cy.url().should('include', 'searchResults')
    cy.get('.movies').children('a').children('.card')
      .get('.card:first').should('have.id', '694919')
  })

  it('should let a user click on a movie and see a new view of those movie details and videos', () => {
    cy.get('.movies')
      .get('.card:first').click({ multiple: true })
    cy.url().should('include', '694919')
  
    cy.get('.selected-movie').children('.banner', '.info', '.trailers')
      .get('.banner').children('.banner-info').children('.banner-info-title','.banner-info-rating')
      .get('.title').contains("Money Plane")
      .get('.trailers').children('h3', '.videos-list')
      .get('.videos-list').children('.trailer')
  });

  it('should let a user exit the movie details page and return to a home view', () => {
    cy.get('.movies')
      .get('.card:first').click({ multiple: true })
    cy.get('.selected-movie').get('.banner').get('.banner-info').get('.banner-info-title')
      .get('.exit').click({ multiple: true })
    cy.url().should('include', '/')
  });
});

describe('Error page', () => {
  it('should show an error page for a bad fetch response (500)', () => {
    cy.intercept('GET', 
        'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', 
        { statusCode: 500
        }
    )
    cy.visit('http://localhost:3000')
    cy.get('.error')
      .get('p').contains('Sorry we\'re having trouble loading the movies, have some chips and try reloading!')  
  });



  it('should show a page not found redirect for a bad path', () => {
    cy.visit('http://localhost:3000/nowhere')
    cy.url().should('contain', '404')
    cy.get('.notFound').children('p', 'a')
      .get('.redirect-home').click()
    cy.url().should('contain', '/')
  });
});