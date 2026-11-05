import { useEffect, useRef } from 'react'
import type { CSSProperties, Ref } from 'react'
import type { Case } from '../../content/schema'
import { caseMedia, caseVideos, type CaseMediaKey, type CaseVideoKey } from '../../content/media'
import Picture from '../ui/Picture'
import { cn } from '../../lib/cn'

interface CaseScreenProps {
  item: Case
  /** Barra de navegador, player e efeitos de hover (fichas da home). */
  chrome?: boolean
  sizes: string
  className?: string
  priority?: boolean
  /** Caixa da imagem, usada pelo tour animado da ficha. */
  viewRef?: Ref<HTMLDivElement>
  /** Ficha aberta: toca a prévia do vídeo, quando o case tem uma. */
  playing?: boolean
}

const host = (c: Case) => (c.links.demo ?? c.links.code).replace('https://', '')

/**
 * Tela do case. Com vídeo, a página mostra o player e a ficha toca a prévia no hover.
 * Sem vídeo, o "vídeo" é um tour pelo screenshot (ou linhas de terminal, para serviços sem interface).
 * Barra e player estão sempre presentes, para a altura nunca mudar no hover.
 */
export default function CaseScreen({ item, chrome = false, sizes, className, priority, viewRef, playing = false }: CaseScreenProps) {
  const { media, video } = item
  const files = video && caseVideos[video.src as CaseVideoKey]
  const preview = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = preview.current
    if (!el) return
    if (playing) {
      void el.play().catch(() => {}) // a prévia é decorativa: se o navegador recusar, fica a imagem
    } else if (!el.paused) {
      el.pause()
      el.currentTime = 0
    }
  }, [playing])

  return (
    <div className={cn('flex min-w-0 flex-col border border-line-2 bg-plate', className)} style={{ viewTransitionName: `case-${item.slug}` } as CSSProperties}>
      {chrome && (
        <div className="meta flex items-center gap-2.5 border-b border-line px-3 py-2 text-[10px] text-fg-3" aria-hidden="true">
          <i className="size-[7px] rounded-full border border-line-2" />
          <i className="size-[7px] rounded-full border border-line-2" />
          <i className="size-[7px] rounded-full border border-line-2" />
          <span className="ml-1.5 truncate normal-case tracking-normal">{host(item)}</span>
        </div>
      )}

      {!chrome && video && files ? (
        <div className="max-w-full">
          <video
            className="block aspect-video w-full bg-black"
            src={files.full}
            poster={files.poster}
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={video.label}
            data-testid="case-video"
          />
        </div>
      ) : media.kind === 'image' ? (
        <div className="relative aspect-[16/10] max-w-full overflow-hidden">
          <div ref={viewRef} className="size-full will-change-transform">
            <Picture
              data={caseMedia[media.src as CaseMediaKey]}
              alt={media.alt}
              sizes={sizes}
              priority={priority}
              className="block size-full object-cover object-top"
            />
          </div>
          {chrome && (
            <>
              <span className="screen-shade pointer-events-none absolute inset-0" aria-hidden="true" />
              {files ? (
                <video ref={preview} className="case-preview absolute inset-0 size-full object-cover object-top" src={files.preview} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />
              ) : (
                <span className="screen-hover-only pointer-events-none absolute inset-0" aria-hidden="true">
                  <span className="screen-cursor absolute inset-0 block">
                    <span className="block size-3.5 rounded-full border-[1.5px] border-white mix-blend-difference" />
                  </span>
                </span>
              )}
              <span className="screen-hover-only meta absolute bottom-2.5 left-2.5 bg-black/70 px-2 py-1 text-[10px] text-white">{video ? 'Prévia do vídeo' : 'Prévia · vídeo em breve'}</span>
            </>
          )}
        </div>
      ) : (
        <div className="screen-terminal flex aspect-[16/10] max-w-full items-center overflow-hidden bg-[#070707]">
          <pre className="m-0 whitespace-pre-wrap break-words px-5 py-4 font-mono text-[clamp(10px,1vw,13px)] leading-[1.9]" aria-label={`Exemplo de chamadas da API do ${item.name}`}>
            {media.lines.map((line, l) => (
              <span
                key={l}
                className={cn('block', line.startsWith('$') ? 'text-fg' : l === media.lines.length - 1 ? 'text-signal-text' : 'text-fg-3')}
                style={{ '--l': l } as CSSProperties}
              >
                {line}
              </span>
            ))}
          </pre>
        </div>
      )}

      {chrome && (
        <div className="meta flex items-center gap-2.5 border-t border-line px-3 py-2 text-[10px] text-fg-3" aria-hidden="true">
          <span>▶</span>
          <span className="relative h-px flex-1 overflow-hidden bg-line-2">
            <span className="screen-hover-only absolute inset-0 block">
              <span className="screen-progress block size-full origin-left bg-signal" style={video ? { animationDuration: `${video.previewSeconds}s` } : undefined} />
            </span>
          </span>
          <span>{video?.duration ?? '0:12'}</span>
        </div>
      )}
    </div>
  )
}
