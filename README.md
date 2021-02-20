# To Do API
### Projeto Módulo 3

A TODO-APP-API é uma api desenvolvida no módulo 3 do Bootcamp de Desenvolvimento Web FullStack da Resilia. A proposta foi para criar uma API de gestão de tarefas baseada em kanban.

Nesse projeto foi utilizado:
* JavaScript
* NodeJS
* Express
* Sqlite 3
* CORS
* Body-Parser
* Nodemon
* Insominia


O Github foi utilizado para controle de versionamento.


## Instruções
Caso você queira rodar essa api em sua máquina basta seguir essas instruções:

* Instale Node.js em seu computador.
* Baixe os arquivos deste repositório ou faça um clone utilizando o comando git clone https://github.com/SahBianchi/todo-app-api.git no terminal.
* Navegue para a pasta do repositório do projeto e instale as dependências que serão necessárias para sua utilização. Para isso basta utilizar o comando "npm install" npm terminal.
* Ainda no seu terminal utilize o seguinte comando “npm start” para inicializar a aplicação.


## Rotas para Acesso 
O projeto é baseado no padrão REST, sendo assim os os verbos HTTP são utilizados para realização do CRUD. São eles: POST(Creat), GET (Read), PUT (Update), DELETE (Delete). As operações podem ser realiadas utilizando as rotas a seguir no Insomnia por exemplo.

➡ **Usuários** 
* **GET** - Lista todos os usuários do banco de dados: http://localhost:3000/usuario 
* **GET** - Lista um usuário específico, utilizando o seu id: http://localhost:3000/usuario/id
* **POST** - Para inserir usuários no banco de dados: http://localhost:3000/usuario

Para adicionar um usuário ao banco, digite no corpo da requisição as informações seguindo o modelo:

    {
        “NOME”: “exemplo”,
        “EMAIL”: “email@gmail.com”,
        “SENHA”: “123456”
    }


* **PUT** – Para modificar os dados na tabela “usuarios” : http://localhost:3000/usuario/id
* **DELETE** – Para apagar um registro na tabela de “usuarios” no banco de dados: 
http://localhost:3000/usuario/id

➡ **Tarefas** 
* **GET** - Lista todas as tarefas do banco de dados: http://localhost:3000/tarefa 
* **GET** - Lista uma tarefa específica, utilizando o id: http://localhost:3000/tarefa/id
* **POST** - Para inserir uma tarefa no banco de dados: http://localhost:3000/tarefa

Para adicionar uma tarefa ao banco, digite no corpo da requisição as informações seguindo o modelo:

    {
        “TITULO”: “exemplo”,
        “DESCRICAO”: “exemplo”,
        “STATUS”: “em andamento”,
        “DATACRIACAO”: “2020-02-20”,
        “ID_USUARIO”: “id_do_usuario_da_tarefa”
    }


* **PUT** – Para modificar os dados na tabela “tarefas”: http://localhost:3000/tarefa/id
* **DELETE** – Para apagar um registro na tabela de “tarefas” no banco de dados: 
http://localhost:3000/tarefa/id

