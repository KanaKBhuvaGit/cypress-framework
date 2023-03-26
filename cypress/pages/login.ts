class LoginPage {

    userName_textbox = '#username'
    password_textbox = '#password'
    submit_button = '#submit'
    error = '#error'
  
    enterUsername(username: string){
      cy.get(this.userName_textbox).clear();
      cy.get(this.userName_textbox).type(username);
    }
  
    enterPassword(password: string){
      cy.get(this.password_textbox).clear();
      cy.get(this.password_textbox).type(password);  }
  
    clickSubmit(){
      cy.get(this.submit_button).click();
    }
  
    getError(){
      return cy.get(this.error)
    }
  }
  
  export default LoginPage