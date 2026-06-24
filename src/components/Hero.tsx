import { useLang } from '../i18n/LangContext'
import Terminal from './Terminal'
import { ArrowRightIcon } from './BrandIcons'

const heroTerminalLines = [
  '$ whoami',
  '→ César Danilo — Full Stack Developer',
  '$ ls projects/',
  '→ chat2order/  mei-finance/  clinica/',
  '$ cat stack.txt',
  '→ React · TypeScript · Node.js · PostgreSQL',
  '→ Docker · OpenAI · TanStack Router · Zod',
  '$ ./status',
  '→ disponível para oportunidades ✓',
]

export default function Hero() {
  const { t } = useLang()

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(94,234,212,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
          {/* Text col */}
          <div className="fade-up" style={{ maxWidth: 600 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid var(--border-2)', borderRadius: 20, padding: '4px 14px',
              marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)' }}>{t.hero.role}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em',
              margin: '0 0 8px', color: 'var(--text-primary)',
            }}>
              César Danilo
            </h1>

            <p style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              fontWeight: 500, lineHeight: 1.2, color: 'var(--accent)', margin: '0 0 24px',
            }}>
              {t.hero.thesis}
            </p>

            <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 480 }}>
              {t.about.bio1}
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#work" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--accent)', color: 'var(--bg)',
                padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 15,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                {t.hero.cta} <ArrowRightIcon />
              </a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid var(--border-2)', color: 'var(--text-primary)',
                padding: '12px 24px', borderRadius: 8, fontWeight: 500, fontSize: 15,
                textDecoration: 'none', background: 'var(--surface)', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-2)')}>
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Terminal col — shows below on mobile, right on desktop */}
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <Terminal lines={heroTerminalLines} title={t.hero.terminalTitle} delay={400} />
          </div>
        </div>
      </div>
    </section>
  )
}
