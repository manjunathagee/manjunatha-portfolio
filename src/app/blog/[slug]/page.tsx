import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog-post";
import { ReactComponentLibraryGuide } from "@/components/react-component-library-guide";
import { AccessibleReactComponentsGuide } from "@/components/accessible-react-components-guide";
import { PerformanceOptimizationGuide } from "@/components/performance-optimization-guide";
import { DesignSystemsGuide } from "@/components/design-systems-guide";
import { ReactVelocityStarterGuide } from "@/components/react-velocity-starter-guide";
import blogPosts from "../../../../public/data/blog-posts.json";
import fs from "fs";
import path from "path";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Check for specific blog posts and use static components
  switch (slug) {
    case "react-ui-kit-component-library":
      return <ReactComponentLibraryGuide />;
    case "accessible-react-components":
      return <AccessibleReactComponentsGuide />;
    case "performance-optimization-react":
      return <PerformanceOptimizationGuide />;
    case "design-systems-scale":
      return <DesignSystemsGuide />;
    case "react-velocity-starter-modern-template":
      return <ReactVelocityStarterGuide />;
  }

  // For other posts, read the markdown content
  let content = "";
  try {
    const contentPath = path.join(process.cwd(), "public", post.content);
    content = fs.readFileSync(contentPath, "utf8");
  } catch (error) {
    console.error("Error reading blog post content:", error);
    content = "Content not available.";
  }

  return <BlogPost post={{ ...post, content }} />;
}