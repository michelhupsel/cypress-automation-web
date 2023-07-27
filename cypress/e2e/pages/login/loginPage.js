const el = require('./elements').ELEMENTS;

class LoginPage {

  elements = {
    usernameInput: () => cy.get(el.username),
    passwordInput: () => cy.get(el.password),
    btnLoginInput: () => cy.get(el.btnLogin)
  }

  typeUsername(username){
    this.elements.usernameInput().type(username);
  }

  typePassword(password){
    this.elements.passwordInput().type(password);
  }

    clickBtnLogin() {
    this.elements.btnLoginInput().click();
  }

  // submitLogin(username,password){
  //   this.elements.usernameInput().type(username);
  //   this.elements.passwordInput().type(password);
  //   this.elements.loginBtn().click();
  // }
}

// export const loginPage = new LoginPage();
export default new LoginPage();