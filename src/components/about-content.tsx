"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Award, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

interface PersonalInfo {
  personal: {
    name: string;
    title: string;
    longBio: string;
    email: string;
    resumeUrl: string;
  };
  skills: {
    primary: Array<{
      name: string;
      level: number;
      years: number;
    }>;
    secondary: Array<{
      name: string;
      level: number;
    }>;
    specializations: string[];
  };
  achievements: string[];
}

interface AboutContentProps {
  personalInfo: PersonalInfo;
}

export function AboutContent({ personalInfo }: AboutContentProps) {
  const { personal, skills } = personalInfo;

  const experience = [
    {
      title: "Senior Software Engineer",
      period: "Present",
      location: "Bengaluru, India",
      achievements: [
        "Migrated legacy monolithic application to modern React/Angular micro-frontend architecture, improving performance by 55%",
        "Designed and implemented unified design system serving 5+ internal applications, reducing UI development time by 35%",
        "Established technical leadership practices including architecture reviews, coding standards, and mentorship programs",
        "Collaborated with product and UX teams to deliver complex financial calculations and reporting dashboards",
      ],
    },
    {
      title: "Frontend Engineer",
      period: "Previous",
      location: "Bengaluru, India",
      achievements: [
        "Achieved 45% improvement in application startup time by migrating to Angular CLI-based architecture with lazy loading",
        "Implemented feature module architecture enabling team scalability and parallel development workflows",
        "Optimized bundle size by 30% through code splitting and tree-shaking techniques",
        "Delivered testing automation platform features used by 10,000+ enterprise customers",
      ],
    },
    {
      title: "Frontend Software Developer",
      period: "Previous",
      location: "Bengaluru, India",
      achievements: [
        "Led 5-member frontend team delivering responsive mobile entertainment platform serving 5M+ users",
        "Implemented responsive design patterns supporting 15+ device types with 99.9% cross-browser compatibility",
        "Coordinated with PM and UX teams to deliver user-centric features with 95% stakeholder satisfaction",
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "SDMCET, Dharwad",
    period: "Jul 2007 - Aug 2011",
    location: "Karnataka, India",
    coursework:
      "Data Structures, Algorithms, Database Management, Software Engineering, Web Technologies",
  };

  const recognition = [
    {
      title: "Operative Opstar Award - Best Performer Q2 2020",
      year: "2020",
      description:
        "Recognized for exceptional technical leadership and contribution to product development initiatives",
    },
    {
      title: "Technical Leadership & Mentorship",
      year: "2019-Present",
      description:
        "Mentored junior and mid-level engineers across multiple organizations, enabling career growth and professional development",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {personal.longBio}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={personal.resumeUrl} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">Primary Technologies</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-2">
                      Frontend Frameworks
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Angular</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-2">
                      Languages
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Additional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.secondary.slice(0, 8).map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="text-xs"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Specializations</h4>
                <div className="space-y-2">
                  {skills.specializations.map((spec) => (
                    <div key={spec} className="flex items-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                      <span className="text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience and Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-muted pl-4 pb-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.location}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-sm"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-2 border-muted pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {education.degree}
                    </h3>
                    <p className="text-muted-foreground">
                      {education.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {education.location}
                    </p>
                  </div>
                  <Badge variant="outline">{education.period}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Relevant Coursework:</strong> {education.coursework}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Recognition & Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recognition.map((item, index) => (
                  <div key={index} className="border-l-2 border-muted pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge variant="outline">{item.year}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
