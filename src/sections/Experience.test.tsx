import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Experience from './Experience'
import About from './About'

describe('Experience', () => {
  it('mostra o total em tecnologia já calculado e a divisão por área', () => {
    render(<Experience />)
    expect(screen.getByText('3 anos e 7 meses')).toBeInTheDocument()
    expect(screen.getByText(/1 ano e 5 meses em desenvolvimento · 3 anos em suporte e SQL/)).toBeInTheDocument()
  })

  it('agrupa estágio e suporte da Invictos no mesmo bloco, com a duração de cada um', () => {
    render(<Experience />)
    const invictos = screen.getByRole('heading', { level: 3, name: 'Invictos Tecnologia' }).closest('article')!
    expect(within(invictos).getByText('2 funções')).toBeInTheDocument()
    expect(within(invictos).getByRole('heading', { name: 'Estágio em Desenvolvimento Web' })).toBeInTheDocument()
    expect(within(invictos).getByText('9 meses')).toBeInTheDocument()
    expect(within(invictos).getByText('3 anos')).toBeInTheDocument()
  })

  it('mostra Motor Hero com 8 meses e a formação com 4 anos e link do TCC', () => {
    render(<Experience />)
    const motor = screen.getByRole('heading', { level: 3, name: 'Motor Hero' }).closest('article')!
    expect(within(motor).getByText('8 meses')).toBeInTheDocument()
    expect(screen.getByText('4 anos')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Código/ })).toHaveAttribute('href', 'https://github.com/CesarDanilo/aimdesk-ecommerce')
  })
})

describe('About', () => {
  it('tem as duas fotos com texto alternativo e a trilha de 8 marcos, com o atual marcado', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /fone de ouvido/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /setup/ })).toBeInTheDocument()
    const trail = screen.getByRole('list', { name: 'Trajetória' })
    expect(within(trail).getAllByRole('listitem')).toHaveLength(8)
    expect(within(trail).getByText('Full Stack').closest('li')).toHaveAttribute('aria-current', 'step')
  })
})
