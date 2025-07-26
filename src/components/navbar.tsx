"use client";

import { SiRefinedgithub, SiX } from "@icons-pack/react-simple-icons";
import { HomeIcon, Edit2Icon, MailIcon, MoonIcon, SunIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const navItems = [
  { title: "Home", href: "/", icon: <HomeIcon className="size-4" /> },
  { title: "Blog", href: "/blog", icon: <Edit2Icon className="size-4" /> },
  { title: "Contact", href: "/contact", icon: <MailIcon className="size-4" /> },
];

const socialItems = [
  {
    title: "GitHub",
    href: "https://github.com/raicdev",
    icon: <SiRefinedgithub className="size-4" />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/raic_dev",
    icon: <SiX className="size-4" />,
  },
];

export function NavBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  if (!pathname) {
    return null;
  }

  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-background/5 backdrop-blur-[2px] backdrop-saturate-[1.8] border rounded-full px-4 py-2 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm rounded-full transition-all duration-200 hover:scale-105",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/30 backdrop-blur-sm"
            )}
            title={item.title}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.title}</span>
          </Link>
        ))}

        <div className="w-px h-6 bg-border mx-2" />

        {socialItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            target="_blank"
            className="flex items-center justify-center p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-accent transition-all duration-200 hover:scale-105"
            title={item.title}
          >
            {item.icon}
          </Link>
        ))}

        <div className="w-px h-6 bg-border mx-2" />

        <Button variant="ghost" className="rounded-full" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <SunIcon className="size-4 dark:hidden" />
          <MoonIcon className="size-4 hidden dark:block" />
          <span className="sr-only">Theme</span>
        </Button>
      </div>
    </nav>
  );
}
