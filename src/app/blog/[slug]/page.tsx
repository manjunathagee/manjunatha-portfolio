import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog-post";
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

  // Read the markdown content
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