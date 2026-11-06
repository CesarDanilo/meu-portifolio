// Imagens dos cases, otimizadas no build (avif, webp e jpg) pelo vite-imagetools. As chaves batem com `media.src` em cases.ts.
import chat2order from '../assets/cases/chat2order.png?w=640;960;1280;1672&format=avif;webp;jpg&as=picture'
import clinica from '../assets/cases/clinica.png?w=640;960;1280;1901&format=avif;webp;jpg&as=picture'
import gastrohub from '../assets/cases/gastrohub.jpg?w=480;800&format=avif;webp;jpg&as=picture'
import revisoes from '../assets/cases/revisoes.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
import estoquePro from '../assets/cases/estoque-pro.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
import estoqueVideo from '../assets/cases/estoque-pro/demo.mp4'
import estoquePreview from '../assets/cases/estoque-pro/preview.mp4'
import estoquePoster from '../assets/cases/estoque-pro/poster.jpg'
import estoqueHero from '../assets/cases/estoque-pro/showcase-01.png?w=800;1600;2200&format=webp;jpg&quality=88&as=picture'
import estoqueModulos from '../assets/cases/estoque-pro/showcase-02.png?w=800;1600;2200&format=webp;jpg&quality=88&as=picture'
import estoqueFluxo from '../assets/cases/estoque-pro/showcase-03.png?w=800;1600;2200&format=webp;jpg&quality=88&as=picture'
import estoqueGraficos from '../assets/cases/estoque-pro/03-dashboard-graficos.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import estoqueProduto from '../assets/cases/estoque-pro/05-novo-produto.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import estoqueCompraItens from '../assets/cases/estoque-pro/07-nova-compra-itens.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import estoqueCompraRevisao from '../assets/cases/estoque-pro/08-nova-compra-revisao.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import estoqueCompras from '../assets/cases/estoque-pro/09-compras.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import estoqueVenda from '../assets/cases/estoque-pro/10-nova-venda.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import estoqueRelatorios from '../assets/cases/estoque-pro/12-relatorios.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import estoqueRelatoriosCompras from '../assets/cases/estoque-pro/13-relatorios-compras.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesVideo from '../assets/cases/revisoes/demo.mp4'
import revisoesPreview from '../assets/cases/revisoes/preview.mp4'
import revisoesPoster from '../assets/cases/revisoes/poster.jpg'
import revisoesHero from '../assets/cases/revisoes/showcase-01.png?w=800;1600;2200&format=webp;jpg&quality=88&as=picture'
import revisoesModulos from '../assets/cases/revisoes/showcase-02.png?w=800;1600;2200&format=webp;jpg&quality=88&as=picture'
import revisoesFluxo from '../assets/cases/revisoes/showcase-03.png?w=800;1600;2200&format=webp;jpg&quality=88&as=picture'
import revisoesProprietarios from '../assets/cases/revisoes/03-proprietarios.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesPessoa from '../assets/cases/revisoes/04-cadastro-pessoa.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesVeiculo from '../assets/cases/revisoes/05-cadastro-veiculo.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesRevisao from '../assets/cases/revisoes/06-cadastro-revisao.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesRelatorios from '../assets/cases/revisoes/07-relatorios.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesGraficos from '../assets/cases/revisoes/08-relatorios-graficos.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesLixeira from '../assets/cases/revisoes/09-lixeira.png?w=800;1600&format=webp;jpg&quality=88&as=picture'
import revisoesKanban from '../assets/cases/revisoes/10-kanban.png?w=800;1600&format=webp;jpg&quality=88&as=picture'

export const caseMedia = { chat2order, gastrohub, revisoes, estoquePro, clinica } as const

export type CaseMediaKey = keyof typeof caseMedia

export const caseVideos = {
  revisoes: { full: revisoesVideo, preview: revisoesPreview, poster: revisoesPoster },
  estoquePro: { full: estoqueVideo, preview: estoquePreview, poster: estoquePoster },
} as const

export type CaseVideoKey = keyof typeof caseVideos

export const caseGallery = {
  revisoesHero,
  revisoesModulos,
  revisoesFluxo,
  revisoesProprietarios,
  revisoesPessoa,
  revisoesVeiculo,
  revisoesRevisao,
  revisoesKanban,
  revisoesRelatorios,
  revisoesGraficos,
  revisoesLixeira,
  estoqueHero,
  estoqueModulos,
  estoqueFluxo,
  estoqueGraficos,
  estoqueProduto,
  estoqueCompraItens,
  estoqueCompraRevisao,
  estoqueCompras,
  estoqueVenda,
  estoqueRelatorios,
  estoqueRelatoriosCompras,
} as const

export type CaseGalleryKey = keyof typeof caseGallery
