import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import ModuleHeader from '../../modules/header/module-header'
import { useSystem } from '../../store/system'
import {
  mina_after_muzdalifa,
  mina_arrival,
  mina_to_arafat
} from '../../audios/mina'
import { t } from 'ttag'

const DuaMinaPage = () => {
  const navigate = useNavigate()
  const { showPlayerModal, setCurrentPrayer } = useSystem()
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
            setCurrentPrayer(mina_arrival)
            showPlayerModal()
          }}
        >
          {t`Минаға жеткенде оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(mina_to_arafat)
            showPlayerModal()
          }}
        >
          {t`Минадан Арафатқа шығар кезде оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(mina_after_muzdalifa)
            showPlayerModal()
          }}
        >
          {t`Мұздалифадан кейін Минада оқылатын дұға`}
        </UICell>
      </div>
    </>
  )
}

export default DuaMinaPage
