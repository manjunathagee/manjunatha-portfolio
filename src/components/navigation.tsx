"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  siteConfig: {
    site: {
      title: string
    }
    navigation: {
      main: Array<{
        name: string
        href: string
        key: string
      }>
    }
  }
}

export function Navigation({ siteConfig }: NavigationProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 font-bold text-xl"
          aria-label="Home"
        >
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {siteConfig.site.title.split(" - ")[0]}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80 ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild variant="default" size="sm">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="h-9 w-9 px-0"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur"
        >
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-border/40">
              <Button asChild variant="default" size="sm" className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}