/** Rodapé com assinatura técnica: ano, stack do próprio site e versão do build. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap meta flex flex-wrap justify-between gap-3 py-6 text-fg-3">
        <span>© {new Date().getFullYear()} César Danilo</span>
        <span>React · Vite · Tailwind</span>
        <span>build {__BUILD_SHA__}</span>
      </div>
    </footer>
  )
}
