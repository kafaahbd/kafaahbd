import { createContext, useState, useContext } from 'react'
import { content } from '../data/content'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en') // 'en' or 'bn'

  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'bn' : 'en')

  const t = (key) => {
    return content[lang][key] || content.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}