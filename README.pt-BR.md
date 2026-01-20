<div align="center">
  
> This section is in Portuguese-BR! To read it in english, [click here](./README.md).

# 🌸 Jade-san no Subarashii Manga 🌸

#### Subarashii Manga é uma aplicação desktop desenvolvida com Electron, que exibe um catálogo local de mangás armazenado em um banco de dados MySQL.

> 🚨 **ATENÇÃO**! 🚨 Este projeto **exige** que o **MySQL** esteja instalado e configurado corretamente.
> 
> Se você ainda não o possui, pode baixá-lo no site oficial clicando [neste link](https://www.mysql.com/downloads/).

</div>

<div align="left">

## 🤔 O que é?

- Uma aplicação desktop desenvolvida com **Electron**
- Um projeto de exibição e catalogação de mangás
- Criado para organizar visualmente e navegar pelos títulos dos mangás
- Utiliza um **banco de dados MySQL** para persistência de dados.


## 🧠 Como funciona

- A aplicação funciona como um app desktop, executado em Electron.
- O processo principal gerencia a janela da aplicação e os eventos do sistema
- Um servidor local lida com a comunicação com o banco de dados
- Os dados são recuperados de um banco de dados MySQL e exibidos na interface
- As interações do usuário são tratadas por comunicação IPC

## ⚙️ Requerimentos

- **Node.js** (recomendada versão LTS)
- **npm** (incluído no Node.js)
- **MySQL** (instalado, em execução e configurado corretamente)

## 📦 Instalação

**1. Clone o repositório e instale as dependências**

```bash
git clone https://github.com/lfjade/https://github.com/lfjade/subarashii-manga.git
cd subarashii-manga
npm install
```

**2. Configure o banco de dados**

Um dump do banco (.sql) é fornecido pra configurar rapidamente o esquema e os dados necessários.

- Crie um novo banco MySQL com o nome **subarashii_manga**
- Importe o arquivo de dump para o seu banco de dados:

```bash
 mysql -u your_user -p subarashii_manga < db/dump_subarashiimanga.sql
 ```

> Você pode visualizar como este banco de dados foi estruturado abrindo a imagem [db/model.png](https://github.com/lfjade/subarashii-manga/blob/main/db/model.png).

**3. Configure o knexfile.js**

Este projeto usa **Knex.js** para se conectar a um banco de dados **MySQL**. Há um exemplo de **knexfile.js** em db/knexfile-example.js, onde você deve adicionar suas credenciais nos campos correspondentes. Renomeie o arquivo para knexfile.js

> O knexfile.js é necessário mas intencionalmente ignorado pelo Git, pois contém informações sensíveis e específicas do ambiente.

**4. Iniciando a aplicação**
   ```bash
   npm start
   ```

> ⚠️ Certifique-se de que o servidor MySQL esteja em execução antes de iniciar a aplicação.

## 🧰 Tech

- **Electron** — framework pra aplicações desktop
- **Node.js** — runtime para o backend
- **Express** — servidor local e camada de API
- **MySQL** — banco de dados relacional
- **Knex.js** — construtor de queries SQL e conexão com o banco de dados
- **JavaScript (ES6+)** — lógica da aplicação
- **Arquitetura MVC** — separação de responsabilidades (Model, View, Controller)

## 🗂️ Status

Este projeto está **funcionalmente completo** e cumpre seu propósito original como uma aplicação Electron voltada para aprendizado.

As funcionalidades principais — integração com o banco de dados, exibição de dados e estrutura MVC — estão implementadas e estáveis.

Alguns **ajustes menores e melhorias de UI/UX** foram intencionlmente deixados de lado, pois o projeto atingiu um ponto natural de conclusão e não está mais em desenvolvimento ativo.

## ⚠️ Problemas conhecidos
- Esse projeto pode gerar avisos de segurança relacionados ao electron-builder ao executar npm audit.
  Essas vulnerabilidades afetam **apenas dependências em build** e **não impactam a aplicação em execução**.
  Para fins educacionais e de desenvolvimento, esses avisos foram intencionalmente deixados sem resolução, para evitar alterações que pudessem quebrar a aplicação.
- **A aplicação depende de um servidor backend local.** Se o banco de dados ou o servidor não estiverem em execução, a interface pode não carregar os dados.
- Se você encontrar problemas relacionados à inicialização do Electron ou dados ausentes, tente reinstalar as dependências e verifique se o servidor do banco de dados está em execução.

## 🌸 Sobre

Esse projeto foi criado como uma aplicação voltada para aprendizado, com o objetivo de explorar o desenvolvimento desktop em Electron, a integração de backend usando Express e o gerencialmento de banco de dados relacionais com MySQL via Knex.

A aplicação conecta-se a um banco de dados local e apresenta os dados de mangás por meio de uma interface gráfica, demonstrando a interação entre um frontend desktop e um backend Node.js executado localmente.

</div>
