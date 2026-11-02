import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import type { CSSProperties } from 'react'
import type { Case } from '../../content/schema'
import { useMediaQuery, useReducedMotion } from '../../hooks/useMediaQuery'
import { cn } from '../../lib/cn'
import TypeTag from '../ui/TypeTag'
import CaseScreen from './CaseScreen'

interface CaseRowProps { item: Case; index: number }

const DESKTOP_HOVER = '(hover: hover) and (pointer: fine) and (min-width: 1024px)'
const GAP = 24
const TOUR: Keyframe[] = [
  { transform: 'scale(1) translate(0, 0)' },
  { transform: 'scale(1.3) translate(-4%, -2%)', offset: 0.3 },
  { transform: 'scale(1.3) translate(-18%, -15%)', offset: 0.55 },
  { transform: 'scale(1.1) translate(-6%, -8%)', offset: 0.8 },
  { transform: 'scale(1) translate(0, 0)' },
]

/**
 * Ficha do case na home. No hover (desktop com mouse), os detalhes descem para baixo do título
 * e a tela cresce, como no protótipo aprovado. Mede as posições uma vez por hover e anima só
 * transform/opacidade (cases.css); o layout da página nunca muda durante a animação.
 */
export default function CaseRow({ item, index }: CaseRowProps) {
  const canHover = useMediaQuery(DESKTOP_HOVER)
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [vars, setVars] = useState<CSSProperties>({})
  const row = useRef<HTMLAnchorElement>(null)
  const title = useRef<HTMLDivElement>(null)
  const details = useRef<HTMLDivElement>(null)
  const screen = useRef<HTMLDivElement>(null)
  const view = useRef<HTMLDivElement>(null)
  const tour = useRef<Animation | null>(null)

  const enter = () => {
    if (!canHover || open) return
    const r = row.current!.getBoundingClientRect()
    const t = title.current!.getBoundingClientRect()
    const d = details.current!.getBoundingClientRect()
    const s = screen.current!.getBoundingClientRect()
    // detalhes vão para baixo do título; a tela cresce para a esquerda até a coluna liberada,
    // limitada para não passar da altura da linha
    const scale = Math.min((s.right - d.left) / s.width, (r.height - 16) / s.height)
    setVars({ '--dx': `${t.left - d.left}px`, '--dy': `${t.bottom + GAP - d.top}px`, '--s': Math.max(1, scale).toFixed(3) } as CSSProperties)
    setOpen(true)

    const el = view.current
    if (reduced || !el || typeof el.animate !== 'function') return
    tour.current?.cancel()
    tour.current = el.animate(TOUR, { duration: 12000, iterations: Infinity, easing: 'ease-in-out', delay: 400 })
  }

  const leave = () => {
    if (!open) return
    setOpen(false)
    const el = view.current
    const running = tour.current
    if (!el || !running) return
    const current = getComputedStyle(el).transform
    running.cancel()
    tour.current = el.animate([{ transform: current === 'none' ? 'none' : current }, { transform: 'none' }], { duration: 600, easing: 'cubic-bezier(0.2, 0.7, 0.1, 1)' })
  }

  return (
    <Link
      ref={row}
      to="/cases/$slug"
      params={{ slug: item.slug }}
      className={cn('case-row cursor-pointer border-b border-line', open && 'is-open')}
      style={vars}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      <span className="case-row__n pt-1.5 font-mono text-[13px] text-fg-3">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div ref={title} className="min-w-0">
        <h3 className="text-[clamp(28px,3.4vw,48px)] font-semibold leading-none tracking-[-0.035em]">{item.name}</h3>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <TypeTag type={item.type} />
          <span className="meta text-fg-3">{item.kind}</span>
        </div>
      </div>

      <div ref={details} className="case-row__details min-w-0">
        <div className="flex flex-col gap-2.5">
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

      <div ref={screen} className="case-row__screen min-w-0">
        <CaseScreen item={item} chrome viewRef={view} sizes="(min-width: 1024px) 45vw, 100vw" />
      </div>
    </Link>
  )
}
