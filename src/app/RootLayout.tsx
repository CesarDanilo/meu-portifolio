import { Outlet } from '@tanstack/react-router'
import { LangProvider } from '../i18n/LangContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Moldura comum a todas as rotas. Navbar e Footer atuais ficam até a fase 3.
export default function RootLayout() {
  return (
    <LangProvider>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Outlet />
      </div>
      <Footer />
    </LangProvider>
  )
}
