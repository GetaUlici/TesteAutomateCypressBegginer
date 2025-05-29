describe('Site Google.com', () => {

    // it('functioneaza cu o cautare basic', () => {
    //     cy.visit('https://google.com');
    //     cy.get('#L2AGLb').click();
    //     cy.get('.gLFyf').type('vlog de it').type('{enter}');

    //     cy.get('#result-stats').should('exist');
    // }) 

    //Testul screenshot pagina
    it('Screenshot la pagina', () => {
        cy.visit('https://www.google.com');

        cy.screenshot(); //face screenshot intr-un folder default
    })

    //Testul constanta si verificare continut input
    it('verific o valoare din input', () => {

    })
    // this is a Github/sourcetree test
    //this is a git terminal commands test
    
})