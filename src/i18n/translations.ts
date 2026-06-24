export type Lang = 'pt' | 'en'

export interface Translations {
  nav: { work: string; stack: string; about: string; contact: string }
  hero: {
    role: string; thesis: string; cta: string; ctaSecondary: string
    terminalTitle: string
  }
  stats: {
    projects: string; projectsLabel: string
    experience: string; experienceLabel: string
    focus: string; focusLabel: string
  }
  work: { title: string; eyebrow: string; problem: string; decision: string; result: string; live: string; statusProduction: string; statusMvp: string }
  stack: { title: string; eyebrow: string }
  about: { title: string; eyebrow: string; bio1: string; bio2: string; availableLabel: string; availableText: string }
  contact: { title: string; eyebrow: string; subtitle: string; email: string; whatsapp: string; github: string; linkedin: string; ctaWhatsapp: string }
  footer: { rights: string; availableFor: string }
}

export const translations: Record<Lang, Translations> = {
  pt: {
    nav: { work: 'Projetos', stack: 'Stack', about: 'Sobre', contact: 'Contato' },
    hero: {
      role: 'Desenvolvedor Full Stack',
      thesis: 'Transformo caos operacional em sistemas que escalam.',
      cta: 'Ver projetos',
      ctaSecondary: 'Entrar em contato',
      terminalTitle: 'cesar-danilo.sh',
    },
    stats: {
      projects: '3+',
      projectsLabel: 'Projetos em produção',
      experience: '2+',
      experienceLabel: 'Anos de experiência',
      focus: 'SaaS para pequenos negócios & landing pages',
      focusLabel: 'Foco principal',
    },
    work: {
      title: 'Projetos Selecionados',
      eyebrow: 'TRABALHO',
      problem: 'O Problema',
      decision: 'A Decisão Técnica',
      result: 'O Resultado',
      live: 'Ver ao vivo',
      statusProduction: 'Em produção',
      statusMvp: 'MVP',
    },
    stack: { title: 'Tecnologias', eyebrow: 'STACK' },
    about: {
      title: 'Sobre mim',
      eyebrow: 'SOBRE',
      bio1: 'Sou desenvolvedor full stack focado em construir sistemas reais para pequenos negócios — do backend até a UI. Prefiro código limpo, arquitetura que escala e entregas que geram resultado.',
      bio2: 'Trabalho com React, TypeScript e Node.js no dia a dia, sempre buscando integrar tecnologias modernas como IA e automações que eliminam trabalho manual repetitivo.',
      availableLabel: 'Disponível para',
      availableText: 'Oportunidades CLT/PJ · Projetos freelance',
    },
    contact: {
      title: 'Vamos conversar',
      eyebrow: 'CONTATO',
      subtitle: 'Disponível para vagas CLT/PJ e projetos freelance. Respondo em até 24h.',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      ctaWhatsapp: 'Chamar no WhatsApp',
    },
    footer: { rights: 'Todos os direitos reservados.', availableFor: 'Disponível para oportunidades' },
  },
  en: {
    nav: { work: 'Work', stack: 'Stack', about: 'About', contact: 'Contact' },
    hero: {
      role: 'Full Stack Developer',
      thesis: 'I turn operational chaos into systems that scale.',
      cta: 'See projects',
      ctaSecondary: 'Get in touch',
      terminalTitle: 'cesar-danilo.sh',
    },
    stats: {
      projects: '3+',
      projectsLabel: 'Projects in production',
      experience: '2+',
      experienceLabel: 'Years of experience',
      focus: 'SaaS for small business & landing pages',
      focusLabel: 'Main focus',
    },
    work: {
      title: 'Selected Work',
      eyebrow: 'WORK',
      problem: 'The Problem',
      decision: 'The Technical Decision',
      result: 'The Result',
      live: 'Live demo',
      statusProduction: 'In production',
      statusMvp: 'MVP',
    },
    stack: { title: 'Technologies', eyebrow: 'STACK' },
    about: {
      title: 'About me',
      eyebrow: 'ABOUT',
      bio1: 'I\'m a full stack developer focused on building real systems for small businesses — from backend to UI. I prefer clean code, scalable architecture, and deliveries that generate results.',
      bio2: 'I work with React, TypeScript and Node.js daily, always looking to integrate modern technologies like AI and automations that eliminate repetitive manual work.',
      availableLabel: 'Available for',
      availableText: 'Full-time / Contract · Freelance projects',
    },
    contact: {
      title: "Let's talk",
      eyebrow: 'CONTACT',
      subtitle: 'Available for full-time, contract and freelance projects. Reply within 24h.',
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      ctaWhatsapp: 'Message on WhatsApp',
    },
    footer: { rights: 'All rights reserved.', availableFor: 'Open to opportunities' },
  },
}
