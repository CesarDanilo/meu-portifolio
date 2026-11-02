import type { CSSProperties } from 'react'
import type { Profile } from '../../content/schema'
import { useInView } from '../../hooks/useInView'
import { useReducedMotion } from '../../hooks/useMediaQuery'
import { cn } from '../../lib/cn'

/** Trilha da trajetória: horizontal no desktop, vertical no celular. Acende ao entrar na tela. */
export default function Trail({ steps }: { steps: Profile['trail'] }) {
  const reduced = useReducedMotion()
  const [ref, lit] = useInView<HTMLOListElement>({ skip: reduced, threshold: 0.35 })

  return (
    <ol
      ref={ref}
      aria-label="Trajetória"
      data-lit={lit || undefined}
      className={cn('trail relative mt-18 grid gap-6 pl-8 lg:grid-cols-8 lg:gap-0 lg:pl-0', lit && 'is-lit')}
    >
      <span className="absolute bottom-0 left-[7px] top-0 w-px bg-line-2 lg:inset-x-0 lg:bottom-auto lg:top-[7px] lg:h-px lg:w-auto" aria-hidden="true" />
      <span className="trail__line absolute bottom-0 left-[7px] top-0 w-px bg-signal lg:inset-x-0 lg:bottom-auto lg:top-[7px] lg:h-px lg:w-auto" aria-hidden="true" />
      {steps.map((step, k) => (
        <li
          key={step.title}
          className={cn('trail__step relative flex min-w-0 flex-col gap-1.5 lg:pr-4', step.current && 'trail__step--now')}
          style={{ '--k': k } as CSSProperties}
          aria-current={step.current ? 'step' : undefined}
        >
          <span className="trail__dot absolute -left-8 top-0 z-[1] size-[15px] rounded-full border border-line-2 bg-bg lg:static lg:mb-3.5" aria-hidden="true" />
          <span className="trail__label meta text-fg-3">{step.label}</span>
          <b className="text-base font-semibold tracking-[-0.01em]">{step.title}</b>
          <small className="text-[13px] leading-snug text-fg-3">{step.detail}</small>
        </li>
      ))}
    </ol>
  )
}
