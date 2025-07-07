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

    it('Selecting a locator using an attribute', () => {
        cy.visit('https://www.google.com')
        cy.get('#L2AGLb').click()
        cy.get('[class="k1zIA rSk4se"]').should('be.visible') // here it can be added an If else condition, if - assertion is true, else, take a screenshot
        // add if and else
    })

     it('Checking the existence of a value in an input field', () => {
         cy.visit('https://www.google.com')
          cy.get('#L2AGLb').click()
          const googleSearch =  cy.get('.gLFyf')
          googleSearch.type('123')
          googleSearch.should('have.value', '123')

    })

    it.only('Checking the existence of a class on a selected element', () => {
         cy.visit('https://www.libris.ro')
          cy.get('#autoCompleteButton').should('have.class', 'onSearchClick')

    })
})