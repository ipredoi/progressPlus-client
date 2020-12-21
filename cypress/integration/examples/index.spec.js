describe('The Index Page GitHub link', () => {
  it('successfully sends user to GitHub', () => {
    //page we're working on
    cy.visit('http://localhost:3000/');
    cy.get('#gitHubLink') //button/link we're testing
      .click();
    cy.location('href').should('eq', 'https://github.com/');
  });
});
