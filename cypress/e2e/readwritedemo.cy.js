///<reference types = "cypress" />
it('Read file using Fixture', function(){

    cy.fixture('example.json').then((data) => {

        cy.log(data.name)
        cy.log(data.email)

    })

})

before('Read file using Fixture', function(){

    cy.fixture('example.json').then((data) => {

        cy.log(data.body)
        
    })
// cy.log(this data.name)
})

it('Read file using readfile()', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data)=>{

cy.log(data.name)
cy.log(data.email)
    })
    
})

it('write file deno writeFile()', function(){
cy.writeFile('sample.txt',"Hello im sumit\n")
cy.writeFile('sample.txt',"im Goswami",{flag:'a+'})
})