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
import { Play } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full h-full md:max-w-3xl mx-auto p-4">
      <Card className="bg-background">
        <CardHeader className="py-6">
          <h1 className="text-3xl font-bold font-mono bg-secondary/80 w-fit">
            @raic_dev
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Full Stack Web Developer
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-8">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 font-mono bg-secondary/80 w-fit">
              About Me
            </h2>
            <p className="mb-4">
              I am a desktop app and web developer, and my introduction to
              VistaUpdater and Win7Updater has been viewed over 50,000 times
              total.
            </p>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 font-mono bg-secondary/80 w-fit">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Card 1 */}
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Deni AI</CardTitle>
                  <CardDescription>
                    A free, unlimited use and open-source AI chatbot.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href="https://deniai.app" target="_blank">
                      <Play />
                      Try
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/raicdev/deni-ai"
                      target="_blank"
                    >
                      Repository
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project Card 2 */}
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>VistaUpdater</CardTitle>
                  <CardDescription>
                    (Japanese) A tool to can restore Windows Update on Windows
                    Vista.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href="https://vistaupdater.net" target="_blank">
                      <Play />
                      Try
                      <NumberTicker
                        value={50076}
                        className="!text-primary-foreground"
                      />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/raicdev/deni-ai"
                      target="_blank"
                    >
                      Repository
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 font-mono bg-secondary/80 w-fit">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "C#",
              ].map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
