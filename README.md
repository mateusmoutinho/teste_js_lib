# teste-js-lib

A minimal TypeScript library and CLI boilerplate.

## Instalação

### Usando em outro projeto (como biblioteca)

Para instalar e utilizar esta biblioteca em outro projeto, você pode instalá-la via npm apontando para o repositório ou para o caminho local:

```bash
# Instalando a partir de um repositório Git
npm install https://github.com/mateusmoutinho/teste-js-lib.git


# OU instalando a partir de um diretório local da sua máquina
npm install /caminho/para/o/teste_js_lib
```

> **Nota:** Se a biblioteca for publicada no npm no futuro, a instalação será simplesmente `npm install teste-js-lib`.

### Desenvolvimento local

Para instalar as dependências e trabalhar no código desta biblioteca localmente:

```bash
npm install
```

## Build

Para compilar o código TypeScript (necessário antes de testar localmente ou publicar), execute:

```bash
npm run build
```

## Uso

### Como Biblioteca (Importando em outro projeto)

Após instalar a biblioteca no seu projeto, você pode importá-la e utilizá-la da seguinte forma:

```typescript
import { greet } from 'teste-js-lib';

const message = greet('Mundo');
console.log(message); // "Hello, Mundo! This is from the library."
```

### Como CLI

O projeto também expõe um CLI. Após o build, você pode executá-lo localmente através do Node:

```bash
node dist/cli.js
node dist/cli.js "Seu Nome"
```
