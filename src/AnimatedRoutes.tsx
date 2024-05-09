import { Route, Routes, useLocation } from 'react-router-dom'
import MountainPage from './pages/mountain'
import InfoPage from './pages/info'
import DuaPage from './pages/dua'
import DuaMekkahPage from './pages/dua/mekkah'
import DuaArafatPage from './pages/dua/arafat'
import DuaMadinaPage from './pages/dua/madina'
import App from './App'
import DuaMinaPage from './pages/dua/mina'
import { AnimatePresence } from 'framer-motion'
import { initSafeArea } from './utils/safeArea'
import { useEffect } from 'react'

const AnimatedRoutes: React.FC = () => {
  const location = useLocation()
  useEffect(() => {
    initSafeArea()
  }, [])
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/qazhylyq-app" element={<App />} />
          <Route path="/qazhylyq-app/mountain" element={<MountainPage />} />
          <Route path="/qazhylyq-app/dua" element={<DuaPage />} />
          <Route path="/qazhylyq-app/dua/mekkah" element={<DuaMekkahPage />} />
          <Route path="/qazhylyq-app/dua/mina" element={<DuaMinaPage />} />
          <Route path="/qazhylyq-app/dua/arafat" element={<DuaArafatPage />} />
          <Route path="/qazhylyq-app/dua/madina" element={<DuaMadinaPage />} />
          <Route path="/qazhylyq-app/info" element={<InfoPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes
