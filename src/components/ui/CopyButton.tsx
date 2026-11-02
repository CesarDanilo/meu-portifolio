import { useState } from 'react'

/** Copia o texto para a área de transferência. Sem permissão, o texto continua selecionável na tela. */
export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setDone(true)
      setTimeout(() => setDone(false), 1600)
    } catch {
      // sem permissão de clipboard: o valor já está visível na tela
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copiar ${label}`}
      className="meta self-start rounded-full border border-line-2 px-3 py-1.5 text-fg-2 transition-colors hover:border-signal hover:text-fg"
    >
      {done ? 'Copiado' : 'Copiar'}
    </button>
  )
}
