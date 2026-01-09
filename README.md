# V-Lopes Engineering

Website institucional moderno e responsivo para empresa de engenharia industrial, desenvolvido com React, TypeScript e Vite.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Motion (Framer Motion)** - Animações fluidas
- **i18next** - Internacionalização (PT, EN, ES)
- **EmailJS** - Envio de emails via formulário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📜 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run build:dev    # Build em modo desenvolvimento
npm run preview      # Preview do build de produção
npm run lint         # Executa o linter
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### Configuração do EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta e configure um serviço de email
3. Crie um template de email
4. Obtenha sua Public Key
5. Adicione as credenciais no arquivo `.env`

## 📁 Estrutura do Projeto

```
v-lopes-eng/
├── public/              # Arquivos estáticos
│   ├── flags/           # Bandeiras para seletor de idioma
│   ├── projetos/        # Imagens dos projetos
│   └── tools/           # Logos de ferramentas
├── src/
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes UI reutilizáveis
│   │   ├── About.tsx   # Seção Sobre Nós
│   │   ├── Contact.tsx # Formulário de contato
│   │   ├── Footer.tsx  # Rodapé
│   │   ├── Hero.tsx    # Hero section
│   │   ├── Navigation.tsx # Navegação
│   │   ├── Projects.tsx  # Portfólio de projetos
│   │   └── Services.tsx  # Serviços oferecidos
│   ├── locales/        # Arquivos de tradução
│   │   ├── pt.json     # Português
│   │   ├── en.json     # Inglês
│   │   └── es.json     # Espanhol
│   ├── lib/            # Utilitários e configurações
│   │   ├── animations.ts # Animações reutilizáveis
│   │   ├── i18n.ts     # Configuração i18n
│   │   └── utils.ts    # Funções utilitárias
│   └── main.tsx        # Entry point
└── package.json
```

## ✨ Features

- ✅ **Design Responsivo** - Adaptável para mobile, tablet e desktop
- ✅ **Internacionalização** - Suporte para Português, Inglês e Espanhol
- ✅ **Animações Suaves** - Transições e animações com Motion
- ✅ **Formulário de Contato** - Integração com EmailJS
- ✅ **Portfólio Interativo** - Galeria de projetos com modal
- ✅ **Navegação Suave** - Scroll suave entre seções
- ✅ **SEO Otimizado** - Meta tags e estrutura semântica
- ✅ **Performance** - Build otimizado com Vite
- ✅ **Acessibilidade** - Componentes acessíveis com Radix UI

## 🎨 Seções do Site

1. **Hero** - Apresentação principal com estatísticas
2. **Sobre Nós** - Informações da empresa e valores
3. **Serviços** - Lista de serviços oferecidos
4. **Projetos** - Portfólio com filtros e modal
5. **Contato** - Formulário e informações de contato
6. **Footer** - Links e informações adicionais

## 🚀 Deploy

### Vercel

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente no painel da Vercel:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. O deploy será automático a cada push

### Build Manual

```bash
npm run build
```

Os arquivos de produção estarão em `dist/`

## 📝 Licença

Este projeto é privado e proprietário.

## 👨‍💻 Desenvolvido com

- React + TypeScript
- Vite
- Tailwind CSS
- Motion
- i18next

---

**V-Lopes Engineering** - Transformando ideias em projetos de engenharia com excelência e inovação.

