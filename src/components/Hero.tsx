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

function HeroBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-2)] px-3.5 py-1 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
      <span className="font-mono text-xs text-[var(--accent)]">{label}</span>
    </div>
  )
}

function HeroButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[15px] no-underline transition-all duration-200'

  const styles =
    variant === 'primary'
      ? 'bg-[var(--accent)] text-[var(--bg)] font-semibold hover:opacity-85'
      : 'border border-[var(--border-2)] text-[var(--text-primary)] bg-[var(--surface)] font-medium hover:border-[var(--accent)]'

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  )
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.06) 0%, transparent 70%)' }}
      />

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text col */}
          <div className="fade-up max-w-[600px]">
            <HeroBadge label={t.hero.role} />

            <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-2 text-[var(--text-primary)]">
              César Danilo
            </h1>

            <p className="font-display text-[clamp(1.5rem,3.5vw,2.2rem)] font-medium leading-tight text-[var(--accent)] mb-6">
              {t.hero.thesis}
            </p>

            <p className="text-[17px] text-[var(--text-muted)] leading-[1.7] mb-10 max-w-[480px]">
              {t.about.bio1}
            </p>

            <div className="flex gap-4 flex-wrap">
              <HeroButton href="#work" variant="primary">
                {t.hero.cta} <ArrowRightIcon />
              </HeroButton>
              <HeroButton href="#contact" variant="secondary">
                {t.hero.ctaSecondary}
              </HeroButton>
            </div>
          </div>

          {/* Terminal col */}
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <Terminal lines={heroTerminalLines} title={t.hero.terminalTitle} delay={400} />
          </div>
        </div>
      </div>
    </section>
  )
}