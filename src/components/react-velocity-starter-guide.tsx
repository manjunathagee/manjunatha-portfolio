"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Calendar, Clock, ArrowLeft, Share2, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ReactVelocityStarterGuide() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "React Velocity Starter: Building the Modern React Template I Wish I Had",
          text: "Creating a feature-driven React starter template with modern tooling, comprehensive testing, and developer experience optimization.",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Article header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <header className="mb-8 not-prose">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Developer Tools</Badge>
              <Badge variant="default">Featured</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              React Velocity Starter: Building the Modern React Template I Wish I Had
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Creating a feature-driven React starter template with modern tooling, comprehensive testing, and developer experience optimization.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate("2024-12-22")}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  12 min read
                </div>
                <div>
                  By Manjunatha C
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Vite", "TypeScript", "Starter Template", "Developer Experience", "Modern Tooling"].map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article content */}
          <div className="prose-content space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-lg leading-relaxed mb-6">
                Learn how to build a production-ready React starter template from scratch, following the exact methodology I used to create React Velocity Starter. This comprehensive tutorial will guide you through creating a modern, scalable React application foundation with the latest tools and best practices.
              </p>
            </section>

            {/* What You'll Build */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎯 What You'll Build</h2>
              <p className="text-lg mb-4">By the end of this tutorial, you'll have created:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Feature</th>
                      <th className="border border-border p-3 text-left font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Feature-Based Architecture</td>
                      <td className="border border-border p-3">Scalable project structure that grows with complexity</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Modern Tooling</td>
                      <td className="border border-border p-3">React 19, TypeScript 5.8+, Vite 6+ for optimal DX</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Comprehensive Testing</td>
                      <td className="border border-border p-3">Vitest, Playwright, MSW for reliable testing</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Internationalization</td>
                      <td className="border border-border p-3">Type-safe translations with react-i18next</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Code Generation</td>
                      <td className="border border-border p-3">Plop.js templates for consistent development</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Production Ready</td>
                      <td className="border border-border p-3">Optimized builds and deployment configuration</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Prerequisites */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📋 Prerequisites</h2>
              <p className="text-lg mb-4">Before we start, ensure you have:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Requirement</th>
                      <th className="border border-border p-3 text-left font-semibold">Version</th>
                      <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Node.js</td>
                      <td className="border border-border p-3">18+ (22+ recommended)</td>
                      <td className="border border-border p-3">JavaScript runtime</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">pnpm</td>
                      <td className="border border-border p-3">9+</td>
                      <td className="border border-border p-3">Package manager (preferred)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Git</td>
                      <td className="border border-border p-3">Latest</td>
                      <td className="border border-border p-3">Version control</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Knowledge</td>
                      <td className="border border-border p-3">React, TypeScript, modern JS</td>
                      <td className="border border-border p-3">Development foundation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Step 1: Project Setup */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🚀 Step 1: Project Initialization and Basic Setup</h2>
              <p className="text-lg mb-4">Let's start by creating our project structure:</p>
              
              <CodeBlock 
                language="bash"
                code={`# Create the project directory
mkdir react-velocity-starter
cd react-velocity-starter

# Initialize the project
npm init -y

# Install pnpm globally if you haven't already
npm install -g pnpm`}
                className="mb-6"
              />

              <p className="text-lg mb-4">Update your <code className="bg-muted px-2 py-1 rounded">package.json</code>:</p>
              
              <CodeBlock 
                language="json"
                code={`{
  "name": "react-velocity-starter",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "description": "Modern React starter template with TypeScript, Vite, and comprehensive tooling",
  "keywords": [
    "react",
    "typescript",
    "vite",
    "starter",
    "template"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "type-check": "tsc --noEmit",
    "generate": "plop"
  }
}`}
                className="mb-6"
              />
            </section>

            {/* Feature-Based Architecture */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🏗️ Step 2: Feature-Based Architecture</h2>
              <p className="text-lg mb-4">Create a scalable folder structure:</p>
              
              <CodeBlock 
                language="bash"
                code={`# Create the folder structure
mkdir -p src/{features,shared,app,pages}
mkdir -p src/shared/{components,hooks,utils,types,constants}
mkdir -p src/features/{auth,dashboard}
mkdir -p src/features/auth/{components,hooks,services,types}
mkdir -p public/{icons,images}
mkdir -p docs
mkdir -p tests/{e2e,fixtures,mocks}`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">📁 Folder Structure Benefits</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Directory</th>
                      <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                      <th className="border border-border p-3 text-left font-semibold">Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium"><code>src/features/</code></td>
                      <td className="border border-border p-3">Domain-specific code</td>
                      <td className="border border-border p-3">Better code organization, easier to maintain</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium"><code>src/shared/</code></td>
                      <td className="border border-border p-3">Reusable components and utilities</td>
                      <td className="border border-border p-3">Promotes code reuse and consistency</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium"><code>src/app/</code></td>
                      <td className="border border-border p-3">Application-level configuration</td>
                      <td className="border border-border p-3">Centralized app setup and providers</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium"><code>tests/</code></td>
                      <td className="border border-border p-3">Testing utilities and fixtures</td>
                      <td className="border border-border p-3">Organized testing infrastructure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Modern Tooling Setup */}
            <section>
              <h2 className="text-3xl font-bold mb-4">⚡ Step 3: Modern Tooling Configuration</h2>
              
              <h3 className="text-2xl font-semibold mb-3">🔧 Vite Configuration</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">vite.config.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/features': resolve(__dirname, './src/features'),
      '@/shared': resolve(__dirname, './src/shared'),
      '@/app': resolve(__dirname, './src/app'),
      '@/tests': resolve(__dirname, './tests')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          utils: ['date-fns', 'clsx']
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts']
  }
})`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">📝 TypeScript Configuration</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">tsconfig.json</code>:</p>
              
              <CodeBlock 
                language="json"
                code={`{
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
      "@/*": ["./src/*"],
      "@/features/*": ["./src/features/*"],
      "@/shared/*": ["./src/shared/*"],
      "@/app/*": ["./src/app/*"],
      "@/tests/*": ["./tests/*"]
    }
  },
  "include": ["src", "tests"],
  "exclude": ["node_modules", "dist"]
}`}
                className="mb-6"
              />
            </section>

            {/* Testing Setup */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🧪 Step 4: Comprehensive Testing Setup</h2>
              
              <h3 className="text-2xl font-semibold mb-3">⚙️ Testing Stack Overview</h3>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Tool</th>
                      <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                      <th className="border border-border p-3 text-left font-semibold">Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Vitest</td>
                      <td className="border border-border p-3">Unit and integration tests</td>
                      <td className="border border-border p-3">Fast, Vite-native, ESM support</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Testing Library</td>
                      <td className="border border-border p-3">Component testing utilities</td>
                      <td className="border border-border p-3">User-centric testing approach</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Playwright</td>
                      <td className="border border-border p-3">End-to-end testing</td>
                      <td className="border border-border p-3">Cross-browser, reliable, fast</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">MSW</td>
                      <td className="border border-border p-3">API mocking</td>
                      <td className="border border-border p-3">Realistic network layer mocking</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-3">🔬 Test Setup Configuration</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">tests/setup.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import { server } from './mocks/server'

// Start the MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Clean up after each test
afterEach(() => {
  cleanup()
  server.resetHandlers()
})

// Close the server after all tests
afterAll(() => server.close())

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  observe() {
    return null
  }
  disconnect() {
    return null
  }
  unobserve() {
    return null
  }
}`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">🎭 Playwright Configuration</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">playwright.config.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI
  }
})`}
                className="mb-6"
              />
            </section>

            {/* Code Generation */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎨 Step 5: Code Generation with Plop.js</h2>
              <p className="text-lg mb-4">Automate component and feature creation:</p>
              
              <CodeBlock 
                language="javascript"
                code={`// plopfile.js
export default function (plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Component type:',
        choices: ['shared', 'feature']
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name (if feature component):',
        when: (answers) => answers.type === 'feature'
      }
    ],
    actions: (data) => {
      const basePath = data.type === 'shared' 
        ? 'src/shared/components'
        : \`src/features/\${data.feature}/components\`
      
      return [
        {
          type: 'add',
          path: \`\${basePath}/{{pascalCase name}}/{{pascalCase name}}.tsx\`,
          templateFile: 'plop-templates/component.hbs'
        },
        {
          type: 'add',
          path: \`\${basePath}/{{pascalCase name}}/{{pascalCase name}}.test.tsx\`,
          templateFile: 'plop-templates/component.test.hbs'
        },
        {
          type: 'add',
          path: \`\${basePath}/{{pascalCase name}}/index.ts\`,
          templateFile: 'plop-templates/index.hbs'
        }
      ]
    }
  })

  // Feature generator
  plop.setGenerator('feature', {
    description: 'Create a new feature module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/index.ts',
        template: 'export * from "./components"\\nexport * from "./hooks"\\nexport * from "./services"'
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/components/index.ts',
        template: '// Export components here'
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/hooks/index.ts',
        template: '// Export hooks here'
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/services/index.ts',
        template: '// Export services here'
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/types/index.ts',
        template: '// Export types here'
      }
    ]
  })
}`}
                className="mb-6"
              />
            </section>

            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎯 Key Benefits of This Starter Template</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🚀 Developer Experience</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Hot module reloading with Vite</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Code generation for consistency</li>
                    <li>• Comprehensive linting and formatting</li>
                  </ul>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🧪 Testing Excellence</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Unit tests with Vitest</li>
                    <li>• Component tests with Testing Library</li>
                    <li>• E2E tests with Playwright</li>
                    <li>• API mocking with MSW</li>
                  </ul>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🏗️ Scalable Architecture</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Feature-based organization</li>
                    <li>• Clear separation of concerns</li>
                    <li>• Reusable shared components</li>
                    <li>• Consistent code structure</li>
                  </ul>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🚢 Production Ready</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Optimized build configuration</li>
                    <li>• Bundle analysis and splitting</li>
                    <li>• Performance monitoring setup</li>
                    <li>• Deployment-ready scripts</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Installation Commands */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📦 Installation and Setup Commands</h2>
              <p className="text-lg mb-4">Install all necessary dependencies:</p>
              
              <CodeBlock 
                language="bash"
                code={`# Core dependencies
pnpm add react react-dom react-router-dom
pnpm add @tanstack/react-query axios
pnpm add react-i18next i18next i18next-browser-languagedetector
pnpm add clsx tailwind-merge lucide-react

# Development dependencies
pnpm add -D typescript @types/react @types/react-dom
pnpm add -D vite @vitejs/plugin-react-swc
pnpm add -D vitest @vitest/ui jsdom
pnpm add -D @testing-library/react @testing-library/jest-dom
pnpm add -D @testing-library/user-event
pnpm add -D @playwright/test
pnpm add -D msw
pnpm add -D eslint @typescript-eslint/eslint-plugin
pnpm add -D prettier eslint-config-prettier
pnpm add -D plop
pnpm add -D tailwindcss postcss autoprefixer`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">🏃‍♂️ Getting Started</h3>
              
              <CodeBlock 
                language="bash"
                code={`# Clone or create your project
git clone <your-repo> my-app
cd my-app

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Generate new component
pnpm generate

# Build for production
pnpm build`}
                className="mb-6"
              />
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎉 What You've Accomplished</h2>
              
              <p className="text-lg leading-relaxed mb-4">
                Congratulations! You've created a modern, scalable React starter template that includes:
              </p>
              
              <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-400 p-4 mb-6">
                <ul className="space-y-2">
                  <li>✅ <strong>Feature-based architecture</strong> for scalable code organization</li>
                  <li>✅ <strong>Modern tooling</strong> with Vite, TypeScript, and React 19</li>
                  <li>✅ <strong>Comprehensive testing</strong> setup with Vitest, Playwright, and MSW</li>
                  <li>✅ <strong>Code generation</strong> for consistent development patterns</li>
                  <li>✅ <strong>Production-ready</strong> build and deployment configuration</li>
                  <li>✅ <strong>Developer experience</strong> optimizations for maximum productivity</li>
                </ul>
              </div>
              
              <p className="text-lg leading-relaxed">
                This template provides a solid foundation for building modern React applications while maintaining flexibility for customization based on your specific project needs.
              </p>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔗 Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Vite Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-3">Fast build tool for modern web development</p>
                  <Link href="https://vitejs.dev/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Vitest</h3>
                  <p className="text-sm text-muted-foreground mb-3">Vite-native unit testing framework</p>
                  <Link href="https://vitest.dev/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Playwright</h3>
                  <p className="text-sm text-muted-foreground mb-3">End-to-end testing framework</p>
                  <Link href="https://playwright.dev/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Plop.js</h3>
                  <p className="text-sm text-muted-foreground mb-3">Code generation tool</p>
                  <Link href="https://plopjs.com/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </motion.article>

        {/* Article footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t"
        >
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Articles
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/contact">
                Discuss this article
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}