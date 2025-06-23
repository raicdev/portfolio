import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type PostData = {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
};

// Function to get blog posts
function getBlogPosts(): PostData[] {
  try {
    const postsDirectory = path.join(process.cwd(), 'content');
    
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map((fileName) => {
        // Remove ".mdx" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
          id,
          title: matterResult.data.title || 'Untitled',
          publishedAt: matterResult.data.publishedAt || new Date().toISOString(),
          summary: matterResult.data.summary || 'No summary available',
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
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function GET() {
  try {
    const posts = getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json([], { status: 500 });
  }
}