import { Code2 } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-mono font-semibold">
          <span className="bg-gradient-primary p-1.5 rounded-lg">
            <Code2 className="h-4 w-4 text-primary-foreground" />
          </span>
          <span>cesar<span className="text-primary">.dev</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
        >
          Contratar
        </a>
      </nav>
    </header>
  );
}
