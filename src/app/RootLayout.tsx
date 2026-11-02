import { Outlet } from '@tanstack/react-router'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

// Moldura comum a todas as rotas.
export default function RootLayout() {
  return (
    <div className="bg-bg font-body text-fg">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <div id="conteudo">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
