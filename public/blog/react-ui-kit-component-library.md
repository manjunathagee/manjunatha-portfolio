# Building a Production-Ready React Component Library: Step-by-Step Tutorial

Learn how to build a comprehensive React component library from scratch, following the exact approach I used to create React UI Kit. This tutorial will take you through every step, from initial setup to deploying your components with visual regression testing.

## 🎯 What We'll Build

By the end of this tutorial, you'll have created:

| Feature | Description |
|---------|-------------|
| **Monorepo Structure** | 30+ components organized in packages |
| **TypeScript-First** | Excellent IntelliSense and type safety |
| **Accessibility** | WCAG 2.1 AA compliance built-in |
| **Visual Testing** | Automated regression testing with Chromatic |
| **Documentation** | Interactive Storybook with examples |
| **Production Ready** | Automated publishing and CI/CD |

## 📋 Prerequisites

Before we start, ensure you have:

| Requirement | Version | Purpose |
|-------------|---------|---------|
| **Node.js** | 22+ | JavaScript runtime |
| **pnpm** | 10+ | Package manager (recommended) |
| **Git** | Latest | Version control |
| **Knowledge** | Basic React & TypeScript | Development foundation |

## 🚀 Step 1: Project Setup and Monorepo Structure

Let's start by creating our monorepo structure using pnpm workspaces:

```bash
# Create the project directory
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
mkdir docs
```

### 📦 Configure the Root package.json

```json
{
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
}
```

### 📁 Create pnpm-workspace.yaml

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'docs/*'
```

## ⚡ Step 2: Setup Build Tool (Turbo)

Install and configure Turbo for monorepo build orchestration:

```bash
pnpm add -D turbo
```

Create `turbo.json`:

```json
{
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
}
```

## 📦 Step 3: Create the Core Components Package

Navigate to the components package and set it up:

```bash
cd packages/components
pnpm init
```

### ⚙️ Configure Components package.json

```json
{
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
}
```

## 🔧 Step 4: TypeScript Configuration

Create `tsconfig.json` in the components package:

```json
{
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
}
```

## 🎨 Step 5: Tailwind CSS Setup

Create `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
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
}
```

## 🛠️ Step 6: Create Utility Functions

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 🎯 Step 7: Build Your First Component - Button

Create `src/components/button/button.tsx`:

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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

export { Button, buttonVariants }
```

Create `src/components/button/index.ts`:

```typescript
export { Button, buttonVariants, type ButtonProps } from "./button"
```

## 🧪 Step 8: Add Component Tests

Create `src/components/button/button.test.tsx`:

```typescript
import { render, screen, fireEvent } from "@testing-library/react"
import { vi } from "vitest"
import { Button } from "./button"

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("applies variant classes correctly", () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-destructive")
  })

  it("applies size classes correctly", () => {
    render(<Button size="sm">Small</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-9")
  })

  it("handles click events", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("supports disabled state", () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("button")).toHaveClass("disabled:opacity-50")
  })

  it("supports asChild prop", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test")
  })
})
```

## 📖 Step 9: Create Storybook Stories

Create `src/components/button/button.stories.tsx`:

```typescript
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: 
          "A versatile button component with multiple variants and sizes. Supports all standard button props and can render as different elements using the asChild prop."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"]
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"]
    },
    asChild: {
      control: { type: "boolean" }
    },
    disabled: {
      control: { type: "boolean" }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button"
  }
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true
  }
}
```

## 📚 Step 10: Setup Storybook

Create `.storybook/main.ts`:

```typescript
import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    }
  }
}

export default config
```

Create `.storybook/preview.ts`:

```typescript
import type { Preview } from "@storybook/react"
import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      toc: true
    }
  }
}

export default preview
```

## 🎨 Step 11: Create Global Styles

Create `src/styles/globals.css`:

```css
@tailwind base;
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
}
```

## 🧪 Step 12: Setup Testing Environment

Create `vitest.config.ts`:

```typescript
import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
```

Create `src/test/setup.ts`:

```typescript
import "@testing-library/jest-dom"
import { vi } from "vitest"

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))
```

## 🎭 Step 13: Setup Chromatic for Visual Testing

Sign up for a [Chromatic account](https://www.chromatic.com/) and get your project token.

Create `.env.example`:

```bash
CHROMATIC_PROJECT_TOKEN=your_chromatic_token_here
```

Add to `.gitignore`:

```gitignore
.env
node_modules
dist
storybook-static
```

## 🃏 Step 14: Add More Components

Let's add a Card component to demonstrate the pattern:

Create `src/components/card/card.tsx`:

```typescript
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## 📦 Step 15: Create Package Exports

Create `src/index.ts`:

```typescript
// Components
export * from "./components/button"
export * from "./components/card"

// Utilities
export * from "./lib/utils"
```

## 🏗️ Step 16: Build and Test

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build the package
pnpm build

# Start Storybook
pnpm storybook

# Run Chromatic (with your token in .env)
pnpm chromatic
```

## 📤 Step 17: Publishing Your Package

### 🔧 Setup GitHub Package Registry

Add to your `package.json`:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com",
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/react-ui-kit.git"
  }
}
```

### 📜 Publish Script

Create `scripts/publish-packages.js`:

```javascript
#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')

const packages = ['packages/components']

packages.forEach(pkg => {
  console.log(`Publishing ${pkg}...`)
  
  try {
    execSync('pnpm build', { 
      cwd: path.join(__dirname, '..', pkg),
      stdio: 'inherit' 
    })
    
    execSync('npm publish', { 
      cwd: path.join(__dirname, '..', pkg),
      stdio: 'inherit' 
    })
    
    console.log(`✅ ${pkg} published successfully`)
  } catch (error) {
    console.error(`❌ Failed to publish ${pkg}:`, error.message)
  }
})
```

### 🔄 Continuous Integration with GitHub Actions

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '22'
        
    - name: Setup pnpm
      uses: pnpm/action-setup@v4
      with:
        version: 10
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Run tests
      run: pnpm test
      
    - name: Build packages
      run: pnpm build
      
    - name: Run Chromatic
      uses: chromaui/action@v1
      with:
        projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
        token: ${{ secrets.GITHUB_TOKEN }}
```

## 🚀 Advanced Features to Add

### 1. More Complex Components

| Component Type | Examples | Complexity |
|----------------|----------|------------|
| **Data Display** | DataTable, List, Avatar | High |
| **Feedback** | Alert, Toast, Progress | Medium |
| **Navigation** | Breadcrumb, Pagination, Menu | Medium |
| **Forms** | Input, Select, Checkbox | High |
| **Overlay** | Modal, Drawer, Popover | High |

### 2. Design Tokens Package

Create `packages/design-tokens` with:

| Token Type | Purpose | Example |
|------------|---------|---------|
| **Colors** | Brand and semantic colors | `primary`, `success`, `error` |
| **Typography** | Font sizes and weights | `heading-1`, `body-sm` |
| **Spacing** | Margins and padding | `space-xs`, `space-lg` |
| **Animation** | Transitions and durations | `fast`, `slow`, `bounce` |

### 3. Icon Package

Create `packages/icons` with:

| Feature | Description |
|---------|-------------|
| **SVG Components** | React components for each icon |
| **Tree Shaking** | Import only needed icons |
| **Sprite Generation** | Optimized icon sprites |
| **Size Variants** | Multiple sizes per icon |

## 📊 Key Metrics and Quality Gates

| Metric | Target | Purpose |
|--------|--------|---------|
| **Test Coverage** | >90% | Code reliability |
| **Bundle Size** | <50KB gzipped | Performance |
| **Accessibility** | WCAG 2.1 AA | Inclusivity |
| **Visual Regression** | 0 failures | UI consistency |
| **TypeScript Strict** | 100% | Type safety |

## ✅ Key Takeaways

1. **Start with solid foundations** - TypeScript, testing, and accessibility from day one
2. **Use proven patterns** - CVA for variants, Radix for complex interactions
3. **Automate everything** - Testing, visual regression, and publishing
4. **Document thoroughly** - Storybook stories serve as both docs and tests
5. **Think in systems** - Consistent patterns across all components

This tutorial gives you a production-ready component library foundation. The real power comes from expanding it with more components while maintaining these patterns and standards.

---

## 🔗 Additional Resources

| Resource | Purpose |
|----------|---------|
| **[Storybook Docs](https://storybook.js.org/docs)** | Component documentation |
| **[Radix UI](https://www.radix-ui.com/)** | Accessible primitives |
| **[Chromatic](https://www.chromatic.com/)** | Visual testing |
| **[CVA](https://cva.style/)** | Variant API patterns |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS |

*Happy building! 🎉*