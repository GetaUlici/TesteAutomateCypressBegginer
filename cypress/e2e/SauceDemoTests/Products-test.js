describe('Products test', () => {

    it('Test that the product page is displayed', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_4_title_link').click();
        cy.get('.inventory_details_name.large_size').should('contain', 'Sauce Labs Backpack');
    })

    it('Back to products button functionality test', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_4_title_link').click();
        cy.get('.inventory_details_name.large_size').should('contain', 'Sauce Labs Backpack');
        cy.get('#back-to-products').click();
        cy.get('.header_secondary_container').should('contain', 'Products');
    })
})