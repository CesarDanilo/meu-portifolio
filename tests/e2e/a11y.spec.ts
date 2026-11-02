import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const paths = ['/', '/cases/chat2order', '/cases/catalog-service']

test.describe('acessibilidade', () => {
  for (const path of paths) {
    test(`${path} sem violações critical ou serious`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('main')).toBeVisible()

      const { violations } = await new AxeBuilder({ page }).analyze()
      const serious = violations.filter(v => v.impact === 'critical' || v.impact === 'serious')
      expect(
        serious.map(v => `${v.id}: ${v.help} (${v.nodes.length} nós)`),
        `violações em ${path}`,
      ).toEqual([])
    })
  }
})
