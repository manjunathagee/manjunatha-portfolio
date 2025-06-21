import { ContactContent } from "@/components/contact-content";
import siteConfig from "../../../public/data/site-config.json";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <ContactContent siteConfig={siteConfig} />
    </div>
  )
}