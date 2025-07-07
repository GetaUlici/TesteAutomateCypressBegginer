describe('Example Test', () => {

    it('Testing Url Include', () => {
        cy.visit('https://www.digi24.ro/stiri/actualitate/politica');
        
        cy.url().should('include', '/stiri/')
    })

    it('Testing a delay - wait method', () => {
        cy.visit('https://www.google.com')
        cy.get('#L2AGLb').click()
        cy.wait(10000) //wait 10 seconds
        cy.get('.gLFyf').type('We have waited 10 seconds');
    })

    it.only('Selecting a locator using an attribute', () => {
        cy.visit('https://www.google.com')
        cy.get('#L2AGLb').click()
        cy.get('[class="k1zIA rSk4se"]').should('be.visible')
    })

     it.only('Selecting a locator using an attribute', () => {
        

     })
})