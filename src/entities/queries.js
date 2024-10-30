const getProdutos = "SELECT * FROM produtos";
const getProdutoById = "SELECT * FROM produtos WHERE id = $1";
const checkProduto = "SELECT s FROM produtos s WHERE s.descricao = $1";
const addProduto = "INSERT INTO produtos (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4)";
const deleteProduto = "DELETE FROM produtos WHERE id = $1";
const updateProduto = "UPDATE produtos SET descricao = $1 WHERE id = $2";

module.exports = {
    getProdutos,
    getProdutoById,
    checkProduto,
    addProduto,
    deleteProduto,
    updateProduto,
};