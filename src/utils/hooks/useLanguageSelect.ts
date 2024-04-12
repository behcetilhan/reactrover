import { useEffect, useState } from 'react'
import i18n from 'i18next'

export const useLanguageSelect = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language)
    }

    i18n.on('languageChanged', handleLanguageChange)

    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [])

  const handleLanguageSelect = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
  }

  return { currentLanguage, handleLanguageSelect }
}
