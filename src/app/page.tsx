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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  SiCss,
  SiSpotify,
  SiDotnet,
  SiDrizzle,
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
  Mail,
  Book,
  BotIcon,
  Dot,
  Divide,
} from "lucide-react";
import { Link } from "next-view-transitions";
import Autoplay from "embla-carousel-autoplay"

const projects = [
  {
    name: "Deni AI",
    description: "A free & unlimited open-source AI chatbot.",
    links: {
      github: "https://github.com/teamzisty/deni-ai",
      website: "https://deniai.app",
    },
    techStack: [
      SiNodedotjs,
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiSupabase,
      SiTailwindcss,
      SiShadcnui,
    ],
  },
  {
    name: "Prodfind",
    description: "A tool that allows you to find, publish products.",
    links: {
      github: "https://github.com/teamzisty/prodfind",
      website: "https://prodfind.space",
    },
    techStack: [
      SiNodedotjs,
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiSupabase,
      SiDrizzle,
      SiTailwindcss,
      SiShadcnui,
    ],
  },
  {
    name: "VistaUpdater",
    description: "Make Windows Vista to updateable. 50K+ users.",
    links: {
      github: "https://github.com/raicdev/vistaupdater",
      website: "https://vistaupdater.net",
    },
    techStack: [SiDotnet, CSharpIcon, SiHtml5, SiCss],
  },
];

// const musics = [
//   "https://open.spotify.com/embed/track/1TdYXsTtYbud0IieSW5wbh?utm_source=generator",
//   "https://open.spotify.com/embed/track/5f47DEGO0cc0F08WB5xy17?utm_source=generator",
//   "https://open.spotify.com/embed/track/2tNSF76aCuycE9e7nAi4eb?utm_source=generator",
// ];

const musics = [
  {
    title: "Again",
    artist: "WANIMA",
    link: "https://open.spotify.com/track/1TdYXsTtYbud0IieSW5wbh",
    image: "https://i.scdn.co/image/ab67616d00001e02a47ebd6c2e33bda905c84f87",
  },
  {
    title: "1CHANCE",
    artist: "WANIMA",
    link: "https://open.spotify.com/track/5f47DEGO0cc0F08WB5xy17",
    image: "https://i.scdn.co/image/ab67616d00001e02450e2b102008d477dcb82f01",
  },
  {
    title: "Odoruyoru",
    artist: "WANIMA",
    link: "https://open.spotify.com/track/2tNSF76aCuycE9e7nAi4eb",
    image: "https://i.scdn.co/image/ab67616d00001e0263880b5fc1175787218ffc98",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col w-full mb-16">
        <h1 className="text-5xl font-semibold text-foreground mb-2 tracking-tight">
          rai
        </h1>
        <p className="text-lg text-muted-foreground mb-4 tracking-tight font-medium flex items-center">
          Student <Dot /> Full Stack Developer
        </p>
        <div className="flex items-center gap-4">
          <div>
            <Button variant="ghost" asChild>
              <Link href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </Button>
          </div>
          <div>
            <Button variant="ghost" asChild>
              <Link href="https://github.com/raicdev" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* About My */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Call to Action */}
      <CallToActionSection />
    </>
  );
}

function AboutSection() {
  return (
    <section className="w-full mb-16 space-y-4">
      <h2 className="text-3xl font-semibold mb-8 group cursor-default relative">
        <span className="transition-opacity duration-300 text-foreground/80 group-hover:opacity-0">
          About me
        </span>
        <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Who am I?
        </span>
      </h2>
      <p className="text-muted-foreground text-base leading-relaxed">
        Hi. I&#39;m Rai, a passionate full stack developer. I living on Japan. I
        love creating web applications. And, VistaUpdater and Win7Updater is my
        notable projects.
        <br />
        <br />I have experience in various technologies including Node.js,
        React, Next.js, TypeScript, and more. I enjoy building scalable and
        efficient applications that solve real-world problems.
      </p>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="w-full mb-16">
      <h2 className="text-3xl font-semibold mb-8 group cursor-default relative">
        <span className="transition-opacity duration-300 text-foreground/80 group-hover:opacity-0">
          Projects
        </span>
        <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          My brightest works
        </span>
      </h2>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div className="transition-all duration-300" key={project.name}>
            <Card className="bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BotIcon className="w-5 h-5" />
                  {project.name}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full flex items-center gap-2">
                  {project.techStack.map((Icon, index) => (
                    <div key={index}>
                      <Icon />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="w-full flex items-center gap-2">
                <div>
                  <Button asChild>
                    <Link href={project.links.website} target="_blank">
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button variant="outline" asChild>
                    <Link href={project.links.github} target="_blank">
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
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
    <section className="w-full mb-16">
      <div className="transition-all duration-300">
        <h2 className="text-3xl font-semibold mb-8 group cursor-default relative">
          <span className="transition-opacity duration-300 text-foreground/80 group-hover:opacity-0">
            Skills
          </span>
          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            I learned these
          </span>
        </h2>
        <Card className="bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="justify-center py-2 w-full cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <div className="w-full">
      <div className="grid w-full gap-4">
        <div className="transition-all duration-300 w-full">
          <h2 className="text-3xl font-semibold mb-8 group cursor-default relative">
            <span className="transition-opacity duration-300 text-foreground/80 group-hover:opacity-0">
              Links
            </span>
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View more
            </span>
          </h2>
          <Card className="w-full bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </CardTitle>
              <CardDescription>
                Get in touch with me for collaboration or just a chat!
                <br />
                I&apos;m always open to new opportunities.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-4">
              <div>
                <Button asChild>
                  <Link href="/contact" target="_blank">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="transition-all duration-300 w-full sm:min-w-1/2">
          <Card className="w-full bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5" />
                My Blog
              </CardTitle>
              <CardDescription>
                Read my latest articles on web development, AI, and more. <br />
                I share maybe useful tips.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-4">
              <div>
                <Button asChild>
                  <Link href="/blog" target="_blank">
                    <Book className="w-4 h-4 mr-2" />
                    Read Blog
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="transition-all duration-300 w-full">
          <Carousel
            className="w-full shadow-sm border rounded-lg h-24"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {musics.map((music, index) => (
                <CarouselItem key={index}>
                  <div
                    className="relative w-full h-full rounded-lg overflow-hidden user-select-none"
                    style={{ userSelect: "none" }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center filter blur-2xl scale-105"
                      style={{ backgroundImage: `url(${music.image})` }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />

                    <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                      <div className="absolute top-2 right-2">
                        <SiSpotify size={24} style={{ color: "#1ED760" }} />
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src={music.image}
                          alt={music.title}
                          width={64}
                          height={64}
                          className="rounded-md"
                        />
                        <div>
                          <Link href={music.link} target="_blank">
                            <div className="text-xl font-medium text-white">
                              {music.title}
                            </div>
                            <div className="text-base text-white/70">
                              {music.artist}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="z-10" />
            <CarouselNext className="z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
