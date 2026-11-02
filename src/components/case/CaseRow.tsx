import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import type { Case } from '../../content/schema'
import { useMediaQuery, useReducedMotion } from '../../hooks/useMediaQuery'
import TypeTag from '../ui/TypeTag'
import CaseScreen from './CaseScreen'

interface CaseRowProps { item: Case; index: number }

const DESKTOP_HOVER = '(hover: hover) and (pointer: fine) and (min-width: 1024px)'
const TOUR: Keyframe[] = [
  { transform: 'scale(1) translate(0, 0)' },
  { transform: 'scale(1.3) translate(-4%, -2%)', offset: 0.3 },
  { transform: 'scale(1.3) translate(-18%, -15%)', offset: 0.55 },
  { transform: 'scale(1.1) translate(-6%, -8%)', offset: 0.8 },
  { transform: 'scale(1) translate(0, 0)' },
]

/**
 * Ficha do case na home. O hover é todo em CSS (opacidade e transform, sem mexer no layout).
 * Só o tour pelo screenshot usa Web Animations, para poder voltar suave de onde parou ao sair.
 */
export default function CaseRow({ item, index }: CaseRowProps) {
  const canHover = useMediaQuery(DESKTOP_HOVER)
  const reduced = useReducedMotion()
  const view = useRef<HTMLDivElement>(null)
  const tour = useRef<Animation | null>(null)

  const start = () => {
    const el = view.current
    if (!canHover || reduced || !el || typeof el.animate !== 'function') return
    tour.current?.cancel()
    tour.current = el.animate(TOUR, { duration: 12000, iterations: Infinity, easing: 'ease-in-out', delay: 300 })
  }

  const stop = () => {
    const el = view.current
    const running = tour.current
    if (!el || !running) return
    const current = getComputedStyle(el).transform
    running.cancel()
    tour.current = el.animate([{ transform: current === 'none' ? 'none' : current }, { transform: 'none' }], { duration: 600, easing: 'cubic-bezier(0.2, 0.7, 0.1, 1)' })
  }

  return (
    <Link
      to="/cases/$slug"
      params={{ slug: item.slug }}
      className="case-row relative cursor-pointer overflow-hidden border-b border-line"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      <span className="case-row__n self-start pt-1.5 font-mono text-[13px] text-fg-3">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="min-w-0">
        <h3 className="case-row__name text-[clamp(28px,3.4vw,48px)] font-semibold leading-none tracking-[-0.035em]">{item.name}</h3>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <TypeTag type={item.type} />
          <span className="meta text-fg-3">{item.kind}</span>
        </div>
      </div>

      <div className="case-row__details min-w-0">
        <div className="case-row__summary flex flex-col gap-2.5">
          <p className="text-[15px] text-fg-2">{item.pitch}</p>
          <p className="meta text-fg-3">{item.stack.join(' · ')}</p>
        </div>
        <div className="case-row__more flex flex-col gap-3.5">
          <ul className="flex flex-col gap-2 text-sm text-fg-2">
            {item.highlights.map(h => (
              <li key={h} className="relative pl-5 before:absolute before:left-0 before:font-mono before:text-signal-text before:content-['+']">{h}</li>
            ))}
          </ul>
          <span className="meta inline-flex gap-2.5 text-fg">
            Abrir case <i className="not-italic text-signal-text">→</i>
          </span>
        </div>
      </div>

      <div className="case-row__screen min-w-0">
        <CaseScreen item={item} chrome viewRef={view} sizes="(min-width: 1024px) 34vw, 100vw" />
      </div>
    </Link>
  )
}
