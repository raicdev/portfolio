"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play, Github, ExternalLink, Code2, Zap, Star, Sparkles, Rocket, Brain, Terminal } from "lucide-react";
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Dynamic Cursor Light */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 69, 255, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <div className="w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center min-h-screen w-full max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse" />
            <div className="relative">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-6 font-mono">
                @raic_dev
              </h1>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-purple-400" />
                <p className="text-2xl md:text-3xl text-white/90 font-light">
                  Full Stack <span className="text-purple-400 font-semibold">Visionary</span> Developer
                </p>
                <Rocket className="w-6 h-6 text-blue-400 animate-bounce" />
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="flex items-center gap-8 mb-12 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">50K+</span>
              <span className="text-white/70">Views</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">6+</span>
              <span className="text-white/70">Languages</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">∞</span>
              <span className="text-white/70">Possibilities</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className={`w-full mb-16 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="!pb-0">
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-400" />
                <h2 className="text-4xl font-bold text-white">About the Architect</h2>
                <Sparkles className="w-8 h-8 text-pink-400 animate-spin" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-white/90 leading-relaxed">
                I&apos;m a <span className="text-purple-400 font-semibold">visionary developer</span> who crafts digital experiences that push boundaries. 
                My work on <span className="text-blue-400 font-semibold">VistaUpdater</span> and <span className="text-green-400 font-semibold">Win7Updater</span> has reached over 
                <span className="text-yellow-400 font-bold text-2xl mx-2">
                  <NumberTicker value={50000} className="!text-yellow-400" />+
                </span> 
                users worldwide, proving that innovation knows no limits.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Projects Showcase */}
        <section className={`w-full mb-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Rocket className="w-10 h-10 text-purple-400" />
            <h2 className="text-5xl font-bold text-white text-center">Featured Projects</h2>
            <Rocket className="w-10 h-10 text-blue-400" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Deni AI Project */}
            <Card className="group relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-lg border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
                      <Brain className="w-8 h-8 text-purple-400" />
                      Deni AI
                    </CardTitle>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm font-semibold">LIVE</span>
                    </div>
                  </div>
                  <CardDescription className="text-lg text-white/80">
                    A revolutionary, <span className="text-purple-400 font-semibold">free & unlimited</span> open-source AI chatbot that&apos;s redefining conversations.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-4 pt-6">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold" asChild>
                    <Link href="https://deniai.app" target="_blank">
                      <Play className="w-5 h-5 mr-2" />
                      Experience AI
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="https://github.com/raicdev/deni-ai" target="_blank">
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>

            {/* VistaUpdater Project */}
            <Card className="group relative bg-gradient-to-br from-blue-900/50 to-green-900/50 backdrop-blur-lg border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
                      <Terminal className="w-8 h-8 text-blue-400" />
                      VistaUpdater
                    </CardTitle>
                    <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <NumberTicker value={50076} className="!text-yellow-400 font-bold" />
                    </div>
                  </div>
                  <CardDescription className="text-lg text-white/80">
                    Legacy system revival tool that breathes life into Windows Vista update systems. <span className="text-green-400 font-semibold">50K+ users served</span>.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-4 pt-6">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold" asChild>
                    <Link href="https://vistaupdater.net" target="_blank">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Launch Tool
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="https://github.com/raicdev/deni-ai" target="_blank">
                      <Github className="w-5 h-5 mr-2" />
                      Repository
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Arsenal */}
        <section className={`w-full mb-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="pb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Code2 className="w-10 h-10 text-green-400" />
                <h2 className="text-4xl font-bold text-white text-center">Technical Arsenal</h2>
                <Zap className="w-10 h-10 text-yellow-400 animate-pulse" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: "React", color: "from-blue-400 to-cyan-400" },
                  { name: "Next.js", color: "from-gray-700 to-gray-900" },
                  { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                  { name: "Tailwind CSS", color: "from-teal-400 to-blue-500" },
                  { name: "Node.js", color: "from-green-400 to-green-600" },
                  { name: "C#", color: "from-purple-500 to-purple-700" },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`} />
                    <Badge 
                      className={`relative bg-gradient-to-r ${skill.color} text-white font-semibold text-lg py-3 px-6 hover:scale-110 transition-transform duration-300 cursor-pointer border-0`}
                    >
                      {skill.name}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Build the Future?</h3>
          <div className="flex items-center justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg px-8 py-4" asChild>
              <Link href="/contact">
                <Sparkles className="w-6 h-6 mr-2" />
                Let&apos;s Collaborate
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-4" asChild>
              <Link href="/blog">
                <Brain className="w-6 h-6 mr-2" />
                Read My Thoughts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
