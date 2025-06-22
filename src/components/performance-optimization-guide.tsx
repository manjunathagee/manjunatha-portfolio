"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Calendar, Clock, ArrowLeft, Share2, ExternalLink } from "lucide-react"
import Link from "next/link"

export function PerformanceOptimizationGuide() {
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
          title: "Performance Optimization Techniques for Modern React Applications",
          text: "Deep dive into React performance optimization including code splitting, lazy loading, and Core Web Vitals improvements.",
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
              <Badge variant="secondary">Performance</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Performance Optimization Techniques for Modern React Applications
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Deep dive into React performance optimization including code splitting, lazy loading, and Core Web Vitals improvements.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate("2024-02-20")}
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
              {["React", "Performance", "Bundle Optimization", "Core Web Vitals"].map((tag) => (
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
                As a Senior Frontend Engineer with over 11 years of experience, I've witnessed the evolution of React applications from simple components to complex, enterprise-scale systems. Performance optimization has become crucial for delivering exceptional user experiences. In this article, I'll share proven techniques that have helped me achieve 40% average performance improvements across multiple projects.
              </p>
            </section>

            {/* Performance Impact Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📈 Performance Impact Overview</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Optimization Technique</th>
                      <th className="border border-border p-3 text-left font-semibold">Average Improvement</th>
                      <th className="border border-border p-3 text-left font-semibold">Difficulty</th>
                      <th className="border border-border p-3 text-left font-semibold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Code Splitting</td>
                      <td className="border border-border p-3">35-50% faster initial load</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Component Memoization</td>
                      <td className="border border-border p-3">20-30% fewer re-renders</td>
                      <td className="border border-border p-3"><Badge variant="outline">Easy</Badge></td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Bundle Optimization</td>
                      <td className="border border-border p-3">25-40% smaller bundles</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Image Optimization</td>
                      <td className="border border-border p-3">40-60% faster LCP</td>
                      <td className="border border-border p-3"><Badge variant="outline">Easy</Badge></td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Virtual Scrolling</td>
                      <td className="border border-border p-3">80-90% faster list rendering</td>
                      <td className="border border-border p-3"><Badge variant="destructive">Hard</Badge></td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Understanding Bottlenecks */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔍 Understanding React Performance Bottlenecks</h2>
              
              <h3 className="text-2xl font-semibold mb-3">⚠️ Common Performance Issues</h3>
              <p className="text-lg mb-4">React applications can suffer from several performance bottlenecks:</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Issue</th>
                      <th className="border border-border p-3 text-left font-semibold">Impact</th>
                      <th className="border border-border p-3 text-left font-semibold">Detection Method</th>
                      <th className="border border-border p-3 text-left font-semibold">Common Causes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Unnecessary re-renders</td>
                      <td className="border border-border p-3">20-50% performance loss</td>
                      <td className="border border-border p-3">React DevTools Profiler</td>
                      <td className="border border-border p-3">Missing memoization, unstable props</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Large bundle sizes</td>
                      <td className="border border-border p-3">2-5s slower initial load</td>
                      <td className="border border-border p-3">Bundle analyzer</td>
                      <td className="border border-border p-3">Unused imports, large dependencies</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Inefficient data fetching</td>
                      <td className="border border-border p-3">10-30% slower interactions</td>
                      <td className="border border-border p-3">Network tab</td>
                      <td className="border border-border p-3">Over-fetching, waterfall requests</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Memory leaks</td>
                      <td className="border border-border p-3">Gradual performance degradation</td>
                      <td className="border border-border p-3">Memory profiler</td>
                      <td className="border border-border p-3">Uncleared intervals, event listeners</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-3">📀 Measuring Performance</h3>
              <p className="text-lg mb-4">Before optimizing, it's essential to measure current performance using:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Tool</th>
                      <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                      <th className="border border-border p-3 text-left font-semibold">Key Metrics</th>
                      <th className="border border-border p-3 text-left font-semibold">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">React DevTools Profiler</td>
                      <td className="border border-border p-3">Component render analysis</td>
                      <td className="border border-border p-3">Render time, render count</td>
                      <td className="border border-border p-3">Development</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Chrome DevTools</td>
                      <td className="border border-border p-3">Runtime performance</td>
                      <td className="border border-border p-3">FPS, memory usage</td>
                      <td className="border border-border p-3">Development</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Lighthouse</td>
                      <td className="border border-border p-3">Overall performance score</td>
                      <td className="border border-border p-3">Core Web Vitals</td>
                      <td className="border border-border p-3">CI/CD</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Bundle Analyzer</td>
                      <td className="border border-border p-3">Bundle composition</td>
                      <td className="border border-border p-3">Bundle size, dependencies</td>
                      <td className="border border-border p-3">Build process</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Code Splitting */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📄 Code Splitting and Lazy Loading</h2>
              
              <h3 className="text-2xl font-semibold mb-3">⚡ Dynamic Imports</h3>
              <p className="text-lg mb-4">Implement code splitting using React's lazy loading:</p>

              <h4 className="text-xl font-semibold mb-3">Code Splitting Strategies</h4>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Strategy</th>
                      <th className="border border-border p-3 text-left font-semibold">Use Case</th>
                      <th className="border border-border p-3 text-left font-semibold">Bundle Reduction</th>
                      <th className="border border-border p-3 text-left font-semibold">Implementation Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Route-based</td>
                      <td className="border border-border p-3">Different pages</td>
                      <td className="border border-border p-3">60-80%</td>
                      <td className="border border-border p-3"><Badge variant="outline">Low</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Feature-based</td>
                      <td className="border border-border p-3">Large features</td>
                      <td className="border border-border p-3">40-60%</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Component-based</td>
                      <td className="border border-border p-3">Heavy components</td>
                      <td className="border border-border p-3">20-40%</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Vendor splitting</td>
                      <td className="border border-border p-3">Third-party libraries</td>
                      <td className="border border-border p-3">20-30%</td>
                      <td className="border border-border p-3"><Badge variant="outline">Low</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock 
                language="jsx"
                code={`import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">🛤️ Route-based Code Splitting</h3>
              <p className="text-lg mb-4">Split your application by routes to reduce initial bundle size:</p>
              
              <CodeBlock 
                language="jsx"
                code={`const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));`}
                className="mb-6"
              />
            </section>

            {/* Component Optimization */}
            <section>
              <h2 className="text-3xl font-bold mb-4">⚙️ Component Optimization Techniques</h2>
              
              <h3 className="text-2xl font-semibold mb-3">🧠 React.memo for Component Memoization</h3>
              <p className="text-lg mb-4">Prevent unnecessary re-renders with React.memo:</p>

              <h4 className="text-xl font-semibold mb-3">When to Use React.memo</h4>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Scenario</th>
                      <th className="border border-border p-3 text-left font-semibold">Use React.memo</th>
                      <th className="border border-border p-3 text-left font-semibold">Alternative</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Expensive rendering</td>
                      <td className="border border-border p-3">✅ Yes</td>
                      <td className="border border-border p-3">Optimize the expensive part</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Frequent parent updates</td>
                      <td className="border border-border p-3">✅ Yes</td>
                      <td className="border border-border p-3">Move state down</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Stable props</td>
                      <td className="border border-border p-3">✅ Yes</td>
                      <td className="border border-border p-3">useMemo for props</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Simple, fast components</td>
                      <td className="border border-border p-3">❌ No</td>
                      <td className="border border-border p-3">Re-render is cheaper</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Props always change</td>
                      <td className="border border-border p-3">❌ No</td>
                      <td className="border border-border p-3">Won't prevent re-renders</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock 
                language="jsx"
                code={`const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  return (
    <div>
      {/* Complex rendering logic */}
    </div>
  );
});`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">📋 useMemo and useCallback Hooks</h3>
              <p className="text-lg mb-4">Optimize expensive calculations and function references:</p>

              <CodeBlock 
                language="jsx"
                code={`function DataProcessor({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  const handleUpdate = useCallback((id) => {
    // Update logic
  }, []);

  return <ItemList items={filteredItems} onUpdate={handleUpdate} />;
}`}
                className="mb-6"
              />
            </section>

            {/* Bundle Optimization */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📦 Bundle Optimization Strategies</h2>
              
              <h3 className="text-2xl font-semibold mb-3">🌳 Tree Shaking</h3>
              <p className="text-lg mb-4">Eliminate dead code by using ES6 imports:</p>

              <h4 className="text-xl font-semibold mb-3">Tree Shaking Effectiveness</h4>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Import Method</th>
                      <th className="border border-border p-3 text-left font-semibold">Bundle Size</th>
                      <th className="border border-border p-3 text-left font-semibold">Tree Shaking</th>
                      <th className="border border-border p-3 text-left font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Named imports</td>
                      <td className="border border-border p-3"><Badge variant="outline">Smallest</Badge></td>
                      <td className="border border-border p-3">✅ Full</td>
                      <td className="border border-border p-3"><code>import {`{ debounce }`} from 'lodash'</code></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Default imports</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                      <td className="border border-border p-3">❌ None</td>
                      <td className="border border-border p-3"><code>import _ from 'lodash'</code></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Namespace imports</td>
                      <td className="border border-border p-3"><Badge variant="destructive">Largest</Badge></td>
                      <td className="border border-border p-3">❌ None</td>
                      <td className="border border-border p-3"><code>import * as _ from 'lodash'</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock 
                language="jsx"
                code={`// Good: Only imports what you need
import { debounce } from 'lodash';

// Bad: Imports entire library
import _ from 'lodash';`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">🔍 Bundle Analysis</h3>
              <p className="text-lg mb-4">Use webpack-bundle-analyzer to identify large dependencies:</p>
              
              <CodeBlock 
                language="bash"
                code={`npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js`}
                className="mb-6"
              />
            </section>

            {/* Core Web Vitals */}
            <section>
              <h2 className="text-3xl font-bold mb-4">📊 Core Web Vitals Improvements</h2>
              
              <h3 className="text-2xl font-semibold mb-3">🎨 Largest Contentful Paint (LCP)</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Optimization</th>
                      <th className="border border-border p-3 text-left font-semibold">Impact</th>
                      <th className="border border-border p-3 text-left font-semibold">Implementation</th>
                      <th className="border border-border p-3 text-left font-semibold">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Optimize images</td>
                      <td className="border border-border p-3">40-60% improvement</td>
                      <td className="border border-border p-3">WebP format, compression</td>
                      <td className="border border-border p-3"><Badge variant="outline">Easy</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Critical CSS inline</td>
                      <td className="border border-border p-3">20-30% improvement</td>
                      <td className="border border-border p-3">Extract above-fold CSS</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">CDN for static assets</td>
                      <td className="border border-border p-3">30-50% improvement</td>
                      <td className="border border-border p-3">CloudFront, Cloudflare</td>
                      <td className="border border-border p-3"><Badge variant="outline">Easy</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Preload key resources</td>
                      <td className="border border-border p-3">15-25% improvement</td>
                      <td className="border border-border p-3"><code>&lt;link rel="preload"&gt;</code></td>
                      <td className="border border-border p-3"><Badge variant="outline">Easy</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-3">⏱️ First Input Delay (FID)</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Optimization</th>
                      <th className="border border-border p-3 text-left font-semibold">Impact</th>
                      <th className="border border-border p-3 text-left font-semibold">Implementation</th>
                      <th className="border border-border p-3 text-left font-semibold">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Break up long tasks</td>
                      <td className="border border-border p-3">50-70% improvement</td>
                      <td className="border border-border p-3">Time slicing, scheduler</td>
                      <td className="border border-border p-3"><Badge variant="destructive">Hard</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Defer non-critical JS</td>
                      <td className="border border-border p-3">30-40% improvement</td>
                      <td className="border border-border p-3">Dynamic imports</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Web workers</td>
                      <td className="border border-border p-3">60-80% improvement</td>
                      <td className="border border-border p-3">Heavy computation offload</td>
                      <td className="border border-border p-3"><Badge variant="destructive">Hard</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Reduce JavaScript</td>
                      <td className="border border-border p-3">20-30% improvement</td>
                      <td className="border border-border p-3">Bundle optimization</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎯 Key Optimization Principles</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Principle</th>
                      <th className="border border-border p-3 text-left font-semibold">Implementation</th>
                      <th className="border border-border p-3 text-left font-semibold">Impact</th>
                      <th className="border border-border p-3 text-left font-semibold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Measure before optimizing</td>
                      <td className="border border-border p-3">Use profiling tools to identify bottlenecks</td>
                      <td className="border border-border p-3">Targeted improvements</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Optimize incrementally</td>
                      <td className="border border-border p-3">One change at a time with measurement</td>
                      <td className="border border-border p-3">Reliable progress</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Consider user experience</td>
                      <td className="border border-border p-3">Balance performance with functionality</td>
                      <td className="border border-border p-3">Better UX</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Monitor continuously</td>
                      <td className="border border-border p-3">Production performance monitoring</td>
                      <td className="border border-border p-3">Ongoing improvements</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conclusion */}
            <section>
              <p className="text-lg leading-relaxed mb-4">
                Performance optimization is an ongoing process that requires continuous monitoring and improvement. The techniques outlined in this article have helped me achieve significant performance gains across multiple enterprise applications.
              </p>
              
              <p className="text-lg leading-relaxed">
                By implementing these strategies systematically, you can build React applications that deliver exceptional user experiences while maintaining code quality and developer productivity.
              </p>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔗 Performance Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">React DevTools Profiler</h3>
                  <p className="text-sm text-muted-foreground mb-3">Component performance analysis</p>
                  <Link href="https://react.dev/reference/react/Profiler" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Web Vitals</h3>
                  <p className="text-sm text-muted-foreground mb-3">Core performance metrics</p>
                  <Link href="https://web.dev/vitals/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Lighthouse</h3>
                  <p className="text-sm text-muted-foreground mb-3">Performance scoring</p>
                  <Link href="https://developers.google.com/web/tools/lighthouse" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Bundle Analyzer</h3>
                  <p className="text-sm text-muted-foreground mb-3">Bundle composition analysis</p>
                  <Link href="https://github.com/webpack-contrib/webpack-bundle-analyzer" className="inline-flex items-center text-sm text-primary hover:underline">
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