<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SiDiscord,
  SiRefinedgithub,
  SiX,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-2">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground">
            Let&apos;s work together
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* Email Section */}
          <Card className="bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                The best way to reach me for collaborations and projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-mono text-sm bg-muted p-3 rounded">
                rai@rai.bio
              </div>
              <Button className="w-full" asChild>
                <Link href="mailto:rai@rai.bio">
                  <Send className="w-4 h-4 mr-2" />
                  Send Email
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Social Media Section */}
          <Card className="bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Social
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Connect with me on social platforms.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link
                    href="https://github.com/raicdev"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiRefinedgithub className="w-4 h-4" />
                    GitHub
                  </Link>
                </Button>

                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link
                    href="https://x.com/raic_dev"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiX className="w-4 h-4" />X (Twitter)
                  </Link>
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <SiDiscord className="w-4 h-4" />
                  Discord: @raic_dev
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
=======
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SiDiscord,
  SiRefinedgithub,
  SiX,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-2">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground">
            Let&apos;s work together
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* Email Section */}
          <Card className="bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                The best way to reach me for collaborations and projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="font-mono text-sm bg-muted p-3 rounded">
                rai@rai.bio
              </div>
              <Button className="w-full" asChild>
                <Link href="mailto:rai@rai.bio">
                  <Send className="w-4 h-4 mr-2" />
                  Send Email
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Social Media Section */}
          <Card className="bg-gradient-to-b from-background/5 to-secondary/30 border rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Social
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Connect with me on social platforms.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link
                    href="https://github.com/raicdev"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiRefinedgithub className="w-4 h-4" />
                    GitHub
                  </Link>
                </Button>

                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link
                    href="https://x.com/raic_dev"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiX className="w-4 h-4" />X (Twitter)
                  </Link>
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <SiDiscord className="w-4 h-4" />
                  Discord: @raic_dev
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
>>>>>>> 88854a3 (feat: add Dock and DockIcon components for interactive UI elements)
