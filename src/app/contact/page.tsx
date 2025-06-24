import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SiDiscord,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Link } from 'next-view-transitions';
import { 
  Mail, 
  MessageCircle, 
  Send, 
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="flex flex-col items-center min-h-screen w-full max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-16 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground">
            Let&apos;s work together
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Email Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The best way to reach me for collaborations and projects.
              </p>
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Social
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Connect with me on social platforms.
              </p>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link
                    href="https://x.com/raic_dev"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiX className="w-4 h-4" />
                    X (Twitter)
                  </Link>
                </Button>

                <Button variant="outline" className="w-full">
                  <SiDiscord className="w-4 h-4 mr-2" />
                  Discord: @raic_dev
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
