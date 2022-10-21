export class LoginPage{
    
  username_txtbox =  ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'

   password_txtbox =':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    click_button ='.oxd-button'
    
    enterUserName(username){
        cy.get(this.username_txtbox).type('username')
       
    }
    enterPassword(password){
        cy.get(this.password_txtbox).type('password')
        
    }
    clickLogin(){
        cy.get(this.click_button).click() 
    }

    

}