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

const AnimatedRoutes: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/mountain" element={<MountainPage />} />
          <Route path="/dua" element={<DuaPage />} />
          <Route path="/dua/mekkah" element={<DuaMekkahPage />} />
          <Route path="/dua/mina" element={<DuaMinaPage />} />
          <Route path="/dua/arafat" element={<DuaArafatPage />} />
          <Route path="/dua/madina" element={<DuaMadinaPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes
