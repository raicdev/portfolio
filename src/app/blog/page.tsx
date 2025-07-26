import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, BookOpen, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "next-view-transitions";
import { getBlogPosts } from "@/lib/post";

export default async function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-2">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on code and technology
        </p>
      </div>

      {/* Blog Posts Section */}
      <section className="w-full">
        <div className="space-y-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="bg-transparent border-none hover:bg-muted/50 transition-all duration-300 px-4">
                <CardHeader className="!p-0">
                  <CardTitle className="text-2xl tracking-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="!p-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
