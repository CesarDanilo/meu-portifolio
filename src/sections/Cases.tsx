import { cases } from '../content/cases'
import SectionHead from '../components/ui/SectionHead'
import Reveal from '../components/motion/Reveal'
import CaseRow from '../components/case/CaseRow'

export default function Cases() {
  return (
    <section id="cases" className="scroll-mt-14 border-b border-line py-16 lg:py-24">
      <div className="wrap">
        <SectionHead index={3} total={6} label="Cases" title={<>Do problema <b>ao deploy</b>.</>} aside="Abra um case para ver arquitetura e decisões." />
        <div className="border-t border-line">
          {cases.map((item, i) => (
            <Reveal key={item.slug} index={i}>
              <CaseRow item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
