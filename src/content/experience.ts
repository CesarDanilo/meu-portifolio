import type { Education, Job } from './schema'

// Datas validadas pelo Cesar em 01/11/2026 (docs/portfolio-redesign/09-approval-log.md).
// O início do suporte na Invictos (11/2022, junto com o estágio) ainda está pendente de confirmação.
export const jobs: Job[] = [
  {
    company: 'Motor Hero',
    roles: [
      {
        title: 'Desenvolvedor Full Stack',
        track: 'dev',
        from: [2025, 10],
        to: [2026, 5],
        description:
          'Sistemas internos de ponta a ponta com React, TypeScript, FastAPI e PostgreSQL: APIs REST, autenticação, processamento assíncrono e dashboards. Modelagem de dados, testes de regras de negócio e decisões de arquitetura.',
      },
    ],
  },
  {
    company: 'Invictos Tecnologia',
    roles: [
      {
        title: 'Estágio em Desenvolvimento Web',
        track: 'dev',
        label: 'Estágio',
        from: [2022, 11],
        to: [2023, 7],
        description: 'Funcionalidades full stack com React, Node.js e PostgreSQL, APIs REST com JWT e correções de desempenho.',
      },
      {
        title: 'Suporte Técnico',
        track: 'support',
        label: 'Suporte',
        from: [2022, 11],
        to: [2025, 10],
        description:
          'Relatórios gerados com SQL e uso intenso de SQL no dia a dia: consultas para análise de dados, investigação de falhas em sistemas e bancos e atendimento de chamados técnicos.',
      },
    ],
  },
  {
    company: 'Chat2Order',
    roles: [
      {
        title: 'Fundador e Dev Full Stack',
        track: 'own',
        label: 'Projeto próprio',
        from: [2026, 6],
        to: null,
        description: 'SaaS que transforma conversas do WhatsApp em pedidos estruturados. Detalhes no case.',
      },
    ],
  },
]

export const education: Education = {
  degree: 'Bacharelado em Engenharia de Software',
  school: 'Unigran, Centro Universitário da Grande Dourados',
  from: [2021, 2],
  to: [2025, 1],
  thesis: {
    title: 'E-commerce completo',
    description: 'Autenticação, CRUD de produtos, carrinho de compras e painel administrativo, com Node.js, React, PostgreSQL e Sequelize.',
    code: 'https://github.com/CesarDanilo/aimdesk-ecommerce',
  },
}
