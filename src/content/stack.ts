import type { StackGroup } from './schema'

// `icon` é o slug do simple-icons; quando a marca não existe lá, uma sigla curta.
export const stack: StackGroup[] = [
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: 'react', usedIn: 'Chat2Order · GastroHub' },
      { name: 'Vue 3', icon: 'vuedotjs', usedIn: 'Revisões · Estoque Pro' },
      { name: 'TypeScript', icon: 'typescript', usedIn: 'todos os cases' },
      { name: 'TanStack Query', icon: 'reactquery', usedIn: 'Chat2Order · GastroHub · Revisões · Estoque Pro' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', usedIn: 'todos' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodedotjs', usedIn: 'Chat2Order · Catalog-Service' },
      { name: 'Fastify', icon: 'fastify', usedIn: 'GastroHub · Catalog-Service' },
      { name: 'Express', icon: 'express', usedIn: 'Chat2Order' },
      { name: 'Prisma', icon: 'prisma', usedIn: 'Chat2Order · GastroHub · Catalog' },
      { name: 'PostgreSQL', icon: 'postgresql', usedIn: 'Chat2Order · GastroHub · Catalog · Estoque Pro' },
      { name: 'Laravel', icon: 'laravel', usedIn: 'Revisões · Estoque Pro' },
    ],
  },
  {
    group: 'Infra e qualidade',
    items: [
      { name: 'Docker', icon: 'docker', usedIn: 'Chat2Order · GastroHub · Catalog · Estoque Pro' },
      { name: 'Redis · BullMQ', icon: 'redis', usedIn: 'Catalog-Service' },
      { name: 'Vitest', icon: 'vitest', usedIn: 'GastroHub · Catalog-Service' },
      { name: 'Playwright', icon: 'PW', usedIn: 'GastroHub' },
      { name: 'Jest', icon: 'jest', usedIn: 'Chat2Order' },
      { name: 'GitHub Actions', icon: 'githubactions', usedIn: 'GastroHub · Catalog-Service' },
    ],
  },
  {
    group: 'IA e segurança',
    items: [
      { name: 'Groq', icon: 'Gq', usedIn: 'Chat2Order' },
      { name: 'Llama 3.1', icon: 'meta', usedIn: 'Chat2Order' },
      { name: 'JWT', icon: 'JWT', usedIn: 'Chat2Order' },
      { name: 'Sanctum', icon: 'Sa', usedIn: 'Revisões · Estoque Pro' },
    ],
  },
]
