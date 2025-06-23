"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Calendar, Clock, ArrowLeft, Share2, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ReactComponentLibraryGuide() {
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
          title: "Building a Production-Ready React Component Library: Step-by-Step Tutorial",
          text: "Learn how to build a comprehensive React component library from scratch, following the exact approach I used to create React UI Kit.",
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
              <Badge variant="secondary">Frontend Development</Badge>
              <Badge variant="default">Featured</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Building a Production-Ready React Component Library: Step-by-Step Tutorial
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Learn how to build a comprehensive React component library from scratch, following the exact approach I used to create React UI Kit. This complete tutorial covers 11 essential steps, from initial setup to deploying your components with visual regression testing and automated publishing.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate("2024-12-22")}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  25 min read
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
              {["React", "TypeScript", "Component Library", "Accessibility", "Chromatic", "Storybook"].map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article content */}
          <div className="prose-content space-y-8">
            
            {/* What We'll Build Section */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎯 What We&apos;ll Build</h2>
              <p className="text-lg mb-4">By the end of this tutorial, you&apos;ll have created:</p>
              
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
                      <td className="border border-border p-3 font-medium">Monorepo Structure</td>
                      <td className="border border-border p-3">30+ components organized in packages</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">TypeScript-First</td>
                      <td className="border border-border p-3">Excellent IntelliSense and type safety</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Accessibility</td>
                      <td className="border border-border p-3">WCAG 2.1 AA compliance built-in</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Visual Testing</td>
                      <td className="border border-border p-3">Automated regression testing with Chromatic</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Documentation</td>
                      <td className="border border-border p-3">Interactive Storybook with examples</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Production Ready</td>
                      <td className="border border-border p-3">Automated publishing and CI/CD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Prerequisites Section */}
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
                      <td className="border border-border p-3">22+</td>
                      <td className="border border-border p-3">JavaScript runtime</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">pnpm</td>
                      <td className="border border-border p-3">10+</td>
                      <td className="border border-border p-3">Package manager (recommended)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Git</td>
                      <td className="border border-border p-3">Latest</td>
                      <td className="border border-border p-3">Version control</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Knowledge</td>
                      <td className="border border-border p-3">Basic React & TypeScript</td>
                      <td className="border border-border p-3">Development foundation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Step 1: Project Setup */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🚀 Step 1: Project Setup and Monorepo Structure</h2>
              <p className="text-lg mb-4">Let&apos;s start by creating our monorepo structure using pnpm workspaces:</p>
              
              <CodeBlock 
                language="bash"
                code={`# Create the project directory
mkdir react-ui-kit
cd react-ui-kit

# Initialize package.json
npm init -y

# Install pnpm globally if you haven't
npm install -g pnpm

# Create the monorepo structure
mkdir -p packages/components
mkdir -p packages/design-tokens
mkdir -p packages/icons
mkdir -p packages/utils
mkdir apps
mkdir docs`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">📦 Configure the Root package.json</h3>
              
              <CodeBlock 
                language="json"
                code={`{
  "name": "react-ui-kit",
  "private": true,
  "version": "0.1.0",
  "packageManager": "pnpm@10.12.1",
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --filter=@react-ui-kit/components",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "storybook": "cd packages/components && pnpm run storybook",
    "build-storybook": "cd packages/components && pnpm run build-storybook",
    "chromatic": "cd packages/components && pnpm run chromatic"
  },
  "devDependencies": {
    "@changesets/cli": "^2.29.5",
    "turbo": "^2.5.4",
    "husky": "^9.1.7",
    "lint-staged": "^16.1.2"
  }
}`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">📁 Create pnpm-workspace.yaml</h3>
              
              <CodeBlock 
                language="yaml"
                code={`packages:
  - 'packages/*'
  - 'apps/*'
  - 'docs/*'`}
                className="mb-4"
              />
            </section>

            {/* Step 2: Setup Build Tool */}
            <section>
              <h2 className="text-3xl font-bold mb-4">⚡ Step 2: Setup Build Tool (Turbo)</h2>
              <p className="text-lg mb-4">Install and configure Turbo for monorepo build orchestration:</p>
              
              <CodeBlock 
                language="bash"
                code="pnpm add -D turbo"
                className="mb-4"
              />

              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">turbo.json</code>:</p>
              
              <CodeBlock 
                language="json"
                code={`{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "lint": {
      "outputs": []
    },
    "test": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}`}
                className="mb-4"
              />
            </section>

            {/* Step 3: Create Components Package */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📦 Step 3: Create the Core Components Package</h2>
              <p className="text-lg mb-4">Navigate to the components package and set it up:</p>
              
              <CodeBlock 
                language="bash"
                code={`cd packages/components
pnpm init`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">⚙️ Configure Components package.json</h3>
              
              <CodeBlock 
                language="json"
                code={`{
  "name": "@react-ui-kit/components",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles.css": "./dist/styles.css"
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "dev": "tsup src/index.ts --format cjs,esm --dts --watch",
    "lint": "eslint src/**/*.{ts,tsx}",
    "test": "vitest",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "chromatic": "chromatic --project-token $CHROMATIC_PROJECT_TOKEN"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-button": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.5",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-slot": "^1.1.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@storybook/addon-essentials": "^8.3.7",
    "@storybook/addon-interactions": "^8.3.7",
    "@storybook/addon-links": "^8.3.7",
    "@storybook/blocks": "^8.3.7",
    "@storybook/react": "^8.3.7",
    "@storybook/react-vite": "^8.3.7",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.20",
    "chromatic": "^11.19.2",
    "postcss": "^8.4.49",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "storybook": "^8.3.7",
    "tailwindcss": "^3.4.17",
    "tsup": "^8.3.5",
    "typescript": "^5.8.3",
    "vitest": "^2.1.4"
  },
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  }
}`}
                className="mb-4"
              />
            </section>

            {/* TypeScript Configuration */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔧 Step 4: TypeScript Configuration</h2>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">tsconfig.json</code> in the components package:</p>
              
              <CodeBlock 
                language="json"
                code={`{
  "compilerOptions": {
    "target": "ES2020",
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
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`}
                className="mb-4"
              />
            </section>

            {/* Tailwind CSS Setup */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎨 Step 5: Tailwind CSS Setup</h2>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">tailwind.config.js</code>:</p>
              
              <CodeBlock 
                language="javascript"
                code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🎨 Create Base Styles</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">src/styles/globals.css</code>:</p>
              
              <CodeBlock 
                language="css"
                code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`}
                className="mb-4"
              />
            </section>

            {/* Step 6: Create Your First Component */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🧩 Step 6: Create Your First Component - Button</h2>
              <p className="text-lg mb-4">Let&apos;s create a robust Button component using CVA (Class Variance Authority):</p>
              
              <h3 className="text-2xl font-semibold mb-3">📁 Component Structure</h3>
              <CodeBlock 
                language="bash"
                code={`mkdir -p src/components/ui
touch src/components/ui/button.tsx
touch src/lib/utils.ts
touch src/index.ts`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🛠️ Utility Functions</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">src/lib/utils.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🔘 Button Component</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">src/components/ui/button.tsx</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">📋 Export Components</h3>
              <p className="text-lg mb-4">Update <code className="bg-muted px-2 py-1 rounded">src/index.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`export { Button, type ButtonProps } from "./components/ui/button"
export { cn } from "./lib/utils"`}
                className="mb-4"
              />
            </section>

            {/* Step 7: Setup Storybook */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📚 Step 7: Setup Storybook for Documentation</h2>
              <p className="text-lg mb-4">Initialize Storybook in your components package:</p>
              
              <CodeBlock 
                language="bash"
                code="npx storybook@latest init"
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">⚙️ Configure Storybook</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">.storybook/main.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🎨 Configure Storybook Styles</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">.storybook/preview.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">📖 Create Button Stories</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">src/components/ui/button.stories.tsx</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};`}
                className="mb-4"
              />
            </section>

            {/* Step 8: Testing Setup */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🧪 Step 8: Testing Setup with Vitest</h2>
              <p className="text-lg mb-4">Create comprehensive tests for your components:</p>
              
              <h3 className="text-2xl font-semibold mb-3">⚙️ Configure Vitest</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">vitest.config.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🛠️ Test Setup</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">src/test/setup.ts</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import '@testing-library/jest-dom';`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🧪 Button Component Tests</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">src/components/ui/button.test.tsx</code>:</p>
              
              <CodeBlock 
                language="typescript"
                code={`import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Test Button</Button>);
    
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground');
  });

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large Button</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('h-11', 'px-8');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:pointer-events-none');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
});`}
                className="mb-4"
              />
            </section>

            {/* Step 9: Visual Testing with Chromatic */}
            <section>
              <h2 className="text-3xl font-bold mb-4">👁️ Step 9: Visual Testing with Chromatic</h2>
              <p className="text-lg mb-4">Set up visual regression testing to catch UI changes:</p>
              
              <h3 className="text-2xl font-semibold mb-3">🔑 Setup Chromatic</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg mb-4">
                <li>Create account at <Link href="https://www.chromatic.com/" className="text-primary hover:underline">chromatic.com</Link></li>
                <li>Connect your GitHub repository</li>
                <li>Get your project token</li>
                <li>Add token to your CI environment variables</li>
              </ol>

              <h3 className="text-2xl font-semibold mb-3">⚙️ Configure GitHub Actions</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">.github/workflows/chromatic.yml</code>:</p>
              
              <CodeBlock 
                language="yaml"
                code={`name: 'Chromatic'

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  chromatic-deployment:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build components
        run: pnpm run build --filter=@react-ui-kit/components
      
      - name: Publish to Chromatic
        uses: chromaui/action@v11
        with:
          token: \${{ secrets.GITHUB_TOKEN }}
          projectToken: \${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          workingDir: packages/components
          buildScriptName: build-storybook`}
                className="mb-4"
              />
            </section>

            {/* Step 10: Publishing Setup */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🚀 Step 10: Publishing Setup with Changesets</h2>
              <p className="text-lg mb-4">Automate versioning and publishing:</p>
              
              <h3 className="text-2xl font-semibold mb-3">📦 Initialize Changesets</h3>
              <CodeBlock 
                language="bash"
                code="npx @changesets/cli init"
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">⚙️ Configure Changesets</h3>
              <p className="text-lg mb-4">Edit <code className="bg-muted px-2 py-1 rounded">.changeset/config.json</code>:</p>
              
              <CodeBlock 
                language="json"
                code={`{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🔄 CI/CD for Publishing</h3>
              <p className="text-lg mb-4">Create <code className="bg-muted px-2 py-1 rounded">.github/workflows/release.yml</code>:</p>
              
              <CodeBlock 
                language="yaml"
                code={`name: Release

on:
  push:
    branches:
      - main

concurrency: \${{ github.workflow }}-\${{ github.ref }}

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install Dependencies
        run: pnpm install

      - name: Build packages
        run: pnpm run build

      - name: Create Release Pull Request or Publish to npm
        id: changesets
        uses: changesets/action@v1
        with:
          publish: pnpm run release
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: \${{ secrets.NPM_TOKEN }}`}
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">📝 Add Release Script</h3>
              <p className="text-lg mb-4">Add to root <code className="bg-muted px-2 py-1 rounded">package.json</code>:</p>
              
              <CodeBlock 
                language="json"
                code={`"scripts": {
  "changeset": "changeset",
  "version-packages": "changeset version",
  "release": "changeset publish"
}`}
                className="mb-4"
              />
            </section>

            {/* Step 11: Usage Example */}
            <section>
              <h2 className="text-3xl font-bold mb-4">💡 Step 11: Usage Example</h2>
              <p className="text-lg mb-4">Here&apos;s how to use your component library:</p>
              
              <h3 className="text-2xl font-semibold mb-3">📦 Installation</h3>
              <CodeBlock 
                language="bash"
                code="npm install @your-org/react-ui-kit"
                className="mb-4"
              />

              <h3 className="text-2xl font-semibold mb-3">🎯 Implementation</h3>
              <CodeBlock 
                language="typescript"
                code={`import { Button } from "@your-org/react-ui-kit"
import "@your-org/react-ui-kit/styles.css"

function App() {
  return (
    <div className="p-8">
      <Button variant="default" size="lg">
        Primary Action
      </Button>
      
      <Button variant="outline" size="sm">
        Secondary Action  
      </Button>
      
      <Button variant="destructive" disabled>
        Disabled Action
      </Button>
    </div>
  )
}`}
                className="mb-4"
              />
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-3xl font-bold mb-4">✅ Key Takeaways</h2>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li><strong>Start with solid foundations</strong> - TypeScript, testing, and accessibility from day one</li>
                <li><strong>Use proven patterns</strong> - CVA for variants, Radix for complex interactions</li>
                <li><strong>Automate everything</strong> - Testing, visual regression, and publishing</li>
                <li><strong>Document thoroughly</strong> - Storybook stories serve as both docs and tests</li>
                <li><strong>Think in systems</strong> - Consistent patterns across all components</li>
              </ol>
              
              <p className="text-lg mt-6">
                This tutorial gives you a production-ready component library foundation. The real power comes from expanding it with more components while maintaining these patterns and standards.
              </p>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔗 Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Storybook Docs</h3>
                  <p className="text-sm text-muted-foreground mb-3">Component documentation</p>
                  <Link href="https://storybook.js.org/docs" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Radix UI</h3>
                  <p className="text-sm text-muted-foreground mb-3">Accessible primitives</p>
                  <Link href="https://www.radix-ui.com/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Chromatic</h3>
                  <p className="text-sm text-muted-foreground mb-3">Visual testing</p>
                  <Link href="https://www.chromatic.com/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">CVA</h3>
                  <p className="text-sm text-muted-foreground mb-3">Variant API patterns</p>
                  <Link href="https://cva.style/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </section>

            <div className="text-center pt-8">
              <p className="text-lg italic">Happy building! 🎉</p>
            </div>
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