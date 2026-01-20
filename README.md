<div align="center">

> Esta sessão está em inglês! Para ler em português, [clique aqui](./README.pt-BR.md).

  # 🌸 Jade-san no Subarashii Manga 🌸
  
  #### Subarashii Manga is a desktop application built with Electron that displays a local manga catalog stored in a MySQL database.

> 🚨 **WARNING**! 🚨 This project **requires** **MySQL** to be installed and properly configured.  
> If you don't have it yet, you can download it from the official website by clicking [this link](https://www.mysql.com/downloads/).
</div>

<div align= "left">
  
## 🤔 What is it?

- A **desktop application** built with **Electron**
- A manga display and catalog project
- Designed to visually organize and browse manga titles
- Uses a **MySQL database** for data persistence
- Developed as a learning project focused on desktop applications and database integration

## 🧠 How it works

- The application runs as a desktop app powered by Electron
- The main process manages the application window and system events
- A local server handles database communication
- Data is retrieved from a MySQL database and rendered in the interface
- User interactions are handled through IPC communication

## ⚙️ Requirements
- **Node.js** (recommended: LTS version)
- **npm** (comes with Node.js)
- **MySQL** (installed, running, and properly configured)

## 📦 Installation


**1. Clone the repository and install dependencies**

```bash
git clone https://github.com/lfjade/https://github.com/lfjade/subarashii-manga.git
cd subarashii-manga
npm install
```

**2. Setup the databse**

A database dump (.sql) is provided to help you quickly set up the required schema and data.
 - Create a new MySQL database named **subarashii_manga**
 - Import the dump file into your database:

```bash
 mysql -u your_user -p subarashii_manga < db/dump_subarashiimanga.sql
 ```

> You can check how this database was built by opening the image [db/model.png](https://github.com/lfjade/subarashii-manga/blob/main/db/model.png).

**3. Configure knexfile.js**
   
This project uses **Knex.js** to connect to a **MySQL** database.
There is a sample of the **knexfile.js** at db/knexfile-exemplo.js, where you must add your credentials in the correspondent fields. Rename the file to "knexfile.js".
   
> The knexfile.js is required but is intentionally ignored by git, since it contains environment-specific and sensitive information.

**4. Start the application**
   ```bash
   npm start
   ```

> ⚠️ Make sure your MySQL server is running before starting the application.

## 🧰 Tech

- **Electron** — desktop application framework
- **Node.js** — backend runtime
- **Express** — local server and API layer
- **MySQL** — relational database
- **Knex.js** — SQL query builder and database connection
- **JavaScript (ES6+)** — application logic
- **MVC Architecture** — separation of concerns (Model, View, Controller)

## 🗂️ Status

This project is **functionally complete** and fulfills its original purpose as a learning-focused Electron application.

The core features — database integration, data display, and MVC structure — are fully implemented and stable.

Some **minor refinements and UI/UX improvements** were intentionally left out, as the project reached a natural stopping point and is no longer under active development.

## ⚠️ Known Issues

- This project may report security warnings related to `electron-builder` when running `npm audit`.

  These vulnerabilities affect **build-time dependencies only** and do **not impact the application at runtime**.

  For educational and development purposes, these warnings were intentionally left unresolved to avoid introducing breaking changes.

- **The application depends on a local backend server.**
If the database or server is not running, the UI may fail to load data.

- If you encounter issues related to Electron startup or missing data, try reinstalling dependencies and ensure the database server is running.


## 🌸 About
This project was created as a learning-focused application to explore desktop development with Electron,
backend integration using Express, and relational database management with MySQL via Knex.

The application connects to a local database and presents manga data through a graphical interface,
demonstrating the interaction between a desktop frontend and a Node.js backend running locally.
  
</div>
