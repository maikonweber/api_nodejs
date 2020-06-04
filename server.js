// Importando as Bibliotecas
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');

// Cria a função Express

const app = express();
app.use(express.json());
app.use(cors());

// iniciando o DB

mongoose.connect("mongodb://localhost:27017/nodeapi", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//Importando os Models para server

requireDir("./src/model");
const Product = mongoose.model("Product");

//rotas


app.use("/api", require("./src/routes/routes"));

// Ouvir a Porta 3001

app.listen(3001);

