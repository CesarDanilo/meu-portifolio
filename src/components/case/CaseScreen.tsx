import type { CSSProperties } from 'react'
import type { Case } from '../../content/schema'
import { caseMedia, type CaseMediaKey } from '../../content/media'
import Picture from '../ui/Picture'
import { cn } from '../../lib/cn'

interface CaseScreenProps {
  item: Case
  /** Mostra barra de navegador e player (ficha aberta e página do case). */
  chrome?: boolean
  sizes: string
  className?: string
  priority?: boolean
}

const host = (c: Case) => (c.links.demo ?? c.links.code).replace('https://', '')

/**
 * Tela do case. Enquanto não há vídeo, o "vídeo" é um tour animado pelo screenshot
 * (ou linhas de terminal, para serviços sem interface). O vídeo real entra aqui depois.
 */
export default function CaseScreen({ item, chrome = false, sizes, className, priority }: CaseScreenProps) {
  const { media } = item

  return (
    <div className={cn('flex min-w-0 flex-col border border-line-2 bg-plate', className)} style={{ viewTransitionName: `case-${item.slug}` } as CSSProperties}>
      {chrome && (
        <div className="case-open-only meta flex items-center gap-2.5 border-b border-line px-3 py-2 text-[10px] text-fg-3" aria-hidden="true">
          <i className="size-[7px] rounded-full border border-line-2" />
          <i className="size-[7px] rounded-full border border-line-2" />
          <i className="size-[7px] rounded-full border border-line-2" />
          <span className="ml-1.5 truncate normal-case tracking-normal">{host(item)}</span>
        </div>
      )}

      {media.kind === 'image' ? (
        <div className="screen-view relative aspect-[16/10] max-w-full overflow-hidden">
          <Picture
            data={caseMedia[media.src as CaseMediaKey]}
            alt={media.alt}
            sizes={sizes}
            priority={priority}
            className="block size-full object-cover object-top"
          />
          {chrome && (
            <>
              <span className="screen-cursor case-open-only absolute left-[30%] top-[40%] size-3.5 rounded-full border-[1.5px] border-white mix-blend-difference" aria-hidden="true" />
              <span className="case-open-only meta absolute bottom-2.5 left-2.5 bg-black/70 px-2 py-1 text-[10px] text-white">Prévia · vídeo em breve</span>
            </>
          )}
        </div>
      ) : (
        <div className="screen-terminal flex aspect-[16/10] max-w-full items-center overflow-hidden">
          <pre className="m-0 whitespace-pre-wrap break-words px-5 py-4 font-mono text-[clamp(10px,1vw,13px)] leading-[1.9]" aria-label={`Exemplo de chamadas da API do ${item.name}`}>
            {media.lines.map((line, l) => (
              <span
                key={l}
                className={cn('block', line.startsWith('$') ? 'text-fg' : l === media.lines.length - 1 ? 'text-signal' : 'text-fg-3')}
                style={{ '--l': l } as CSSProperties}
              >
                {line}
              </span>
            ))}
          </pre>
        </div>
      )}

      {chrome && (
        <div className="case-open-only meta flex items-center gap-2.5 border-t border-line px-3 py-2 text-[10px] text-fg-3" aria-hidden="true">
          <span>▶</span>
          <span className="relative h-px flex-1 bg-line-2"><span className="screen-progress absolute inset-y-0 left-0 w-0 bg-signal" /></span>
          <span>0:12</span>
        </div>
      )}
    </div>
  )
}
