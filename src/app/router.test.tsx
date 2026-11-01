import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { createAppRouter } from './router'

function renderAt(path: string) {
  const router = createAppRouter(createMemoryHistory({ initialEntries: [path] }))
  render(<RouterProvider router={router} />)
  return router
}

describe('rotas', () => {
  it('renderiza a home em /', async () => {
    renderAt('/')
    expect(await screen.findByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /Produtos web completos/ })).toBeInTheDocument()
  })

  it('renderiza a página do case em /cases/:slug', async () => {
    renderAt('/cases/chat2order')
    expect(await screen.findByTestId('case-title')).toHaveTextContent('chat2order')
  })

  it('mostra a página 404 para rotas desconhecidas', async () => {
    renderAt('/nao-existe')
    expect(await screen.findByText('Página não encontrada.')).toBeInTheDocument()
  })

  it('tem link para pular direto ao conteúdo', async () => {
    renderAt('/')
    expect(await screen.findByRole('link', { name: 'Pular para o conteúdo' })).toHaveAttribute('href', '#conteudo')
  })
})
