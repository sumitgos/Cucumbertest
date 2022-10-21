///<reference types = "cypress" />

// it('Google Search', fuction(){

// })

it('Google Search',()=>{
cy.visit('https://google.com');
cy.get('.gLFyf'),{timeout:4000}.type('automation step by step{Enter}');
//cy.contains('Google Search').click();

})
