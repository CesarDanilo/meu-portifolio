import { stack } from '../content/stack'
import SectionHead from '../components/ui/SectionHead'
import ToolIcon from '../components/ui/ToolIcon'
import Reveal from '../components/motion/Reveal'

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-14 border-b border-line py-16 lg:py-24">
      <div className="wrap">
        <SectionHead index={5} total={6} label="Stack" title={<>Ferramentas, <b>com prova</b>.</>} aside="Cada uma aponta onde foi usada." />
        <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, g) => (
            <Reveal key={group.group} index={g} className="border-b border-r border-line">
              <div className="flex h-full min-w-0 flex-col gap-4 p-5">
                <span className="meta text-signal-text">{group.group}</span>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map(item => (
                    <li key={item.name} className="tool-item flex items-center gap-3.5 py-1.5">
                      <ToolIcon icon={item.icon} />
                      <span className="flex min-w-0 flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="meta text-[10px] text-fg-3">{item.usedIn}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
