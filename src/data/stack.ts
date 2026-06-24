export interface StackItem { name: string; category: string }

export const stackGroups: { category: string; items: string[] }[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Router', 'shadcn/ui', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'JWT'],
  },
  {
    category: 'IA & Infra',
    items: ['OpenAI API', 'WebSocket', 'GitHub', 'Vercel', 'Zod'],
  },
]

export const totalTechCount = stackGroups.reduce((acc, g) => acc + g.items.length, 0)
