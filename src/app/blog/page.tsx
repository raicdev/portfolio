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
  Sparkles,
  Clock,
  ArrowRight,
  Star,
  Zap,
  Brain,
  FileText
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    
    // Fetch posts on client side
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const posts = await response.json();
          setAllPosts(posts);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        // Fallback to empty array if API fails
        setAllPosts([]);
      }
    };
    
    fetchPosts();
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 pb-24">
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
        {[...Array(15)].map((_, i) => (
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

      <div className="relative z-20 flex flex-col items-center min-h-screen w-full max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse" />
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 font-mono">
                Mind Palace
              </h1>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-indigo-400" />
                <p className="text-2xl md:text-3xl text-white/90 font-light">
                  Thoughts on <span className="text-indigo-400 font-semibold">Code</span>, <span className="text-purple-400 font-semibold">Innovation</span> & <span className="text-pink-400 font-semibold">Technology</span>
                </p>
                <BookOpen className="w-6 h-6 text-purple-400 animate-bounce" />
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="flex items-center gap-8 mb-12 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">{allPosts.length}</span>
              <span className="text-white/70">Articles</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Fresh</span>
              <span className="text-white/70">Ideas</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">Deep</span>
              <span className="text-white/70">Insights</span>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <section className={`w-full transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl font-bold text-white text-center">Latest Insights</h2>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          
          <div className="grid gap-6">
            {allPosts.length === 0 ? (
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-2xl">
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                  <p className="text-white/70 text-lg">Amazing content is being crafted. Stay tuned!</p>
                </CardContent>
              </Card>
            ) : (
              allPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-indigo-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/25 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          <Link
                            href={`/blog/${post.id}`}
                            className="hover:underline decoration-indigo-400"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center gap-2 bg-indigo-500/20 px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4 text-indigo-400" />
                          <span className="text-indigo-300 text-sm font-medium">5 min</span>
                        </div>
                      </div>
                      <CardDescription className="flex items-center gap-2 text-white/70">
                        <CalendarIcon className="w-4 h-4 text-purple-400" />
                        <span className="text-lg">
                          {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-white/80 text-lg leading-relaxed">
                        {post.summary}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold group-hover:scale-105 transition-transform" 
                        asChild
                      >
                        <Link href={`/blog/${post.id}`}>
                          <BookOpen className="w-5 h-5 mr-2" />
                          Read Full Article
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))
            )}
          </div>
        </section>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white mb-6">Want to Connect?</h3>
          <div className="flex items-center justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4" asChild>
              <Link href="/contact">
                <Sparkles className="w-6 h-6 mr-2" />
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-4" asChild>
              <Link href="/">
                <Brain className="w-6 h-6 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
