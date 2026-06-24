import { LangProvider } from './i18n/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Work from './components/Work'
import StackSection from './components/StackSection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Work />
        <StackSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LangProvider>
  )
}
