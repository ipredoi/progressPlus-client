// cypress sample test
// started writing test to check button on registration page sends to user login page

describe('Registration page button test', () => {
  it('redirect to user login page', () => {
    cy.get('#regButton').click();
    cy.location('href').should('eq', 'http://localhost:3000/');
  });
});

// describe("The Home Page", () => {
//   it("successfully loads", () => {
//     cy.visit("http://localhost:3000"); // change URL to match your dev URL
//   });
// });

// describe("Registration page button test", () => {
//   it("redirect to user login page", () => {
//     expect(true).to.equal(true);
//   });
// });
