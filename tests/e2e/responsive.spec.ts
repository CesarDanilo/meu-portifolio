import { expect, test } from '@playwright/test'

const widths = [360, 390, 768, 1024, 1440]
const paths = ['/', '/cases/chat2order']

test.describe('responsivo', () => {
  for (const width of widths) {
    for (const path of paths) {
      test(`largura ${width}px em ${path} sem scroll horizontal e com a navegação certa`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 })
        await page.goto(path)
        await expect(page.locator('main')).toBeVisible()

        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
        expect(overflow, `scroll horizontal em ${width}px (${path})`).toBeLessThanOrEqual(0)

        const menu = page.getByRole('button', { name: 'Menu' })
        const sections = page.getByRole('navigation', { name: 'Seções' })
        if (width < 1024) {
          await expect(menu, `botão Menu em ${width}px`).toBeVisible()
        } else {
          await expect(sections, `índice de seções em ${width}px`).toBeVisible()
        }
      })
    }
  }
})
