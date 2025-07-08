describe('Checkout Test', () => {

    it('Ordering a product test', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce'); 
        cy.get('#login-button').click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#remove-sauce-labs-backpack').should('be.visible');
        cy.get('#shopping_cart_container').click();
        cy.get('#checkout').click();
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('407280');
        cy.get('#continue').click();
        cy.get('#finish').click();
        cy.get('#checkout_complete_container').should('be.visible');
    })
})