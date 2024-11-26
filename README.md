# Node.js Knowledge Project

Este projeto é uma API REST desenvolvida com Node.js e TypeScript, demonstrando diferentes operações de array e implementação de middlewares em Express.

## 🚀 Funcionalidades

- Operações com Arrays:
  - Array.find()
  - Array.filter()
  - Array.map()
- Middleware para logging de requisições
- Implementação de CORS
- TypeScript para tipagem estática

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- CORS

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nodejs-knowledge.git
cd nodejs-knowledge
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 🔌 Endpoints da API

### POST /array-find
Encontra um elemento em um array baseado em uma condição.

**Exemplo de requisição:**
```json
{
  "array": [1, 2, 3, 4, 5],
  "condition": "item > 3"
}
```

### POST /array-filter
Filtra elementos de um array baseado em uma condição.

**Exemplo de requisição:**
```json
{
  "array": [1, 2, 3, 4, 5],
  "condition": "item % 2 === 0"
}
```

### POST /array-map
Transforma elementos de um array.

**Exemplo de requisição:**
```json
{
  "array": [1, 2, 3, 4, 5],
  "transform": "item * 2"
}
```

## 🔒 Segurança

O projeto implementa várias medidas de segurança:
- Proteção contra XSS
- Middleware de logging para monitoramento
- CORS configurado
- Validação de entrada de dados

## 📦 Estrutura do Projeto

```
nodejs-knowledge/
├── src/
│   ├── controllers/
│   │   ├── array-find.controller.ts
│   │   ├── array-filter.controller.ts
│   │   └── array-map.controller.ts
│   └── main.ts
├── package.json
└── tsconfig.json
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✒️ Autor

* **Seu Nome** - *Desenvolvedor* - [seu-usuario](https://github.com/seu-usuario)

## 🎁 Expressões de Gratidão

* Compartilhe este projeto com outras pessoas 📢
* Convide alguém da equipe para uma cerveja 🍺 
* Um agradecimento publicamente 🤓

---
⌨️ com ❤️ por [seu-nome](https://github.com/seu-usuario) 😊
