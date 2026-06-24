import { useRef } from 'react'
import { useEffect } from 'react'
import { useLang } from '../i18n/LangContext'
import type { Project } from '../data/projects'
import Terminal from './Terminal'
import { ExternalLinkIcon } from './BrandIcons'

interface Props { project: Project; index: number }

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function ProjectCase({ project, index }: Props) {
  const { t, lang } = useLang()
  const ref = useReveal()
  const content = lang === 'pt' ? project.pt : project.en
  const reversed = index % 2 !== 0

  return (
    <article ref={ref} className="reveal" style={{ padding: '64px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 40, alignItems: 'start',
      }}>
        {/* Text side */}
        <div style={{ order: reversed ? 2 : 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
              color: 'var(--accent)', border: '1px solid var(--accent)',
              borderRadius: 4, padding: '2px 8px',
            }}>
              {project.status === 'production' ? t.work.statusProduction : t.work.statusMvp}
            </span>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.02em',
          }}>
            {content.title}
          </h3>

          <p style={{ fontSize: 15, color: 'var(--accent)', fontWeight: 500, margin: '0 0 28px', lineHeight: 1.5 }}>
            {content.tagline}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {project.tech.map(tech => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                borderRadius: 4, padding: '3px 10px', color: 'var(--text-muted)',
              }}>{tech}</span>
            ))}
          </div>

          {[
            { label: t.work.problem, text: content.problem, color: '#F87171' },
            { label: t.work.decision, text: content.decision, color: '#FBBF24' },
            { label: t.work.result, text: content.result, color: 'var(--accent)' },
          ].map(item => (
            <div key={item.label} style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: item.color, letterSpacing: '0.08em', marginBottom: 6, fontFamily: 'var(--font-mono)' }}>
                {item.label.toUpperCase()}
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>{item.text}</p>
            </div>
          ))}

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8,
              padding: '10px 20px', border: '1px solid var(--border-2)', borderRadius: 8,
              color: 'var(--text-primary)', textDecoration: 'none',
              fontSize: 14, fontWeight: 500, background: 'var(--surface)', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-primary)' }}
          >
            {t.work.live} <ExternalLinkIcon />
          </a>
        </div>

        {/* Visual side */}
        <div style={{ order: reversed ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)',
            background: 'var(--surface)', aspectRatio: '16/10', position: 'relative',
          }}>
            <img
              src={project.image}
              alt={content.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => {
                const el = e.currentTarget
                el.style.display = 'none'
                const p = el.parentElement
                if (p) p.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:200px;gap:12px;color:var(--text-faint)"><span style="font-family:var(--font-mono);font-size:13px;color:var(--accent)">$ open ${project.id}</span><span style="font-size:12px">adicione o screenshot em public/screenshots/${project.id}.png</span></div>`
              }}
            />
          </div>
          <Terminal lines={project.terminal} title={`${project.id}.log`} delay={200} />
        </div>
      </div>
    </article>
  )
}
