import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login/loginPage";

// const loginPage = require("../pages/login/loginPage.js");


Given('O usuario abre a pagina de login', () => {
    cy.visit('/')
})

When('O usuario insere o username {string}', (username) => {
    // cy.get('[data-test="username"]').typeUsername(username)
    LoginPage.typeUsername(username);
})

When('O usuario insere a senha {string}', (password) =>{
    LoginPage.typePassword(password);
})

Then('O usuario consegue se conectar clicando em login', () =>{
    LoginPage.clickBtnLogin();
})