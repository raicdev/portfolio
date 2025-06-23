"use client";

import { SiRefinedgithub, SiX } from "@icons-pack/react-simple-icons";
import { HomeIcon, Edit2Icon, MailIcon } from "lucide-react";
import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";
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
      className="fixed top-5 left-0 right-0 z-50 mx-auto max-w-fit rounded-full bg-black/80 px-4 py-2 shadow-xl backdrop-blur"
    >
      {dockItems.navbar.map((item) => (
        <DockIcon key={item.title}>
          <Link
            href={item.href}
            className={cn(
              "flex items-center justify-center gap-2 px-3 py-2 text-gray-400 hover:text-white transition-colors rounded-md",
              pathname === item.href && "text-white bg-white/10",
            )}
            title={item.title}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.title}</span>
          </Link>
        </DockIcon>
      ))}

      <Separator orientation="vertical" className="h-8" />

      {dockItems.socials.map((item) => (
        <DockIcon key={item.title}>
          <Link
            href={item.href}
            target="_blank"
            className="flex items-center justify-center size-8 text-gray-400 hover:text-white transition-colors"
            title={item.title}
          >
            {item.icon}
          </Link>
        </DockIcon>
      ))}
    </Dock>
  );
}
