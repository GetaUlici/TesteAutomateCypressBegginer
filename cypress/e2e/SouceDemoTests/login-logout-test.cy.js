describe('Saucedemo tests', () => {

  it('Performing a Login on Saucedemo app', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click();
    cy.get('#shopping_cart_container').should('exist');
  })

  it('Login Test with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user1');
    cy.get('#password').type('secret_sauce1'); 
    cy.get('#login-button').click();
    cy.get('.error-message-container.error').should('contain', 'Epic sadface: Username and password do not match any user in this service');
  })

   it('Invalid Login with empty fields', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#login-button').click();
    cy.get('.error-message-container.error').should('contain', 'Epic sadface: Username is required');
  })

  it('Invalid Login with empty Password field', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user1');
    cy.get('#login-button').click();
    cy.get('.error-message-container.error').should('contain', 'Epic sadface: Password is required');
  })

  it('Performing a Logout on Saucedemo app', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click();
    cy.get('#shopping_cart_container').should('exist');
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click()
    cy.get('#login-button').should('be.visible')
  })

})