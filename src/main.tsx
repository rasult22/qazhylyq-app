import React from 'react'
import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import ModuleBottomNav from './modules/bottom-nav/module-bottom-nav'
import ModulePlayerModal from './modules/player-modal/module-player-modal'
import AnimatedRoutes from './AnimatedRoutes'
import ModuleOnboard from './modules/onboard/module-onboard'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <AnimatedRoutes />
        <div className="fixed bottom-0">
          <ModuleBottomNav></ModuleBottomNav>
        </div>
        <ModulePlayerModal />
        <ModuleOnboard />
      </BrowserRouter>
    </>
  </React.StrictMode>
)
