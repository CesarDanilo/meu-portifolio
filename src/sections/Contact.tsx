import { profile } from '../content/profile'
import SectionHead from '../components/ui/SectionHead'
import CopyButton from '../components/ui/CopyButton'
import Reveal from '../components/motion/Reveal'

export default function Contact() {
  const { contact } = profile
  const channels = [
    { label: 'E-mail', value: contact.email, href: `mailto:${contact.email}`, copy: true },
    { label: 'WhatsApp', value: contact.whatsapp.display, href: contact.whatsapp.url, copy: true },
    { label: 'GitHub', value: 'CesarDanilo', href: contact.github, copy: false },
    { label: 'LinkedIn', value: 'César Danilo', href: contact.linkedin, copy: false },
  ]

  return (
    <section id="contato" className="scroll-mt-14 pb-24 pt-16 lg:pt-24">
      <div className="wrap">
        <SectionHead index={6} total={6} label="Contato" title={<>Vamos <b>conversar</b>.</>} />
        <Reveal>
          <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(ch => (
              <li key={ch.label} className="flex min-w-0 flex-col gap-2.5 border-b border-line py-5 pr-5">
                <span className="meta text-fg-3">{ch.label}</span>
                <a
                  href={ch.href}
                  {...(ch.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="break-all text-[15px] font-medium transition-colors hover:text-signal-text focus-visible:text-signal-text"
                >
                  {ch.value}
                </a>
                {ch.copy && <CopyButton text={ch.value} label={ch.label} />}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
