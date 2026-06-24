import { useLang } from '../i18n/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CONTACT } from '../data/contact'
import { GithubIcon, LinkedinIcon, WhatsAppIcon, EmailIcon } from './BrandIcons'

export default function Contact() {
  const { t } = useLang()
  const ref = useScrollReveal()

  const links = [
    { icon: <WhatsAppIcon size={22} />, label: t.contact.whatsapp, value: '+55 67 99161-9198', href: CONTACT.whatsappUrl, accent: true },
    { icon: <EmailIcon size={22} />, label: t.contact.email, value: CONTACT.email, href: `mailto:${CONTACT.email}`, accent: false },
    { icon: <GithubIcon size={22} />, label: t.contact.github, value: 'github.com/cesardanilo', href: CONTACT.github, accent: false },
    { icon: <LinkedinIcon size={22} />, label: t.contact.linkedin, value: 'linkedin.com/in/cesardanilo', href: CONTACT.linkedin, accent: false },
  ]

  return (
    <section id="contact" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>
            {t.contact.eyebrow}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            {t.contact.title}
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', margin: '0 0 48px', maxWidth: 480 }}>
            {t.contact.subtitle}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, maxWidth: 800 }}>
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px',
                  background: link.accent ? 'var(--accent-dim)' : 'var(--surface)',
                  border: `1px solid ${link.accent ? 'var(--accent)' : 'var(--border)'}`,
                  borderRadius: 10, textDecoration: 'none',
                  color: link.accent ? 'var(--accent)' : 'var(--text-primary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = link.accent ? 'var(--accent)' : 'var(--border)'; e.currentTarget.style.color = link.accent ? 'var(--accent)' : 'var(--text-primary)' }}
              >
                <span style={{ flexShrink: 0 }}>{link.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>{link.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Big WhatsApp CTA */}
          <div style={{ marginTop: 48 }}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'var(--whatsapp)', color: '#fff',
                padding: '14px 28px', borderRadius: 10, fontWeight: 600, fontSize: 16,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <WhatsAppIcon size={20} /> {t.contact.ctaWhatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
