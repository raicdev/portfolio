"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiDiscord,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Sparkles, 
  Send, 
  Heart, 
  Rocket, 
  Zap,
  Globe,
  Coffee,
  Code2,
  Brain,
  Star
} from "lucide-react";

export default function Contact() {
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
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 pb-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Dynamic Cursor Light */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
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
            <div className="w-1 h-1 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center min-h-screen w-full max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse" />
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 font-mono">
                Let&apos;s Connect
              </h1>
              <div className="flex items-center justify-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
                <p className="text-2xl md:text-3xl text-white/90 font-light">
                  Ready to build something <span className="text-emerald-400 font-semibold">Amazing</span> together?
                </p>
                <Rocket className="w-6 h-6 text-blue-400 animate-bounce" />
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="flex items-center gap-8 mb-12 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Fast</span>
              <span className="text-white/70">Response</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-semibold">Global</span>
              <span className="text-white/70">Reach</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-orange-400" />
              <span className="text-white font-semibold">24/7</span>
              <span className="text-white/70">Available</span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-16">
          {/* Email Section */}
          <Card className={`group relative bg-gradient-to-br from-emerald-900/50 to-blue-900/50 backdrop-blur-lg border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-500/20 rounded-full">
                    <Mail className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Email Me</h2>
                    <p className="text-emerald-300 text-lg">Direct & Professional</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  Have a project in mind? Want to collaborate? Drop me a line and I&apos;ll get back to you with lightning speed!
                </p>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/90 font-mono">rai@rai.bio</span>
                    <div className="ml-auto">
                      <div className="text-green-400 text-sm font-semibold">ACTIVE</div>
                    </div>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold text-lg py-6"
                  asChild
                >
                  <Link href="mailto:rai@rai.bio">
                    <Send className="w-6 h-6 mr-3" />
                    Send Email Now
                    <Sparkles className="w-6 h-6 ml-3" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Social Media Section */}
          <Card className={`group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Globe className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Social Media</h2>
                    <p className="text-purple-300 text-lg">Stay Connected</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  Follow my journey, get updates on projects, and join the conversation across platforms.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-semibold text-lg py-6 border border-white/20"
                    asChild
                  >
                    <Link
                      href="https://x.com/raic_dev"
                      target="_blank"
                      className="flex items-center justify-center gap-4"
                    >
                      <SiX className="w-6 h-6" />
                      Follow on X (Twitter)
                      <Star className="w-5 h-5" />
                    </Link>
                  </Button>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-lg py-6"
                      >
                        <SiDiscord className="w-6 h-6 mr-4" />
                        Connect on Discord
                        <MessageCircle className="w-5 h-5 ml-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-indigo-900 border-indigo-700">
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-200">@raic_dev</span>
                        <Heart className="w-4 h-4 text-pink-400" />
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Why Connect Section */}
        <Card className={`w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-2xl mb-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardHeader className="pb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Code2 className="w-10 h-10 text-emerald-400" />
              <h2 className="text-4xl font-bold text-white text-center">Why Connect With Me?</h2>
              <Brain className="w-10 h-10 text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                <p className="text-white/70">Bringing cutting-edge solutions to complex problems with creative thinking.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-white/70">Quick turnaround times without compromising on quality or attention to detail.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Passionate Craft</h3>
                <p className="text-white/70">Every project gets my full dedication and expertise for exceptional results.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Something Epic?</h3>
          <div className="flex items-center justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold text-lg px-8 py-4" asChild>
              <Link href="/">
                <Brain className="w-6 h-6 mr-2" />
                Explore My Work
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-4" asChild>
              <Link href="/blog">
                <Sparkles className="w-6 h-6 mr-2" />
                Read My Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
