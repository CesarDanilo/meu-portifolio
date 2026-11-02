import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Work from '../components/Work'
import StackSection from '../components/StackSection'
import Contact from '../components/Contact'

// Ordem aprovada (D-07). Work, StackSection e Contact ainda são as versões antigas (fases 6 e 7).
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Work />
      <StackSection />
      <Contact />
    </main>
  )
}
