🍽️ Cardápio

Aplicação full stack de cardápio digital. Permite cadastrar pratos (nome, preço e imagem) e listá-los em cards na tela.

Projeto de estudo feito acompanhando o conteúdo do canal da Fernanda Kipper.

Sumário
Tecnologias
Estrutura do projeto
Como rodar localmente
API
Melhorias futuras
Tecnologias

Back-end

Java 21
Spring Boot 4 (Web MVC + Spring Data JPA)
PostgreSQL
Lombok
Maven

Front-end

React 19 + TypeScript
Vite
TanStack React Query
Axios
Estrutura do projeto
.
├── cardapio/                  # Back-end (Spring Boot)
│   └── src/main/java/com/Juan_J0rge/cardapio/
│       ├── controller/        # FoodController (endpoints REST)
│       ├── Entity/            # Food (entidade JPA)
│       ├── Repository/        # FoodRepository
│       └── dto/               # FoodRequestDTO / FoodResponseDTO
│
└── front/
    └── cardapio/              # Front-end (React + Vite)
        └── src/
            ├── components/    # card e create-modal
            ├── hooks/         # useFoodData e useFoodDataMutate
            └── interface/     # FoodData
Como rodar localmente
Pré-requisitos
JDK 21
Node.js (versão LTS) e npm
PostgreSQL
1. Banco de dados

Crie um banco chamado food no PostgreSQL:

sql
CREATE DATABASE food;

O back-end usa, por padrão, o usuário postgres na porta 5432. Se o seu usuário ou senha forem diferentes, ajuste em cardapio/src/main/resources/application.properties. A tabela food é criada automaticamente (spring.jpa.hibernate.ddl-auto=update).

2. Back-end
bash
cd cardapio
./mvnw spring-boot:run

No Windows: mvnw.cmd spring-boot:run.

A API sobe em http://localhost:8080.

3. Front-end

Em outro terminal:

bash
cd front/cardapio
npm install
npm run dev

O Vite mostra no terminal o endereço do front (normalmente http://localhost:5173).

API

URL base: http://localhost:8080

Método	Rota	Descrição
GET	/food/listfood	Lista todos os pratos
POST	/food	Cadastra um novo prato

Exemplo de corpo do POST /food:

json
{
  "title": "Pizza de calabresa",
  "price": 45,
  "image": "https://exemplo.com/pizza.jpg"
}

Exemplo de resposta do GET /food/listfood:

json
[
  {
    "id": 1,
    "title": "Pizza de calabresa",
    "image": "https://exemplo.com/pizza.jpg",
    "price": 45
  }
]
Melhorias futuras
 Editar e excluir pratos (PUT e DELETE)
 Validação dos campos no back-end e no front-end
 Restringir o CORS ao domínio do front
 Mover credenciais do banco para variáveis de ambiente
 Fazer o deploy (Vercel + Render + Neon)
