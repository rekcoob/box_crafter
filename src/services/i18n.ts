import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from '../locales/en/translation.json'
import skTranslation from '../locales/sk/translation.json'

// Získaj jazyk z localStorage, alebo použij predvolený
const savedLanguage = localStorage.getItem('language') || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    sk: { translation: skTranslation },
  },
  lng: savedLanguage, // Nastav jazyk z localStorage alebo predvolený jazyk
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

// Ulož jazyk do localStorage vždy, keď sa zmení
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
})

export default i18n
