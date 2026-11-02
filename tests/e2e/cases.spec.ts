import { expect, test } from '@playwright/test'

test.describe('cases', () => {
  test('hover na ficha abre a tela e mostra os destaques (desktop)', async ({ page, isMobile }) => {
    test.skip(isMobile, 'hover só existe com mouse')
    await page.goto('/#cases')
    const row = page.locator('.case-row').first()
    await row.scrollIntoViewIfNeeded()
    await expect(row).not.toHaveClass(/is-open/)
    await row.hover()
    await expect(row).toHaveClass(/is-open/)
    await expect(row.getByText('Abrir case')).toBeVisible()
    await page.mouse.move(0, 0)
    await expect(row).not.toHaveClass(/is-open/)
  })

  test('no celular as fichas já nascem abertas', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'celular')
    await page.goto('/#cases')
    await expect(page.locator('.case-row.is-open')).toHaveCount(5)
  })

  test('ficha leva à página do case e o link volta para a lista', async ({ page }) => {
    await page.goto('/#cases')
    await page.locator('.case-row').nth(1).click()
    await expect(page).toHaveURL(/\/cases\/gastrohub$/)
    await expect(page.getByTestId('case-title')).toHaveText('GastroHub')
    await expect(page.getByRole('link', { name: /Abrir a demo/ })).toHaveAttribute('target', '_blank')
    await page.getByRole('link', { name: '← Todos os cases' }).click()
    await expect(page).toHaveURL(/\/#cases$/)
  })

  test('página do case sem scroll horizontal', async ({ page }) => {
    await page.goto('/cases/catalog-service')
    await expect(page.getByTestId('case-title')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0)
  })
})
