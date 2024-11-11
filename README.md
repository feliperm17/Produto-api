# PRODUTO-API

Este projeto fornece uma API para gerenciar produtos, incluindo criação, atualização, consulta e remoção de produtos. A API foi construída em Node.js com o framework Express e usa PostgreSQL para armazenamento dos dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para criação da API.
- **PostgreSQL**: Banco de dados relacional.

## Pré-requisitos

- **Node.js**, **npm** e **PostgreSQL** instalados.

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/feliperm17/Produto-api.git
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente**:

   Na raiz do projeto, crie um arquivo `.env` com as seguintes variáveis:

   ```env
   APP_PORT=3000              # Porta onde a API será executada
   DB_USER=                    # Usuário do banco de dados
   DB_HOST=localhost           # Host do banco de dados
   DB_DATABASE=                # Nome do banco de dados
   DB_PASSWORD=                # Senha do banco de dados
   DB_PORT=5432                # Porta do banco de dados
   ```

4. **Crie as tabelas no banco de dados**:

   Execute a migração para criar a estrutura das tabelas:

   ```bash
   npm run migration
   ```

5. **Inicie a API em modo de desenvolvimento**:

   Use o comando abaixo para iniciar o servidor:

   ```bash
   npm run start:dev
   ```

   A API estará disponível em `http://localhost:3000`.

## Endpoints

### 1. Adicionar Produto

- **Método:** `POST`
- **Endpoint:** `/api/v1/produtos`
- **Body (JSON)**:

   ```json
   {
       "descricao": "Produto A",
       "preco": "20.00",
       "estoque": 50,
       "data": "2025-12-03T08:37:51.852Z"
   }
   ```

### 2. Deletar Produto

- **Método:** `DELETE`
- **Endpoint:** `/api/v1/produtos/:id`
- **Descrição:** Substitua `:id` pelo ID do produto que deseja remover.

### 3. Atualizar Produto

- **Método:** `PUT`
- **Endpoint:** `/api/v1/produtos/:id`
- **Body (JSON)**:

   ```json
   {
       "descricao": "Produto A",
       "preco": "20.00",
       "estoque": 50,
       "data": "2025-12-03T08:37:51.852Z"
   }
   ```

### 4. Consultar Produto

- **Método:** `GET`
- **Endpoint:** `/api/v1/produtos/:id`
- **Descrição:** Substitua `:id` pelo ID do produto para visualizar suas informações.

### 5. Listar Todos os Produtos

- **Método:** `GET`
- **Endpoint:** `/api/v1/produtos`

## Licença

Este projeto utiliza a Licença MIT.

## Autor

Desenvolvido por Felipe Roskosz Moran.