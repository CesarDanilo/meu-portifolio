/** Índice da home: ordem aprovada em D-07 (Sobre → Experiência → Cases → Outros → Stack → Contato). */
export const SECTIONS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'cases', label: 'Cases' },
  { id: 'outros', label: 'Outros' },
  { id: 'stack', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']
