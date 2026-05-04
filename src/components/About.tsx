import { Cpu, Rocket, Sparkles } from "lucide-react";

const highlights = [
  { icon: Cpu, title: "Engenharia de Software", desc: "Arquitetura sólida e código que escala." },
  { icon: Rocket, title: "Performance", desc: "Sites rápidos, otimizados e bem indexados." },
  { icon: Sparkles, title: "UI Moderna", desc: "Interfaces limpas que convertem visitantes." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-sm text-primary mb-3">// sobre mim</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Construo produtos digitais com <span className="text-gradient">propósito</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sou desenvolvedor full stack com formação em engenharia de software.
            Trabalho com <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Node.js</span> e{" "}
            <span className="text-foreground font-medium">PostgreSQL</span> para entregar
            soluções completas — do banco de dados à interface — sempre com foco em
            performance, escalabilidade e experiência do usuário.
          </p>
        </div>

        <div className="grid gap-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass border border-border/60 rounded-xl p-5 flex gap-4 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
