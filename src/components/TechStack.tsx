const stack = [
  { name: "React", color: "oklch(0.75 0.15 220)" },
  { name: "Node.js", color: "oklch(0.70 0.18 145)" },
  { name: "JavaScript", color: "oklch(0.85 0.18 90)" },
  { name: "TypeScript", color: "oklch(0.65 0.18 240)" },
  { name: "PostgreSQL", color: "oklch(0.65 0.15 230)" },
  { name: "Tailwind CSS", color: "oklch(0.72 0.15 210)" },
  { name: "Python", color: "oklch(0.78 0.14 85)" },
];

export function TechStack() {
  return (
    <section id="tecnologias" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-sm text-primary mb-3">// stack</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias que eu uso</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Ferramentas modernas para construir produtos rápidos, robustos e escaláveis.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {stack.map((t) => (
            <span
              key={t.name}
              className="group relative px-5 py-2.5 rounded-full glass border border-border/60 font-mono text-sm hover:border-primary/60 hover:-translate-y-0.5 transition-all cursor-default"
            >
              <span
                className="inline-block h-2 w-2 rounded-full mr-2 align-middle"
                style={{ backgroundColor: t.color, boxShadow: `0 0 12px ${t.color}` }}
              />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
