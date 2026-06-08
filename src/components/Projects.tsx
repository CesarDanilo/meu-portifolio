import { ExternalLink } from "lucide-react";
import streetCoreImg from "@/assets/project-streetcore.png";
import chat2order from "@/assets/chat2order.png";
import chat2orderlanging from "@/assets/chat2orderlandingpage.png";
import precifyImg from "@/assets/project-precify.png";
import aimdeskImg from "@/assets/project-aimdesk.png";
import githubIcon from "@/assets/github.png";
import linkedinIcon from "@/assets/linkedin.png";

const projects = [
  {
    title: "Street Core",
    desc: "E-commerce de streetwear com design imersivo, catálogo dinâmico e experiência de compra fluida.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: streetCoreImg,
    live: "https://street-core.onrender.com/",
    repo: "https://github.com/CesarDanilo/street-core",
  },
  {
    title: "Chat2Order",
    desc: "O Chat2Order Frontend é a camada de interface do sistema Chat2Order — uma aplicação web voltada para clientes finais realizarem pedidos de forma simples e fluida, sem necessidade de canais externos.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: chat2order,
    live: "https://chat2order-frontend.vercel.app/",
    repo: "https://github.com/CesarDanilo/Chat2Order-frontend",
  },
  ,
  {
    title: "Chat2Order Landing Page",
    desc: "O Chat2Order é um ecossistema completo de software desenvolvido para resolver um problema operacional crítico: a gestão de pedidos descentralizados em conversas de aplicativos de mensagens. Através da integração de Inteligência Artificial.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: chat2orderlanging,
    live: "https://chat2order-landing.vercel.app//",
    repo: "https://github.com/CesarDanilo/chat2order-landing",
  },
  {
    title: "Precify",
    desc: "SaaS de análise de mercado e precificação inteligente com alertas em tempo real e dashboard analítico.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: precifyImg,
    live: null,
    repo: "https://github.com/CesarDanilo/Precify",
  },
  {
    title: "Aimdesk E-commerce",
    desc: "Loja online completa de mouse pads com catálogo, carrinho, checkout e gestão de pedidos.",
    tech: ["React", "Node.js", "Stripe"],
    image: aimdeskImg,
    live: null,
    repo: "https://github.com/CesarDanilo/aimdesk-ecommerce",
  },
  
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary mb-3">// projetos</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabalhos selecionados
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Alguns projetos que mostram como eu transformo ideias em produtos reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p?.title}
              className="group relative glass border border-border/60 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1 shadow-card flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-44 relative overflow-hidden bg-secondary/40">
                <img
                  src={p?.image}
                  alt={`Preview do projeto ${p?.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-4 font-mono text-xs text-primary-foreground/90">
                  ./{p?.title.toLowerCase().replace(/\s+/g, "-")}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{p?.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {p?.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p?.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2">
                  {p?.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm px-3 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Ver Projeto
                    </a>
                  )}

                  <a
                    href={p?.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      p?.live ? "" : "flex-1"
                    } inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all`}
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Código</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}