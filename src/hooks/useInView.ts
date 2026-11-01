import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Para de observar depois da primeira vez que entra na tela. */
  once?: boolean
  rootMargin?: string
  threshold?: number
  /** Quando true, considera visível sem observar (ex.: movimento reduzido). */
  skip?: boolean
}

export function useInView<T extends Element>({ once = true, rootMargin = '0px 0px -12% 0px', threshold = 0.05, skip = false }: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(skip)

  useEffect(() => {
    if (skip) { setInView(true); return }
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (once) observer.disconnect()
      } else if (!once) {
        setInView(false)
      }
    }, { rootMargin, threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold, skip])

  return [ref, inView] as const
}
