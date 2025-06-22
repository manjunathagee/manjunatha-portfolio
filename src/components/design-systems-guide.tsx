"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Calendar, Clock, ArrowLeft, Share2, ExternalLink } from "lucide-react"
import Link from "next/link"

export function DesignSystemsGuide() {
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
          title: "Design Systems at Scale: Lessons from Building Component Libraries",
          text: "Best practices for creating scalable design systems, component APIs, and documentation that teams actually use.",
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
              <Badge variant="secondary">Architecture</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Design Systems at Scale: Lessons from Building Component Libraries
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Best practices for creating scalable design systems, component APIs, and documentation that teams actually use.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate("2024-01-10")}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  10 min read
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
              {["Design Systems", "Component Libraries", "TypeScript", "Storybook"].map((tag) => (
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
                Throughout my career as a Senior Frontend Engineer, I've had the privilege of building and maintaining design systems that serve multiple teams and applications. Having created unified design systems serving 5+ internal applications and reducing UI development time by 35%, I've learned valuable lessons about what makes design systems successful at scale.
              </p>
            </section>

            {/* Impact Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📊 Impact of Design Systems at Scale</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Metric</th>
                      <th className="border border-border p-3 text-left font-semibold">Before Design System</th>
                      <th className="border border-border p-3 text-left font-semibold">After Implementation</th>
                      <th className="border border-border p-3 text-left font-semibold">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">UI Development Time</td>
                      <td className="border border-border p-3">8-12 hours/feature</td>
                      <td className="border border-border p-3">5-8 hours/feature</td>
                      <td className="border border-border p-3"><Badge variant="outline">35% reduction</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Visual Consistency</td>
                      <td className="border border-border p-3">60% across apps</td>
                      <td className="border border-border p-3">95% across apps</td>
                      <td className="border border-border p-3"><Badge variant="outline">58% improvement</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Bug Reports (UI)</td>
                      <td className="border border-border p-3">15-20/month</td>
                      <td className="border border-border p-3">3-5/month</td>
                      <td className="border border-border p-3"><Badge variant="outline">75% reduction</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Developer Onboarding</td>
                      <td className="border border-border p-3">2-3 weeks</td>
                      <td className="border border-border p-3">3-5 days</td>
                      <td className="border border-border p-3"><Badge variant="outline">80% faster</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Scaling Challenges */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🚧 The Challenge of Scaling Design Systems</h2>
              
              <h3 className="text-2xl font-semibold mb-3">⚠️ Common Scaling Problems</h3>
              <p className="text-lg mb-4">When design systems grow beyond a single team or application, several challenges emerge:</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Problem</th>
                      <th className="border border-border p-3 text-left font-semibold">Impact</th>
                      <th className="border border-border p-3 text-left font-semibold">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Inconsistent adoption</td>
                      <td className="border border-border p-3">Teams using different components for similar use cases</td>
                      <td className="border border-border p-3">Clear usage guidelines and component discovery</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Version fragmentation</td>
                      <td className="border border-border p-3">Different applications stuck on different versions</td>
                      <td className="border border-border p-3">Automated dependency management</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Maintenance overhead</td>
                      <td className="border border-border p-3">Changes requiring updates across multiple repositories</td>
                      <td className="border border-border p-3">Monorepo structure with shared tooling</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Documentation drift</td>
                      <td className="border border-border p-3">Outdated or incomplete documentation</td>
                      <td className="border border-border p-3">Living documentation with Storybook</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-3">📈 Success Metrics That Matter</h3>
              <p className="text-lg mb-4">Before diving into solutions, it's crucial to establish metrics:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Metric</th>
                      <th className="border border-border p-3 text-left font-semibold">Target</th>
                      <th className="border border-border p-3 text-left font-semibold">Measurement Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Adoption rate</td>
                      <td className="border border-border p-3">&gt;80% of teams</td>
                      <td className="border border-border p-3">Component usage analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Development velocity</td>
                      <td className="border border-border p-3">30%+ faster feature delivery</td>
                      <td className="border border-border p-3">Time tracking and surveys</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Consistency score</td>
                      <td className="border border-border p-3">&gt;90% visual consistency</td>
                      <td className="border border-border p-3">Automated visual regression</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Bundle size impact</td>
                      <td className="border border-border p-3">&lt;10% overhead</td>
                      <td className="border border-border p-3">Bundle analysis tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Architecture Principles */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🏗️ Architecture Principles for Scale</h2>
              
              <h3 className="text-2xl font-semibold mb-3">⚙️ Component API Design</h3>
              <p className="text-lg mb-4">Design APIs that are both flexible and predictable:</p>

              <h4 className="text-xl font-semibold mb-3">API Design Principles</h4>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Principle</th>
                      <th className="border border-border p-3 text-left font-semibold">Description</th>
                      <th className="border border-border p-3 text-left font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Predictable</td>
                      <td className="border border-border p-3">Consistent naming and behavior</td>
                      <td className="border border-border p-3"><code>variant</code>, <code>size</code>, <code>disabled</code> props</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Flexible</td>
                      <td className="border border-border p-3">Support customization without breaking</td>
                      <td className="border border-border p-3"><code>className</code> override, compound components</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Composable</td>
                      <td className="border border-border p-3">Components work well together</td>
                      <td className="border border-border p-3">Form components, layout systems</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Accessible</td>
                      <td className="border border-border p-3">WCAG 2.1 AA compliance by default</td>
                      <td className="border border-border p-3">ARIA attributes, keyboard navigation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock 
                language="tsx"
                code={`// Example of a well-designed Button API
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  )
}`}
                className="mb-6"
              />
            </section>

            {/* Token-Based Design */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎨 Token-Based Design Systems</h2>
              
              <h3 className="text-2xl font-semibold mb-3">🔧 Design Tokens Structure</h3>
              <p className="text-lg mb-4">Create a scalable token architecture:</p>
              
              <CodeBlock 
                language="typescript"
                code={`// Design tokens structure
export const tokens = {
  colors: {
    // Semantic tokens
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      900: '#1e3a8a'
    },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    }
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem'       // 32px
  },
  typography: {
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem'
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  }
}`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">🎯 Component Composition Patterns</h3>
              <p className="text-lg mb-4">Build flexible, reusable components:</p>
              
              <CodeBlock 
                language="tsx"
                code={`// Compound component pattern for complex UI
const Card = {
  Root: ({ children, className, ...props }) => (
    <div 
      className={cn('rounded-lg border bg-card shadow-sm', className)} 
      {...props}
    >
      {children}
    </div>
  ),
  
  Header: ({ children, className, ...props }) => (
    <div 
      className={cn('flex flex-col space-y-1.5 p-6', className)} 
      {...props}
    >
      {children}
    </div>
  ),
  
  Title: ({ children, className, ...props }) => (
    <h3 
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)} 
      {...props}
    >
      {children}
    </h3>
  ),
  
  Content: ({ children, className, ...props }) => (
    <div 
      className={cn('p-6 pt-0', className)} 
      {...props}
    >
      {children}
    </div>
  )
}

// Usage
<Card.Root>
  <Card.Header>
    <Card.Title>Project Dashboard</Card.Title>
  </Card.Header>
  <Card.Content>
    <p>Welcome to your project overview.</p>
  </Card.Content>
</Card.Root>`}
                className="mb-6"
              />
            </section>

            {/* Documentation Strategy */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📚 Documentation That Teams Actually Use</h2>
              
              <h3 className="text-2xl font-semibold mb-3">🔍 Living Documentation with Storybook</h3>
              <p className="text-lg mb-4">Create interactive documentation that stays up-to-date:</p>
              
              <CodeBlock 
                language="tsx"
                code={`// Storybook story with comprehensive documentation
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: \`
The Button component is used to trigger actions or events, such as submitting forms, 
opening dialogs, canceling actions, or performing delete operations.

## Usage Guidelines
- Use primary buttons for the main action on a page
- Use secondary buttons for less important actions
- Use destructive buttons for actions that cannot be undone
        \`
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost'],
      description: 'Visual style variant'
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants side by side.'
      }
    }
  }
}`}
                className="mb-6"
              />
            </section>

            {/* Adoption Strategy */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🚀 Adoption and Migration Strategy</h2>
              
              <h3 className="text-2xl font-semibold mb-3">📋 Incremental Migration Plan</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Phase</th>
                      <th className="border border-border p-3 text-left font-semibold">Focus</th>
                      <th className="border border-border p-3 text-left font-semibold">Timeline</th>
                      <th className="border border-border p-3 text-left font-semibold">Success Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Foundation</td>
                      <td className="border border-border p-3">Core components (Button, Input, Card)</td>
                      <td className="border border-border p-3">4-6 weeks</td>
                      <td className="border border-border p-3">50% of new features use design system</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Expansion</td>
                      <td className="border border-border p-3">Complex components (Modal, DataTable)</td>
                      <td className="border border-border p-3">8-10 weeks</td>
                      <td className="border border-border p-3">80% adoption across teams</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Migration</td>
                      <td className="border border-border p-3">Replace legacy components</td>
                      <td className="border border-border p-3">12-16 weeks</td>
                      <td className="border border-border p-3">95% consistency score</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Optimization</td>
                      <td className="border border-border p-3">Performance and accessibility</td>
                      <td className="border border-border p-3">Ongoing</td>
                      <td className="border border-border p-3">Performance budget maintained</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-3">🎓 Training and Support</h3>
              <p className="text-lg mb-4">Successful adoption requires investment in education:</p>
              
              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-lg">
                  💡 <strong>Pro Tip</strong>: Create "Design System Champions" in each team who can help with adoption and provide feedback on component needs.
                </p>
              </div>
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎯 Key Principles for Scalable Design Systems</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🏗️ Architecture</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Start small with core components</li>
                    <li>• Use token-based design system</li>
                    <li>• Implement compound component patterns</li>
                    <li>• Ensure accessibility by default</li>
                  </ul>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">📚 Documentation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Living documentation with Storybook</li>
                    <li>• Clear usage guidelines</li>
                    <li>• Code examples for every component</li>
                    <li>• Visual regression testing</li>
                  </ul>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🚀 Adoption</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Incremental migration strategy</li>
                    <li>• Train design system champions</li>
                    <li>• Measure adoption metrics</li>
                    <li>• Gather continuous feedback</li>
                  </ul>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🔧 Maintenance</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Automated testing and deployment</li>
                    <li>• Version management strategy</li>
                    <li>• Performance monitoring</li>
                    <li>• Regular component audits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section>
              <p className="text-lg leading-relaxed mb-4">
                Building a design system at scale is a journey, not a destination. Success comes from balancing flexibility with consistency, investing in documentation and tooling, and maintaining a strong feedback loop with your users.
              </p>
              
              <p className="text-lg leading-relaxed">
                The most successful design systems are those that evolve with their teams' needs while maintaining their core principles of consistency, accessibility, and developer experience.
              </p>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔗 Design System Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Storybook</h3>
                  <p className="text-sm text-muted-foreground mb-3">Component documentation and testing</p>
                  <Link href="https://storybook.js.org/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Design Tokens</h3>
                  <p className="text-sm text-muted-foreground mb-3">Token specification and tools</p>
                  <Link href="https://design-tokens.github.io/community-group/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Chromatic</h3>
                  <p className="text-sm text-muted-foreground mb-3">Visual testing for Storybook</p>
                  <Link href="https://www.chromatic.com/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Design Systems Repo</h3>
                  <p className="text-sm text-muted-foreground mb-3">Design system examples and resources</p>
                  <Link href="https://designsystems.com/" className="inline-flex items-center text-sm text-primary hover:underline">
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