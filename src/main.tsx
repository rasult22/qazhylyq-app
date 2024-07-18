import React, { useEffect } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { addLocale } from 'ttag'

import ModuleBottomNav from './modules/bottom-nav/module-bottom-nav'
import ModulePlayerModal from './modules/player-modal/module-player-modal'
import AnimatedRoutes from './AnimatedRoutes'
import ModuleOnboard from './modules/onboard/module-onboard'
import ModuleLangSelect from './modules/lang-select/module-lang-select'
import { useLocale } from 'ttag'

import totosheLang from './l10n/tt-KZ.po.json'
import russianLang from './l10n/ru-RU.po.json'
import { Locale, useSystem } from './store/system'

addLocale('ru-RU', russianLang)
addLocale('tt-KZ', totosheLang)

const App: React.FC = () => {
  const locale = localStorage.getItem('locale') || 'kk-KZ'
  useLocale(locale)
  const { setLocale } = useSystem()
  useEffect(() => {
    setLocale(locale as Locale)
  }, [])
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <div className="fixed bottom-0">
        <ModuleBottomNav></ModuleBottomNav>
      </div>
      <ModulePlayerModal />
      <ModuleOnboard />
      <ModuleLangSelect />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>
)
