import portrait from '../assets/about/cesar-sobre.jpg?w=480;800&format=avif;webp;jpg&as=picture'
import setup from '../assets/about/cesar-setup-original.jpg?w=480;636&format=avif;webp;jpg&as=picture'
import { profile } from '../content/profile'
import SectionHead from '../components/ui/SectionHead'
import Picture from '../components/ui/Picture'
import Reveal from '../components/motion/Reveal'
import Trail from '../components/experience/Trail'

const SIZES = '(min-width: 1024px) 38vw, 100vw'

export default function About() {
  const { statement } = profile

  return (
    <section id="sobre" className="scroll-mt-14 border-b border-line py-16 lg:py-24">
      <div className="wrap">
        <SectionHead index={1} total={6} label="Sobre" title={<>Quem <b>sou</b>.</>} />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5" variant="mask">
            <figure className="photo-swap relative m-0 aspect-[4/5] overflow-hidden border border-line-2 [&_img]:absolute [&_img]:inset-0 [&_img]:size-full [&_img]:object-cover">
              <Picture data={portrait} sizes={SIZES} alt="Retrato de César Danilo em preto e branco, com fone de ouvido no pescoço" />
              <Picture data={setup} sizes={SIZES} alt="César Danilo no computador, no próprio setup" className="photo-swap__alt" />
              <span className="absolute left-0 top-0 z-[1] h-[38%] w-[3px] bg-signal" aria-hidden="true" />
              <figcaption className="meta absolute inset-x-0 bottom-0 z-[1] flex justify-between bg-gradient-to-t from-black/75 to-transparent px-3 py-2.5 text-fg-2">
                <span>[ Sobre ]</span>
                <span>{profile.location.split(' · ')[0]}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex min-w-0 flex-col gap-8 lg:col-span-6 lg:col-start-7">
            <Reveal variant="mask">
              <p className="text-[clamp(30px,3.6vw,52px)] font-medium leading-[1.05] tracking-[-0.035em] text-balance">
                {statement.before} <b className="condensed text-signal">{statement.emphasis}</b>
                {statement.after}
              </p>
            </Reveal>
            <div className="flex flex-col gap-4 text-[17px] text-fg-2">
              {profile.story.map((p, i) => (
                <Reveal key={i} index={i}><p>{p}</p></Reveal>
              ))}
            </div>
          </div>
        </div>

        <Trail steps={profile.trail} />
      </div>
    </section>
  )
}
