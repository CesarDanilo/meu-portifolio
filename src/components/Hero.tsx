import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 [background:var(--gradient-hero)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/20 blur-[120px] animate-glow" />

      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-8 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Disponível para novos projetos
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
          César Danilo
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-mono text-gradient animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Desenvolvedor Full Stack
        </p>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Crio sites modernos, rápidos e focados em resultados para empresas que querem
          se destacar no digital.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-all hover:-translate-y-0.5"
          >
            Ver Projetos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all font-medium"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
