///<reference types = "cypress" />

it('File upload test', function(){

cy.visit('https://trytestingthis.netlify.app/')
cy.get('#option').attachFile('example.json')

})