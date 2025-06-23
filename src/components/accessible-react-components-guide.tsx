"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Calendar, Clock, ArrowLeft, Share2, ExternalLink } from "lucide-react"
import Link from "next/link"

export function AccessibleReactComponentsGuide() {
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
          title: "Building Accessible React Components: A Senior Developer's Guide",
          text: "Learn how to implement WCAG 2.1 AA accessibility standards in React components with practical examples and testing strategies.",
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
              <Badge variant="secondary">Accessibility</Badge>
              <Badge variant="default">Featured</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Building Accessible React Components: A Senior Developer&apos;s Guide
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Learn how to implement WCAG 2.1 AA accessibility standards in React components with practical examples and testing strategies.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate("2024-03-15")}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  8 min read
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
              {["React", "Accessibility", "WCAG", "Component Design"].map((tag) => (
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
                As a Senior Frontend Engineer with over 11 years of experience, I&apos;ve seen firsthand how accessibility can make or break user experiences. Today, I&apos;ll share practical strategies for building React components that meet WCAG 2.1 AA standards while maintaining excellent developer experience.
              </p>
            </section>

            {/* Why Accessibility Matters */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎯 Why Accessibility Matters More Than Ever</h2>
              <p className="text-lg mb-4">
                Accessibility isn&apos;t just about compliance—it&apos;s about creating inclusive experiences that work for everyone. With over 1 billion people worldwide living with disabilities, accessible design isn&apos;t optional; it&apos;s essential.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Impact Area</th>
                      <th className="border border-border p-3 text-left font-semibold">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">User Base</td>
                      <td className="border border-border p-3">Expand reach to 15% of global population</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Legal Compliance</td>
                      <td className="border border-border p-3">Meet ADA and WCAG 2.1 AA requirements</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">SEO Benefits</td>
                      <td className="border border-border p-3">Semantic HTML improves search rankings</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Code Quality</td>
                      <td className="border border-border p-3">Accessible code is often cleaner and more maintainable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Semantic HTML Foundation */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🏗️ The Foundation: Semantic HTML</h2>
              <p className="text-lg mb-4">Semantic HTML is the cornerstone of accessible web applications. Use the right elements for the job:</p>
              
              <CodeBlock 
                language="jsx"
                code={`// ❌ Poor accessibility
<div onClick={handleClick}>Click me</div>

// ✅ Accessible approach
<button onClick={handleClick} aria-label="Submit form">
  Click me
</button>`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">📋 Semantic Element Guide</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Use Case</th>
                      <th className="border border-border p-3 text-left font-semibold">Element</th>
                      <th className="border border-border p-3 text-left font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Clickable actions</td>
                      <td className="border border-border p-3"><code>&lt;button&gt;</code></td>
                      <td className="border border-border p-3">Keyboard accessible, screen reader compatible</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Navigation</td>
                      <td className="border border-border p-3"><code>&lt;nav&gt;</code>, <code>&lt;a&gt;</code></td>
                      <td className="border border-border p-3">Proper landmarks and link semantics</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Form inputs</td>
                      <td className="border border-border p-3"><code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td>
                      <td className="border border-border p-3">Built-in validation and focus management</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Content structure</td>
                      <td className="border border-border p-3"><code>&lt;h1&gt;-&lt;h6&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code></td>
                      <td className="border border-border p-3">Screen reader navigation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Principles */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔑 Key Principles for Accessible React Components</h2>
              
              <h3 className="text-2xl font-semibold mb-3">1️⃣ Proper ARIA Labels and Roles</h3>
              
              <CodeBlock 
                language="jsx"
                code={`const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const searchId = useId();

  return (
    <div role="search">
      <label htmlFor={searchId} className="sr-only">
        Search projects
      </label>
      <input
        id={searchId}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-describedby={\`\${searchId}-description\`}
        placeholder="Search projects..."
      />
      <div id={\`\${searchId}-description\`} className="sr-only">
        Enter keywords to search through project titles and descriptions
      </div>
    </div>
  );
};`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">2️⃣ Keyboard Navigation Support</h3>
              <p className="text-lg mb-4">All interactive elements must be keyboard accessible:</p>

              <h4 className="text-xl font-semibold mb-3">Essential Keyboard Patterns</h4>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Key</th>
                      <th className="border border-border p-3 text-left font-semibold">Action</th>
                      <th className="border border-border p-3 text-left font-semibold">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Tab</td>
                      <td className="border border-border p-3">Navigate forward</td>
                      <td className="border border-border p-3">Focus management</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Shift + Tab</td>
                      <td className="border border-border p-3">Navigate backward</td>
                      <td className="border border-border p-3">Focus management</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Enter</td>
                      <td className="border border-border p-3">Activate buttons</td>
                      <td className="border border-border p-3">Primary actions</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Space</td>
                      <td className="border border-border p-3">Activate buttons/checkboxes</td>
                      <td className="border border-border p-3">Secondary actions</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Arrow keys</td>
                      <td className="border border-border p-3">Navigate within components</td>
                      <td className="border border-border p-3">Lists, menus, tabs</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Escape</td>
                      <td className="border border-border p-3">Close/cancel</td>
                      <td className="border border-border p-3">Modals, dropdowns</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock 
                language="jsx"
                code={`const DropdownMenu = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < items.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : items.length - 1
        );
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0) {
          onSelect(items[focusedIndex]);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="dropdown">
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        Select an option
      </button>
      {isOpen && (
        <ul role="listbox" onKeyDown={handleKeyDown}>
          {items.map((item, index) => (
            <li
              key={item.id}
              role="option"
              aria-selected={index === focusedIndex}
              className={index === focusedIndex ? 'focused' : ''}
              onClick={() => onSelect(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">3️⃣ Color Contrast and Visual Indicators</h3>
              <p className="text-lg mb-4">Ensure visual information is accessible to all users:</p>

              <h4 className="text-xl font-semibold mb-3">WCAG Contrast Requirements</h4>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Text Size</th>
                      <th className="border border-border p-3 text-left font-semibold">AA Level</th>
                      <th className="border border-border p-3 text-left font-semibold">AAA Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Normal text</td>
                      <td className="border border-border p-3">4.5:1</td>
                      <td className="border border-border p-3">7:1</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Large text (18pt+)</td>
                      <td className="border border-border p-3">3:1</td>
                      <td className="border border-border p-3">4.5:1</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">UI components</td>
                      <td className="border border-border p-3">3:1</td>
                      <td className="border border-border p-3">-</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Focus indicators</td>
                      <td className="border border-border p-3">3:1</td>
                      <td className="border border-border p-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CodeBlock 
                language="jsx"
                code={`const StatusBadge = ({ status, children }) => {
  const statusConfig = {
    success: {
      color: 'text-green-800',
      bg: 'bg-green-100',
      icon: '✓',
      ariaLabel: 'Success'
    },
    error: {
      color: 'text-red-800',
      bg: 'bg-red-100',
      icon: '✗',
      ariaLabel: 'Error'
    },
    warning: {
      color: 'text-yellow-800',
      bg: 'bg-yellow-100',
      icon: '⚠',
      ariaLabel: 'Warning'
    }
  };

  const config = statusConfig[status];

  return (
    <span
      className={\`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium \${config.color} \${config.bg}\`}
      role="status"
      aria-label={\`\${config.ariaLabel}: \${children}\`}
    >
      <span aria-hidden="true" className="mr-1">
        {config.icon}
      </span>
      {children}
    </span>
  );
};`}
                className="mb-6"
              />
            </section>

            {/* Testing Section */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🧪 Testing Your Accessible Components</h2>
              
              <h3 className="text-2xl font-semibold mb-3">🤖 Automated Testing with jest-axe</h3>
              
              <CodeBlock 
                language="jsx"
                code={`import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SearchInput } from './SearchInput';

expect.extend(toHaveNoViolations);

describe('SearchInput Accessibility', () => {
  test('should not have any accessibility violations', async () => {
    const { container } = render(
      <SearchInput onSearch={jest.fn()} />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('should be keyboard navigable', () => {
    const onSearch = jest.fn();
    const { getByRole } = render(<SearchInput onSearch={onSearch} />);
    
    const input = getByRole('searchbox');
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(onSearch).toHaveBeenCalled();
  });
});`}
                className="mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">✅ Manual Testing Checklist</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Test Category</th>
                      <th className="border border-border p-3 text-left font-semibold">Checkpoint</th>
                      <th className="border border-border p-3 text-left font-semibold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Keyboard Navigation</td>
                      <td className="border border-border p-3">Navigate entire component using only keyboard</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Focus Management</td>
                      <td className="border border-border p-3">All interactive elements are focusable</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Visual Indicators</td>
                      <td className="border border-border p-3">Focus indicators have 3:1 contrast ratio</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Screen Reader</td>
                      <td className="border border-border p-3">Error messages are announced properly</td>
                      <td className="border border-border p-3"><Badge variant="destructive">High</Badge></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Compatibility</td>
                      <td className="border border-border p-3">Works with NVDA, VoiceOver, JAWS</td>
                      <td className="border border-border p-3"><Badge variant="secondary">Medium</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Focus Management */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎛️ Advanced Patterns: Focus Management</h2>
              <p className="text-lg mb-4">Focus management is crucial for complex components like modals and dropdowns:</p>
              
              <CodeBlock 
                language="jsx"
                code={`const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      modalRef.current?.focus();
      
      // Trap focus within modal
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        if (e.key === 'Tab') {
          trapFocus(e, modalRef.current);
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="modal-content"
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
};`}
                className="mb-6"
              />
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaways</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Priority</th>
                      <th className="border border-border p-3 text-left font-semibold">Principle</th>
                      <th className="border border-border p-3 text-left font-semibold">Implementation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-bold">1</td>
                      <td className="border border-border p-3 font-medium">Start with semantic HTML</td>
                      <td className="border border-border p-3">Use proper elements (<code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-bold">2</td>
                      <td className="border border-border p-3 font-medium">Test early and often</td>
                      <td className="border border-border p-3">Integrate jest-axe into CI/CD pipeline</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-bold">3</td>
                      <td className="border border-border p-3 font-medium">Consider all users</td>
                      <td className="border border-border p-3">Design for keyboard, screen readers, motor disabilities</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-bold">4</td>
                      <td className="border border-border p-3 font-medium">Maintain contrast ratios</td>
                      <td className="border border-border p-3">Use tools like Colour Contrast Analyser</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-bold">5</td>
                      <td className="border border-border p-3 font-medium">Provide clear feedback</td>
                      <td className="border border-border p-3">Implement ARIA live regions for dynamic updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-3">🛠️ Essential Tools for Accessibility</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Tool</th>
                      <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                      <th className="border border-border p-3 text-left font-semibold">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">jest-axe</td>
                      <td className="border border-border p-3">Automated testing</td>
                      <td className="border border-border p-3">Unit test accessibility violations</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">axe DevTools</td>
                      <td className="border border-border p-3">Browser extension</td>
                      <td className="border border-border p-3">Manual testing and debugging</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Lighthouse</td>
                      <td className="border border-border p-3">Performance audit</td>
                      <td className="border border-border p-3">Accessibility scoring</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">NVDA/VoiceOver</td>
                      <td className="border border-border p-3">Screen readers</td>
                      <td className="border border-border p-3">Real user testing</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Colour Contrast Analyser</td>
                      <td className="border border-border p-3">Contrast checking</td>
                      <td className="border border-border p-3">Verify WCAG compliance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conclusion */}
            <section>
              <p className="text-lg leading-relaxed mb-4">
                Building accessible React components requires intentional design and development practices. By following these patterns and incorporating accessibility testing into your workflow, you&apos;ll create components that work beautifully for all users.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-lg italic">
                  💡 <strong>Remember</strong>: Accessibility is not a feature to add later—it&apos;s a fundamental aspect of good component design that should be considered from the very beginning of your development process.
                </p>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-3xl font-bold mb-4">🔗 Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">WCAG Guidelines</h3>
                  <p className="text-sm text-muted-foreground mb-3">Official accessibility guidelines</p>
                  <Link href="https://www.w3.org/WAI/WCAG21/quickref/" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">React Accessibility Docs</h3>
                  <p className="text-sm text-muted-foreground mb-3">React-specific accessibility patterns</p>
                  <Link href="https://react.dev/learn/accessibility" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">axe-core Rules</h3>
                  <p className="text-sm text-muted-foreground mb-3">Understand automated test failures</p>
                  <Link href="https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md" className="inline-flex items-center text-sm text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">WebAIM</h3>
                  <p className="text-sm text-muted-foreground mb-3">Comprehensive accessibility resources</p>
                  <Link href="https://webaim.org/" className="inline-flex items-center text-sm text-primary hover:underline">
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