import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "César Danilo · Desenvolvedor Full Stack" },
      {
        name: "description",
        content:
          "Desenvolvedor Full Stack especializado em React, Node.js e PostgreSQL. Crio sites modernos, rápidos e focados em resultados para empresas.",
      },
      { property: "og:title", content: "César Danilo · Desenvolvedor Full Stack" },
      {
        property: "og:description",
        content: "Sites modernos, rápidos e focados em resultados para empresas.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
