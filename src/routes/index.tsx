import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";

const socialLinks = [
  { name: "X", href: "https://x.com/raicdev" },
  { name: "GitHub", href: "https://github.com/raicdev" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "raic.dev" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="space-y-14">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">rai</h1>
        <p className="text-muted-foreground">Programmer, Full-Stack Developer</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </header>

      <section className="space-y-5">
        <h2 className="text-sm text-muted-foreground">Projects</h2>
        <ul className="space-y-5">
          {projects.map((project) => (
            <li key={project.name} className="space-y-1">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:underline underline-offset-4"
                >
                  {project.name}
                </a>
              ) : (
                <div className="font-medium">{project.name}</div>
              )}
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
