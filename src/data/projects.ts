export type Project = {
  name: string;
  description: string;
  href?: string;
};

export const projects: Array<Project> = [
  {
    name: "Deni AI",
    description: "An AI chat app created for everyone, free.",
    href: "https://deniai.app",
  },
  {
    name: "VistaUpdater",
    description: "Make Windows Vista updateable. 50K+ users",
    href: "https://vistaupdater.net",
  },
  {
    name: "Prodfind",
    description: "A tool that allows you to find and publish products. Discontinued.",
  },
];
