import { describe, expect, it } from 'vitest'
import { cases } from './cases'
import { caseGallery, caseMedia, caseVideos } from './media'

describe('mídia dos cases', () => {
  it('todo case com imagem tem a chave em caseMedia, e cada entrada tem src, w e h', () => {
    cases
      .filter(c => c.media.kind === 'image')
      .forEach(c => {
        const key = (c.media as { src: string }).src
        expect(caseMedia, c.slug).toHaveProperty(key)
      })
    Object.entries(caseMedia).forEach(([key, data]) => {
      expect(data.img.src, key).toBeTruthy()
      expect(data.img.w, key).toBeGreaterThan(0)
      expect(data.img.h, key).toBeGreaterThan(0)
    })
  })

  it('vídeo e galeria dos cases apontam para arquivos existentes', () => {
    cases.forEach(c => {
      if (c.video) expect(caseVideos, c.slug).toHaveProperty(c.video.src)
      c.gallery?.forEach(g => expect(caseGallery, c.slug).toHaveProperty(g.src))
    })
  })
})
