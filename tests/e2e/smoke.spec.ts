import { expect, test } from '@playwright/test'

test.describe('smoke', () => {
  test('home carrega sem erros de console e sem scroll horizontal', async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })
    page.on('pageerror', err => errors.push(err.message))

    await page.goto('/')
    await expect(page.locator('main')).toBeVisible()

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow).toBeLessThanOrEqual(0)
    expect(errors).toEqual([])
  })

  test('rota de case abre direto pela URL (rewrite da SPA)', async ({ page }) => {
    await page.goto('/cases/chat2order')
    await expect(page.getByTestId('case-title')).toHaveText('chat2order')
  })

  test('rota inexistente mostra 404', async ({ page }) => {
    await page.goto('/nao-existe')
    await expect(page.getByText('Página não encontrada.')).toBeVisible()
  })
})
