# César Danilo — Portfólio

Stack: React + TypeScript + Tailwind CSS v4 + Vite

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Deploy no Vercel

```bash
npm run build
# Fazer push no GitHub e importar no vercel.com
```

## Como adicionar screenshots dos projetos

Coloque os prints reais dentro de `public/screenshots/`:
- `public/screenshots/chat2order.png`
- `public/screenshots/mei-finance.png`
- `public/screenshots/clinica.png`

As imagens aparecem automaticamente nos cards de projeto. Se o arquivo não existir, aparece um placeholder elegante com instrução.

## Personalizar

- **Contato:** `src/data/contact.ts` — email, WhatsApp, GitHub, LinkedIn
- **Projetos:** `src/data/projects.ts` — descrições, links, terminal, tech stack
- **Traduções:** `src/i18n/translations.ts` — todos os textos PT/EN
- **Cores/Tokens:** `src/index.css` — variáveis CSS (`:root`)
