import { t } from 'ttag'
import UIButton from '../../ui/button/ui-btn'
import { useSystem } from '../../store/system'

const InfoPage = () => {
  const { showLangSelector } = useSystem()
  return (
    <>
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
    </>
  )
}

export default InfoPage
