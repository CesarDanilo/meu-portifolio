import { expect, test } from '@playwright/test'

// Garante que nenhuma revelação ao rolar fique presa escondida (bug do protótipo v15).
test('rolando a página inteira, todo bloco com revelação termina visível', async ({ page }) => {
  await page.goto('/')
  // Rola em passos de 400 px, esperando um quadro renderizado a cada passo: o IntersectionObserver
  // só mede em quadros, e em máquina lenta várias rodas de mouse caíam no mesmo quadro e pulavam
  // blocos inteiros. A altura é lida a cada passo, porque a página cresce enquanto as imagens carregam.
  for (let i = 0; i < 200; i++) {
    const atBottom = await page.evaluate(async () => {
      window.scrollBy({ top: 400, behavior: 'instant' })
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))
      return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
    })
    await page.waitForTimeout(30)
    if (atBottom) break
  }
  await page.waitForTimeout(1500)
  const hidden = await page.evaluate(() =>
    [...document.querySelectorAll('.reveal-up, .reveal-mask')]
      .filter(el => !el.parentElement?.classList.contains('is-revealed'))
      .map(el => el.textContent?.slice(0, 40)),
  )
  expect(hidden).toEqual([])
})

test('trilha do Sobre e linha do tempo acendem ao entrar na tela', async ({ page }) => {
  await page.goto('/#sobre')
  const trail = page.getByRole('list', { name: 'Trajetória' })
  // centraliza: rolar só "se necessário" deixa a trilha colada na borda de baixo, fora da margem do observador
  await trail.evaluate(el => el.scrollIntoView({ block: 'center' }))
  await expect(trail).toHaveAttribute('data-lit', 'true')
})
