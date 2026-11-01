import type { ReactNode } from 'react'
import Reveal from '../motion/Reveal'

interface SectionHeadProps {
  /** Posição da seção no índice da página, ex.: 1 de 6. */
  index: number
  total: number
  label: string
  title: ReactNode
  aside?: string
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Cabeçalho de seção: índice técnico, título com máscara e nota lateral. */
export default function SectionHead({ index, total, label, title, aside }: SectionHeadProps) {
  return (
    <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
      <Reveal className="md:col-span-3" index={0}>
        <span className="meta text-fg-3">[ {pad(index)} / {pad(total)} ] {label}</span>
      </Reveal>
      <Reveal className="md:col-span-6 md:col-start-4" variant="mask" index={1}>
        <h2 className="font-display text-[clamp(32px,4.4vw,60px)] font-[560] leading-none tracking-[-0.04em] text-balance [&_b]:condensed">
          {title}
        </h2>
      </Reveal>
      {aside && (
        <Reveal className="md:col-span-3 md:col-start-10" index={2}>
          <p className="text-sm text-fg-2">{aside}</p>
        </Reveal>
      )}
    </div>
  )
}
