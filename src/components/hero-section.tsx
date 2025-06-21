"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface PersonalInfo {
  personal: {
    name: string
    title: string
    subtitle: string
    bio: string
    location: string
    email: string
    resumeUrl: string
    profileImage: string
    availableForWork: boolean
  }
  experience: {
    totalYears: number
    highlightStats: Array<{
      metric: string
      value: string
      description: string
    }>
  }
}

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  const { personal, experience } = personalInfo

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-background shadow-lg">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Availability badge */}
          {personal.availableForWork && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </motion.div>
          )}

          {/* Name and title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="block">{personal.name}</span>
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {personal.title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            {personal.subtitle}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {personal.bio}
          </motion.p>


          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href={personal.resumeUrl} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/manjunathagee" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://www.linkedin.com/in/manjunatha-citragar-54512827/" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link href={`mailto:${personal.email}`} className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="hidden sm:inline">Email</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}