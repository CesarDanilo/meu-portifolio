/** Hash curto do commit, injetado pelo Vite (vite.config.ts). */
declare const __BUILD_SHA__: string

/** Imagens processadas pelo vite-imagetools com `&as=picture`. */
declare module '*&as=picture' {
  const picture: { sources: Record<string, string>; img: { src: string; w: number; h: number } }
  export default picture
}
