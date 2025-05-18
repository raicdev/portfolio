import { Dock, DockIcon } from "@/components/magicui/dock";
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
import { Separator } from "@/components/ui/separator";
import { SiRefinedgithub, SiX } from "@icons-pack/react-simple-icons";
import {
  Edit2Icon,
  HomeIcon,
  MailIcon,
  Play,
  CalendarIcon,
} from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostData = {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
};

// Function to get blog posts
async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  }) as PostData[];

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default async function BlogPage() {
  const allPosts = await getBlogPosts();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full md:max-w-3xl mx-auto p-4">
      <Card className="w-full bg-background">
        <CardHeader className="py-6">
          <h1 className="text-3xl font-bold font-mono bg-secondary/80 w-fit">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            My thoughts on technology, development, and more
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-8">
          {/* Blog Posts Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 font-mono bg-secondary/80 w-fit">
              Recent Posts
            </h2>
            <div className="flex flex-col gap-4">
              {allPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-secondary/20 hover:bg-secondary/30 transition-colors"
                >
                  <CardHeader>
                    <CardTitle>
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <CalendarIcon className="size-4" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      {post.summary}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
