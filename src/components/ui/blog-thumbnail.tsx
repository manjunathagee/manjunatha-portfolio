"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BlogThumbnailProps {
  title: string
  category: string
  className?: string
}

export function BlogThumbnail({ title, category, className }: BlogThumbnailProps) {
  // Generate consistent colors based on category
  const getCategoryColors = (category: string) => {
    switch (category.toLowerCase()) {
      case 'accessibility':
        return 'from-green-400 to-blue-500'
      case 'performance':
        return 'from-orange-400 to-red-500'
      case 'architecture':
        return 'from-purple-400 to-pink-500'
      case 'frontend development':
        return 'from-blue-400 to-cyan-500'
      case 'developer tools':
        return 'from-indigo-400 to-purple-500'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  // Get initials from title
  const getInitials = (title: string) => {
    return title
      .split(' ')
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase()
  }

  // Generate a pattern based on title
  const getPattern = (title: string) => {
    const hash = title.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    const patterns = [
      'dots',
      'grid',
      'diagonal',
      'waves'
    ]
    
    return patterns[Math.abs(hash) % patterns.length]
  }

  const gradientColors = getCategoryColors(category)
  const pattern = getPattern(title)
  const initials = getInitials(title)

  return (
    <div className={cn("relative w-full h-full m-0 p-0", className)}>
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-90 m-0 p-0`} />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        {pattern === 'dots' && (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        )}
        {pattern === 'grid' && (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px'
            }}
          />
        )}
        {pattern === 'diagonal' && (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 2px, transparent 2px, transparent 20px)'
            }}
          />
        )}
        {pattern === 'waves' && (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at top, rgba(255,255,255,0.1), transparent 50%),
                radial-gradient(ellipse at bottom, rgba(255,255,255,0.1), transparent 50%)
              `
            }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
          {initials}
        </div>
        <div className="text-xs md:text-sm font-medium opacity-90 uppercase tracking-wider">
          {category}
        </div>
      </div>
      
      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}