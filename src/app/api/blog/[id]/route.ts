import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';

type PostData = {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
  contentHtml: string;
};

// Function to get a single blog post by ID
async function getBlogPost(id: string): Promise<PostData | null> {
  try {
    const fullPath = path.join(process.cwd(), 'content', `${id}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      title: matterResult.data.title || 'Untitled',
      publishedAt: matterResult.data.publishedAt || new Date().toISOString(),
      summary: matterResult.data.summary || 'No summary available',
    };
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    return null;
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = await getBlogPost(id);
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}