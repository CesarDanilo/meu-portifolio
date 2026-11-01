/** Mês como [ano, mês 1–12]. */
export type YearMonth = readonly [year: number, month: number]

/** Período fechado nos dois lados; `to: null` significa "até hoje". */
export interface Period {
  readonly from: YearMonth
  readonly to: YearMonth | null
}

export interface Today {
  readonly year: number
  readonly month: number
}

export type Locale = 'pt' | 'en'

export function today(date = new Date()): Today {
  return { year: date.getFullYear(), month: date.getMonth() + 1 }
}

const index = ([year, month]: YearMonth) => year * 12 + (month - 1)

function bounds(period: Period, now: Today): [number, number] {
  const start = index(period.from)
  const end = index(period.to ?? [now.year, now.month])
  if (end < start) throw new RangeError(`Período termina antes de começar: ${formatMonthYear(period.from)}`)
  return [start, end]
}

/** Quantidade de meses do período, contando o primeiro e o último. */
export function monthsInPeriod(period: Period, now: Today = today()): number {
  const [start, end] = bounds(period, now)
  return end - start + 1
}

/** Meses distintos cobertos por vários períodos: sobreposições contam uma vez só. */
export function totalMonths(periods: readonly Period[], now: Today = today()): number {
  const months = new Set<number>()
  for (const period of periods) {
    const [start, end] = bounds(period, now)
    for (let m = start; m <= end; m++) months.add(m)
  }
  return months.size
}

const UNITS = {
  pt: { year: ['ano', 'anos'], month: ['mês', 'meses'], and: 'e' },
  en: { year: ['year', 'years'], month: ['month', 'months'], and: 'and' },
} as const

/** 17 → "1 ano e 5 meses". */
export function formatDuration(months: number, locale: Locale = 'pt'): string {
  if (!Number.isInteger(months) || months < 1) throw new RangeError(`Duração inválida: ${months}`)
  const u = UNITS[locale]
  const years = Math.floor(months / 12)
  const rest = months % 12
  const parts = [
    years > 0 && `${years} ${u.year[years > 1 ? 1 : 0]}`,
    rest > 0 && `${rest} ${u.month[rest > 1 ? 1 : 0]}`,
  ].filter(Boolean)
  return parts.join(` ${u.and} `)
}

/** [2021, 2] → "02/2021". */
export function formatMonthYear([year, month]: YearMonth): string {
  return `${String(month).padStart(2, '0')}/${year}`
}
