/*
 * Contrato do conteúdo do portfólio. Usado pelos testes para validar os dados;
 * o app importa só os tipos (`import type`), então o zod não entra no bundle.
 */
import { z } from 'zod'

const text = z.string().trim().min(1)
const url = z.url({ protocol: /^https$/ })
const yearMonth = z.tuple([z.number().int().min(2000).max(2100), z.number().int().min(1).max(12)])
const period = z.object({ from: yearMonth, to: yearMonth.nullable() })

export const projectTypeSchema = z.enum(['Full Stack', 'Back-end', 'Front-end'])

export const caseSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: text,
  type: projectTypeSchema,
  kind: text,
  period: text,
  scope: text,
  pitch: text.max(80),
  highlights: z.array(text).length(3),
  stack: z.array(text).min(3),
  problem: text,
  solution: text,
  flow: z.array(text).min(3),
  challenges: z.array(z.object({ title: text, body: text })).min(3),
  links: z.object({ demo: url.optional(), code: url, note: text.optional() }),
  media: z.discriminatedUnion('kind', [
    z.object({ kind: z.literal('image'), src: text, alt: text }),
    z.object({ kind: z.literal('terminal'), lines: z.array(text).min(3) }),
  ]),
  /** Vídeo real do produto. A chave aponta para `caseVideos` em media.ts. */
  video: z.object({ src: text, label: text, duration: text, previewSeconds: z.number().positive(), note: text }).optional(),
  /** Imagens da galeria da página do case. As chaves apontam para `caseGallery` em media.ts. */
  gallery: z.array(z.object({ src: text, alt: text, caption: text, wide: z.boolean().optional() })).optional(),
})

export const projectSchema = z.object({
  name: text,
  year: text,
  summary: text,
  stack: z.array(text).min(1),
  links: z.object({ demo: url.optional(), code: url }),
})

export const roleSchema = period.extend({
  title: text,
  track: z.enum(['dev', 'support', 'own']),
  label: text.optional(),
  description: text,
})

export const jobSchema = z.object({ company: text, roles: z.array(roleSchema).min(1) })

export const educationSchema = period.extend({
  degree: text,
  school: text,
  thesis: z.object({ title: text, description: text, code: url }),
})

export const trailStepSchema = z.object({ label: text, title: text, detail: text, current: z.boolean().optional() })

export const stackGroupSchema = z.object({
  group: text,
  items: z.array(z.object({ name: text, icon: text, usedIn: text })).min(1),
})

export const profileSchema = z.object({
  name: text,
  role: text,
  location: text,
  headline: z.object({ before: text, emphasis: text, after: text }),
  lead: text,
  statement: z.object({ before: text, emphasis: text, after: text }),
  story: z.array(text).min(2),
  trail: z.array(trailStepSchema).min(3),
  contact: z.object({
    email: z.email(),
    whatsapp: z.object({ display: text, url }),
    github: url,
    linkedin: url,
  }),
})

export type ProjectType = z.infer<typeof projectTypeSchema>
export type Case = z.infer<typeof caseSchema>
export type Project = z.infer<typeof projectSchema>
export type Role = z.infer<typeof roleSchema>
export type Job = z.infer<typeof jobSchema>
export type Education = z.infer<typeof educationSchema>
export type StackGroup = z.infer<typeof stackGroupSchema>
export type Profile = z.infer<typeof profileSchema>
