import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'
import { profile } from '../content/profile'

describe('Hero', () => {
  it('mostra nome, cargo e headline vindos do conteúdo', () => {
    render(<Hero />)
    expect(screen.getByText(profile.role, { exact: false })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Produtos web completos, do banco à interface.')
  })

  it('leva aos cases e ao GitHub (externo, em nova aba)', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Ver os cases/ })).toHaveAttribute('href', '#cases')
    const github = screen.getByRole('link', { name: /GitHub/ })
    expect(github).toHaveAttribute('href', profile.contact.github)
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })

  it('retrato carrega com prioridade e tem texto alternativo', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /Retrato de César Danilo/ })
    expect(img).toHaveAttribute('loading', 'eager')
    expect(img).toHaveAttribute('width')
    expect(img).toHaveAttribute('height')
  })

  it('a palavra FULL/STACK é decorativa e fica fora da leitura de tela', () => {
    const { container } = render(<Hero />)
    const word = container.querySelector('.hero-word')!
    expect(word).toHaveAttribute('aria-hidden', 'true')
    expect(word.querySelector('.hero-word__sweep')).toHaveTextContent('FULL/STACK')
  })
})
