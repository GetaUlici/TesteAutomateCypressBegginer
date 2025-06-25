describe('Test Stiri', () => {

    it('testStiri', () => {
        cy.visit('https://www.digi24.ro/stiri/actualitate/politica');
        
        cy.url().should('include', '/stiri/')
    })
})