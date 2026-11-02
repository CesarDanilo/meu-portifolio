import type { CSSProperties } from 'react'
import type { Job } from '../../content/schema'
import { type Today, today } from '../../lib/dates'
import { useInView } from '../../hooks/useInView'
import { useReducedMotion } from '../../hooks/useMediaQuery'
import { cn } from '../../lib/cn'

const idx = ([y, m]: readonly [number, number]) => y * 12 + (m - 1)

/** Linha do tempo (gantt) com uma barra por função; o eixo cobre os anos das funções. */
export default function Timeline({ jobs, now = today() }: { jobs: Job[]; now?: Today }) {
  const reduced = useReducedMotion()
  const [ref, lit] = useInView<HTMLDivElement>({ skip: reduced, threshold: 0.35 })

  const roles = jobs.flatMap(j => j.roles.map(r => ({ ...r, company: j.company })))
  const end = (r: (typeof roles)[number]) => idx(r.to ?? [now.year, now.month])
  const firstYear = Math.min(...roles.map(r => r.from[0]))
  const lastYear = Math.max(...roles.map(r => Math.floor(end(r) / 12)))
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i)
  const start = firstYear * 12
  const span = (lastYear + 1) * 12 - start
  const pct = (v: number) => `${((v - start) / span) * 100}%`

  return (
    <div className="overflow-x-auto">
      <div ref={ref} aria-hidden="true" className={cn('timeline relative min-w-[560px] pt-[22px]', lit && 'is-lit')}>
        <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${years.length}, 1fr)` }}>
          {years.map(y => (
            <span key={y} className="h-full border-l border-line pl-1.5 font-mono text-[10px] text-fg-3">{y}</span>
          ))}
        </div>
        {roles.map((r, k) => (
          <div key={`${r.company}-${r.title}`} className="relative mt-2 h-[26px]">
            <span
              className={cn(
                'timeline__bar meta absolute inset-y-0 flex items-center whitespace-nowrap pl-2 text-[10px]',
                r.track === 'dev' ? 'border-l-2 border-signal bg-signal/15 text-fg' : 'border border-l-2 border-dashed border-line-2 border-l-fg-3 text-fg-2',
              )}
              style={{ left: pct(idx(r.from)), width: `calc(${pct(end(r) + 1)} - ${pct(idx(r.from))})`, '--k': k } as CSSProperties}
            >
              {r.company}{r.label && r.track !== 'own' ? ` · ${r.label}` : ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
