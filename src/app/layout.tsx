import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
<<<<<<< HEAD
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/page-transition";
=======
import PageTransition from "@/components/page-transition";
import { ThemeProvider } from "@/components/theme-provider";
>>>>>>> 88854a3 (feat: add Dock and DockIcon components for interactive UI elements)
import "./globals.css";
import "katex/dist/katex.min.css";
import { NavBar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rai.bio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
          disableTransitionOnChange
        >
<<<<<<< HEAD
          <main className="bg-muted/20 p-4 md:p-16 py-20 md:py-40 mx-auto max-w-2xl min-h-screen h-full">
            <PageTransition>
              {children}
            </PageTransition>
=======
          <main className="bg-muted/20 p-4 md:p-16 py-20 md:py-30 mx-auto max-w-3xl min-h-screen h-full">
            <PageTransition>{children}</PageTransition>
>>>>>>> 88854a3 (feat: add Dock and DockIcon components for interactive UI elements)
          </main>

          <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
