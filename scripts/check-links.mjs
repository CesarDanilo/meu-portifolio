// Verifica se os links https do conteúdo do portfólio ainda respondem: node scripts/check-links.mjs
import { readFileSync } from 'node:fs'

const files = [
  'src/content/cases.ts',
  'src/content/projects.ts',
  'src/content/experience.ts',
  'src/content/profile.ts',
]

const urlRe = /https:\/\/[^\s"'`<>)\]}\\]+/g
const urls = [...new Set(
  files.flatMap(f => [...readFileSync(f, 'utf8').matchAll(urlRe)].map(m => m[0].replace(/[,;.]+$/, ''))),
)].sort()

const TIMEOUT = 15_000
const CONCURRENCY = 4

async function request(url, method) {
  const res = await fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT) })
  await res.body?.cancel()
  return res.status
}

async function check(url) {
  if (/^https:\/\/([^/]+\.)?linkedin\.com\//.test(url)) {
    return { url, skipped: true }
  }
  let status = null
  let error = null
  try {
    status = await request(url, 'HEAD')
  } catch (e) {
    error = e
  }
  if (error || [403, 404, 405].includes(status)) {
    try {
      status = await request(url, 'GET')
      error = null
    } catch (e) {
      error = e
    }
  }
  if (error) return { url, failed: true, label: `erro: ${error.cause?.code ?? error.name ?? error.message}` }
  return { url, status, failed: status >= 400 }
}

const results = new Array(urls.length)
let next = 0
async function worker() {
  while (next < urls.length) {
    const i = next++
    results[i] = await check(urls[i])
  }
}
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, urls.length) }, worker))

let ok = 0, failed = 0, skipped = 0
for (const r of results) {
  if (r.skipped) {
    skipped++
    console.log(`ignorado (bloqueia robôs)  ${r.url}`)
  } else if (r.failed) {
    failed++
    console.log(`falhou  ${r.label ?? r.status}  ${r.url}`)
  } else {
    ok++
    console.log(`ok  ${r.status}  ${r.url}`)
  }
}

console.log(`\nResumo: ${urls.length} links, ${ok} ok, ${failed} falhou, ${skipped} ignorado`)
process.exit(failed > 0 ? 1 : 0)
