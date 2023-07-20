/// <reference types = "cypress" />


describe('Teste', () => {
    it('Should vc Then', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
        }).and('eq','buttonListDOM')
    })
})

