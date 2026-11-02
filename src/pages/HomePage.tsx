import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Cases from '../sections/Cases'
import OtherProjects from '../sections/OtherProjects'
import Stack from '../sections/Stack'
import Contact from '../sections/Contact'

// Ordem aprovada (D-07): Sobre → Experiência → Cases → Outros → Stack → Contato.
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Cases />
      <OtherProjects />
      <Stack />
      <Contact />
    </main>
  )
}
