describe('nume suita - TesteLinkedin', () => {

  it('nume test - Login Linkedin', () => {
    cy.visit('https://linkedin.com');
    cy.get('.nav__button-secondary').click();
    cy.wait(10000);
    cy.get('#username').type('email');
    cy.get('#password').type('pass');
    cy.get('.btn__primary--large').click();
    cy.get('#ember17').should('exist');
  })

})