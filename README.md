# Autenticação JWT com Next.js e TypeScript

Este projeto é um ambiente de estudo e demonstração focado em como a autenticação com **JSON Web Tokens (JWT)** funciona na prática. O objetivo principal foi aprender a integrar um fluxo de autenticação completo, desde a emissão do token no backend até o seu consumo e validação no frontend, usando **Next.js** e **TypeScript**.

---

### Conceitos e Tecnologias

* **Next.js & TypeScript:** Usados para construir tanto o frontend quanto o backend (via API Routes), proporcionando um desenvolvimento unificado e com tipagem segura.
* **JSON Web Tokens (JWT):** O principal método de autenticação. O projeto demonstra como os tokens são gerados e usados para transferir informações de forma segura.
* **Cookies:** Utilizados para armazenar e enviar o token JWT de volta ao servidor em requisições subsequentes, garantindo que o estado de autenticação persista.
* **Interação Frontend-Backend:** O projeto mostra a comunicação entre o cliente e o servidor para autenticar, proteger rotas e buscar dados de usuários.

---

### Funcionalidades

* **Registro de Usuários:** Criação de novas contas.
* **Login e Geração de Token:** Autenticação do usuário e criação de um token JWT.
* **Proteção de Rotas:** Páginas que só podem ser acessadas por usuários autenticados.
* **Logout:** Finalização da sessão e remoção do token.

---
