import { useLang } from '../i18n/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function StatsBar() {
  const { t } = useLang()
  const ref = useScrollReveal()

  const stats = [
    { value: t.stats.projects, label: t.stats.projectsLabel, isText: false },
    { value: t.stats.experience, label: t.stats.experienceLabel, isText: false },
    { value: t.stats.focus, label: t.stats.focusLabel, isText: true },
  ]

  return (
    <section ref={ref} className="reveal" style={{ padding: '40px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: s.isText ? 'var(--font-display)' : 'var(--font-display)',
                fontSize: s.isText ? 18 : 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: s.isText ? 600 : 700,
                color: 'var(--accent)',
                lineHeight: s.isText ? 1.3 : 1,
                marginBottom: 8,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
