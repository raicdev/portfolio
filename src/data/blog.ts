import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  // TODO: Replace gray-matter with logic to extract 'export const meta = {...}'
  // This typically involves using an MDX bundler or parser (@mdx-js/mdx).
  // The example below uses a placeholder/simplified regex approach (fragile).

  let metadata: Metadata = {
      title: 'Default Title', // Provide defaults or handle errors
      publishedAt: '',
      summary: '',
  };

  // Example: Fragile regex approach (NOT RECOMMENDED for production)
  const metaExportRegex = /export\s+const\s+meta\s*=\s*(\{[\s\S]*?\})\s*;?/;
  const match = source.match(metaExportRegex);

  if (match && match[1]) {
    try {
      // Use Function constructor for safer evaluation than direct eval
      // Ensure proper error handling and validation
      metadata = new Function(`return ${match[1]}`)() as Metadata;
    } catch (e) {
      console.error(`Failed to parse meta export for ${slug}: ${e}`);
      // Handle error: return default metadata, throw, etc.
    }
  } else {
     console.warn(`'export const meta' not found or invalid in ${slug}.mdx`);
     // Handle case where meta is not found
  }

  // Note: The actual MDX content (excluding the meta export) is not extracted here.
  // If needed for rendering, the MDX processing library would typically provide it.

  return {
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata /* , source */ } = await getPost(slug);
      return {
        metadata,
        slug,
        // source,
      };
    }),
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
