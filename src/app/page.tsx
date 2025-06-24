"use client";

import CSharpIcon from "@/components/csharp-icon";
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
import {
  SiCss3,
  SiDotnet,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import {
  Github,
  ExternalLink,
  Code2,
  Mail,
  User,
  Book,
  BotIcon,
  Hammer,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-background pb-24" ref={containerRef}>
      <div className="flex flex-col items-center min-h-screen w-full max-w-4xl mx-auto p-6">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col w-full mb-16 pt-24"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            @raic_dev
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Full Stack Developer
          </motion.p>
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/raicdev" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* About My */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Call to Action */}
        <CallToActionSection />
      </div>
    </main>
  );
}

function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      className="w-full mb-16 space-y-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-3xl font-semibold"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        About
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="transition-all duration-300"
      >
        <Card className="!gap-0 w-full">
          <CardHeader>
            <CardTitle className="text-2xl whitespace-nowrap">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Hi. I&#39;m Rai, a passionate full stack developer. I living on
              Japan. I love creating web applications. And, VistaUpdater and
              Win7Updater is my notable projects.
              <br />
              <br />I have experience in various technologies including
              Node.js, React, Next.js, TypeScript, and more. I enjoy building
              scalable and efficient applications that solve real-world
              problems.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 2 }}
          className="transition-all duration-300"
        >
          <Card className="!gap-0 w-full">
            <CardHeader>
              <CardTitle className="text-2xl whitespace-nowrap">
                My Team
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                My team "Veltrix" is a team of passionate developers. Right
                now, I'm the only one here, but I'd like to work with someone
                with a unique personality.{" "}
                <strong className="text-foreground/90">
                  We are looking for team members. Please contact us if you
                  are interested.
                </strong>
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, rotateY: -2 }}
          className="transition-all duration-300"
        >
          <Card className="!gap-0 w-full">
            <CardHeader>
              <CardTitle className="text-2xl whitespace-nowrap">
                My Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                I want to create a world where everyone can use the latest
                technology. I want to make the world better with my code.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        className="transition-all duration-300"
      >
        <Card className="!gap-0 w-full border-foreground/80 border-3">
          <CardHeader>
            <CardTitle className="text-2xl whitespace-nowrap">
              Please join my team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Please join my team, Veltrix. I am looking for people who are
              passionate about development and want to create something great
              together. If you are interested, please contact me.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}

function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      className="w-full mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-3xl font-semibold mb-8 group cursor-default relative"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <span className="transition-opacity duration-300 text-foreground/80 group-hover:opacity-0">Projects</span>
        <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">My brightest works</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deni AI Project */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 10 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
          className="transition-all duration-300"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <BotIcon className="w-5 h-5" />
                </motion.div>
                Deni AI
              </CardTitle>
              <CardDescription>
                A free & unlimited open-source AI chatbot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="w-full flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {[SiNodedotjs, SiReact, SiNextdotjs, SiTypescript, SiSupabase, SiTailwindcss, SiShadcnui].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
            <CardFooter className="w-full flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                  <Link href="https://deniai.app" target="_blank">
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/raicdev/deni-ai"
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* VistaUpdater Project */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 10 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
          className="transition-all duration-300"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Hammer className="w-5 h-5" />
                </motion.div>
                VistaUpdater
              </CardTitle>
              <CardDescription>
                Make Windows Vista to updateable. 50K+ users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="w-full flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                {[SiDotnet, CSharpIcon, SiHtml5, SiCss3].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
            <CardFooter className="w-full flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                  <Link href="https://vistaupdater.net" target="_blank">
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/raicdev/vistaupdater"
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
    "HTML",
    "CSS",
    ".NET",
    "C#",
  ];

  return (
    <motion.section 
      ref={ref}
      className="w-full mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="transition-all duration-300"
      >
        <Card>
          <CardHeader>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <CardTitle className="text-2xl">Skills</CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 w-full cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}

function CallToActionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex w-full gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotateY: 3 }}
          className="transition-all duration-300 w-full"
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                Contact Me
              </CardTitle>
              <CardDescription>
                Get in touch with me for collaboration or just a chat!
                <br />
                I&apos;m always open to new opportunities.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                  <Link href="/contact" target="_blank">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotateY: -3 }}
          className="transition-all duration-300 w-full sm:min-w-1/2"
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Book className="w-5 h-5" />
                </motion.div>
                My Blog
              </CardTitle>
              <CardDescription>
                Read my latest articles on web development, AI, and more.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                  <Link href="/blog" target="_blank">
                    <Book className="w-4 h-4 mr-2" />
                    Read Blog
                  </Link>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

