import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { SECTIONS } from './sections'

const pad = (n: number) => String(n + 1).padStart(2, '0')

/** Barra fixa: marca, índice das seções (desktop), status e menu de tela cheia (mobile). */
export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  const firstLink = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    const trigger = button.current
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    firstLink.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      trigger?.focus()
    }
  }, [open])

  // O menu fica fora do <header>: o backdrop-filter da barra prenderia um filho position:fixed dentro dela.
  return (
    <>
      <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="wrap flex h-14 items-center justify-between gap-4">
          <Link to="/" className="font-mono text-[13px] font-medium">
            CD<span className="text-signal-text">/</span>
            <span className="sr-only"> César Danilo, início</span>
          </Link>

          <nav aria-label="Seções" className="hidden gap-7 lg:flex">
            {SECTIONS.map((s, i) => (
              <Link key={s.id} to="/" hash={s.id} className="meta inline-flex gap-1.5 text-fg-2 transition-colors hover:text-fg">
                <span className="text-fg-3">{pad(i)}</span>
                {s.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <span className="meta inline-flex items-center gap-2 text-fg-3">
              <span className="status-dot size-1.5 rounded-full bg-signal" aria-hidden="true" />
              Disponível
            </span>
            <button
              ref={button}
              type="button"
              className="meta rounded-full border border-line-2 px-3.5 py-2 text-fg transition-colors hover:border-signal lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen(o => !o)}
            >
              {open ? 'Fechar' : 'Menu'}
            </button>
          </div>
        </div>

        <span className="scroll-progress absolute -bottom-px left-0 h-px w-full bg-signal" aria-hidden="true" />
      </header>

      <nav
        id="menu-mobile"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-40 overflow-y-auto bg-bg lg:hidden"
      >
        <ol className="wrap flex flex-col border-t border-line pt-6">
          {SECTIONS.map((s, i) => (
            <li key={s.id} className="border-b border-line">
              <Link
                ref={i === 0 ? firstLink : undefined}
                to="/"
                hash={s.id}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-5 text-[clamp(32px,9vw,48px)] font-semibold tracking-[-0.03em] hover:text-signal-text"
              >
                <span className="meta text-signal-text">{pad(i)}</span>
                {s.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
