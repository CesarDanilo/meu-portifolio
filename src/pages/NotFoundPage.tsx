import { Link } from '@tanstack/react-router'

export default function NotFoundPage() {
  return (
    <main className="mx-auto max-w-[1320px] px-4 pb-24 pt-32 md:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-signal">404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold">Página não encontrada.</h1>
      <Link to="/" className="mt-8 inline-block border-b border-line-2 hover:border-signal hover:text-signal">
        Voltar para a home
      </Link>
    </main>
  )
}
