import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// Function to get a single blog post by ID
async function getBlogPost(id: string) {
  try {
    const fullPath = path.join(process.cwd(), "content", `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...(matterResult.data as {
        title: string;
        publishedAt: string;
        summary: string;
      }),
    };
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    return null;
  }
}

// Function to get all valid blog post IDs for static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full md:max-w-3xl mx-auto p-4">
      <Card className="w-full min-h-screen bg-background h-full">
        <CardHeader className="py-6">
          <Button variant="ghost" asChild className="mb-4 w-fit">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="size-4" />
              Back to all posts
            </Link>
          </Button>

          <CardTitle className="text-3xl font-bold font-mono bg-secondary/80 w-fit">
            {post.title}
          </CardTitle>

          <CardDescription className="flex items-center gap-2 mt-2">
            <CalendarIcon className="size-4" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} >{post.contentHtml}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
