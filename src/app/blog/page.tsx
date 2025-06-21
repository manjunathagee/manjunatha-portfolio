import { BlogGrid } from "@/components/blog-grid";
import blogPosts from "../../../public/data/blog-posts.json";

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical insights, tutorials, and thoughts on frontend development, 
            performance optimization, and modern web technologies.
          </p>
        </div>
        
        <BlogGrid posts={blogPosts.posts} />
      </div>
    </div>
  )
}