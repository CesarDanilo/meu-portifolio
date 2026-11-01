import type { Project } from './schema'

export const projects: Project[] = [
  {
    name: 'MEI Finance',
    year: '2026',
    summary: 'Controle financeiro e limite anual para MEIs',
    stack: ['React', 'Node.js', 'TypeScript'],
    links: { demo: 'https://mei-finance-frontend.vercel.app', code: 'https://github.com/CesarDanilo/MEI-Finance-Frontend' },
  },
  {
    name: 'APEX Academy',
    year: '2026',
    summary: 'Landing page de academia',
    stack: ['React', 'TypeScript', 'Tailwind'],
    links: { demo: 'https://apex-academy-eta.vercel.app', code: 'https://github.com/CesarDanilo/APEX-Academy' },
  },
  {
    name: 'Landing Alienware',
    year: '2023–25',
    summary: 'Estudo de landing de produto com tema claro/escuro',
    stack: ['React', 'Tailwind'],
    links: { demo: 'https://landing-page-alienware-bpw8.vercel.app', code: 'https://github.com/CesarDanilo/landing-page-alienware' },
  },
]
