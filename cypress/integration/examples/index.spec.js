//tests that the link to GitHub contains the correct URL

describe('The Index Page GitHub link', () => {
  it('successfully sends user to GitHub', () => {
    //page we're working on
    cy.visit('http://localhost:3000/');
    cy.get('#gitHubLink')
      .should('have.attr', 'href')
      .and('eq', 'https://github.com/');
  });
});
