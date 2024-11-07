const getProdutos = "SELECT * FROM produtos";
const getProdutoById = "SELECT * FROM produtos WHERE id = $1";
const checkProduto = "SELECT s FROM produtos s WHERE s.descricao = $1";
const addProduto = "INSERT INTO produtos (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4)";
const deleteProduto = "DELETE FROM produtos WHERE id = $1";
const updateProduto = "UPDATE produtos SET descricao = $1, preco = $2, estoque = $3, data = $4 WHERE id = $5";

module.exports = {
    getProdutos,
    getProdutoById,
    checkProduto,
    addProduto,
    deleteProduto,
    updateProduto,
};