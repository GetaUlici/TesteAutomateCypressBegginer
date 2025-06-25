describe('Site Google.com', () => {

    it('Testing a basic search on Google', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it').type('{enter}');

        cy.get('#result-stats').should('exist');
    }) 

    it('Screenshot test', () => {
        cy.visit('https://www.google.com');

        cy.screenshot(); 
    })

    // it('verific o valoare din input', () => {

    // })
})