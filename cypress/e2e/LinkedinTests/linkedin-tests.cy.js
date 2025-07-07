describe('LinkedinTests', () => {

  it('Performing a Login on Linkedin app', () => {
    cy.visit('https://linkedin.com');
    cy.get('.nav__button-secondary').click();
    cy.wait(10000);
    cy.get('#username').type('email@test.com'); // put a valid email from a linkedIn account
    cy.get('#password').type('pass'); // put the valid pass from the email provided before
    cy.get('.btn__primary--large').click();
    cy.get('#ember17').should('exist');
  })

})