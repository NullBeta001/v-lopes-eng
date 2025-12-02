# V Lopes Engenharia

A modern, responsive web application for V Lopes Engenharia - specialists in industrial projects, 3D modeling, SolidWorks, AutoCAD, and SketchUp. This project showcases engineering services with a professional, industrial-themed design.

## 🚀 Features

- **Modern UI/UX**: Clean, professional interface with an industrial dark theme
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Type-Safe**: Full TypeScript support for better development experience
- **Component Library**: Built with shadcn/ui and Radix UI primitives
- **Smooth Animations**: Custom animations and transitions for enhanced user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Core Technologies

- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool
- **[React](https://react.dev/)** 18.3 - UI library
- **[TypeScript](https://www.typescriptlang.org/)** 5.8 - Type-safe JavaScript
- **[React Router](https://reactrouter.com/)** 6.30 - Client-side routing

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** 3.4 - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### State Management & Data Fetching

- **[TanStack Query](https://tanstack.com/query)** 5.83 - Powerful data synchronization
- **[React Hook Form](https://react-hook-form.com/)** 7.61 - Performant forms with easy validation
- **[Zod](https://zod.dev/)** 3.25 - TypeScript-first schema validation

### Additional Libraries

- **[Recharts](https://recharts.org/)** - Composable charting library
- **[date-fns](https://date-fns.org/)** - Modern JavaScript date utility library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher (recommended: use [nvm](https://github.com/nvm-sh/nvm) for installation)
- **npm** 9.x or higher (comes with Node.js) or **yarn** / **pnpm**

## 🏗️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd v-lopes-eng
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 📜 Available Scripts

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Starts the development server with hot module replacement |
| `npm run build`     | Creates an optimized production build                     |
| `npm run build:dev` | Creates a development build                               |
| `npm run preview`   | Previews the production build locally                     |
| `npm run lint`      | Runs ESLint to check code quality                         |

## 📁 Project Structure

```
v-lopes-eng/
├── public/                 # Static assets
│   ├── favicon.svg        # Application favicon
│   └── robots.txt         # SEO robots file
├── src/
│   ├── assets/            # Images and media files
│   │   └── hero-bg.jpg    # Hero section background
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── About.tsx      # About section component
│   │   ├── Contact.tsx    # Contact form component
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Hero.tsx       # Hero section component
│   │   ├── Navigation.tsx # Navigation bar component
│   │   ├── Projects.tsx   # Projects showcase component
│   │   └── Services.tsx   # Services section component
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx # Mobile detection hook
│   │   └── use-toast.ts   # Toast notification hook
│   ├── lib/               # Utility functions and configurations
│   │   └── utils.ts       # Utility functions (cn helper, etc.)
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Main landing page
│   │   └── NotFound.tsx   # 404 error page
│   ├── App.tsx            # Root application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind directives
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript config for app code
├── tsconfig.node.json     # TypeScript config for Node.js tools
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🎨 Design System

The application uses a custom industrial dark theme with the following color palette:

- **Background**: Dark navy (`hsl(220 20% 8%)`)
- **Primary**: Gold/Amber (`hsl(38 70% 50%)`)
- **Foreground**: Light cream (`hsl(45 20% 95%)`)
- **Accent**: Gold variations for highlights

The theme is fully customizable through CSS variables defined in `src/index.css`.

## 🔧 Configuration

### Vite Configuration

The Vite configuration (`vite.config.ts`) includes:

- React SWC plugin for fast refresh
- Path aliases (`@` → `./src`)
- Custom server port (8080)
- Network access enabled

### Tailwind Configuration

The Tailwind config (`tailwind.config.ts`) extends the default theme with:

- Custom color palette matching the design system
- Custom animations
- Extended spacing and typography scales
- Dark mode support (class-based)

## 🚢 Deployment

This application can be deployed to any platform that supports static site hosting or Node.js applications:

### Recommended Platforms

- **[Vercel](https://vercel.com/)** - Zero-config deployment for Vite apps
- **[Netlify](https://www.netlify.com/)** - Continuous deployment with build plugins
- **[AWS Amplify](https://aws.amazon.com/amplify/)** - Full-stack deployment platform
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for static sites (requires additional configuration)

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist/` directory, ready to be deployed.

### Environment Variables

If you need to configure environment variables, create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=V Lopes Engenharia
```

Access these variables in your code using `import.meta.env.VITE_*`.

## 🧪 Development

### Code Style

The project uses ESLint for code quality. Run the linter:

```bash
npm run lint
```

### TypeScript

The project is fully typed with TypeScript. Type checking happens automatically during development and build processes.

### Component Development

Components are organized by feature and type:

- **UI Components**: Reusable components in `src/components/ui/`
- **Feature Components**: Page-specific components in `src/components/`
- **Pages**: Route-level components in `src/pages/`

## 📝 License

This project is private and proprietary.

## 👥 Contact

**V Lopes Engenharia**

- Website: [vlopes.com.br](https://vlopes.com.br)
- Email: Contact through the website contact form

---

Built with ❤️ using modern web technologies
