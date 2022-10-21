///<reference types = "cypress" />

describe("check goole page",function(){

it('search google ',function(){
cy.visit('https://www.google.com/')
cy.get('.gLFyf',{timeout:5000}).type('automation{Enter}')
cy.contains('What is Automation? - ISA')
//cy.get('.FPdoLc > center > .gNO89b').click()
})

// it('search google ',()=>{

    

// })
describe('suite name', function(){
    it('test',function(){
        
    })
})
    
})