import { brandIcons } from './brandIcons'

/** Ícone da tecnologia num quadrado com cantos vermelhos. Sem marca oficial, mostra uma sigla. */
export default function ToolIcon({ icon }: { icon: string }) {
  const brand = brandIcons[icon]
  return (
    <span className="tool-ico" aria-hidden="true">
      {brand ? <svg viewBox="0 0 24 24" fill="currentColor"><path d={brand.path} /></svg> : <b className="meta">{icon}</b>}
    </span>
  )
}
