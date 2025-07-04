"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  techStack: string[]
  category: string
  status: string
  githubUrl?: string
  liveUrl?: string
  storybookUrl?: string
  images: {
    thumbnail: string
    featured?: string
  }
  features: string[]
  metrics?: {
    components?: number
    testCoverage?: string
    bundleSize?: string
    storiesCount?: number
    impact?: string
  }
  tags: string[]
  slug: string
  role: string
  industryImpact?: string
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
            {/* Project thumbnail */}
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-muted-foreground/20">
                  {project.title.split(" ").map(word => word[0]).join("")}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.shortDescription}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="ml-2">
                  {project.category.replace("-", " ")}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Full description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Key features */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role and impact */}
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">Role:</span>
                  <span className="text-muted-foreground">{project.role}</span>
                </div>
                {project.industryImpact && (
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    {project.industryImpact}
                  </p>
                )}
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                  {project.metrics.components && (
                    <div className="text-center">
                      <div className="font-bold text-primary">{project.metrics.components}+</div>
                      <div className="text-xs text-muted-foreground">Components</div>
                    </div>
                  )}
                  {project.metrics.testCoverage && (
                    <div className="text-center">
                      <div className="font-bold text-primary">{project.metrics.testCoverage}</div>
                      <div className="text-xs text-muted-foreground">Test Coverage</div>
                    </div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-4">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={project.githubUrl || `/projects/${project.slug}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Code
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}