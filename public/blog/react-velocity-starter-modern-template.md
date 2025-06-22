# Create a Modern React Starter Template: Complete Step-by-Step Guide

Learn how to build a production-ready React starter template from scratch, following the exact methodology I used to create React Velocity Starter. This comprehensive tutorial will guide you through creating a modern, scalable React application foundation with the latest tools and best practices.

## 🎯 What You'll Build

By the end of this tutorial, you'll have created:

| Feature | Description |
|---------|-------------|
| **Feature-Based Architecture** | Scalable project structure that grows with complexity |
| **Modern Tooling** | React 19, TypeScript 5.8+, Vite 6+ for optimal DX |
| **Comprehensive Testing** | Vitest, Playwright, MSW for reliable testing |
| **Internationalization** | Type-safe translations with react-i18next |
| **Code Generation** | Plop.js templates for consistent development |
| **Production Ready** | Optimized builds and deployment configuration |

## 📋 Prerequisites

Before we start, ensure you have:

| Requirement | Version | Purpose |
|-------------|---------|---------|
| **Node.js** | 18+ (22+ recommended) | JavaScript runtime |
| **pnpm** | 9+ | Package manager (preferred) |
| **Git** | Latest | Version control |
| **Knowledge** | React, TypeScript, modern JS | Development foundation |

## 🚀 Step 1: Project Initialization and Basic Setup

Let's start by creating our project structure:

```bash
# Create the project directory
mkdir react-velocity-starter
cd react-velocity-starter

# Initialize the project
npm init -y

# Install pnpm globally if you haven't already
npm install -g pnpm

# Update package.json with basic info
```

Update your `package.json`:

```json
{
  "name": "react-velocity-starter",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "description": "Production-ready React TypeScript starter template with modern tooling",
  "keywords": [
    "react",
    "typescript",
    "vite",
    "starter",
    "template",
    "boilerplate"
  ],
  "engines": {
    "node": ">=18.0.0"
  },
  "packageManager": "pnpm@9.14.4"
}
```

## 📦 Step 2: Install Core Dependencies

Install the essential dependencies for our React application:

```bash
# Core React dependencies
pnpm add react@^19.0.0 react-dom@^19.0.0

# Routing
pnpm add react-router-dom@^6.28.0

# State management
pnpm add zustand@^5.0.0 @tanstack/react-query@^5.59.0

# UI and styling
pnpm add @radix-ui/react-slot@^1.2.3 class-variance-authority@^0.7.1 clsx@^2.1.1 tailwind-merge@^2.6.0 lucide-react@^0.522.0

# Internationalization
pnpm add i18next@^23.16.0 react-i18next@^15.1.0 i18next-browser-languagedetector@^8.0.0
```

## 🛠️ Step 3: Install Development Dependencies

```bash
# TypeScript and build tools
pnpm add -D typescript@~5.8.2 @types/react@^19.0.0 @types/react-dom@^19.0.0 vite@^6.0.0 @vitejs/plugin-react@^4.3.3

# Tailwind CSS
pnpm add -D tailwindcss@^4.0.0-beta.5 @tailwindcss/vite@^4.0.0-beta.5 autoprefixer@^10.4.20 postcss@^8.4.49

# Testing dependencies
pnpm add -D vitest@^2.1.5 @vitest/ui@^2.1.5 @vitest/coverage-v8@^2.1.5 jsdom@^25.0.1
pnpm add -D @testing-library/react@^16.0.1 @testing-library/jest-dom@^6.6.3 @testing-library/user-event@^14.5.2
pnpm add -D @playwright/test@^1.48.2
pnpm add -D msw@^2.6.4

# Code quality and development tools
pnpm add -D eslint@^9.15.0 @typescript-eslint/eslint-plugin@^8.15.0 @typescript-eslint/parser@^8.15.0
pnpm add -D eslint-plugin-react-hooks@^5.0.0 eslint-plugin-react-refresh@^0.4.14
pnpm add -D prettier@^3.3.3 prettier-plugin-tailwindcss@^0.6.8
pnpm add -D husky@^9.1.6 lint-staged@^15.2.10
pnpm add -D plop@^4.0.1
pnpm add -D globals@^16.2.0
```

## 🔧 Step 4: Configure TypeScript

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
```

## ⚡ Step 5: Configure Vite

Create `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'query-vendor': ['@tanstack/react-query'],
          'ui-vendor': ['@radix-ui/react-slot', 'class-variance-authority', 'clsx'],
        },
      },
    },
  },
})
```

## 🎨 Step 6: Configure Tailwind CSS

Create `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

## 📁 Step 7: Create Project Structure

Set up the feature-based architecture:

```bash
# Create the main source structure
mkdir -p src/{features,shared,test,types}

# Create feature modules
mkdir -p src/features/home/{components,pages,hooks,store}

# Create shared modules
mkdir -p src/shared/{components,hooks,store,utils,api,constants,i18n}

# Create shared component categories
mkdir -p src/shared/components/ui
mkdir -p src/shared/i18n/locales

# Create test utilities
mkdir -p src/test/{mocks,utils}
```

### 🏗️ Project Architecture Overview

| Directory | Purpose | Examples |
|-----------|---------|----------|
| **`src/features/`** | Business domain modules | `home/`, `auth/`, `dashboard/` |
| **`src/shared/components/`** | Reusable UI components | `Button`, `Card`, `Layout` |
| **`src/shared/hooks/`** | Custom React hooks | `useTheme`, `useAuth` |
| **`src/shared/store/`** | Global state management | Theme, user preferences |
| **`src/shared/utils/`** | Utility functions | `cn`, `formatDate`, `debounce` |
| **`src/shared/i18n/`** | Internationalization | Translations, language config |

## 🎨 Step 8: Setup Global Styles and Theme

Create `src/index.css`:

```css
@import 'tailwindcss';

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## 🛠️ Step 9: Create Utility Functions

Create `src/shared/utils/cn.ts`:

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Create `src/shared/utils/index.ts`:

```typescript
export { cn } from './cn'

// Type-safe environment variables
export const env = {
  NODE_ENV: import.meta.env.NODE_ENV,
  PROD: import.meta.env.PROD,
  DEV: import.meta.env.DEV,
} as const

// Utility functions
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}
```

## 🧩 Step 10: Create Shared Components

Create `src/shared/components/ui/Button.tsx`:

```typescript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

Create `src/shared/components/ui/Card.tsx`:

```typescript
import * as React from 'react'
import { cn } from '@/shared/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## 🎨 Step 11: Setup Theme Management

Create `src/shared/hooks/useTheme.ts`:

```typescript
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system'
    }
    return 'system'
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}
```

Create `src/shared/store/themeStore.ts`:

```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light' | 'system'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => {
        const { theme } = get()
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        set({ theme: nextTheme })
      },
    }),
    {
      name: 'theme-storage',
    }
  )
)
```

## 🌍 Step 12: Setup Internationalization

Create `src/shared/i18n/locales/en.json`:

```json
{
  "common": {
    "loading": "Loading...",
    "error": "Something went wrong",
    "retry": "Try again",
    "cancel": "Cancel",
    "save": "Save",
    "delete": "Delete",
    "edit": "Edit",
    "close": "Close"
  },
  "navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    "settings": "Settings"
  },
  "home": {
    "title": "Welcome to React Velocity Starter",
    "subtitle": "A modern React TypeScript starter template with best practices built-in",
    "features": {
      "title": "Features",
      "modern": "Modern Stack",
      "modernDesc": "React 19, TypeScript 5.8+, Vite 6+",
      "testing": "Testing Ready",
      "testingDesc": "Vitest, Playwright, MSW configured",
      "i18n": "Internationalization",
      "i18nDesc": "Multi-language support with type safety",
      "performance": "Performance",
      "performanceDesc": "Optimized builds and code splitting"
    }
  }
}
```

Create `src/shared/i18n/locales/es.json`:

```json
{
  "common": {
    "loading": "Cargando...",
    "error": "Algo salió mal",
    "retry": "Intentar de nuevo",
    "cancel": "Cancelar",
    "save": "Guardar",
    "delete": "Eliminar",
    "edit": "Editar",
    "close": "Cerrar"
  },
  "navigation": {
    "home": "Inicio",
    "about": "Acerca de",
    "contact": "Contacto",
    "settings": "Configuración"
  },
  "home": {
    "title": "Bienvenido a React Velocity Starter",
    "subtitle": "Una plantilla moderna de React TypeScript con mejores prácticas incluidas",
    "features": {
      "title": "Características",
      "modern": "Stack Moderno",
      "modernDesc": "React 19, TypeScript 5.8+, Vite 6+",
      "testing": "Listo para Pruebas",
      "testingDesc": "Vitest, Playwright, MSW configurados",
      "i18n": "Internacionalización",
      "i18nDesc": "Soporte multiidioma con seguridad de tipos",
      "performance": "Rendimiento",
      "performanceDesc": "Compilaciones optimizadas y división de código"
    }
  }
}
```

Create `src/shared/i18n/index.ts`:

```typescript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import es from './locales/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  })

export default i18n
```

## 🏗️ Step 13: Create Layout Components

Create `src/shared/components/Layout.tsx`:

```typescript
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { ErrorBoundary } from './ErrorBoundary'

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  )
}
```

Create `src/shared/components/Header.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold">
            React Velocity
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t('navigation.home')}
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t('navigation.about')}
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t('navigation.contact')}
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
```

Create `src/shared/components/ThemeToggle.tsx`:

```typescript
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/Button'
import { useTheme } from '@/shared/hooks/useTheme'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

## 🏠 Step 14: Create Feature Components

Create `src/features/home/components/FeatureCard.tsx`:

```typescript
import { Card, CardHeader, CardTitle, CardDescription } from '@/shared/components/ui/Card'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="transition-colors hover:bg-muted/50">
      <CardHeader>
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
```

Create `src/features/home/pages/Home.tsx`:

```typescript
import { useTranslation } from 'react-i18next'
import { Code, TestTube, Globe, Zap } from 'lucide-react'
import { FeatureCard } from '../components/FeatureCard'

export function Home() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: t('home.features.modern'),
      description: t('home.features.modernDesc'),
    },
    {
      icon: <TestTube className="h-6 w-6 text-primary" />,
      title: t('home.features.testing'),
      description: t('home.features.testingDesc'),
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t('home.features.i18n'),
      description: t('home.features.i18nDesc'),
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: t('home.features.performance'),
      description: t('home.features.performanceDesc'),
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {t('home.title')}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('home.features.title')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-testid="feature-list">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </div>
  )
}
```

## 🧪 Step 15: Setup Testing Environment

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Create `src/test/setup.ts`:

```typescript
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
```

Create `src/test/utils/test-utils.tsx`:

```typescript
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/shared/i18n'

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

interface AllProvidersProps {
  children: React.ReactNode
}

function AllProviders({ children }: AllProvidersProps) {
  const queryClient = createTestQueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </BrowserRouter>
  )
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
```

## 🧪 Step 16: Create Component Tests

Create `src/features/home/components/__tests__/FeatureCard.test.tsx`:

```typescript
import { render, screen } from '@/test/utils/test-utils'
import { FeatureCard } from '../FeatureCard'
import { Code } from 'lucide-react'

describe('FeatureCard', () => {
  const mockProps = {
    icon: <Code data-testid="feature-icon" />,
    title: 'Test Feature',
    description: 'This is a test feature description',
  }

  it('renders correctly', () => {
    render(<FeatureCard {...mockProps} />)
    
    expect(screen.getByTestId('feature-icon')).toBeInTheDocument()
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument()
  })

  it('has correct structure and styling', () => {
    render(<FeatureCard {...mockProps} />)
    
    const card = screen.getByText('Test Feature').closest('div')
    expect(card).toHaveClass('transition-colors')
  })
})
```

## 🎭 Step 17: Setup MSW for API Mocking

Create `src/test/mocks/handlers.ts`:

```typescript
import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock API endpoints
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    })
  }),

  http.get('/api/projects', () => {
    return HttpResponse.json([
      { id: '1', name: 'React Velocity', status: 'active' },
      { id: '2', name: 'UI Kit', status: 'completed' },
    ])
  }),

  http.post('/api/contact', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json(
      { message: 'Message sent successfully', id: '123' },
      { status: 201 }
    )
  }),
]
```

Create `src/test/mocks/server.ts`:

```typescript
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

## 🏗️ Step 18: Setup Code Generation with Plop

Create `plopfile.js`:

```javascript
export default function (plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
        validate: (value) => {
          if (!value) return 'Component name is required'
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Component name must be in PascalCase'
          }
          return true
        },
      },
      {
        type: 'list',
        name: 'location',
        message: 'Where should this component be created?',
        choices: ['shared/components', 'features/home/components'],
        default: 'shared/components',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{location}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{location}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component.test.hbs',
      },
    ],
  })

  // Feature generator
  plop.setGenerator('feature', {
    description: 'Create a new feature module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name (lowercase):',
        validate: (value) => {
          if (!value) return 'Feature name is required'
          if (!/^[a-z][a-z0-9-]*$/.test(value)) {
            return 'Feature name must be lowercase with optional hyphens'
          }
          return true
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/pages/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/feature-page.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/components/index.ts',
        template: '// Export feature components here\n',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/hooks/index.ts',
        template: '// Export feature hooks here\n',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/store/index.ts',
        template: '// Export feature stores here\n',
      },
    ],
  })

  // Hook generator
  plop.setGenerator('hook', {
    description: 'Create a new custom hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Hook name (without "use" prefix):',
        validate: (value) => {
          if (!value) return 'Hook name is required'
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Hook name must be in PascalCase'
          }
          return true
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/shared/hooks/use{{pascalCase name}}.ts',
        templateFile: 'plop-templates/hook.hbs',
      },
    ],
  })
}
```

### 📝 Create Plop Templates

Create the template files in `plop-templates/` directory:

`plop-templates/component.hbs`:

```handlebars
import { cn } from '@/shared/utils'

interface {{pascalCase name}}Props {
  className?: string
}

export function {{pascalCase name}}({ className }: {{pascalCase name}}Props) {
  return (
    <div className={cn('', className)}>
      <h1>{{pascalCase name}} Component</h1>
    </div>
  )
}
```

`plop-templates/component.test.hbs`:

```handlebars
import { render, screen } from '@/test/utils/test-utils'
import { {{pascalCase name}} } from '../{{pascalCase name}}'

describe('{{pascalCase name}}', () => {
  it('renders correctly', () => {
    render(<{{pascalCase name}} />)
    expect(screen.getByText('{{pascalCase name}} Component')).toBeInTheDocument()
  })
})
```

## 🏗️ Step 19: Setup Application Entry Points

Create `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Velocity Starter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Create `src/main.tsx`:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import './shared/i18n'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
```

Create `src/App.tsx`:

```typescript
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/shared/components/Layout'
import { Home } from '@/features/home/pages/Home'
import { NotFound } from '@/shared/components/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
```

## ⚙️ Step 20: Setup Scripts and Configuration

Update your `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "plop": "plop",
    "plop:component": "plop component",
    "plop:feature": "plop feature",
    "prepare": "husky"
  }
}
```

## 🔧 Step 21: Setup Code Quality Tools

Create `.eslintrc.js`:

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

Create `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

Setup Git hooks with Husky:

```bash
# Initialize husky
pnpm exec husky init

# Add pre-commit hook
echo "pnpm lint-staged" > .husky/pre-commit
```

Add to `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css}": [
      "prettier --write"
    ]
  }
}
```

## 🎭 Step 22: Setup E2E Testing with Playwright

Create `playwright.config.ts`:

```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

Create `e2e/app.spec.ts`:

```typescript
import { test, expect } from '@playwright/test'

test('should display welcome message', async ({ page }) => {
  await page.goto('/')
  
  await expect(page.getByRole('heading', { 
    name: 'Welcome to React Velocity Starter' 
  })).toBeVisible()
  
  await expect(page.getByTestId('feature-list')).toBeVisible()
})

test('should toggle theme', async ({ page }) => {
  await page.goto('/')
  
  const themeToggle = page.getByRole('button', { name: /toggle theme/i })
  await themeToggle.click()
  
  // Check if dark theme is applied
  await expect(page.locator('html')).toHaveClass(/dark/)
})

test('should switch language', async ({ page }) => {
  await page.goto('/')
  
  const languageSwitcher = page.getByRole('button', { name: /language/i })
  await languageSwitcher.click()
  
  await page.getByRole('menuitem', { name: 'Español' }).click()
  
  await expect(page.getByRole('heading', { 
    name: 'Bienvenido a React Velocity Starter' 
  })).toBeVisible()
})
```

## 🚀 Step 23: Build and Test Your Application

Now let's build and test everything:

```bash
# Install all dependencies
pnpm install

# Run type checking
pnpm typecheck

# Run tests
pnpm test

# Run linting
pnpm lint

# Start development server
pnpm dev

# Generate a new component
pnpm plop:component

# Generate a new feature
pnpm plop:feature

# Build for production
pnpm build

# Run E2E tests
pnpm test:e2e
```

## 🏗️ Key Architecture Benefits

### 1. Feature-Based Organization

| Advantage | Description |
|-----------|-------------|
| **Scalability** | Each feature is self-contained and can grow independently |
| **Maintainability** | Related code is co-located, making changes easier |
| **Team Collaboration** | Multiple developers can work on different features |
| **Code Reusability** | Shared components and utilities are clearly separated |

### 2. Type Safety Everywhere

| Area | Implementation |
|------|----------------|
| **Props** | Strict TypeScript interfaces for all components |
| **State** | Typed Zustand stores with inference |
| **API** | Type-safe data fetching with TanStack Query |
| **i18n** | Type-safe translation keys |

### 3. Modern Development Experience

| Feature | Benefit |
|---------|---------|
| **Hot Module Replacement** | Instant feedback during development |
| **Code Generation** | Consistent patterns and faster development |
| **Comprehensive Testing** | Confidence in code changes |
| **Automated Formatting** | Focus on logic, not style |

### 4. Production Ready

| Aspect | Implementation |
|--------|----------------|
| **Optimized Builds** | Code splitting and tree shaking |
| **Performance Monitoring** | Core Web Vitals tracking ready |
| **Error Boundaries** | Graceful error handling |
| **Accessibility** | ARIA attributes and semantic HTML |

## 🚀 Expanding Your Template

This foundation supports numerous enhancements:

| Enhancement | Description | Complexity |
|-------------|-------------|------------|
| **Authentication** | JWT-based auth with route guards | Medium |
| **Data Fetching** | Advanced patterns with TanStack Query | Medium |
| **Form Handling** | React Hook Form integration | Medium |
| **Real-time Features** | WebSocket or Server-Sent Events | High |
| **PWA Features** | Service workers and offline support | High |

## 📊 Performance Optimizations

| Optimization | Implementation | Impact |
|--------------|----------------|--------|
| **Code Splitting** | Route-based and vendor chunks | Faster initial load |
| **Tree Shaking** | ES modules and proper imports | Smaller bundles |
| **Image Optimization** | Modern formats and lazy loading | Better UX |
| **Caching Strategy** | Service worker and HTTP caching | Improved performance |

## ✅ Best Practices Demonstrated

1. **Separation of concerns** - Features, shared utilities, and configuration are clearly separated
2. **Consistent patterns** - All components follow the same structure and conventions
3. **Testing strategy** - Unit, integration, and E2E tests work together
4. **Performance optimization** - Code splitting and bundle optimization from the start
5. **Developer experience** - Tools and automation that make development enjoyable

## 🔧 Command Reference

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm test` | Run unit tests |
| `pnpm test:e2e` | Run E2E tests |
| `pnpm lint` | Check code quality |
| `pnpm plop:component` | Generate new component |
| `pnpm plop:feature` | Generate new feature module |

---

## 🔗 Additional Resources

| Resource | Purpose |
|----------|---------|
| **[React 19 Docs](https://react.dev)** | Latest React features |
| **[TypeScript Handbook](https://www.typescriptlang.org/docs)** | Type system guide |
| **[Vite Guide](https://vitejs.dev/guide)** | Build tool documentation |
| **[TanStack Query](https://tanstack.com/query)** | Data fetching patterns |
| **[Zustand](https://zustand.docs.pmnd.rs)** | State management |

This starter template provides a solid foundation for building modern React applications. The patterns and tools included will scale with your project from prototype to production.

*Happy building! 🎉*