const express = require("express");
const cors = require("cors");
const produtosRoutes = require("./src/entities/routes.js"); // Usando require para CommonJS

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/produtos", produtosRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
