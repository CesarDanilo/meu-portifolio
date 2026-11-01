interface PictureData {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

interface PictureProps {
  data: PictureData
  alt: string
  sizes: string
  className?: string
  /** Imagem principal da primeira dobra: carrega cedo, sem lazy. */
  priority?: boolean
}

const ORDER = ['avif', 'webp']

/** <picture> com AVIF/WebP e fallback, gerado pelo vite-imagetools. */
export default function Picture({ data, alt, sizes, className, priority = false }: PictureProps) {
  return (
    <picture>
      {ORDER.filter(f => data.sources[f]).map(f => (
        <source key={f} type={`image/${f}`} srcSet={data.sources[f]} sizes={sizes} />
      ))}
      <img
        src={data.img.src}
        width={data.img.w}
        height={data.img.h}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}
