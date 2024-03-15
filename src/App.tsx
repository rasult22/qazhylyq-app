import { ReactElement } from 'react'
import ModuleMain from './modules/main/module-main'
import { motion } from 'framer-motion'

function App(): ReactElement {
  return (
    <motion.div
      initial={{
        opacity: 0.8,
        scale: 0.98
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        transition: {
          duration: 0.2
        }
      }}
      className="pb-[79px]"
    >
      <ModuleMain />
    </motion.div>
  )
}

export default App
