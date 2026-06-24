import chat2order from "../assets/screenshots/chat2order.png"
import clinica from "../assets/screenshots/clinica.png"
import mei_finance from "../assets/screenshots/mei-finance.png"

export interface Project {
  id: string
  image: string
  liveUrl: string
  status: 'production' | 'mvp'
  tech: string[]
  terminal: string[]
  pt: ProjectContent
  en: ProjectContent
}

export interface ProjectContent {
  title: string
  tagline: string
  problem: string
  decision: string
  result: string
}

export const projects: Project[] = [
  {
    id: 'chat2order',
    image: chat2order,
    liveUrl: 'https://chat2order-frontend.vercel.app/',
    status: 'production',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'OpenAI'],
    terminal: [
      '$ chat2order --incoming "2 x-salada s/ cebola e suco laranja"',
      '→ llm.extract() ... [128ms]',
      '→ { items: [{name:"x-salada",qty:2,obs:"sem cebola"},{name:"suco",qty:1}] }',
      '→ order.persist() ... OK',
      '→ dashboard.push() ... LIVE ✓',
    ],
    pt: {
      title: 'Chat2Order',
      tagline: 'IA que transforma texto livre do WhatsApp em pedido estruturado',
      problem: 'Restaurantes perdiam pedidos porque clientes escrevem de formas imprevisíveis no WhatsApp — "quero 2 x-salada sem cebola e um suco de laranja grande" virava um pesadelo manual.',
      decision: 'Integrei a API da OpenAI com schema de extração estruturada: o modelo retorna sempre um JSON com itens, quantidades e observações — sem pós-processamento de regex. Pipeline: WhatsApp → webhook → LLM → banco → painel em tempo real.',
      result: 'Zero pedidos perdidos por interpretação manual. O operador vê o pedido estruturado em menos de 2s após o cliente enviar. Sistema em uso real por estabelecimentos parceiros.',
    },
    en: {
      title: 'Chat2Order',
      tagline: 'AI that turns WhatsApp free text into structured orders',
      problem: 'Restaurants lost orders because customers write in unpredictable ways on WhatsApp. Parsing "2 burgers no onion and a large OJ" manually was a nightmare.',
      decision: 'Integrated OpenAI API with structured extraction schema: model always returns JSON with items, quantities and notes — no regex post-processing. Pipeline: WhatsApp → webhook → LLM → DB → real-time dashboard.',
      result: 'Zero orders lost to manual interpretation. Operator sees structured order in under 2s after customer sends. System in real use by partner establishments.',
    },
  },
  {
    id: 'mei-finance',
    image: mei_finance,
    liveUrl: 'https://mei-finance-frontend.vercel.app/',
    status: 'production',
    tech: ['React', 'TypeScript', 'TanStack Router', 'shadcn/ui', 'Zod', 'Node.js'],
    terminal: [
      '$ mei-finance --status',
      '→ receita_acumulada: R$ 54.320,00',
      '→ limite_mei: R$ 81.000,00',
      '→ percentual: 67.1%  ⚠ alerta ativo > 70%',
      '→ meses_restantes: 4',
    ],
    pt: {
      title: 'MEI Finance',
      tagline: 'Controle financeiro pensado para o microempreendedor brasileiro',
      problem: 'Microempreendedores gerenciam finanças em cadernos ou planilhas e não sabem quando estão se aproximando do limite anual do MEI (R$ 81mil) — o que pode resultar em desenquadramento tributário inesperado.',
      decision: 'Construí um sistema com autenticação JWT, categorização de transações, dashboard de fluxo de caixa e alerta proativo que calcula em tempo real o percentual do limite MEI consumido.',
      result: 'Solução pronta para SaaS B2C. Arquitetura modular com TanStack Router e code splitting automático, permitindo onboarding de novos microempreendedores sem atrito.',
    },
    en: {
      title: 'MEI Finance',
      tagline: 'Financial control built for the Brazilian solo entrepreneur',
      problem: 'Solo entrepreneurs track finances in notebooks and don\'t know when they\'re approaching the annual MEI revenue cap (BRL 81k) — risking unexpected tax reclassification.',
      decision: 'Built a system with JWT auth, transaction categorization, cash flow dashboard and a proactive alert that calculates in real time the percentage of the MEI cap consumed.',
      result: 'Production-ready B2C SaaS architecture. Modular TanStack Router setup with automatic code splitting, enabling frictionless onboarding.',
    },
  },
  {
    id: 'clinica',
    image: clinica,
    liveUrl: 'https://modelo-clinica-odontologica.vercel.app/',
    status: 'production',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    terminal: [
      '$ clinica --audit',
      '→ performance: 97/100',
      '→ accessibility: 100/100',
      '→ load_time: 1.2s',
      '→ cta_whatsapp: active ✓',
    ],
    pt: {
      title: 'Clínica Odontológica',
      tagline: 'Landing de conversão para captação de pacientes particulares',
      problem: 'Clínicas dependem de indicações e não têm presença digital profissional. Sem uma página que transmita credibilidade, perdem pacientes particulares para concorrentes com sites mais modernos.',
      decision: 'Landing page de alta conversão com prova social (depoimentos reais), apresentação dos serviços principais, CTA de agendamento via WhatsApp e design que transmite confiança clínica.',
      result: 'Template pronto para replicar em qualquer clínica. Padrão visual profissional que compete com grandes redes odontológicas, a custo de desenvolvimento acessível.',
    },
    en: {
      title: 'Dental Clinic',
      tagline: 'High-conversion landing page for private patient acquisition',
      problem: 'Clinics depend on referrals and lack professional digital presence. Without a credibility-conveying page, they lose private patients to competitors with modern websites.',
      decision: 'High-conversion landing page with social proof, key services presentation, WhatsApp scheduling CTA, and a design that conveys clinical trust — load time under 1.5s.',
      result: 'Ready-to-replicate template for any clinic. Professional visual standard competing with large dental chain websites at accessible development cost.',
    },
  },
]
