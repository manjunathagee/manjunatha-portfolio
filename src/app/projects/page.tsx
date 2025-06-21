import { ProjectsGrid } from "@/components/projects-grid";
import projects from "../../../public/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing frontend development expertise, 
            performance optimization, and modern web technologies.
          </p>
        </div>
        
        <ProjectsGrid projects={projects.projects} />
      </div>
    </div>
  )
}