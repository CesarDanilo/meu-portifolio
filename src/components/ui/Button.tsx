import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  icon: ReactNode
  variant?: 'solid' | 'ghost'
  size?: 'md' | 'lg'
  /** Abre em nova aba (links para fora do site). */
  external?: boolean
  className?: string
}

/** Botão pill com o ícone num círculo à direita (hero, cases, contato). */
export default function ButtonLink({ href, children, icon, variant = 'ghost', size = 'md', external = false, className }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center rounded-full border font-medium transition-colors duration-300',
        size === 'lg' ? 'gap-4 py-2 pl-6 pr-2 text-base' : 'gap-3.5 py-1.5 pl-5 pr-1.5 text-sm',
        variant === 'solid'
          ? 'border-fg bg-fg text-bg hover:border-signal hover:bg-signal hover:text-white'
          : 'border-line-2 text-fg hover:border-signal',
        className,
      )}
    >
      {children}
      <span
        className={cn(
          'grid place-items-center rounded-full transition-[transform,background-color,color] duration-500 ease-out-soft [&>svg]:size-[15px]',
          size === 'lg' ? 'size-[42px]' : 'size-[34px]',
          variant === 'solid'
            ? 'bg-signal text-white group-hover:bg-white group-hover:text-signal'
            : 'bg-plate group-hover:-rotate-12 group-hover:bg-signal group-hover:text-white',
        )}
      >
        {icon}
      </span>
    </a>
  )
}
