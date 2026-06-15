# 🚀 Trabalho Final – Integração Contínua com GitHub Actions
# Projeto - Desafio Pós

<p align="center">

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-blue?logo=githubactions)
![Node.js](https://img.shields.io/badge/Node.js-24.x-green?logo=node.js)
![Mocha](https://img.shields.io/badge/Mocha-Testes-brown?logo=mocha)
![Status](https://img.shields.io/badge/Status-Concluído-success)
![License](https://img.shields.io/badge/Licença-MIT-blue)

</p>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como atividade prática da disciplina de **Integração Contínua e Entrega Contínua (CI/CD)** da Pós-Graduação.

O objetivo foi implementar uma pipeline utilizando **GitHub Actions**, automatizando a execução de testes unitários e a geração de relatórios.

---

## 🎯 Objetivos Atendidos

| Requisito                    | Status |
| ---------------------------- | ------ |
| Execução por Push            | ✅      |
| Execução Manual              | ✅      |
| Execução Agendada (Schedule) | ✅      |
| Testes Automatizados         | ✅      |
| Geração de Relatórios        | ✅      |
| Armazenamento de Relatórios  | ✅      |
| GitHub Actions               | ✅      |
| README Documentado           | ✅      |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia     | Finalidade               |
| -------------- | ------------------------ |
| Node.js        | Ambiente de execução     |
| JavaScript     | Linguagem de programação |
| Mocha          | Framework de testes      |
| Mochawesome    | Relatórios de execução   |
| GitHub Actions | Pipeline CI/CD           |

---

## 📁 Estrutura do Projeto

```text
Desafio-Pos
│
├── .github
│   └── workflows
│       └── ci-integrated-execution.yml
│
├── src
│   └── gestaoLogin.js
│
├── test
│   └── gestaoLogin.test.js
│
├── .gitignore
├── package.json
└── package-lock.json
```

> 📌 A pasta `reports` é criada automaticamente durante a execução dos testes.

---

## 🔄 Fluxo da Pipeline

```text
Push / Manual / Schedule
            │
            ▼
   Checkout do Código
            │
            ▼
     Configuração Node
            │
            ▼
   Instalação Dependências
            │
            ▼
      Execução Testes
            │
            ▼
    Geração Relatório
            │
            ▼
   Upload do Artifact
```

---

## 🧪 Testes Automatizados

Os testes foram implementados utilizando o framework **Mocha**.

### Cenários Validados

✅ Login realizado com sucesso

✅ Credencial expirada

✅ Usuário não encontrado

✅ Senha incorreta

---

## 📊 Relatórios de Teste

Os relatórios são gerados automaticamente utilizando o **Mochawesome**.

Arquivos gerados:

```text
reports/
├── relatorio-testes.html
└── relatorio-testes.json
```

O relatório apresenta:

* 📈 Quantidade de testes executados
* ✅ Testes aprovados
* ❌ Testes reprovados
* ⏱ Tempo de execução
* 📋 Detalhamento dos cenários

---

## ⚙️ Eventos da Pipeline

### 🚀 Execução por Push

```yaml
push:
  branches:
    - main
```

---

### 👨‍💻 Execução Manual

```yaml
workflow_dispatch:
```

---

### ⏰ Execução Agendada

```yaml
schedule:
  - cron: '*/10 * * * *'
```

> Configuração utilizada apenas para validação do trabalho.

---

## 📦 Armazenamento dos Relatórios

Os relatórios são publicados automaticamente como **Artifacts** do GitHub Actions.

```yaml
- name: Armazenar relatório na pipeline
  uses: actions/upload-artifact@v4
```

Após a execução da pipeline, os relatórios podem ser baixados diretamente na aba **Actions**.

---

## 📚 Conceitos Aplicados

### 🔹 Integração Contínua (CI)

Validação automática do código a cada alteração realizada.

### 🔹 GitHub Actions

Ferramenta de automação utilizada para criar pipelines CI/CD.

### 🔹 Workflow

Fluxo automatizado definido através de arquivos YAML.

### 🔹 Job

Conjunto de tarefas executadas em uma máquina virtual.

### 🔹 Step

Etapas individuais executadas dentro de um Job.

### 🔹 Artifact

Arquivos gerados e armazenados após a execução da pipeline.

---

## 👩‍💻 Autora

**Angelica Oliveira Evangelista**

Analista de Qualidade de Software (QA)

Projeto desenvolvido como atividade prática da Pós-Graduação em Engenharia de Software.
