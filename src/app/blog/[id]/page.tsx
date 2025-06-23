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
  Clock, 
  Eye, 
  Sparkles, 
  BookOpen, 
  Share2,
  Heart,
  Star,
  Brain,
  Code2,
  MessageCircle
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    
    // Fetch post data
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
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [params]);

  if (loading) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/70 text-lg">Loading amazing content...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-indigo-900/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Dynamic Cursor Light */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-1 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center min-h-screen w-full max-w-5xl mx-auto p-6 pb-24">
        {/* Navigation */}
        <div className={`w-full mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 font-semibold"
            asChild
          >
            <Link href="/blog" className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5" />
              Back to Mind Palace
              <Brain className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <Card className={`w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-2xl mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardHeader className="pb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <BookOpen className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-6 text-lg text-white/70">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-purple-400" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-indigo-400" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-400" />
                    <span>127 views</span>
                  </div>
                </CardDescription>
              </div>
            </div>

            {/* Article Stats */}
            <div className="flex items-center justify-between p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-white font-semibold">24</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">8</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Share</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Premium Content</span>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Article Content */}
        <Card className={`w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-2xl mb-12 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardContent className="p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-white/90 prose-p:leading-relaxed prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-purple-300 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900/50 prose-pre:border prose-pre:border-white/20 prose-blockquote:border-l-indigo-400 prose-blockquote:text-white/80">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {post.contentHtml}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Article Footer */}
        <Card className={`w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-2xl mb-12 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">@raic_dev</h3>
                  <p className="text-white/70">Full Stack Visionary Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold">
                  <Heart className="w-5 h-5 mr-2" />
                  Follow
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className={`w-full flex items-center justify-center gap-6 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4" asChild>
            <Link href="/blog">
              <Brain className="w-6 h-6 mr-2" />
              More Articles
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-4" asChild>
            <Link href="/contact">
              <Sparkles className="w-6 h-6 mr-2" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
