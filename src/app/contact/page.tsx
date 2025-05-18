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
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full md:max-w-3xl mx-auto p-4">
      <Card className="bg-background">
        <CardHeader className="py-6">
          <h1 className="text-3xl font-bold font-mono bg-secondary/80 w-fit">
            Contact Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            I want to hear from you! Feel free to reach out via email or connect
            with me on social media.
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-8">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 font-mono bg-secondary/80 w-fit">
              Email
            </h2>
            <p className="mb-4">
              Click the button below to send me an email. I will respond as soon
              as possible.
            </p>

            <Button asChild>
              <Link href="mailto:rai@raic.dev">Send Email</Link>
            </Button>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 font-mono bg-secondary/80 w-fit">
              Social Media
            </h2>

            <p className="mb-4">You can find me on the following platforms:</p>

            <div className="flex gap-4">
              <Button variant="ghost" asChild>
                <Link
                  href="https://x.com/raic_dev"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <SiX className="size-4" />X
                </Link>
              </Button>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <SiDiscord className="size-4" /> Discord
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span>@raic_dev</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
