import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Cases from '../sections/Cases'
import StackSection from '../components/StackSection'
import Contact from '../components/Contact'

// Ordem aprovada (D-07). StackSection e Contact ainda são as versões antigas (fase 7).
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Cases />
      <StackSection />
      <Contact />
    </main>
  )
}
