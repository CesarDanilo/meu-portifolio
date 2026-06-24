import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(11,14,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
          cd<span style={{ color: 'var(--text-muted)' }}>/</span>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[
            { href: '#work', label: t.nav.work },
            { href: '#stack', label: t.nav.stack },
            { href: '#about', label: t.nav.about },
            { href: '#contact', label: t.nav.contact },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              style={{ fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggle}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, padding: '4px 10px',
              border: '1px solid var(--border-2)', borderRadius: 6,
              background: 'var(--surface)', color: 'var(--text-muted)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>
      </div>
    </header>
  )
}
