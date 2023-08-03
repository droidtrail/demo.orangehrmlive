/// <reference types = "cypress" />
describe('Wrap', () => {
    it('Wrap exemple 01', () => {
        const getName = () => {
            return 'Jane Lane'
        }
        cy.wrap({ name: getName }).invoke('name').should('eq', 'Jane Lane')
    })

    it.only('Wrap exemple 02', () => {
        cy.visit('https://console.asgardeo.io')
        cy.get('[data-testid=identifier-auth-continue-button]').each(($button) => {
            if ($button.text()==='Go to sign up'){
                cy.wrap($button).click()
            }
        })
    })
})
