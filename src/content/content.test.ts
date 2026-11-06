import { describe, expect, it } from 'vitest'
import * as siIcons from 'simple-icons'
import { cases } from './cases'
import { projects } from './projects'
import { jobs, education } from './experience'
import { stack } from './stack'
import { profile } from './profile'
import { caseSchema, educationSchema, jobSchema, profileSchema, projectSchema, stackGroupSchema } from './schema'
import { totalMonths } from '../lib/dates'

const NOW = { year: 2026, month: 11 }

describe('conteúdo', () => {
  it('perfil segue o contrato', () => {
    expect(() => profileSchema.parse(profile)).not.toThrow()
  })

  it('todos os cases seguem o contrato e têm slug único', () => {
    cases.forEach(c => expect(() => caseSchema.parse(c), c.slug).not.toThrow())
    expect(new Set(cases.map(c => c.slug)).size).toBe(cases.length)
  })

  it('mantém os 6 cases na ordem aprovada', () => {
    expect(cases.map(c => c.slug)).toEqual(['chat2order', 'gastrohub', 'catalog-service', 'controle-de-revisoes', 'estoque-pro', 'clinica-odontologica'])
  })

  it('outros projetos, experiência, formação e stack seguem o contrato', () => {
    projects.forEach(p => expect(() => projectSchema.parse(p), p.name).not.toThrow())
    jobs.forEach(j => expect(() => jobSchema.parse(j), j.company).not.toThrow())
    expect(() => educationSchema.parse(education)).not.toThrow()
    stack.forEach(g => expect(() => stackGroupSchema.parse(g), g.group).not.toThrow())
  })

  it('não repete projeto entre cases e outros projetos', () => {
    const caseNames = new Set(cases.map(c => c.name))
    projects.forEach(p => expect(caseNames.has(p.name), p.name).toBe(false))
  })

  it('totais de experiência batem com as datas validadas (09-approval-log)', () => {
    const roles = jobs.flatMap(j => j.roles)
    const dev = roles.filter(r => r.track === 'dev')
    const support = roles.filter(r => r.track === 'support')
    expect(totalMonths(dev, NOW)).toBe(17)
    expect(totalMonths(support, NOW)).toBe(36)
    expect(totalMonths([...dev, ...support], NOW)).toBe(43)
  })

  it('todo ícone da stack existe no simple-icons ou é uma sigla curta', () => {
    const slugs = new Set(Object.values(siIcons).map(i => (i as { slug: string }).slug))
    stack.flatMap(g => g.items).forEach(item => {
      const ok = slugs.has(item.icon) || /^[A-Z][A-Za-z]{0,3}$/.test(item.icon)
      expect(ok, `${item.name}: ${item.icon}`).toBe(true)
    })
  })
})
