"use client";

import { SiRefinedgithub, SiX } from "@icons-pack/react-simple-icons";
import { HomeIcon, Edit2Icon, MailIcon } from "lucide-react";
import { Dock, DockIcon } from "./magicui/dock";
import { Link } from "next-view-transitions";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const dockItems = {
  navbar: [
    { title: "Home", href: "/", icon: <HomeIcon className="size-6" /> },
    { title: "Blog", href: "/blog", icon: <Edit2Icon className="size-6" /> },
    {
      title: "Contact",
      href: "/contact",
      icon: <MailIcon className="size-6" />,
    },
  ],
  socials: [
    {
      title: "GitHub",
      href: "https://github.com/raicdev",
      icon: <SiRefinedgithub className="size-6" />,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/raic_dev",
      icon: <SiX className="size-6" />,
    },
  ],
};

export function NavBar() {
  const pathname = usePathname();

  return (
    <Dock
      direction="middle"
      className="fixed bottom-5 left-0 right-0 z-50 mx-auto max-w-fit rounded-full bg-white/5 border border-white/10 px-4 py-2 shadow-2xl backdrop-blur-3xl backdrop-saturate-200"
      style={{ viewTransitionName: "navbar" }}
    >
      {dockItems.navbar.map((item) => (
        <DockIcon key={item.title}>
          <Link
            href={item.href}
            className={cn(
              "flex items-center justify-center gap-2 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-md backdrop-blur-xl",
              pathname === item.href &&
                "text-white bg-white/10 shadow-2xl backdrop-blur-2xl"
            )}
            title={item.title}
          >
            {item.icon}
          </Link>
        </DockIcon>
      ))}

      <Separator orientation="vertical" className="h-8 bg-white/10" />

      {dockItems.socials.map((item) => (
        <DockIcon key={item.title}>
          <Link
            href={item.href}
            target="_blank"
            className="flex items-center justify-center size-8 text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-md backdrop-blur-xl"
            title={item.title}
          >
            {item.icon}
          </Link>
        </DockIcon>
      ))}
    </Dock>
  );
}
