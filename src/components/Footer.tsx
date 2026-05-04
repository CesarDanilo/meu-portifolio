import githubIcon from "@/assets/github.png";
import linkedinIcon from "@/assets/linkedin.png";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} César Danilo · Construído com café e código.
        </p>

        <div className="flex items-center gap-2">
          {[
            {
              type: "img",
              icon: githubIcon,
              alt: "GitHub",
              href: "https://github.com/CesarDanilo",
            },
            {
              type: "img",
              icon: linkedinIcon,
              alt: "LinkedIn",
              href: "https://www.linkedin.com/in/césar-danilo-396408153",
            },
            {
              type: "component",
              icon: Mail,
              alt: "Email",
              href: "mailto:cesardanilopalacios390@gmail.com",
            },
          ].map((item, i) => {
            const isComponent = item.type === "component";
            const Icon = item.icon as any;

            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.alt}
                className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border hover:border-primary/60 hover:bg-card transition-all"
              >
                {isComponent ? (
                  <Icon className="w-4 h-4" />
                ) : (
                  <img
                    src={item.icon as string}
                    alt={item.alt}
                    className="w-4 h-4 object-contain"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}