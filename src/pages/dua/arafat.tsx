import { useNavigate } from 'react-router-dom'
import ModuleHeader from '../../modules/header/module-header'
import UICell from '../../ui/cell/ui-cell'
import { useSystem } from '../../store/system'
import { arafat_arrival, arafat, arafat_to_muzdalifa } from '../../audios/arafat'

const DuaArafatPage = () => {
  const navigate = useNavigate()
  const { setCurrentPrayer, showPlayerModal } = useSystem()
  return (
    <>
      <ModuleHeader
        onClick={() => {
          navigate('/qazhylyq-app/dua', {
            replace: true
          })
        }}
      />
      <div className="px-4 space-y-4 pt-2 pb-[80px]">
        <UICell
          onClick={() => {
            setCurrentPrayer(arafat_arrival)
            showPlayerModal()
          }}
          level={99}
        >
          Арафатқа барғанда оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(arafat)
            showPlayerModal()
          }}
          level={9}
        >
          Арафат дұғасы
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(arafat_to_muzdalifa)
            showPlayerModal()
          }}
          level={8}
        >
          Арафаттан Мұздалифаға барар кезде оқылатын дұға
        </UICell>
      </div>
    </>
  )
}

export default DuaArafatPage
