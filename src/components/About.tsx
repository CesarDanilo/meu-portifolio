import { useLang } from '../i18n/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const { t } = useLang()
  const ref = useScrollReveal()

  return (
    <section id="about" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div ref={ref} className="reveal" style={{ maxWidth: 640 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
            {t.about.eyebrow}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 32px' }}>
            {t.about.title}
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 20px' }}>{t.about.bio1}</p>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 40px' }}>{t.about.bio2}</p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', background: 'var(--accent-dim)', border: '1px solid var(--accent)', borderRadius: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            <span style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>
              {t.about.availableLabel}: {t.about.availableText}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
