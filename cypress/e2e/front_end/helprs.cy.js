/// <reference types = "cypress" />

const { resolve, reject } = require("cypress/types/bluebird")


describe('Helpers', () => {
    // it('Wrap', () => {
    //     cy.visit('https://wcaquino.me/cypress/componentes.html')
    //     cy.get('#buttonListDOM').then($el => {
    //         expect($el).to.have.length(1)
    //     }).and('eq','buttonListDOM')
    // })
    it('Wrap', () => {
        const obj = {nome:"User", idade:"20"}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property','nome')
        // cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.get('#formNome').then($el=>{
        //     cy.wrap($el).type('funciona via cypress')
        // })

        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(10)
            }),500
        })
    })
})

