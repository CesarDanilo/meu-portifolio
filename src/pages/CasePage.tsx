import { useEffect } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import { cases } from '../content/cases'
import ButtonLink from '../components/ui/Button'
import TypeTag from '../components/ui/TypeTag'
import CaseScreen from '../components/case/CaseScreen'
import { ExternalArrow, GithubMark } from '../components/ui/icons'

export default function CasePage() {
  const { slug } = useParams({ from: '/cases/$slug' })
  // o slug já foi validado no beforeLoad da rota
  const index = cases.findIndex(c => c.slug === slug)
  const item = cases[index]
  const next = cases[(index + 1) % cases.length]

  useEffect(() => {
    document.title = `${item.name} · César Danilo`
    return () => { document.title = 'César Danilo · Desenvolvedor Full Stack' }
  }, [item.name])

  const meta: [string, string][] = [['Tipo', item.type], ['Natureza', item.kind], ['Período', item.period], ['Escopo', item.scope]]

  return (
    <main className="wrap pb-24 pt-10">
      <Link to="/" hash="cases" className="meta inline-flex gap-2.5 text-fg-3 transition-colors hover:text-fg">← Todos os cases</Link>

      <header className="mt-10 grid items-end gap-6 lg:grid-cols-12">
        <div className="flex min-w-0 flex-col gap-4 lg:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <TypeTag type={item.type} />
            <span className="meta text-fg-3">[ Case {String(index + 1).padStart(2, '0')} ] {item.kind}</span>
          </div>
          <h1 className="condensed text-[clamp(52px,9vw,140px)] leading-[0.88] tracking-[-0.05em]" data-testid="case-title">{item.name}</h1>
        </div>
        <p className="text-[17px] text-fg-2 lg:col-span-4">{item.pitch}</p>
      </header>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {item.links.demo && (
          <ButtonLink href={item.links.demo} external variant="solid" size="lg" icon={<ExternalArrow />}>Abrir a demo</ButtonLink>
        )}
        <ButtonLink href={item.links.code} external size="lg" icon={<GithubMark />}>Código no GitHub</ButtonLink>
        {item.links.note && <span className="meta ml-1 text-fg-3">{item.links.note}</span>}
      </div>

      <dl className="mt-10 grid grid-cols-2 border-y border-line lg:grid-cols-4">
        {meta.map(([k, v]) => (
          <div key={k} className="flex min-w-0 flex-col gap-1.5 py-3.5 pr-4">
            <dt className="meta text-fg-3">{k}</dt>
            <dd className="text-sm font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <CaseScreen item={item} className="mt-10" sizes="(min-width: 1320px) 1224px, 100vw" priority />

      <div className="mt-18 grid gap-x-6 gap-y-4 lg:grid-cols-12 lg:gap-y-14">
        <Block label="Problema"><p>{item.problem}</p></Block>
        <Block label="Solução"><p>{item.solution}</p></Block>
        <Block label="Arquitetura">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs" aria-label="Fluxo da arquitetura">
            {item.flow.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                {i > 0 && <span className="text-signal-text" aria-hidden="true">→</span>}
                <span className="border border-line-2 bg-plate px-3 py-2 text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </Block>
        <Block label="Desafios técnicos">
          <ul className="flex flex-col gap-3">
            {item.challenges.map(c => (
              <li key={c.title} className="relative pl-5 before:absolute before:left-0 before:font-mono before:text-signal-text before:content-['+']">
                <strong className="font-medium text-fg">{c.title}:</strong> {c.body}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Stack"><p className="meta text-fg">{item.stack.join(' · ')}</p></Block>
      </div>

      <Link
        to="/cases/$slug"
        params={{ slug: next.slug }}
        className="group mt-24 flex items-end justify-between gap-4 border-t border-line pt-6"
      >
        <div>
          <span className="meta text-fg-3">Próximo case</span>
          <h2 className="text-[clamp(32px,5vw,72px)] font-semibold leading-none tracking-[-0.04em] transition-colors group-hover:text-signal-text">{next.name}</h2>
        </div>
        <span className="meta text-fg-3">{String(((index + 1) % cases.length) + 1).padStart(2, '0')} →</span>
      </Link>
    </main>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="meta pt-1 text-fg-3 lg:col-span-3">{label}</h2>
      <div className="mb-8 flex min-w-0 flex-col gap-3.5 text-[17px] text-fg-2 lg:col-span-7 lg:col-start-4 lg:mb-0">{children}</div>
    </>
  )
}
