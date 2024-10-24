class Produto {
    // Propriedades privadas
    #id;
    #descricao;
    #preco;
    #estoque;
    #data;

    constructor({ id, descricao, preco, estoque, data }) {
        this.#id = id || null; // ID pode ser nulo até ser gerado pelo banco
        this.#descricao = descricao;
        this.#preco = preco;
        this.#estoque = estoque;
        this.#data = data || new Date(); // Data padrão é a data atual
    }

    // Métodos para acessar as propriedades
    get id() {
        return this.#id;
    }

    get descricao() {
        return this.#descricao;
    }

    get preco() {
        return this.#preco;
    }

    get estoque() {
        return this.#estoque;
    }

    get data() {
        return this.#data;
    }

    // Método estático para criar um novo produto
    static create({ descricao, preco, estoque, data }) {
        return new Produto({ descricao, preco, estoque, data });
    }

    // Método para converter a instância em JSON
    toJSON() {
        return {
            id: this.#id,
            descricao: this.#descricao,
            preco: this.#preco,
            estoque: this.#estoque,
            data: this.#data
        };
    }
}

// Exemplo de uso
const novoProduto = Produto.create({
    descricao: "Produto B",
    preco: 150.00,
    estoque: 30,
});

console.log(novoProduto.toJSON());
