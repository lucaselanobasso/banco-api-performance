# 💥 Testes de Performance com K6 - Banco API

Este repositório contém um conjunto de testes de performance desenvolvidos em JavaScript utilizando o [K6](https://k6.io/), com foco na análise de endpoints de autenticação e transferência de uma API bancária.

---

## 🧪 Tecnologias Utilizadas

- [K6](https://k6.io/) — Ferramenta de testes de carga e performance
- JavaScript — Linguagem base dos scripts de teste
- Node.js — Ambiente para gerenciamento local de dependências e execução de scripts auxiliares

---

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── config/
│   └── config.local.json
├── fixtures/
│   ├── postLogin.json
│   └── postTransferencias.json
├── helpers/
│   └── autenticacao.js
├── tests/
│   ├── login.test.js
│   └── transferencias.test.js
├── utils/
│   └── variaveis.js
├── .gitignore
├── html-report.html
└── README.md
```

---

## 🎯 Objetivo de cada grupo de arquivos

- **config/**: Contém arquivos de configuração locais, como URLs e variáveis sensíveis.
- **fixtures/**: Armazena os dados de payload para requisições utilizadas nos testes.
- **helpers/**: Funções de apoio, como autenticação e geração de tokens.
- **tests/**: Scripts de teste que simulam o uso da API, organizados por funcionalidades.
- **utils/**: Variáveis e constantes reutilizáveis em diferentes partes do projeto.
- **html-report.html**: Relatório de execução dos testes (gerado automaticamente e ignorado no Git).

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/lucaselanobasso/banco-api-performance.git
cd banco-api-performance
```

2. Instale o K6 (caso ainda não tenha instalado):

- [Guia de instalação oficial do K6](https://k6.io/docs/getting-started/installation/)

---

## 🚀 Modo de Execução

Antes de executar os testes, defina a variável de ambiente `BASE_URL` com a URL base da sua API caso não esteja usando o `config.local.json`. Exemplo:

```bash
k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

### Executar testes normalmente:

```bash
k6 run tests/login.test.js
k6 run tests/transferencias.test.js
```

### Acompanhar execução com dashboard em tempo real:

```bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

### Exportar relatório em HTML:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js -e BASE_URL=http://localhost:3000 
```

> O arquivo `html-report.html` é exportado localmente.

---

📌 **Observação**: Certifique-se de que as configurações necessárias estão devidamente ajustadas no arquivo `config/config.local.json` e que os dados em `fixtures/` estão condizentes com o funcionamento da sua API.

---

🧠 Contribuições, dúvidas ou sugestões são bem-vindas!
