import { projects } from '../content/projects'
import SectionHead from '../components/ui/SectionHead'
import LinkPill from '../components/ui/LinkPill'
import Reveal from '../components/motion/Reveal'

export default function OtherProjects() {
  return (
    <section id="outros" className="scroll-mt-14 border-b border-line py-16 lg:py-24">
      <div className="wrap">
        <SectionHead index={4} total={6} label="Outros projetos" title={<>Menores, <b>no ar</b>.</>} />
        <Reveal>
          <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Tabela de outros projetos">
            <table className="w-full min-w-[620px] border-collapse text-[15px]">
              <thead>
                <tr className="border-b border-line text-left">
                  <th scope="col" className="meta pb-3 pr-4 font-normal text-fg-3">Projeto</th>
                  <th scope="col" className="meta pb-3 pr-4 font-normal text-fg-3">Ano</th>
                  <th scope="col" className="meta pb-3 pr-4 font-normal text-fg-3">O que é</th>
                  <th scope="col" className="meta pb-3 pr-4 font-normal text-fg-3">Stack</th>
                  <th scope="col" className="meta pb-3 font-normal text-fg-3">Links</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(p => (
                  <tr key={p.name} className="border-b border-line align-top">
                    <th scope="row" className="py-4 pr-4 text-left font-semibold">{p.name}</th>
                    <td className="py-4 pr-4 font-mono text-xs tabular-nums text-fg-3">{p.year}</td>
                    <td className="py-4 pr-4 text-fg-2">{p.summary}</td>
                    <td className="meta py-4 pr-4 text-fg-3">{p.stack.join(' · ')}</td>
                    <td className="py-4">
                      <div className="flex flex-wrap gap-4">
                        {p.links.demo && <LinkPill href={p.links.demo} kind="demo" />}
                        <LinkPill href={p.links.code} kind="code" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
