import { Link, useParams } from '@tanstack/react-router'

// Página de case: o conteúdo real entra na fase 6, a partir de content/cases.ts.
export default function CasePage() {
  const { slug } = useParams({ from: '/cases/$slug' })

  return (
    <main className="mx-auto max-w-[1320px] px-4 pb-24 pt-32 md:px-12">
      <Link to="/" hash="work" className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-3 hover:text-fg">
        ← Todos os cases
      </Link>
      <h1 className="mt-10 font-display text-5xl font-extrabold uppercase" data-testid="case-title">
        {slug}
      </h1>
    </main>
  )
}
