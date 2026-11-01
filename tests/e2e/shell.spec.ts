import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('moldura do site', () => {
  test('menu mobile abre, navega e fecha', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'menu só existe no celular')
    await page.goto('/')
    await page.getByRole('button', { name: 'Menu' }).click()
    const menu = page.getByRole('navigation', { name: 'Menu' })
    await expect(menu).toBeVisible()
    await menu.getByRole('link', { name: /Cases/ }).click()
    await expect(menu).toBeHidden()
    await expect(page).toHaveURL(/#cases$/)
  })

  test('índice de seções visível no desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'índice só aparece em telas largas')
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: 'Seções' }).getByRole('link')).toHaveCount(6)
  })

  test('link "pular para o conteúdo" é o primeiro foco do teclado', async ({ page, isMobile }) => {
    test.skip(isMobile, 'teclado')
    await page.goto('/')
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused()
  })

  test('barra e rodapé sem violações de acessibilidade', async ({ page }) => {
    await page.goto('/')
    const { violations } = await new AxeBuilder({ page }).include('header').include('footer').analyze()
    expect(violations.map(v => `${v.id}: ${v.help}`)).toEqual([])
  })
})
