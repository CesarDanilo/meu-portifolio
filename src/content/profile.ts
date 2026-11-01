import type { Profile } from './schema'

export const profile: Profile = {
  name: 'César Danilo',
  role: 'Desenvolvedor Full Stack',
  location: 'Dourados–MS · remoto',
  headline: { before: 'Produtos web', emphasis: 'completos', after: ', do banco à interface.' },
  lead: 'React, Node.js e PostgreSQL. Cinco cases com código aberto.',
  statement: { before: 'Comecei', emphasis: 'abrindo computadores', after: '. Fiquei para entender como os sistemas funcionam por dentro.' },
  story: [
    'Desde criança eu mexia em computador. Comecei pelo hardware: montar, trocar peças, entender o papel de cada componente.',
    'Depois veio a curiosidade pelo que roda por trás das telas: sistemas web, banco de dados, back-end. Estudei por conta própria Python, HTML, CSS, MySQL e PostgreSQL.',
    'Em 2021 entrei em Engenharia de Software. Em 2022 comecei como estagiário e, em 2025, assumi meu primeiro cargo como desenvolvedor. Hoje construo aplicações web, APIs e sistemas internos, da modelagem de dados ao deploy.',
  ],
  trail: [
    { label: 'Origem', title: 'Hardware', detail: 'Montar, consertar, entender as peças' },
    { label: 'Curiosidade', title: 'Como funciona?', detail: 'Sistemas web, banco de dados, back-end' },
    { label: 'Autodidata', title: 'Primeiro código', detail: 'Python · HTML · CSS' },
    { label: 'Dados', title: 'Bancos', detail: 'MySQL · PostgreSQL' },
    { label: '2021', title: 'Graduação', detail: 'Engenharia de Software' },
    { label: '2022', title: 'Primeiro estágio', detail: 'Invictos Tecnologia' },
    { label: '2025', title: 'Primeiro cargo dev', detail: 'Motor Hero' },
    { label: 'Hoje', title: 'Full Stack', detail: 'TypeScript · Node.js · React', current: true },
  ],
  contact: {
    email: 'cesardanilopalacios390@gmail.com',
    whatsapp: { display: '+55 67 99161-9198', url: 'https://wa.me/5567991619198' },
    github: 'https://github.com/CesarDanilo',
    linkedin: 'https://www.linkedin.com/in/c%C3%A9sar-danilo-396408153/',
  },
}
