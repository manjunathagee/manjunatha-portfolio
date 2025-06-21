"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react"
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
}

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
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
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my most impactful work, showcasing advanced frontend development 
            and technical leadership in building scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                          <Link href={project.liveUrl} target="_blank">
                            <Eye className="h-4 w-4 mr-1" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.githubUrl} target="_blank">
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
                      <CardDescription className="text-sm line-clamp-2">
                        {project.shortDescription}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {project.category.replace("-", " ")}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Key features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
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
                      <Link href={project.githubUrl || `/projects/${project.slug}`} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Details
                      </Link>
                    </Button>
                    {project.storybookUrl && (
                      <Button asChild variant="ghost" size="sm">
                        <Link href={project.storybookUrl} target="_blank">
                          Storybook
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}