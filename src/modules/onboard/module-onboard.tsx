import React, { useEffect, useState } from 'react'
import logo from './logo.png'
import { motion, AnimatePresence } from 'framer-motion'
import { t, useLocale } from 'ttag'

const ModuleOnboard: React.FC = () => {
  const locale = localStorage.getItem('locale') || 'kk-KZ'
  useLocale(locale)

  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false)
    }, 2000)
  }, [])
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.4 }}
            className={`fixed top-0 w-full h-full bg-white flex flex-col items-center justify-center`}
          >
            <img
              className="w-[248px] mb-[40px]"
              src={logo}
              alt="Module Onboard"
            />
            <h1 className="text-[24px] max-w-[320px] px-6 text-center leading-[28px] text-[#B19576] uppercase font-bold mb-4">
              {t`Қажылық және ұмра дұғалары`}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ModuleOnboard
