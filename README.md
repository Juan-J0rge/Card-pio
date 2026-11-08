<div align="center">

# 🍽️ Cardápio

**Aplicação full stack para cadastrar e exibir pratos de um cardápio digital.**

![Java](https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-4-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
<br>
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<sub>Projeto de estudo feito acompanhando o conteúdo do canal da Fernanda Kipper.</sub>

</div>

---
## Sumário

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como rodar localmente](#como-rodar-localmente)
- [API](#api)
- [Melhorias futuras](#melhorias-futuras)

---

## Sobre

O Cardápio é uma aplicação full stack que desenvolvi para cadastrar e exibir pratos de um cardápio digital.

A aplicação permite informar o nome, o preço e a imagem de cada prato. Depois do cadastro, os itens aparecem em uma grade de cards na interface.

Atualmente, o projeto conta com:

- Cadastro de pratos por meio de um modal.
- Exibição dos pratos em cards com imagem, nome e preço.
- Atualização automática da listagem após um novo cadastro.

---

## Tecnologias utilizadas

| Camada | Tecnologias |
|---|---|
| Back-end | Java 21, Spring Boot 4, Spring Data JPA, Lombok e Maven |
| Banco de dados | PostgreSQL |
| Front-end | React 19, TypeScript, Vite, TanStack React Query e Axios |

---

## Estrutura do projeto

```text
.
├── cardapio/                      # Back-end
│   └── src/main/java/com/Juan_J0rge/cardapio/
│       ├── controller/            # Endpoints REST
│       ├── Entity/                # Entidade Food
│       ├── Repository/            # Acesso ao banco
│       └── dto/                   # DTOs de entrada e saída
│
└── front/
    └── cardapio/                  # Front-end
        └── src/
            ├── components/        # Componentes da interface
            ├── hooks/             # Hooks para consultas e cadastros
            └── interface/         # Tipagem dos dados
```

---

## Como rodar localmente

### Pré-requisitos

- [JDK 21](https://adoptium.net/)
- [Node.js](https://nodejs.org/) (versão LTS) e npm
- [PostgreSQL](https://www.postgresql.org/)

### 1. Banco de dados

Crie um banco chamado `food`:

```sql
CREATE DATABASE food;
```

O back-end utiliza, por padrão, o usuário `postgres` na porta `5432`. Caso suas configurações sejam diferentes, ajuste os dados de conexão em `cardapio/src/main/resources/application.properties`.

A tabela é criada automaticamente pelo JPA.

### 2. Executando o back-end

Entre na pasta do back-end e inicie a aplicação:

```bash
cd cardapio
./mvnw spring-boot:run
```

No Windows:

```bash
mvnw.cmd spring-boot:run
```

A API ficará disponível em:

```text
http://localhost:8080
```

### 3. Executando o front-end

Em outro terminal, entre na pasta do front-end, instale as dependências e inicie o Vite:

```bash
cd front/cardapio
npm install
npm run dev
```

O endereço será exibido no terminal, normalmente:

```text
http://localhost:5173
```

---

## API

URL base:

```text
http://localhost:8080
```

Atualmente, a API possui dois endpoints:

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/food/listfood` | Retorna todos os pratos cadastrados |
| `POST` | `/food` | Cadastra um novo prato |

### Cadastro de prato

`POST /food`

Exemplo de corpo da requisição:

```json
{
  "title": "Pizza de calabresa",
  "price": 45,
  "image": "https://exemplo.com/pizza.jpg"
}
```

### Listagem de pratos

`GET /food/listfood`

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "title": "Pizza de calabresa",
    "image": "https://exemplo.com/pizza.jpg",
    "price": 45
  }
]
```

---

## Melhorias futuras

Algumas funcionalidades que pretendo implementar nas próximas versões:

- Implementar a edição e exclusão de pratos (`PUT` e `DELETE`).
- Adicionar validações dos campos no back-end e no front-end.
- Restringir o CORS ao domínio do front-end.
- Utilizar variáveis de ambiente para armazenar as credenciais do banco.
- Realizar o deploy da aplicação utilizando Vercel, Render e Neon.

---

<div align="center">

Feito com ☕ e muito estudo.

---
## Autor

**Juan Jorge**

Estudante de Ciência da Computação e desenvolvedor com foco em Java e Spring Boot.

[GitHub](https://github.com/Juan-J0rge) • [LinkedIn](https://www.linkedin.com/in/devjuan)


</div>

</div>
