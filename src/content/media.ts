// Imagens dos cases, otimizadas no build (avif, webp e jpg) pelo vite-imagetools. As chaves batem com `media.src` em cases.ts.
import chat2order from '../assets/cases/chat2order.png?w=640;960;1280;1672&format=avif;webp;jpg&as=picture'
import clinica from '../assets/cases/clinica.png?w=640;960;1280;1901&format=avif;webp;jpg&as=picture'
import gastrohub from '../assets/cases/gastrohub.jpg?w=480;800&format=avif;webp;jpg&as=picture'
import revisoes from '../assets/cases/revisoes.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
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

export const caseMedia = { chat2order, gastrohub, revisoes, clinica } as const

export type CaseMediaKey = keyof typeof caseMedia

export const caseVideos = {
  revisoes: { full: revisoesVideo, preview: revisoesPreview, poster: revisoesPoster },
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
} as const

export type CaseGalleryKey = keyof typeof caseGallery
