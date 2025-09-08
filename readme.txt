🔹 1. API de Produtos com Autenticação

Objetivo: Mostrar backend, CRUD e autenticação.
Stack: Node.js, Express, MongoDB, JWT.

O que fazer:

Criar servidor com Express.

Rotas CRUD:

POST /products → criar produto.

GET /products → listar produtos.

PUT /products/:id → atualizar produto.

DELETE /products/:id → deletar produto.

Rotas de login/register com JWT.

Middleware pra proteger rotas (authMiddleware).

MongoDB Atlas pra salvar dados (produto: nome, preço, categoria).

Testar com Postman.