import { Smartphone, Code, Gauge, Zap } from "lucide-react";

const items = [
  { icon: Smartphone, title: "Design Responsivo", desc: "Experiência impecável em qualquer tela." },
  { icon: Code, title: "Código Limpo", desc: "Arquitetura escalável e fácil de manter." },
  { icon: Gauge, title: "Performance", desc: "Carregamento rápido e Core Web Vitals no verde." },
  { icon: Zap, title: "Entrega Rápida", desc: "Prazos curtos sem abrir mão da qualidade." },
];

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary mb-3">// diferenciais</p>
          <h2 className="text-3xl md:text-4xl font-bold">Por que trabalhar comigo</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass border border-border/60 rounded-xl p-6 text-center hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
