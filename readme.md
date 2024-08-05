# Bem-vindo ao CRUD React Native com API

Este projeto é um CRUD (Create, Read, Update, Delete) desenvolvido em React Native, que se comunica com uma API para gerenciar dados. Siga as instruções abaixo para configurar e executar o projeto corretamente.

## Configuração do Projeto

Para garantir que o projeto funcione corretamente, você precisa configurar a URL da API. Siga os passos abaixo:

1. **Execute o comando `npm install`:**

   Instale as dependências do projeto.

   ```bash
   npm install
   ```

2. ** Altere as configurações do seu banco de dados no `/src/config/database.js`: **
    host: 'seuhost', 
    user: 'seuusuario', 
    password: '',
    database: 'seu_bd',

3. **Execute o comando `node --watch .\src\index.js`
    Executar o projeto e toda vez que salvar ele ira reexecutar , se não quiser somente deixe o node sem o --watch

    ```bash
   node --watch .\src\index.js
   ```

## Instruções

Criar (Create): POST /tarefas

Cria uma nova tarefa.
Requer um corpo com os campos descricao e concluido.
Ler (Read): GET /tarefas

Obtém a lista de tarefas. Pode ser filtrado com parâmetros como concluido.
Atualizar (Update): PUT /tarefas/:id_tarefa

Atualiza os dados de uma tarefa existente.
Requer o id_tarefa na URL e um corpo com os campos descricao e concluido.
Excluir (Delete): DELETE /tarefas/:id_tarefa

Remove uma tarefa com base no id_tarefa fornecido.
Observações Finais
Este projeto pode conter alguns erros ou problemas, pois ainda estou em processo de aprendizado sobre várias tecnologias e práticas envolvidas. Agradeço a compreensão e estou aberto a sugestões e contribuições para melhorar o código.


Obrigado por sua compreensão e apoio!