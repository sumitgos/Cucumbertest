// import { expect } from "chai"
// import { it } from "mocha"
import { beforeEach } from "mocha"
import {loginPage} from "./page/login_page"
 const loginPage = new loginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})


describe('all login test', () => {
it('Login Test 1',function(){
loginPage.enterUserName('Admin')
loginPage.enterPassword('admin123')
loginPage.clickLogin()
})


it('Login Test 2',function(){
    
    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    })

})
// cy.on('window.aler',(txt)=>{
//     expect(txt).to.be.equal('message')
// })

// it('testing',()=>{

// })
