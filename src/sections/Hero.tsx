import type { CSSProperties } from 'react'
import portrait from '../assets/portrait/cesar.png?w=480;720;960;1254&format=avif;webp;jpg&as=picture'
import { profile } from '../content/profile'
import ButtonLink from '../components/ui/Button'
import Picture from '../components/ui/Picture'
import { ArrowRight, GithubMark } from '../components/ui/icons'

const delay = (ms: number) => ({ '--d': ms }) as CSSProperties
const WORD = 'FULL/STACK'

/*
 * No desktop a palavra fica atrás de tudo, na base do hero (a coluna do retrato é `static`).
 * Abaixo de lg a coluna do retrato vira `relative` e a palavra passa a ficar sobre a base da foto.
 */
export default function Hero() {
  const { headline } = profile

  return (
    <section className="relative overflow-hidden border-b border-line pt-8 lg:pt-14" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="wrap grid h-full grid-cols-4 lg:grid-cols-12">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className={`border-l border-line last:border-r ${i >= 4 ? 'hidden lg:block' : '[&:nth-child(4)]:border-r lg:[&:nth-child(4)]:border-r-0'}`} />
          ))}
        </div>
      </div>

      <div className="wrap relative">
        <div className="grid grid-cols-1 items-end gap-x-6 lg:grid-cols-12">
          <div className="relative z-[2] order-2 flex min-w-0 flex-col gap-7 pb-10 pt-8 lg:order-1 lg:col-span-7 lg:pt-0">
            <span className="hero-in meta text-fg-3" style={delay(80)}>
              {profile.name} <span className="text-signal-text">/</span> {profile.role}
            </span>
            <h1 id="hero-title" className="hero-in text-[clamp(40px,6vw,88px)] font-[560] leading-[0.98] tracking-[-0.045em] text-balance" style={delay(180)}>
              {headline.before} <b className="condensed">{headline.emphasis}</b>
              {headline.after}
            </h1>
            <p className="hero-in max-w-[46ch] text-[17px] text-fg-2" style={delay(300)}>
              {profile.lead}
            </p>
            <div className="hero-in flex flex-wrap gap-2.5" style={delay(440)}>
              <ButtonLink href="#cases" variant="solid" icon={<ArrowRight />}>Ver os cases</ButtonLink>
              <ButtonLink href={profile.contact.github} external icon={<GithubMark />}>GitHub</ButtonLink>
            </div>
          </div>

          <div className="order-1 relative min-w-0 lg:static lg:order-2 lg:col-span-5 lg:self-stretch">
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[520px]">
              <span className="hero-slash absolute -right-1.5 bottom-16 z-[3] h-[30%] w-2.5 -skew-x-[14deg] bg-signal lg:-left-[18px] lg:right-auto lg:h-[46%]" aria-hidden="true" />
              <figure className="hero-photo absolute inset-0 z-[2] m-0 overflow-hidden border border-b-0 border-line-2 bg-[#d9d8d6]">
                <span className="meta absolute left-3 top-3 z-[1] text-[10px] text-[#1a1a1a]">[ Retrato ]</span>
                <span className="meta absolute right-3 top-3 z-[1] text-right text-[10px] text-[#1a1a1a]">Brasil<br />2026</span>
                <Picture
                  data={portrait}
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  alt="Retrato de César Danilo em preto e branco, de óculos escuros e jaqueta preta"
                  className="size-full object-cover object-[50%_20%] grayscale contrast-[1.15]"
                />
              </figure>
            </div>
            <div
              className="hero-word absolute inset-x-0 z-[3] text-center text-[21vw] max-lg:bottom-0 max-lg:translate-y-[18%] lg:-bottom-[0.12em] lg:z-[1] lg:text-[min(20.5vw,300px)]"
              aria-hidden="true"
            >
              {WORD}
              <span className="hero-word__sweep">{WORD}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] border-t border-line">
        <div className="wrap meta flex justify-between gap-4 py-3.5 text-fg-3">
          <span>{profile.location}</span>
          <span aria-hidden="true">Role ↓</span>
        </div>
      </div>
    </section>
  )
}
