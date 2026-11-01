import { ExternalArrow, GithubMark } from './icons'

interface LinkPillProps {
  href: string
  kind: 'demo' | 'code'
  label?: string
}

/** Link pequeno com ícone em círculo (tabela de outros projetos, TCC). */
export default function LinkPill({ href, kind, label = kind === 'demo' ? 'Demo' : 'Código' }: LinkPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group meta relative inline-flex items-center gap-2 text-fg-2 transition-colors hover:text-fg focus-visible:text-fg"
    >
      <span className="grid size-[26px] place-items-center rounded-full border border-line-2 text-fg transition-[background-color,border-color,color,transform] duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-white group-focus-visible:border-signal group-focus-visible:bg-signal [&>svg]:size-3">
        {kind === 'demo' ? <ExternalArrow /> : <GithubMark />}
      </span>
      {label}
      <span className="absolute -bottom-[3px] left-[34px] right-0 h-px origin-left scale-x-0 bg-signal transition-transform duration-500 ease-out-soft group-hover:scale-x-100" />
    </a>
  )
}
