import { expect, test } from '@playwright/test'

// Garante que nenhuma revelação ao rolar fique presa escondida (bug do protótipo v15).
test('rolando a página inteira, todo bloco com revelação termina visível', async ({ page }) => {
  await page.goto('/')
  const height = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < height; y += 400) {
    await page.mouse.wheel(0, 400)
    await page.waitForTimeout(60)
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
  await trail.scrollIntoViewIfNeeded()
  await expect(trail).toHaveAttribute('data-lit', 'true')
})
