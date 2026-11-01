import { describe, expect, it } from 'vitest'
import { formatDuration, formatMonthYear, monthsInPeriod, totalMonths } from './dates'

const NOW = { year: 2026, month: 11 } as const

describe('monthsInPeriod', () => {
  it('conta os meses de forma inclusiva', () => {
    expect(monthsInPeriod({ from: [2025, 10], to: [2026, 5] }, NOW)).toBe(8) // Motor Hero
    expect(monthsInPeriod({ from: [2022, 11], to: [2023, 7] }, NOW)).toBe(9) // estágio Invictos
    expect(monthsInPeriod({ from: [2021, 2], to: [2025, 1] }, NOW)).toBe(48) // graduação
  })

  it('conta um único mês como 1', () => {
    expect(monthsInPeriod({ from: [2024, 3], to: [2024, 3] }, NOW)).toBe(1)
  })

  it('usa o mês atual quando o período não terminou', () => {
    expect(monthsInPeriod({ from: [2026, 6], to: null }, NOW)).toBe(6) // Chat2Order
  })

  it('rejeita período que termina antes de começar', () => {
    expect(() => monthsInPeriod({ from: [2025, 5], to: [2025, 4] }, NOW)).toThrow()
  })
})

describe('totalMonths', () => {
  it('não conta duas vezes meses sobrepostos', () => {
    const invictosSuporte = { from: [2022, 11], to: [2025, 10] } as const
    const invictosEstagio = { from: [2022, 11], to: [2023, 7] } as const
    const motorHero = { from: [2025, 10], to: [2026, 5] } as const
    expect(totalMonths([invictosEstagio, motorHero], NOW)).toBe(17)
    expect(totalMonths([invictosSuporte, invictosEstagio, motorHero], NOW)).toBe(43)
  })

  it('retorna 0 para lista vazia', () => {
    expect(totalMonths([], NOW)).toBe(0)
  })
})

describe('formatDuration', () => {
  it('escreve anos e meses em português, no singular e no plural', () => {
    expect(formatDuration(1)).toBe('1 mês')
    expect(formatDuration(8)).toBe('8 meses')
    expect(formatDuration(12)).toBe('1 ano')
    expect(formatDuration(17)).toBe('1 ano e 5 meses')
    expect(formatDuration(36)).toBe('3 anos')
    expect(formatDuration(43)).toBe('3 anos e 7 meses')
  })

  it('escreve em inglês quando pedido', () => {
    expect(formatDuration(17, 'en')).toBe('1 year and 5 months')
    expect(formatDuration(1, 'en')).toBe('1 month')
  })

  it('rejeita valores inválidos', () => {
    expect(() => formatDuration(0)).toThrow()
    expect(() => formatDuration(1.5)).toThrow()
  })
})

describe('formatMonthYear', () => {
  it('formata como MM/AAAA', () => {
    expect(formatMonthYear([2025, 10])).toBe('10/2025')
    expect(formatMonthYear([2021, 2])).toBe('02/2021')
  })
})
