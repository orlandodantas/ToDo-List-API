<h1>ToDo List API</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Como rodar os teste](#como-rodar-os-testes)

:small_blue_diamond: [Dependências e Libs](#linguagens-dependencias-e-libs-utilizadas-books)

:small_blue_diamond: [Licença](#licença)


## Descrição do projeto 

<p align="justify">
  Esta é um API de lista de tarefas proposto em um Blitz de carreira da Trybe, com o intuito de criarmos um projeto completo do zero,
  incluindo API e <a href="https://github.com/orlandodantas/ToDo-List-React">Interface</a>.
</p>
<p>Aqui foi possível desenvolver todo o ciclo de uma API, Testes, Docker-Compose Configurações de: Lint, Prettier, Editor Config.</p>
<p>O maior desafio enfrentado aqui foi o tempo. Pois tivemos três tardes, para planejar todo o projeto, desenvolver o Back-End e 
<a href="https://github.com/orlandodantas/ToDo-List-React">Front-End</a>.</p>

## Funcionalidades

:heavy_check_mark: Cadastro de usuários.  

:heavy_check_mark: Autenticação de usuários.

:heavy_check_mark: Cadastrar uma nova tarefa.  

:heavy_check_mark: Buscar todas as tarefas por usuário logado.

:heavy_check_mark: Buscar tarefa por ID.

:heavy_check_mark: Atualizar descrição da tarefa.

:heavy_check_mark: Atualizar status da tarefa.

:heavy_check_mark: Deletar tarefa por ID.

:heavy_check_mark: Deletar todas as tarefas do usuário logado.



## Deploy da Aplicação :dash:

> Pode ver a aplicação completa em funcionamento aqui: https://todo-list-react-orlandodantas.vercel.app/

> Link do projeto Front-End: https://github.com/orlandodantas/ToDo-List-React

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Git](https://git-scm.com/downloads)
:warning: [Docker](https://docs.docker.com/get-docker/)
:warning: [Docker-Compose](https://docs.docker.com/compose/install/) 

## Como rodar a aplicação :arrow_forward:

#### No terminal:
Clone o projeto: 

```
git clone https://github.com/orlandodantas/ToDo-List-API.git
```
Entre na pasta do projeto: 

```
cd ToDo-List-API
```

Instale as dependências: 

```sh
npm install
```
Renomei o arquivo docker-compose.yml.exemple para docker-compose.yml:

```sh
move docker-compose.yml.exemple docker-compose.yml
```
Abra o arquivo que acabou de renomear em um Editor/IDE de sua preferência por exemplo [VsCode](https://code.visualstudio.com/):
> Onde tem MYSQL_ROOT_PASSWORD=sua_password_mysql troque sua_password_mysql por uma senha a sua escolha para ser a senha de root
de acesso ao banco de dados. :warning: Atenção guarde esta senha que vamos usa-la mais a frente. Salve o arquivo e volte ao terminal.

Levante o container com o banco de dados MySQL: 

```sh
npm run compose:up
```
Renomei o arquivo .env.exemple para .env:

```sh
move .env.exemple .env
```

Abra o arquivo que acabou de renomear em um Editor/IDE de sua preferência por exemplo [VsCode](https://code.visualstudio.com/):
> Onde tem DATABASE_URL="mysql://root:password@localhost:3306/todo", troque password pela senha configurando anteriormente no arquivo
docker-compose.yml

> Onde tem JWT_SECRET=sua_secret_JWT troque sua_secret_JWT por uma senha de sua preferência. Salve o arquivo e retorne ao terminal.

Criação do banco de dados:

```sh
npx prisma migrate dev
```

Rodar a aplicação:

```sh
npm run dev
```

> Agora a aplicação está pronta para ser usada em um cliente rest por exemplo o [Insomnia](https://insomnia.rest/download) ou se preferir
ver a aplicação completa rodando, agora pode seguir os passos descritos na aplicação [Front-End](https://github.com/orlandodantas/ToDo-List-React).


## Como rodar os testes

#### Em um terminal:
Rodar a execução dos testes:

```sh
npm test
```

Rodar a execução do teste coverage:

```sh
npm run test:coverage
```

## Linguagens, dependencias e libs utilizadas :books:

- [Node](https://nodejs.org/en/download/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
- [Restify Errors](https://www.npmjs.com/package/restify-errors)
- [Joi](https://www.npmjs.com/package/joi)
- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [BCrypt Js](https://www.npmjs.com/package/bcryptjs)
- [Cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - ToDo List API
