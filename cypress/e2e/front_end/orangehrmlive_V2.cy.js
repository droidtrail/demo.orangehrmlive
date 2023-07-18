/// <reference types = "cypress" />

describe('Orangehrmlive', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('include', 'OrangeHRM')
  })

  it('Find element inside div', () => {
    let textSearch = 'Pragg@123'
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
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
    cy.get('.oxd-table-body').each(($div) => {
      expect($div.text()).contain(textSearch)
    })
    cy.get('.oxd-table-body')
      .each(($div) => {
        if ($div.text() === textSearch) {
          cy.log('Usuário encontrado: ' + textSearch + '>>>')
        }
      })
      .then(() => {
        expect(textSearch).contain(textSearch)
      })
    cy.log('Resultado: ' + textSearch)

    cy.contains('.oxd-table-body .oxd-table-card', textSearch)
      .find('button').eq(1)
      .click()
    // cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').should('have.value',' Save ')
    cy.get('button').contains(' Save ')
  })
})
