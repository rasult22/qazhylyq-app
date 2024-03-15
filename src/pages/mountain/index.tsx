import ModuleMountain from '../../modules/mountain/module-mountain'
import { motion } from 'framer-motion'

const MountainPage = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0.8,
          scale: 0.98
        }}
        animate={{
          translateX: '0%',
          opacity: 1,
          scale: 1
        }}
        exit={{
          transition: {
            duration: 0.01
          }
        }}
        className="pb-[79px]"
      >
        <ModuleMountain />
      </motion.div>
    </>
  )
}

export default MountainPage
