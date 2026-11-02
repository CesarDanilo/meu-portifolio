import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import type { Case } from '../../content/schema'
import { useFlip } from '../../hooks/useFlip'
import { useMediaQuery, useReducedMotion } from '../../hooks/useMediaQuery'
import { cn } from '../../lib/cn'
import TypeTag from '../ui/TypeTag'
import CaseScreen from './CaseScreen'

interface CaseRowProps { item: Case; index: number }

const DESKTOP_HOVER = '(hover: hover) and (pointer: fine) and (min-width: 1024px)'

/**
 * Ficha do case na home. No desktop com mouse, abre no hover/foco: título e detalhes
 * empilham, a tela cresce e "toca". Em telas de toque a ficha já fica aberta.
 */
export default function CaseRow({ item, index }: CaseRowProps) {
  const canHover = useMediaQuery(DESKTOP_HOVER)
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [ref, flip] = useFlip<HTMLAnchorElement>()
  const open = canHover ? hovered : true

  const toggle = (next: boolean) => {
    if (!canHover || next === hovered) return
    if (reduced) setHovered(next)
    else flip(() => setHovered(next))
  }

  return (
    <Link
      ref={ref}
      to="/cases/$slug"
      params={{ slug: item.slug }}
      className={cn('case-row group relative cursor-pointer overflow-hidden border-b border-line', open && 'is-open')}
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      onFocus={() => toggle(true)}
      onBlur={() => toggle(false)}
    >
      <span data-flip className="case-row__n self-start pt-1.5 font-mono text-[13px] text-fg-3 transition-colors group-[.is-open]:text-signal-text">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div data-flip className="case-row__title min-w-0">
        <h3 className="text-[clamp(28px,3.4vw,48px)] font-semibold leading-none tracking-[-0.035em]">{item.name}</h3>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <TypeTag type={item.type} />
          <span className="meta text-fg-3">{item.kind}</span>
        </div>
      </div>

      <div className="case-row__details flex min-w-0 flex-col gap-2.5">
        <p data-flip className="text-[15px] text-fg-2">{item.pitch}</p>
        <p data-flip className="meta text-fg-3">{item.stack.join(' · ')}</p>
        <div className="case-open-only mt-2 flex flex-col gap-3.5">
          <ul className="flex flex-col gap-2 text-sm text-fg-2">
            {item.highlights.map(h => (
              <li key={h} className="relative pl-5 before:absolute before:left-0 before:font-mono before:text-signal-text before:content-['+']">{h}</li>
            ))}
          </ul>
          <span className="meta inline-flex gap-2.5 text-fg">
            Abrir case <i className="not-italic text-signal-text transition-transform duration-400 group-hover:translate-x-1">→</i>
          </span>
        </div>
      </div>

      <div data-flip="scale" className="case-row__screen min-w-0">
        <CaseScreen item={item} chrome sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
    </Link>
  )
}
