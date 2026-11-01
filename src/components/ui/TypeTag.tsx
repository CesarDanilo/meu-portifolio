import type { ProjectType } from '../../content/schema'

/** Selo vermelho com o tipo do projeto (Full Stack, Back-end, Front-end). */
export default function TypeTag({ type }: { type: ProjectType }) {
  return <span className="meta inline-block bg-signal px-[9px] py-1 text-white">{type}</span>
}
