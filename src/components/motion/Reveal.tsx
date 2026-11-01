import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { useReducedMotion } from '../../hooks/useMediaQuery'
import { cn } from '../../lib/cn'

interface RevealProps {
  children: ReactNode
  /** `up`: sobe e aparece. `mask`: revela de baixo para cima. */
  variant?: 'up' | 'mask'
  /** Posição na cascata do grupo (atraso de 90 ms por passo). */
  index?: number
  as?: ElementType
  className?: string
}

/*
 * O elemento observado é sempre o invólucro externo. Um elemento recortado por clip-path
 * tem área visível zero e nunca "entra na tela" para o IntersectionObserver
 * (bug encontrado no protótipo v15).
 */
export default function Reveal({ children, variant = 'up', index = 0, as: Tag = 'div', className }: RevealProps) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInView<HTMLElement>({ skip: reduced })
  const style = { '--reveal-i': index } as CSSProperties

  return (
    <Tag ref={ref} className={cn(className, inView && 'is-revealed')} data-revealed={inView || undefined}>
      <div className={variant === 'mask' ? 'reveal-mask' : 'reveal-up'} style={style}>
        {children}
      </div>
    </Tag>
  )
}
