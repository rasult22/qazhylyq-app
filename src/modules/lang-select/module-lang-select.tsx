import React, { useState } from 'react'
import UIButtonFull from '../../ui/button/ui-btn-full'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale, useSystem } from '../../store/system'
import { useLocale } from 'ttag'

const ModuleLangSelect: React.FC = () => {
  const initLangSelected = localStorage.getItem('init_lang_selected')
  const { langSelectorIsOpen, hideLangSelector, setLocale } = useSystem()

  const langs = [
    { name: 'Қазақша', val: 'kk-KZ' },
    { name: 'Русский', val: 'ru-RU' },
    { name: 'Төтеше', val: 'tt-KZ' }
  ]
  return (
    <>
      <AnimatePresence>
        {(!initLangSelected || langSelectorIsOpen) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.4 }}
            className="fixed top-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-[24px] px-[18px]"
          >
            {langs.map((l) => {
              return (
                <UIButtonFull
                  onClick={() => {
                    if (!initLangSelected) {
                      localStorage.setItem('init_lang_selected', 'true')
                    }
                    localStorage.setItem('locale', l.val)
                    useLocale(l.val)
                    setLocale(l.val as Locale)
                    hideLangSelector()
                  }}
                  key={l.val}
                >
                  {l.name}
                </UIButtonFull>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ModuleLangSelect
