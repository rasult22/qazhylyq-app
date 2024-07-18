import { motion, AnimatePresence } from 'framer-motion'
import { t } from 'ttag'
import { useSystem } from '../../store/system'

const ModuleInfoModal = () => {
  const { closeInfoModal, infoModalIsOpen } = useSystem()
  return (
    <>
      <AnimatePresence>
        {infoModalIsOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            onClick={() => {
              closeInfoModal()
            }}
            className="fixed w-full h-full z-[1000] top-0 left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
          >
            <div
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                console.log('content click')
              }}
              className="pt-10 px-6 z-[]"
            >
              <div className="border-[8px] shadow-inner text-[#606060] font-semibold bg-[#E4D8CA] border-[#C1AB93] rounded-[12px] px-3 py-6 min-h-[70vh]">
                {t`Тауапқа бастамас бұрын, Хажар ул-әсуад тұсында жүрекпен: «Уа, Алла! Сені әлмисақтан қабылдадым. Дүниеге келіп, Сенің мейіріміңмен Сені тағы қабылдадым. Ал, енді мейірімің мен жомарттығыңның арқасында Сенің үйіңе келдім. Хажар ул-әсуадтың ішінде сақталған уәдем мен жүрегімдегі уәдемді  салыстырып, уәдемді жаңартуға келдім. Бисмилләһи, Аллаһу әкбар!» деп сәлем береді. Сонан соң тауапқа бастау дұғасын оқиды.`}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ModuleInfoModal
