import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/post";

type Props = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const posts = getBlogPosts();

  // Determine selected language from search params (server-side)
  const selectedLang = ((await searchParams)?.lang || 'en').toLowerCase();

  const filteredPosts = selectedLang && selectedLang !== 'all'
    ? posts.filter(p => (p.language || 'en').toLowerCase() === selectedLang)
    : posts;

  return (
    <>
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-2">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on code and technology
        </p>
      </div>

      {/* Blog Posts Section */}
      <section className="w-full">
        {/* Filter controls */}
        <div className="mb-6 flex items-center gap-3">
          {['en', 'jp'].map((lang) => (
            <Link
              key={lang}
              href={{ pathname: '/blog', query: lang === 'all' ? {} : { lang } }}
              className={`px-3 py-1 rounded-md border ${
                (selectedLang || 'all') === lang ? 'bg-muted text-foreground' : 'bg-transparent'
              }`}
            >
              {lang.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="bg-transparent shadow-none border-none hover:bg-muted/50 transition-all duration-300 px-4">
                <CardHeader className="!p-0">
                  <CardTitle className="text-2xl tracking-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="!p-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
