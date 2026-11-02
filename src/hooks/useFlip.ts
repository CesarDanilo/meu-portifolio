import { useCallback, useRef } from 'react'

const EASE = 'cubic-bezier(0.2, 0.7, 0.1, 1)'

/**
 * Anima a troca de layout de um bloco (técnica FLIP): mede as partes, aplica a mudança,
 * mede de novo e anima de onde estavam para onde ficaram. Partes marcadas com
 * `data-flip="scale"` também animam o tamanho; as demais só a posição (texto não deforma).
 */
export function useFlip<T extends HTMLElement>(duration = 700) {
  const ref = useRef<T>(null)

  const flip = useCallback((change: () => void) => {
    const root = ref.current
    if (!root || typeof root.animate !== 'function') { change(); return }
    const parts = [...root.querySelectorAll<HTMLElement>('[data-flip]')]
    ;[root, ...parts].forEach(el => el.getAnimations().forEach(a => a.cancel()))

    const before = parts.map(el => el.getBoundingClientRect())
    const h0 = root.getBoundingClientRect().height
    change()
    // a mudança vem do React: mede depois do próximo commit
    requestAnimationFrame(() => {
      const h1 = root.getBoundingClientRect().height
      parts.forEach((el, i) => {
        const a = before[i], b = el.getBoundingClientRect()
        if (!b.width || !b.height) return
        const scale = el.dataset.flip === 'scale' ? ` scale(${a.width / b.width}, ${a.height / b.height})` : ''
        el.animate(
          [{ transformOrigin: 'top left', transform: `translate(${a.left - b.left}px, ${a.top - b.top}px)${scale}` }, { transformOrigin: 'top left', transform: 'none' }],
          { duration, easing: EASE },
        )
      })
      root.animate([{ height: `${h0}px` }, { height: `${h1}px` }], { duration, easing: EASE })
    })
  }, [duration])

  return [ref, flip] as const
}
