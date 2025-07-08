describe('Saucedemo Hamburger Menu tests', () => {

  it('Testing the hamburger menu opening functionality', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click();
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').should('be.visible')
})

it('Testing the hamburger menu closing functionality', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click();
    cy.get('.bm-burger-button').click();
    cy.get('.bm-cross-button').should('be.visible').click();
    cy.get('[hidden="true"]').should('exist')
})

})