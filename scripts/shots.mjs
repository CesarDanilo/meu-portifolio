// Gera prints do site (build de produção) para os checkpoints: node scripts/shots.mjs <pasta-de-saída>
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { chromium, devices } from '@playwright/test'

const out = process.argv[2] ?? 'shots'
mkdirSync(out, { recursive: true })

const server = spawn('npx', ['vite', 'preview', '--port', '4174', '--strictPort'], { shell: true, stdio: 'ignore' })
const base = 'http://localhost:4174'
for (let i = 0; i < 40; i++) {
  try { await fetch(base); break } catch { await new Promise(r => setTimeout(r, 250)) }
}

const browser = await chromium.launch()
try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await desktop.goto(base)
  await desktop.waitForTimeout(1200)
  await desktop.screenshot({ path: `${out}/desktop-topo.png` })

  const phone = await browser.newPage({ ...devices['Pixel 7'] })
  await phone.goto(base)
  await phone.waitForTimeout(800)
  await phone.screenshot({ path: `${out}/mobile-topo.png` })
  await phone.getByRole('button', { name: 'Menu' }).click()
  await phone.waitForTimeout(300)
  await phone.screenshot({ path: `${out}/mobile-menu.png` })

  // Página inteira com movimento reduzido: tudo visível de uma vez, sem esperar a rolagem.
  for (const [name, opts] of [['desktop-pagina', { viewport: { width: 1440, height: 900 } }], ['mobile-pagina', devices['Pixel 7']]]) {
    const page = await browser.newPage({ ...opts, reducedMotion: 'reduce' })
    await page.goto(base)
    await page.waitForTimeout(800)
    await page.screenshot({ path: `${out}/${name}.png`, fullPage: true })
  }
} finally {
  await browser.close()
  server.kill()
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/f', '/t'], { shell: true })
}
