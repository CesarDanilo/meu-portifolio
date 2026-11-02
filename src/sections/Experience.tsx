import { education, jobs } from '../content/experience'
import type { Role } from '../content/schema'
import { formatDuration, formatMonthYear, monthsInPeriod, today, totalMonths } from '../lib/dates'
import { cn } from '../lib/cn'
import SectionHead from '../components/ui/SectionHead'
import LinkPill from '../components/ui/LinkPill'
import Reveal from '../components/motion/Reveal'
import Timeline from '../components/experience/Timeline'

const NOW = today()

function Duration({ role }: { role: Pick<Role, 'from' | 'to'> & { track?: Role['track'] } }) {
  return (
    <em
      className={cn(
        'meta self-start border px-2 py-1 not-italic transition-colors duration-300',
        role.track === 'dev' || !role.track ? 'border-signal text-signal-text group-hover:bg-signal group-hover:text-white' : 'border-line-2 text-fg-3',
      )}
    >
      {formatDuration(monthsInPeriod(role, NOW))}
    </em>
  )
}

function Dates({ from, to }: Pick<Role, 'from' | 'to'>) {
  return (
    <span className="flex flex-wrap items-baseline gap-2 font-mono text-lg tabular-nums lg:flex-col lg:gap-1">
      <b className="font-medium">{formatMonthYear(from)}</b>
      <span className="text-sm text-fg-3">→ <b className="font-medium text-fg">{to ? formatMonthYear(to) : 'atual'}</b></span>
    </span>
  )
}

const badge = (r: Role) => [r.track === 'dev' && 'Dev', r.label].filter(Boolean).join(' · ')

export default function Experience() {
  const roles = jobs.flatMap(j => j.roles)
  const dev = roles.filter(r => r.track === 'dev')
  const support = roles.filter(r => r.track === 'support')
  const companies = jobs.filter(j => j.roles.some(r => r.track !== 'own')).length

  return (
    <section id="experiencia" className="scroll-mt-14 border-b border-line py-16 lg:py-24">
      <div className="wrap">
        <SectionHead index={2} total={6} label="Experiência" title={<>Código em <b>produção</b>.</>} aside="Datas e tempo de cada cargo já calculados." />

        <Reveal>
          <dl className="grid grid-cols-1 border-y border-line md:grid-cols-[2fr_1fr_1fr]">
            <div className="flex flex-col gap-1.5 py-5 pr-5">
              <dt className="meta order-1 text-fg-3">Total em tecnologia</dt>
              <dd className="condensed order-2 text-[clamp(36px,5vw,68px)] leading-none">{formatDuration(totalMonths([...dev, ...support], NOW))}</dd>
              <dd className="meta order-3 text-fg-3">
                {formatDuration(totalMonths(dev, NOW))} em desenvolvimento · {formatDuration(totalMonths(support, NOW))} em suporte e SQL · períodos em parte simultâneos
              </dd>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-line py-5 md:border-l md:border-t-0 md:pl-5">
              <dt className="meta text-fg-3">Empresas</dt>
              <dd className="text-[clamp(26px,3vw,40px)] font-semibold leading-none tracking-[-0.03em]">{companies}</dd>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-line py-5 md:border-l md:border-t-0 md:pl-5">
              <dt className="meta text-fg-3">Formação</dt>
              <dd className="text-[clamp(26px,3vw,40px)] font-semibold leading-none tracking-[-0.03em]">Eng. de Software</dd>
            </div>
          </dl>
        </Reveal>

        <div className="mt-10"><Timeline jobs={jobs} now={NOW} /></div>

        <ol className="mt-12 border-t border-line">
          {jobs.map((job, i) => {
            const muted = job.roles.every(r => r.track !== 'dev')
            return (
              <Reveal key={job.company} as="li" index={i}>
                <article className={cn('job group relative grid gap-3 border-b border-line px-4 py-7 transition-colors duration-400 hover:bg-plate lg:grid-cols-[200px_1fr] lg:gap-8', muted && 'job--muted')}>
                  <header className="flex flex-col gap-1.5 pt-1">
                    <span className="meta text-fg-3">{job.roles.length > 1 ? `${job.roles.length} funções` : 'Empresa'}</span>
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em]">{job.company}</h3>
                  </header>
                  <div className="flex flex-col">
                    {job.roles.map((role, k) => (
                      <div key={role.title} className={cn('grid gap-3 pb-5 lg:grid-cols-[170px_1fr_auto] lg:gap-6', k > 0 && 'border-t border-dashed border-line-2 pt-5')}>
                        <div className="flex flex-col gap-2">
                          <Dates from={role.from} to={role.to} />
                          <Duration role={role} />
                        </div>
                        <div>
                          <h4 className="text-[clamp(18px,1.8vw,22px)] font-semibold leading-tight tracking-[-0.02em] transition-transform duration-500 ease-out-soft group-hover:translate-x-1.5">{role.title}</h4>
                          <p className="mt-2 max-w-[62ch] text-fg-2">{role.description}</p>
                        </div>
                        <span className={cn('meta self-start text-[10px]', role.track === 'dev' ? 'text-signal-text' : 'text-fg-3')}>{badge(role)}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ol>

        <Reveal className="mt-16">
          <div className="grid gap-6 lg:grid-cols-12">
          <span className="meta pt-1.5 text-signal-text lg:col-span-3">Formação</span>
          <div className="grid gap-8 border-t border-line pt-6 lg:col-span-9 lg:grid-cols-[200px_1fr]">
            <div className="flex flex-col gap-2">
              <Dates from={education.from} to={education.to} />
              <Duration role={education} />
            </div>
            <div>
              <h3 className="text-[clamp(20px,2.2vw,28px)] font-semibold leading-tight tracking-[-0.02em]">
                {education.degree} <span className="font-normal text-fg-2">· {education.school}</span>
              </h3>
              <div className="mt-4 flex flex-col items-start gap-2.5 border border-line-2 bg-plate px-5 py-4">
                <span className="meta text-fg-3">TCC</span>
                <p className="text-fg-2"><strong className="font-medium text-fg">{education.thesis.title}:</strong> {education.thesis.description}</p>
                <LinkPill href={education.thesis.code} kind="code" />
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
