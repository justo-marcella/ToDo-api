const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const sqlite = require("sqlite3");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const porta = 3000;

const usuarioController = require("../src/controllers/usuarioController");
const tarefaController = require("../src/controllers/tarefaController");
const bd = require("../src/infra/sqlite-db")


usuarioController(app, bd);
tarefaController(app, bd);

app.listen(porta, console.log("Servidor funcionando na porta 3000"));


