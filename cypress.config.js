//old cypress.json

//Nesta parte, são importados os módulos necessários para o funcionamento da configuração.
//Esses módulos são responsáveis pelo pré-processamento de arquivos e pelo uso do Cucumber no Cypress.
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on,config);
      
      return config;
      
    },
    
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://saucedemo.com',
    chromeWebSecurity: false
    
  },
});
