import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";
import personalInfo from "../../public/data/personal-info.json";
import projects from "../../public/data/projects.json";

export default function Home() {
  const featuredProjects = projects.projects.filter(project => project.featured);

  return (
    <div className="flex flex-col">
      <HeroSection personalInfo={personalInfo} />
      <FeaturedProjects projects={featuredProjects} />
    </div>
  );
}
