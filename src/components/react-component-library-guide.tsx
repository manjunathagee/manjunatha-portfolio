"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Calendar, Clock, ArrowLeft, Share2, ExternalLink, Github } from "lucide-react"
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
              Learn how to build a comprehensive React component library from scratch, following the exact approach I used to create React UI Kit. This tutorial will take you through every step, from initial setup to deploying your components with visual regression testing.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate("2024-12-22")}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  15 min read
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
              <h2 className="text-3xl font-bold mb-4">🎯 What We'll Build</h2>
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
              <p className="text-lg mb-4">Let's start by creating our monorepo structure using pnpm workspaces:</p>
              
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