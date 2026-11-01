import type { Case } from './schema'

// Fonte: pesquisa nos repositórios (docs/portfolio-redesign/06-project-research.md). Nada aqui é estimado.
export const cases: Case[] = [
  {
    slug: 'chat2order',
    name: 'Chat2Order',
    type: 'Full Stack',
    kind: 'Projeto pessoal',
    period: 'mai – jun 2026',
    scope: '4 repositórios: app, API, extensão, landing',
    pitch: 'Mensagem de WhatsApp vira pedido estruturado, com IA.',
    highlights: ['Extensão do Chrome lê o WhatsApp Web', 'API com JWT, rate limit e Swagger', 'IA extrai itens, quantidades e observações'],
    stack: ['React', 'TanStack', 'Express', 'Prisma', 'PostgreSQL', 'Groq'],
    problem:
      'Pedidos chegam pelo WhatsApp como texto livre: quantidades, observações e itens misturados numa frase. Alguém precisa ler, interpretar e digitar tudo de novo num sistema.',
    solution:
      'Uma extensão do Chrome lê a conversa no WhatsApp Web e envia o texto para a API. A API pede ao modelo um JSON com itens, quantidades e observações, grava o pedido no PostgreSQL e o painel mostra o resultado para o operador.',
    flow: ['WhatsApp Web', 'Extensão MV3', 'POST /api/parse · JWT', 'Groq · Llama 3.1', 'Prisma → PostgreSQL', 'Painel React'],
    challenges: [
      { title: 'Rotas protegidas', body: 'beforeLoad do TanStack Router e estado de servidor em hooks de TanStack Query.' },
      { title: 'API endurecida', body: 'helmet, rate limit de 100 req / 15 min, CORS com lista de origens e Swagger.' },
      { title: 'Histórico de status', body: 'status do pedido e log das chamadas de IA modelados no Prisma (OrderStatusHistory, AILog).' },
      { title: 'Deploy com migrações', body: 'migrações automáticas no Railway e testes Jest para auth, pedidos e usuários.' },
    ],
    links: { demo: 'https://chat2order-frontend.vercel.app', code: 'https://github.com/CesarDanilo/Chat2Order-frontend' },
    media: { kind: 'image', src: 'chat2order', alt: 'Painel do Chat2Order com pedidos extraídos de conversas' },
  },
  {
    slug: 'gastrohub',
    name: 'GastroHub',
    type: 'Full Stack',
    kind: 'Produto',
    period: 'out 2026',
    scope: 'SPA multi-área + API com 18 módulos',
    pitch: 'Loja própria, pedidos e caixa para restaurantes, sem comissão.',
    highlights: ['Loja de cada restaurante em /s/:slug', 'Painel com pedidos, mesas, comandas e caixa', '28 suítes de teste + 8 fluxos E2E'],
    stack: ['React 19', 'TanStack', 'Fastify 5', 'Prisma 7', 'PostgreSQL 17', 'Zod'],
    problem:
      'Restaurantes pequenos vendem por marketplaces que cobram comissão por pedido e ficam com os dados do cliente. Faltava um canal próprio que juntasse loja online, operação e relatórios.',
    solution:
      'Uma SPA com quatro áreas (site, painel do restaurante, plataforma e a loja pública de cada cliente) sobre uma API Fastify. A API tem 18 módulos, entre eles pedidos, PDV, cardápio, estoque, entregas, pagamentos, assinaturas, relatórios e WhatsApp.',
    flow: ['Loja /s/:slug', 'Painel do restaurante', 'API Fastify 5 · Zod', 'Prisma 7', 'PostgreSQL 17', 'nginx · Docker'],
    challenges: [
      { title: 'Regras de domínio compartilhadas', body: 'contratos em src/contracts espelhados no backend (status do pedido, preço, horários, estoque, planos), cada um com teste.' },
      { title: 'Qualidade em camadas', body: 'Vitest para domínio e componentes, Playwright para 8 fluxos E2E e CI no GitHub Actions.' },
      { title: 'API endurecida', body: 'helmet, CORS, rate limit e cookies no Fastify, com validação Zod.' },
      { title: 'Deploy em um servidor', body: 'Docker Compose com nginx encaminhando /api e /uploads para a API.' },
    ],
    links: {
      demo: 'https://orbit-systems-gastrohub-frontend.vercel.app',
      code: 'https://github.com/CesarDanilo/OrbitSystems-gastrohub-frontend',
      note: 'Backend em repositório privado',
    },
    media: { kind: 'image', src: 'gastrohub', alt: 'Página inicial do GastroHub' },
  },
  {
    slug: 'catalog-service',
    name: 'Catalog-Service',
    type: 'Back-end',
    kind: 'Projeto pessoal',
    period: 'set – out 2026',
    scope: 'API REST + worker de crawlers',
    pitch: 'Catálogo próprio de moda, alimentado por crawlers de 8 lojas.',
    highlights: ['API e worker em processos separados', 'Fila BullMQ e cache Redis', 'Crawlers VTEX e Playwright'],
    stack: ['Node 22', 'Fastify 5', 'BullMQ', 'Redis', 'Prisma', 'PostgreSQL 17'],
    problem: 'Um provador virtual precisava de produtos reais de várias lojas de moda, padronizados, sem pagar por chamada a uma API de busca externa.',
    solution:
      'Uma API Fastify serve o catálogo a partir do PostgreSQL, com cache no Redis. Quando falta produto para um termo, a API enfileira um job no BullMQ e um worker separado busca nas lojas, normaliza e grava.',
    flow: ['Provador', 'Catalog API · Fastify', 'Redis (cache)', 'BullMQ', 'Crawler worker', 'PostgreSQL'],
    challenges: [
      { title: 'Escala horizontal', body: 'API e worker usam a mesma imagem Docker mas rodam separados; a API só enfileira, o worker executa.' },
      { title: 'Domínio isolado da fila', body: 'o serviço depende da interface CrawlQueue; BullMQ é só uma implementação.' },
      { title: 'Crawlers por estratégia', body: 'busca JSON pública da VTEX para 7 lojas e Chromium (Playwright) quando a página depende de JS. Lojas que bloqueiam robôs não são contornadas.' },
      { title: 'Zod como fonte única', body: 'valida as rotas e gera o OpenAPI do Swagger. CI no GitHub Actions.' },
    ],
    links: { code: 'https://github.com/CesarDanilo/Catalog-Service', note: 'Sem demo pública: serviço interno' },
    media: {
      kind: 'terminal',
      lines: [
        '$ GET /api/v1/products/search?q=jaqueta',
        '→ cache redis … miss',
        '→ postgres … 42 produtos · 8 lojas',
        '$ POST /api/v1/sources/:id/sync',
        '→ bullmq crawler … enqueued',
        '→ worker vtex(c&a) … 36 upserts ✓',
      ],
    },
  },
  {
    slug: 'controle-de-revisoes',
    name: 'Controle de Revisões',
    type: 'Full Stack',
    kind: 'Desafio técnico',
    period: 'jul – ago 2026',
    scope: 'Frontend Vue + API Laravel',
    pitch: 'Revisões de veículos em kanban, com relatórios exportáveis.',
    highlights: ['Exportação PDF/ZIP em fila', 'Login com Google e Sanctum', 'Lixeira com limpeza automática'],
    stack: ['Vue 3', 'Vue Query', 'Laravel 13', 'Sanctum', 'Chart.js'],
    problem: 'Controlar o ciclo de revisões de uma frota: quem é o dono, qual veículo, em que etapa a revisão está e o que vence em breve.',
    solution:
      'Uma SPA em Vue consome uma API Laravel. As revisões andam por um kanban de status (aberto, em andamento, aguardando pagamento, concluído, cancelado), e o painel destaca as próximas revisões.',
    flow: ['Vue 3 SPA', 'axios + Bearer', 'Laravel API · Sanctum', 'Fila: GenerateReportExportJob', 'PDF / ZIP'],
    challenges: [
      { title: 'Exportação assíncrona', body: 'relatórios em PDF/ZIP gerados por job em fila, com status consultável e download ao final.' },
      { title: 'Cache de relatórios', body: 'invalidado por observer quando os dados mudam.' },
      { title: 'Login com Google', body: 'via Socialite, além do login por token com Sanctum.' },
      { title: 'Lixeira', body: 'restauração e limpeza automática de itens com mais de 7 dias.' },
    ],
    links: {
      demo: 'https://controle-de-revisoes-de-veiculos-fr.vercel.app',
      code: 'https://github.com/CesarDanilo/controle-de-revisoes-de-veiculos-frontend',
    },
    media: { kind: 'image', src: 'revisoes', alt: 'Tela de login do sistema Revisar' },
  },
  {
    slug: 'clinica-odontologica',
    name: 'Clínica Odontológica',
    type: 'Front-end',
    kind: 'Modelo / conceito',
    period: 'jun 2026',
    scope: 'Landing page completa, 12 seções',
    pitch: 'Landing modelo que leva o paciente direto ao WhatsApp.',
    highlights: ['WhatsApp com mensagem por tratamento', 'SEO local com Schema.org', 'Conteúdo trocável em arquivos tipados'],
    stack: ['React', 'TypeScript', 'Tailwind', 'Schema.org'],
    problem:
      'Clínicas vendem tratamentos de ticket alto, como implante e ortodontia, e o paciente decide pela confiança. A página precisa responder dúvidas e encurtar o caminho até o agendamento.',
    solution:
      'Doze seções em ordem de decisão (serviços, antes e depois, equipe, FAQ, localização) e um botão de WhatsApp com mensagem já preenchida para cada tratamento. Os depoimentos são fictícios porque é um modelo.',
    flow: ['data/*.ts', 'Seções', 'lib/whatsapp.ts', 'wa.me + mensagem', 'Schema.org'],
    challenges: [
      { title: 'Conteúdo separado da UI', body: 'serviços, FAQ e depoimentos em arquivos tipados, prontos para trocar de clínica.' },
      { title: 'SEO local', body: 'dados estruturados Schema.org.' },
      { title: 'Componentes base', body: 'Accordion, Reveal e Button reutilizados em todas as seções.' },
    ],
    links: { demo: 'https://modelo-clinica-odontologica.vercel.app', code: 'https://github.com/CesarDanilo/modelo-clinica-odontologica' },
    media: { kind: 'image', src: 'clinica', alt: 'Landing page da clínica odontológica modelo' },
  },
]
