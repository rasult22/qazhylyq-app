import { t } from 'ttag'
import UIButton from '../../ui/button/ui-btn'
import { useSystem } from '../../store/system'
import { motion } from 'framer-motion'

const InfoPage = () => {
  const { showLangSelector } = useSystem()
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
        <div className="pt-10 px-6">
          <div className="border-[8px] shadow-inner text-[#606060] font-semibold bg-[#E4D8CA] border-[#C1AB93] rounded-[12px] px-3 py-6 min-h-[70vh]">
            Информация...
          </div>
          <div className="mt-4">
            <UIButton
              onClick={() => showLangSelector()}
              className="w-full"
            >{t`Тіл ауыстыру`}</UIButton>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default InfoPage
