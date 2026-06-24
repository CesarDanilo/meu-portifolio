import { CONTACT } from '../data/contact'
import { WhatsAppIcon } from './BrandIcons'

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Chamar no WhatsApp"
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 100,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--whatsapp)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        animation: 'pulse-whatsapp 2.5s infinite',
        transition: 'transform 0.2s, background 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.background = 'var(--whatsapp-dark)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'var(--whatsapp)' }}
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}
