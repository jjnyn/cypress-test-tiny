/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })

  it('open cypress.io', () => {
    cy.get('div:first-child > p > a:nth-child(1)').invoke('removeAttr','target').click()
  })

  it('go back to previous page', () => {
    cy.go('back')
  })

  it('go to querying page', () => {
    cy.get('ul.home-list > li:first-child > a:first-child').click()
  })
})
