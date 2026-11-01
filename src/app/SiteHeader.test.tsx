import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { createAppRouter } from './router'
import { SECTIONS } from './sections'

async function renderHome() {
  const router = createAppRouter(createMemoryHistory({ initialEntries: ['/'] }))
  render(<RouterProvider router={router} />)
  return screen.findByRole('button', { name: 'Menu' })
}

describe('SiteHeader', () => {
  it('lista as seis seções na ordem aprovada', async () => {
    await renderHome()
    const nav = screen.getByRole('navigation', { name: 'Seções' })
    const labels = [...nav.querySelectorAll('a')].map(a => a.textContent?.replace(/^\d+/, ''))
    expect(labels).toEqual(SECTIONS.map(s => s.label))
  })

  it('abre o menu mobile, foca o primeiro link e fecha com Esc devolvendo o foco', async () => {
    const user = userEvent.setup()
    const button = await renderHome()
    const menu = document.getElementById('menu-mobile')!

    expect(menu).not.toBeVisible()
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(menu).toBeVisible()
    expect(document.activeElement).toHaveTextContent('Sobre')

    await user.keyboard('{Escape}')
    expect(menu).not.toBeVisible()
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(button)
  })

  it('fecha o menu ao escolher uma seção', async () => {
    const user = userEvent.setup()
    const button = await renderHome()
    await user.click(button)
    const menu = document.getElementById('menu-mobile')!
    await user.click(menu.querySelectorAll('a')[2])
    expect(menu).not.toBeVisible()
  })
})
