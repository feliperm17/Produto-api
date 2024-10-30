const express = require("express");
const produtosRoutes = require("./src/entities/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1/produtos", produtosRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));