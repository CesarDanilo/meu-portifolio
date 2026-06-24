import { useLang } from '../i18n/LangContext'
import { CONTACT } from '../data/contact'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>cd/</a>
          <span style={{ fontSize: 13, color: 'var(--text-faint)', marginLeft: 16 }}>© {year} César Danilo. {t.footer.rights}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 12, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }} />
            {t.footer.availableFor}
          </span>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <GithubIcon size={18} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
