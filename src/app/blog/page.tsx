"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarIcon,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';

type PostData = {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
};

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const posts = await response.json();
          setAllPosts(posts);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setAllPosts([]);
      }
    };
    
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="flex flex-col items-center min-h-screen w-full max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-16 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on code and technology
          </p>
        </div>

        {/* Blog Posts Section */}
        <section className="w-full">
          <div className="space-y-6">
            {allPosts.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground">Amazing content is being crafted. Stay tuned!</p>
                </CardContent>
              </Card>
            ) : (
              allPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
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
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.summary}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/blog/${post.id}`}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
