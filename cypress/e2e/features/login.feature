Feature: Login 

    Feature criada para verificar se o login é realizado com sucesso
    Scenario: Sucesso login
    Given O usuario abre a pagina de login
    When O usuario insere o username "standard_user"
    When O usuario insere a senha "secret_sauce"
    Then O usuario consegue se conectar clicando em login
