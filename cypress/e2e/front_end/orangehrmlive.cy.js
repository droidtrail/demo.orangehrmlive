/// <reference types = "cypress" />

describe('Orangehrmlive', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('include', 'OrangeHRM')
  })
  it('Change Password Admin', () => {
    cy.get('[name=username]')
      .type('Admin')
      .should('have.value', 'Admin')
    cy.get('[name=password]')
      .type('admin123')
      .should('have.value', 'admin123')
    cy.get('button')
      .should('be.visible')
      .click()
    cy.get('input[placeholder="Search"]')
      .should('be.visible')
      .type('Admin')
    cy.contains('.oxd-main-menu-item--name', 'Admin').click()
    cy.get('input.oxd-input.oxd-input--active')
      .last()
      .type('Admin')
      .should('have.value', 'Admin')
    cy.get('button[type="submit"]')
      .click({ force: true })
    cy.get('.oxd-icon-button.oxd-table-cell-action-space')
      .last()
      .should('be.visible')
      .click({ force: true })
    cy.get('.oxd-icon.bi-check.oxd-checkbox-input-icon').click()
    cy.get('.oxd-input.oxd-input--active[type="password"]')
      .first()
      .type('9n2%43RV@TB1')
    cy.get('.oxd-input.oxd-input--active[type="password"]')
      .last()
      .type('9n2%43RV@TB1')
    cy.get('.oxd-chip.oxd-chip--default.orangehrm-password-chip.--strength-strongest')
      .invoke('text')
      .should('contain', 'Strongest')
    cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space')
      .should('be.visible')
      .click()
  })
  it.only('Find element inside div', () => {
    let textSearch = 'Kiyara Hu'
    let itemlength = ''
    let correctname = []
    let wrongname = []

    cy.get('[name=username]')
      .type('Admin')
      .should('have.value', 'Admin')
    cy.get('[name=password]')
      .type('admin123')
      .should('have.value', 'admin123')
    cy.get('button')
      .should('be.visible')
      .click()
    cy.get('input[placeholder="Search"]')
      .should('be.visible')
      .type('Admin')
    cy.contains('.oxd-main-menu-item--name', 'Admin').click()
    cy.get('.oxd-table-body')
      .then(($el) => {
        itemlength = $el.length
      })
      .each(($el) => {
        if ($el.text().includes(textSearch)) {
          correctname.push(1)
          cy.log('Nome encontrado com sucesso >>> ' + textSearch)
        } else {
          wrongname.push(0)
          cy.log($el.text())
          throw new Error("O nome " + textSearch + " não foi encontrado.")
        }
      })
  })
})