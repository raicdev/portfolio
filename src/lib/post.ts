import path from "path";
import fs from "fs";
import matter from "gray-matter";

type PostData = {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
  content: string;
  language?: string;
};

// Function to get blog posts
export function getBlogPosts(): PostData[] {
  try {
    const postsDirectory = path.join(process.cwd(), "content");

    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        // Remove ".mdx" from file name to get id
        const id = fileName.replace(/\.mdx$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
          id,
          title: matterResult.data.title || "Untitled",
          publishedAt: matterResult.data.publishedAt || new Date().toISOString(),
          summary: matterResult.data.summary || "No summary available",
          content: matterResult.content || "No content available",
          language: (matterResult.data.language || "").toString().toLowerCase() || undefined,
        };
      }) as PostData[];

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      if (a.publishedAt < b.publishedAt) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export function getBlogPost(id: string): PostData | null {
  const posts = getBlogPosts();
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return null;
  }
  return post;
}
