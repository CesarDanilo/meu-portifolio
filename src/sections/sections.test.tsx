import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Stack from './Stack'
import OtherProjects from './OtherProjects'
import Contact from './Contact'
import { stack } from '../content/stack'
import { profile } from '../content/profile'

describe('Stack', () => {
  it('mostra os 4 grupos e cada ferramenta como texto', () => {
    render(<Stack />)
    for (const group of ['Frontend', 'Backend', 'Infra e qualidade', 'IA e segurança']) {
      expect(screen.getByText(group)).toBeInTheDocument()
    }
    for (const group of stack) {
      for (const item of group.items) {
        // getAllByText: "JWT" também é a sigla de fallback do ícone, com o mesmo texto.
        expect(screen.getAllByText(item.name).length).toBeGreaterThan(0)
      }
    }
  })

  it('usa a sigla de fallback só como elemento escondido, sem imagem', () => {
    const { container } = render(<Stack />)
    const section = container.querySelector('section')!
    expect(within(section).queryAllByRole('img')).toEqual([])
    const sigla = within(section).getByText('Gq')
    expect(sigla.closest('[aria-hidden="true"]')).not.toBeNull()
  })
})

describe('OtherProjects', () => {
  it('mostra a tabela com 3 projetos e links externos em cada linha', () => {
    render(<OtherProjects />)
    const table = screen.getByRole('table')
    const rows = within(table).getAllByRole('row').slice(1)
    expect(rows).toHaveLength(3)
    for (const name of ['MEI Finance', 'APEX Academy', 'Landing Alienware']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    for (const row of rows) {
      const links = within(row).getAllByRole('link')
      expect(links.length).toBeGreaterThan(0)
      for (const link of links) {
        expect(link).toHaveAttribute('target', '_blank')
      }
    }
  })
})

describe('Contact', () => {
  it('tem o link de e-mail e o botão de copiar', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: profile.contact.email })).toHaveAttribute('href', `mailto:${profile.contact.email}`)
    expect(screen.getByRole('button', { name: 'Copiar E-mail' })).toHaveTextContent('Copiar')
  })

  it('clicar em copiar sem clipboard disponível não lança erro e mantém o texto', async () => {
    render(<Contact />)
    const button = screen.getByRole('button', { name: 'Copiar E-mail' })
    const user = userEvent.setup()
    // userEvent.setup() injeta um clipboard próprio; removemos para simular o navegador sem a API.
    const original = Object.getOwnPropertyDescriptor(navigator, 'clipboard')
    Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true })
    try {
      await user.click(button)
    } finally {
      if (original) Object.defineProperty(navigator, 'clipboard', original)
      else delete (navigator as { clipboard?: unknown }).clipboard
    }
    expect(button).toHaveTextContent('Copiar')
  })
})
