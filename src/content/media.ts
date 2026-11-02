// Imagens dos cases, otimizadas no build (avif, webp e jpg) pelo vite-imagetools. As chaves batem com `media.src` em cases.ts.
import chat2order from '../assets/cases/chat2order.png?w=640;960;1280;1672&format=avif;webp;jpg&as=picture'
import clinica from '../assets/cases/clinica.png?w=640;960;1280;1901&format=avif;webp;jpg&as=picture'
import gastrohub from '../assets/cases/gastrohub.jpg?w=480;800&format=avif;webp;jpg&as=picture'
import revisoes from '../assets/cases/revisoes.jpg?w=480;800&format=avif;webp;jpg&as=picture'

export const caseMedia = { chat2order, gastrohub, revisoes, clinica } as const

export type CaseMediaKey = keyof typeof caseMedia
