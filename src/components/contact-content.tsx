"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import Link from "next/link"

interface SiteConfig {
  site: {
    email: string
    phone: string
    location: string
  }
  social: {
    github: string
    linkedin: string
    email: string
  }
}

interface ContactContentProps {
  siteConfig: SiteConfig
}

export function ContactContent({ siteConfig }: ContactContentProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || "Contact from Portfolio Website")
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      const mailtoLink = `mailto:${siteConfig.site.email}?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoLink
      
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.site.email,
      href: `mailto:${siteConfig.site.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.site.phone,
      href: `tel:${siteConfig.site.phone}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.site.location,
      href: null
    }
  ]

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities, collaborations, and connecting with fellow developers. 
          Let&apos;s discuss how we can work together!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    {info.href ? (
                      <Link 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.social.github} target="_blank" className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={siteConfig.social.linkedin} target="_blank" className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <Card>
            <CardHeader>
              <CardTitle>Let&apos;s Work Together</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I&apos;m currently available for:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                  Frontend Development Projects
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                  Technical Consulting & Architecture Reviews
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                  Team Leadership & Mentoring
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                  Code Reviews & Performance Optimization
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell me about your project, questions, or how I can help..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      Your email client should open with the message. If it doesn&apos;t, please send an email directly to {siteConfig.site.email}
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      There was an error opening your email client. Please send an email directly to {siteConfig.site.email}
                    </p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Opening email client..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  This form will open your email client with the message pre-filled. 
                  Alternatively, you can email me directly at{" "}
                  <Link 
                    href={`mailto:${siteConfig.site.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.site.email}
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}