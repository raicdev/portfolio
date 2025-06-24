# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for "rai.bio" built with Next.js 15.3.2 using App Router architecture. The site features a homepage, MDX-based blog system, and contact page with modern styling and theming.

## Development Commands

### Primary Development
```bash
bun run dev          # Start development server with Turbopack (recommended)
bun run build        # Build for production with Turbopack
bun start           # Start production server
bun run lint        # Run ESLint with Next.js rules
```

### Package Management
- Uses **bun** as the package manager (specified in package.json)
- When installing packages, use `bun add` instead of `npm install`

## Architecture & Key Technologies

### Tech Stack
- **Next.js 15.3.2** with App Router and React 19.0.0
- **TypeScript** with strict configuration and path aliases (@/*)
- **Tailwind CSS v4** with custom theme using CSS variables and OKLCH color space
- **Shadcn/ui** components with Radix UI primitives
- **MDX** integration for blog posts with mathematical expressions (KaTeX)

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog section with dynamic routes
│   └── contact/            # Contact page
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── magicui/            # Custom UI components (dock, animations)
│   ├── navbar.tsx          # Floating dock navigation
│   └── theme-provider.tsx  # Theme context provider
└── lib/utils.ts            # Utility functions

content/                    # MDX blog posts with front matter
public/                     # Static assets
```

### Key Architectural Patterns

1. **Server Components**: Leverages React Server Components for optimal performance
2. **Static Generation**: Blog posts use `generateStaticParams` for static generation
3. **MDX Blog System**: Content stored as MDX files in `/content/` with YAML front matter
4. **Theme System**: Comprehensive dark/light theme support using CSS variables
5. **Floating Navigation**: Unique bottom dock-style navigation with glassmorphism design

## Blog Content Management

### MDX Files Structure
- Located in `/content/` directory
- Front matter format:
  ```yaml
  ---
  title: "Post Title"
  publishedAt: "2024-01-01"
  summary: "Brief description"
  ---
  ```
- Supports mathematical expressions via KaTeX
- GitHub Flavored Markdown with syntax highlighting

### Blog Processing
- Server-side rendering for SEO optimization
- Japanese date formatting (ja-JP locale)
- Automatic slug generation from filename

## Styling System

### Tailwind Configuration
- Uses Tailwind CSS v4 with `@theme` directive in globals.css
- Custom color palette using OKLCH color space
- CSS variables for theme switching
- No separate tailwind.config.js file (inline configuration)

### Component Library
- Shadcn/ui components for consistent UI
- Custom MagicUI components for animations
- Radix UI primitives for accessibility

## Performance Optimizations

- **Turbopack**: Used for both development and production builds
- **Static Generation**: Blog posts pre-rendered at build time
- **Font Optimization**: Geist Sans & Mono fonts with Next.js font optimization
- **View Transitions**: Experimental view transitions enabled

## Common Development Tasks

### Adding New Blog Posts
1. Create MDX file in `/content/` directory
2. Add front matter with title, publishedAt, and summary
3. Blog will automatically appear in listing and be statically generated

### Styling Components
- Use existing Shadcn/ui components when possible
- Follow CSS variable naming conventions for theme consistency
- Utilize Tailwind classes with custom theme values

### Navigation Updates
- Modify `src/components/navbar.tsx` for navigation changes
- Dock items are configured in the Dock component

## Important Notes

- The site uses **bun** as package manager - avoid using npm/yarn commands
- **Turbopack** is the build tool - commands include `--turbo` flag automatically
- Blog posts support **Japanese content** with proper date formatting
- Theme switching is handled by `next-themes` with system preference detection