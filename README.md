# Projeto de Automação de Testes com Playwright

Este projeto contém dois casos de teste automatizados para o site de e-commerce [Automation Exercise](https://automationexercise.com) utilizando o framework **Playwright**. Os testes cobrem:

- **Cadastro de um novo usuário via API**
- **Realização de um pedido após registrar-se antes do checkout**

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Execução dos Testes](#execução-dos-testes)
- [Descrição dos Testes](#descrição-dos-testes)
  - [Teste 1: Cadastro de Novo Usuário via API](#teste-1-cadastro-de-novo-usuário-via-api)
  - [Teste 2: Realizar Pedido Após Registrar-se](#teste-2-realizar-pedido-após-registrar-se)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Considerações Finais](#considerações-finais)

## Pré-requisitos

- **Node.js** (versão 12 ou superior)
- **npm** (geralmente instalado junto com o Node.js)

## Configuração do Ambiente

Antes de executar os testes, certifique-se de que o Node.js e o npm estão instalados em sua máquina.

## Estrutura do Projeto

```
project/
├── tests/
│   ├── api/
│   │   └── registerUser.spec.js
│   └── ui/
│       └── placeOrder.spec.js
├── pageObjects/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── AccountPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── PaymentPage.js
├── utils/
│   └── userUtils.js
├── playwright.config.js
├── package.json
└── README.md
```

## Instalação

1. Clone este repositório ou faça o download dos arquivos.

2. Navegue até o diretório do projeto:

   ```bash
   cd project
   ```

3. Instale as dependências necessárias:

   ```bash
   npm install
   ```

## Execução dos Testes

Para executar **todos os testes**:

```bash
npx playwright test
```

Para executar um teste específico:

- **Teste de API**:

  ```bash
  npx playwright test tests/api/registerUser.spec.js
  ```

- **Teste de Interface**:

  ```bash
  npx playwright test tests/ui/placeOrder.spec.js
  ```

Para executar os testes em modo **não headless** (visualizando o navegador):

```bash
npx playwright test --headed
```

## Descrição dos Testes

### Teste 1: Cadastro de Novo Usuário via API

- **Arquivo**: `tests/api/registerUser.spec.js`

**Descrição**:

Este teste realiza uma requisição **POST** para a API de criação de usuário do site Automation Exercise. Utiliza o módulo **request** do Playwright para enviar os dados necessários e verifica se o usuário foi criado com sucesso.

**Fluxo do Teste**:

1. Gera dados únicos para um novo usuário (nome, email, etc.).
2. Envia uma requisição **POST** para `https://automationexercise.com/api/createAccount` com os dados do usuário.
3. Verifica se a resposta tem o status **201** e contém a mensagem **"User created!"**.

### Teste 2: Realizar Pedido Após Registrar-se

- **Arquivo**: `tests/ui/placeOrder.spec.js`

**Descrição**:

Este teste automatiza o fluxo de compra de um produto no site Automation Exercise, seguindo o **Test Case 15**: *"Place Order: Register before Checkout"*.

**Fluxo do Teste**:

1. Gera dados de um novo usuário e cria o usuário via API.
2. Navega até o site e verifica se a página inicial é exibida corretamente.
3. Clica em **"Signup / Login"** e realiza o login com o usuário criado.
4. Adiciona um produto ao carrinho.
5. Prossegue para o carrinho e verifica se o produto está presente.
6. Continua para o checkout e confirma o endereço de entrega e cobrança.
7. Insere os detalhes de pagamento e finaliza o pedido.
8. Verifica se a mensagem de confirmação **"Your order has been placed successfully!"** é exibida.

**Notas Importantes**:

- **Page Objects**: Utiliza o padrão **Page Object Model** para organizar as interações com as diferentes páginas.
- **Separação de Responsabilidades**: Cada classe e método tem uma responsabilidade única, seguindo boas práticas de programação.

## Tecnologias Utilizadas

- **Playwright**: Framework de automação de testes end-to-end.
- **Node.js**: Ambiente de execução JavaScript.
- **npm**: Gerenciador de pacotes do Node.js.

## Considerações Finais

Este projeto demonstra a capacidade de criar e executar testes automatizados abrangendo tanto a camada de **API** quanto a de **interface de usuário**. Seguindo as especificações do projeto, foram implementados testes que:

- Utilizam conceitos ensinados em aula, como **Page Objects** e separação de responsabilidades.
- Criam massa de dados para execução dos testes, garantindo independência e consistência.
- Seguem boas práticas de desenvolvimento de testes automatizados.
