import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/locales/en.json'
import de from '@/locales/de.json'

export const initI18n = () => {
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    }
  })
}
