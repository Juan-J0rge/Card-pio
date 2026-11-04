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

## 📋 Sumário

- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como rodar localmente](#-como-rodar-localmente)
- [API](#-api)
- [Melhorias futuras](#-melhorias-futuras)

---

## 💡 Sobre

O **Cardápio** permite cadastrar pratos informando **nome**, **preço** e **imagem**, e exibe todos eles em uma grade de cards.

- ➕ Cadastro de pratos por um modal
- 🖼️ Listagem em cards com imagem, nome e preço
- 🔄 Lista atualizada automaticamente após cada cadastro

---

## 🛠️ Tecnologias

| Camada | Tecnologias |
|:--|:--|
| **Back-end** | Java 21 · Spring Boot 4 · Spring Data JPA · Lombok · Maven |
| **Banco de dados** | PostgreSQL |
| **Front-end** | React 19 · TypeScript · Vite · TanStack React Query · Axios |

---

## 📁 Estrutura do projeto

```text
.
├── cardapio/                      # 🟢 Back-end (Spring Boot)
│   └── src/main/java/com/Juan_J0rge/cardapio/
│       ├── controller/            #    Endpoints REST (FoodController)
│       ├── Entity/                #    Entidade JPA (Food)
│       ├── Repository/            #    Acesso ao banco (FoodRepository)
│       └── dto/                   #    FoodRequestDTO e FoodResponseDTO
│
└── front/
    └── cardapio/                  # 🔵 Front-end (React + Vite)
        └── src/
            ├── components/        #    card e create-modal
            ├── hooks/             #    useFoodData e useFoodDataMutate
            └── interface/         #    Tipo FoodData
```

---

## 🚀 Como rodar localmente

### ✅ Pré-requisitos

- [JDK 21](https://adoptium.net/)
- [Node.js](https://nodejs.org/) (versão LTS) e npm
- [PostgreSQL](https://www.postgresql.org/)

### 1️⃣ Banco de dados

Crie um banco chamado `food`:

```sql
CREATE DATABASE food;
```

> [!NOTE]
> Por padrão o back-end usa o usuário `postgres` na porta `5432`. Se o seu for diferente, ajuste em `cardapio/src/main/resources/application.properties`.
> A tabela `food` é criada automaticamente.

### 2️⃣ Back-end

```bash
cd cardapio
./mvnw spring-boot:run
```

> No Windows: `mvnw.cmd spring-boot:run`

A API fica disponível em **http://localhost:8080**

### 3️⃣ Front-end

Em outro terminal:

```bash
cd front/cardapio
npm install
npm run dev
```

O Vite mostra o endereço no terminal, normalmente **http://localhost:5173**

---

## 🔌 API

**URL base:** `http://localhost:8080`

| Método | Rota | Descrição |
|:--:|:--|:--|
| ![GET](https://img.shields.io/badge/GET-2EA44F?style=flat-square) | `/food/listfood` | Lista todos os pratos |
| ![POST](https://img.shields.io/badge/POST-0969DA?style=flat-square) | `/food` | Cadastra um novo prato |

<details>
<summary><b>📤 Exemplo de corpo do <code>POST /food</code></b></summary>

```json
{
  "title": "Pizza de calabresa",
  "price": 45,
  "image": "https://exemplo.com/pizza.jpg"
}
```

</details>

<details>
<summary><b>📥 Exemplo de resposta do <code>GET /food/listfood</code></b></summary>

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

</details>

---

## 🔮 Melhorias futuras

- [ ] Editar e excluir pratos (`PUT` e `DELETE`)
- [ ] Validação dos campos no back-end e no front-end
- [ ] Restringir o CORS ao domínio do front
- [ ] Mover credenciais do banco para variáveis de ambiente
- [ ] Fazer o deploy (Vercel + Render + Neon)

---

<div align="center">

Feito com ☕ e muito estudo.

</div>
