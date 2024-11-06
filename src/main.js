import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { route } from "./routes/index.js";

dotenv.config({ path: ".env" });

const app = express();

// Configuração do CORS antes das rotas
app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

// Configuração das rotas
app.use(route);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  res.status(500).json({
    message: `Internal Server Error - ${err.message}`
  });
});

// Definindo a porta e inicializando o servidor
const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor conectado na Porta ${PORT}`);
});
