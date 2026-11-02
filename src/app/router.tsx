import { createRootRoute, createRoute, createRouter, notFound } from '@tanstack/react-router'
import type { RouterHistory } from '@tanstack/react-router'
import RootLayout from './RootLayout'
import HomePage from '../pages/HomePage'
import CasePage from '../pages/CasePage'
import NotFoundPage from '../pages/NotFoundPage'
import { cases } from '../content/cases'

const rootRoute = createRootRoute({ component: RootLayout, notFoundComponent: NotFoundPage })

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })

const caseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cases/$slug',
  // slug inexistente cai na página 404 antes de renderizar
  beforeLoad: ({ params }) => { if (!cases.some(c => c.slug === params.slug)) throw notFound() },
  component: CasePage,
})

const routeTree = rootRoute.addChildren([homeRoute, caseRoute])

// `history` só é passado nos testes (memória); no navegador o padrão é o histórico do browser.
export function createAppRouter(history?: RouterHistory) {
  return createRouter({
    routeTree,
    history,
    defaultPreload: 'intent',
    defaultViewTransition: true,
    scrollRestoration: true,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createAppRouter>
  }
}
