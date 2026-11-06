import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { createAppRouter } from '../app/router'
import { cases } from '../content/cases'

function renderAt(path: string) {
  render(<RouterProvider router={createAppRouter(createMemoryHistory({ initialEntries: [path] }))} />)
}

describe('página do case', () => {
  it.each(cases.map(c => [c.slug, c] as const))('%s: título, tipo e links externos em nova aba', async (slug, item) => {
    renderAt(`/cases/${slug}`)
    expect(await screen.findByTestId('case-title')).toHaveTextContent(item.name)
    expect(screen.getAllByText(item.type).length).toBeGreaterThan(0)

    const code = screen.getByRole('link', { name: /Código no GitHub/ })
    expect(code).toHaveAttribute('href', item.links.code)
    expect(code).toHaveAttribute('target', '_blank')
    if (item.links.demo) expect(screen.getByRole('link', { name: /Abrir a demo/ })).toHaveAttribute('href', item.links.demo)
    else expect(screen.queryByRole('link', { name: /Abrir a demo/ })).toBeNull()
  })

  it('leva ao próximo case e volta ao primeiro no fim', async () => {
    renderAt(`/cases/${cases.at(-1)!.slug}`)
    const next = await screen.findByRole('link', { name: /Próximo case/ })
    expect(next).toHaveAttribute('href', `/cases/${cases[0].slug}`)
  })

  it('slug desconhecido mostra 404', async () => {
    renderAt('/cases/nao-existe')
    expect(await screen.findByText('Página não encontrada.')).toBeInTheDocument()
  })

  it('a home lista todos os cases, cada um levando à sua página', async () => {
    renderAt('/')
    for (const c of cases) {
      expect(await screen.findByRole('link', { name: new RegExp(c.name) })).toHaveAttribute('href', `/cases/${c.slug}`)
    }
  })
})
