describe('nume suita - TesteLinkedin', () => {

  it('nume test - Login Linkedin', () => {
    cy.visit('https://linkedin.com');
    cy.get('.nav__button-secondary').click();
    cy.wait(10000);
    cy.get('#username').type('ulicigeta@gmail.com');
    cy.get('#password').type('Micunelte ');
    cy.get('.btn__primary--large').click();
    cy.get('#ember17').should('exist');


  })


})