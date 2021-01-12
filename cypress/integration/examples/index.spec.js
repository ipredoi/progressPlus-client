//tests that the link to GitHub contains the correct URL

describe('The Index Page GitHub link', () => {
  it('successfully sends user to GitHub', () => {
    //page we're working on
    cy.visit('http://localhost:8080/');
    cy.contains('Sign').click();
    cy.get('#login_field').type("ipredoi27@gmail.com");
  });
});
