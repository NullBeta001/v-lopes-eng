# V Lopes Engenharia

Projeto web da V Lopes Engenharia - Especialistas em projetos industriais, modelagem 3D, SolidWorks, AutoCAD e SketchUp.

## Tecnologias

Este projeto foi construído com:

- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **React** - Biblioteca UI
- **shadcn-ui** - Componentes UI
- **Tailwind CSS** - Framework CSS
- **React Router** - Roteamento
- **TanStack Query** - Gerenciamento de estado do servidor

## Como executar o projeto

### Pré-requisitos

- Node.js (recomendado usar nvm para instalação)
- npm ou yarn

### Instalação

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

### Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run build:dev` - Cria build em modo desenvolvimento
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## Estrutura do projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── pages/          # Páginas da aplicação
├── hooks/          # Custom hooks
├── lib/            # Utilitários e configurações
└── index.css       # Estilos globais
```

## Deploy

O projeto pode ser deployado em qualquer plataforma que suporte aplicações Vite/React, como:

- Vercel
- Netlify
- AWS Amplify
- GitHub Pages (com configuração adicional)
