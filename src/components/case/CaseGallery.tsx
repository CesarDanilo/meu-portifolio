import type { Case } from '../../content/schema'
import { caseGallery, type CaseGalleryKey } from '../../content/media'
import Picture from '../ui/Picture'
import { cn } from '../../lib/cn'

/** Galeria da página do case. Cada imagem abre ampliada em nova aba. */
export default function CaseGallery({ items }: { items: NonNullable<Case['gallery']> }) {
  return (
    <section className="mt-18" aria-labelledby="case-gallery">
      <h2 id="case-gallery" className="meta text-fg-3">Telas do sistema</h2>
      <ul className="mt-5 grid gap-x-6 gap-y-8 md:grid-cols-2">
        {items.map(({ src, alt, caption, wide }) => {
          const data = caseGallery[src as CaseGalleryKey]
          return (
            <li key={src} className={cn('min-w-0', wide && 'md:col-span-2')}>
              <a href={data.img.src} target="_blank" rel="noreferrer" aria-label={`${caption}: abrir imagem ampliada em nova aba`} className="group block">
                <span className="block overflow-hidden border border-line-2 bg-plate">
                  <Picture
                    data={data}
                    alt={alt}
                    sizes={wide ? '(min-width: 1320px) 1224px, 100vw' : '(min-width: 1320px) 600px, (min-width: 768px) 50vw, 100vw'}
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
                  />
                </span>
                <span className="meta mt-2.5 block text-fg-3 transition-colors group-hover:text-fg">{caption}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
