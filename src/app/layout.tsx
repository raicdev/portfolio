import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/page-transition";
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
          <main className="bg-muted/20 p-4 md:p-16 py-20 md:py-40 mx-auto max-w-2xl min-h-screen h-full">
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
