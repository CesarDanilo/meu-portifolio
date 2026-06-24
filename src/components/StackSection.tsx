import { useLang } from '../i18n/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stackGroups } from '../data/stack'

export default function StackSection() {
  const { t } = useLang()
  const ref = useScrollReveal()

  return (
    <section id="stack" style={{ padding: '120px 0' }}>
      <div className="container">
        <div ref={ref} className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
            {t.stack.eyebrow}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>
            {t.stack.title}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {stackGroups.map(group => (
            <div key={group.category} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: 24,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginBottom: 20, letterSpacing: '0.08em' }}>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    fontSize: 13, fontWeight: 500,
                    background: 'var(--surface-2)', border: '1px solid var(--border)',
                    borderRadius: 6, padding: '5px 12px', color: 'var(--text-primary)',
                    transition: 'border-color 0.2s, color 0.2s', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
