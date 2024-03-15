import React from 'react'
import './App.css'
import './index.css'
import App from './App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import MountainPage from './pages/mountain'
import InfoPage from './pages/info'
import DuaPage from './pages/dua'
import DuaMekkahPage from './pages/dua/mekkah'
import DuaArafatPage from './pages/dua/arafat'
import DuaMadinaPage from './pages/dua/madina'
import DuaMinaPage from './pages/dua/madina'

import ModuleBottomNav from './modules/bottom-nav/module-bottom-nav'
import ModulePlayerModal from './modules/player-modal/module-player-modal'
createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mountain" element={<MountainPage />} />
          <Route path="/dua" element={<DuaPage />} />
          <Route path="/dua/mekkah" element={<DuaMekkahPage />} />
          <Route path="/dua/mina" element={<DuaMinaPage />} />
          <Route path="/dua/arafat" element={<DuaArafatPage />} />
          <Route path="/dua/madina" element={<DuaMadinaPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        <div className="fixed bottom-0">
          <ModuleBottomNav></ModuleBottomNav>
        </div>
        <ModulePlayerModal />
      </BrowserRouter>
    </>
  </React.StrictMode>
)
