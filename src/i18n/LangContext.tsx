import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang, Translations } from './translations'
import { translations } from './translations'

interface LangContextType {
  lang: Lang
  t: Translations
  toggle: () => void
}

const LangContext = createContext<LangContextType>({} as LangContextType)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  const toggle = () => setLang(l => (l === 'pt' ? 'en' : 'pt'))
  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
