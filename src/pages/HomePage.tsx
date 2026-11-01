import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Work from '../components/Work'
import StackSection from '../components/StackSection'
import About from '../components/About'
import Contact from '../components/Contact'

// Composição atual da home. Cada seção será trocada pela versão nova nas fases 3–7.
export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Work />
      <StackSection />
      <About />
      <Contact />
    </main>
  )
}
