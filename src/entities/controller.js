const pool = require('../../db');
const queries = require('./queries');

const getProdutos = (req, res) => {
    pool.query(queries.getProdutos, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getProdutoById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProdutoById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addProduto = (req, res) =>{
    const { descricao, preco, estoque, data } = req.body;

    pool.query(queries.checkProduto, [descricao], (error, results) =>{
        if(results.rows.length) {
            res.send("Produto já Existente.");
        }
        pool.query(queries.addProduto, [descricao, preco, estoque, data], (error, results) =>
    {
        if (error) throw error;
        res.status(201).send("Produto criando com sucesso");
    });
    });
};

const deleteProduto = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getProdutoById, [id], (error, results) => {
        const produtoNaoEncontrado = !results.rows.length;
        if(produtoNaoEncontrado){
            res.send("Produto não existente no Banco de dados")
        }

        pool.query(queries.deleteProduto, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Produto Deletado com sucesso");
        });
    });
};

const updateProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const { descricao, preco, estoque, data } = req.body;

    pool.query(queries.getProdutoById, [id], (error, results) => {
        const produtoNaoEncontrado = !results.rows.length;

        if(produtoNaoEncontrado){
            res.send("Produto Não Encontrado");
        }

        pool.query(queries.updateProduto, [descricao, preco, estoque, data, id], (error, results) => {
            if (error) throw error
            res.status(200).send("Produto Atualizado com sucesso");
        });
    });
};

module.exports = {
    getProdutos,
    getProdutoById,
    addProduto,
    deleteProduto,
    updateProduto,
};