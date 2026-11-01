import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import type { RouterHistory } from '@tanstack/react-router'
import RootLayout from './RootLayout'
import HomePage from '../pages/HomePage'
import CasePage from '../pages/CasePage'
import NotFoundPage from '../pages/NotFoundPage'

const rootRoute = createRootRoute({ component: RootLayout, notFoundComponent: NotFoundPage })

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })

const caseRoute = createRoute({ getParentRoute: () => rootRoute, path: '/cases/$slug', component: CasePage })

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
