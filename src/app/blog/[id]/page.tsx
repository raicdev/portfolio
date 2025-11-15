import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CalendarIcon, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getBlogPost } from "@/lib/post";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const post = getBlogPost((await params).id);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="absolute left-0 top-[-48px] z-10">
        <Button variant="ghost" asChild>
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <div className="flex flex-col w-full">
        {/* Article Header */}
        <div className="flex flex-col w-full mb-16">
          <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-2">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.summary}</p>
          <div className="flex items-center gap-2 mt-4">
            <CalendarIcon className="w-4 h-4" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
