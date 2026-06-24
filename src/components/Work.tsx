import { useLang } from '../i18n/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import ProjectCase from './ProjectCase'

export default function Work() {
  const { t } = useLang()
  const ref = useScrollReveal()

  return (
    <section id="work" style={{ padding: '120px 0 0' }}>
      <div className="container">
        <div ref={ref} className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
            {t.work.eyebrow}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>
            {t.work.title}
          </h2>
        </div>

        {projects.map((project, i) => (
          <ProjectCase key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
