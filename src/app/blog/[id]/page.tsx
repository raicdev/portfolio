"use client";

import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { 
  CalendarIcon, 
  ArrowLeft, 
  BookOpen, 
} from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useEffect, useState } from 'react';

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const resolvedParams = await params;
        const response = await fetch(`/api/blog/${resolvedParams.id}`);
        if (response.ok) {
          const postData = await response.json();
          setPost(postData);
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error('Failed to fetch post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-muted-foreground border-t-foreground rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="flex flex-col items-center min-h-screen w-full max-w-4xl mx-auto p-6">
        {/* Navigation */}
        <div className="w-full mb-8 pt-6">
          <Button variant="outline" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <Card className="w-full mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold">
              {post.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 text-lg">
              <CalendarIcon className="w-4 h-4" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Article Content */}
        <Card className="w-full mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {post.contentHtml}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="w-full flex items-center justify-center">
          <Button asChild>
            <Link href="/blog">
              <BookOpen className="w-4 h-4 mr-2" />
              More Articles
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
