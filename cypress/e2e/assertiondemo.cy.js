it('AssertonDemo', () => {


    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain','Button')
    // .should('have.class','query-btn')
    // .should('be.visible')
    // .should('be.enabled')
    .and('have.class','query-btn')
    .and('be.visible')
    .and('be.enabled')
    expect(true).to.be.equal('')
    
  })