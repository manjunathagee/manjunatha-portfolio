import { AboutContent } from "@/components/about-content";
import personalInfo from "../../../public/data/personal-info.json";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <AboutContent personalInfo={personalInfo} />
    </div>
  )
}