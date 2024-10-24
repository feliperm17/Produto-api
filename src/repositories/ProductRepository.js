const { Pool } = require('pg');

class ProdutoRepo {
    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: 'localhost',
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD, 
            port: 5432,
        });
    }

    async findAll() {
        const res = await this.pool.query("SELECT * FROM produtos");
        return res.rows;
    }

    async findById(id) {
        const res = await this.pool.query("SELECT * FROM produtos WHERE id = $1", [id]);
        if (res.rows.length === 0) throw new Error("Produto não encontrado");
        return res.rows[0];
    }

    async create(props) {
        const { descricao, preco, estoque, data } = props;
        const res = await this.pool.query(
            "INSERT INTO produtos (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4) RETURNING *",
            [descricao, preco, estoque, data]
        );
        return res.rows[0];
    }

    async update(id, props) {
        const { descricao, preco, estoque, data } = props;
        const res = await this.pool.query(
            "UPDATE produtos SET descricao = $1, preco = $2, estoque = $3, data = $4 WHERE id = $5 RETURNING *",
            [descricao, preco, estoque, data, id]
        );

        if (res.rows.length === 0) throw new Error("Produto não encontrado");
        return res.rows[0];
    }

    async delete(id) {
        const res = await this.pool.query("DELETE FROM produtos WHERE id = $1", [id]);
        if (res.rowCount === 0) throw new Error("Produto não encontrado");
    }
}