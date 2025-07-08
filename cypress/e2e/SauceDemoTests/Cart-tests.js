describe('Cart tests', () => {

  it('Adding a product to the cart', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#remove-sauce-labs-backpack').should('be.visible');
    cy.get('.shopping_cart_badge').should('be.visible');
  })

it('Removing a product from the cart', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('#remove-sauce-labs-backpack').should('be.visible').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  })

})
