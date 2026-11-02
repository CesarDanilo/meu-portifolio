import { expect, test } from '@playwright/test'

test.describe('cases', () => {
  test('hover na ficha mostra os destaques sem mudar a altura da linha (desktop)', async ({ page, isMobile }) => {
    test.skip(isMobile, 'hover só existe com mouse')
    await page.goto('/#cases')
    const row = page.locator('.case-row').first()
    await row.scrollIntoViewIfNeeded()
    const more = row.locator('.case-row__more')
    await expect(more).toHaveCSS('opacity', '0')
    const before = (await row.boundingBox())!.height

    await row.hover()
    await expect(more).toHaveCSS('opacity', '1')
    // a altura não muda: o hover só usa opacidade e transform (sem reflow da página)
    expect((await row.boundingBox())!.height).toBe(before)

    await page.mouse.move(0, 0)
    await expect(more).toHaveCSS('opacity', '0')
    expect((await row.boundingBox())!.height).toBe(before)
  })

  test('no celular os destaques de todas as fichas já ficam visíveis', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'celular')
    await page.goto('/#cases')
    const more = page.locator('.case-row__more')
    await expect(more).toHaveCount(5)
    for (const el of await more.all()) await expect(el).toHaveCSS('opacity', '1')
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
