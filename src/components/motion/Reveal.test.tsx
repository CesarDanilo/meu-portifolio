import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import Reveal from './Reveal'

type Callback = (entries: Array<{ isIntersecting: boolean; target: Element }>) => void

function mockObserver() {
  const instances: { cb: Callback; targets: Element[] }[] = []
  class FakeObserver {
    cb: Callback; targets: Element[] = []
    constructor(cb: Callback) { this.cb = cb; instances.push(this) }
    observe(el: Element) { this.targets.push(el) }
    unobserve() {}
    disconnect() {}
  }
  vi.stubGlobal('IntersectionObserver', FakeObserver)
  return instances
}

function mockReducedMotion(reduce: boolean) {
  vi.stubGlobal('matchMedia', (q: string) => ({
    matches: reduce && q.includes('reduce'), media: q,
    addEventListener() {}, removeEventListener() {},
  }))
}

afterEach(() => vi.unstubAllGlobals())

describe('Reveal', () => {
  it('observa o invólucro, não o elemento recortado pela máscara', () => {
    mockReducedMotion(false)
    const observers = mockObserver()
    render(<Reveal variant="mask"><h2>Título</h2></Reveal>)

    const wrapper = screen.getByText('Título').closest('.reveal-mask')!.parentElement!
    expect(observers[0].targets).toEqual([wrapper])
    expect(wrapper).not.toHaveAttribute('data-revealed')

    act(() => observers[0].cb([{ isIntersecting: true, target: wrapper }]))
    expect(wrapper).toHaveAttribute('data-revealed')
    expect(wrapper).toHaveClass('is-revealed')
  })

  it('com movimento reduzido já nasce revelado, sem observar', () => {
    mockReducedMotion(true)
    const observers = mockObserver()
    render(<Reveal><p>Texto</p></Reveal>)

    expect(screen.getByText('Texto').closest('[data-revealed]')).not.toBeNull()
    expect(observers.flatMap(o => o.targets)).toHaveLength(0)
  })
})
