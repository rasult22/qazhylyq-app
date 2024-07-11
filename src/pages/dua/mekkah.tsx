import { useNavigate } from 'react-router-dom'
import ModuleHeader from '../../modules/header/module-header'
import UICell from '../../ui/cell/ui-cell'
import { useSystem } from '../../store/system'
import {
  al_haram_enter,
  al_haram_exit,
  bye_kaahbah_muaz,
  mekkah_enter,
  see_kaabah_muaz,
  zhannat_salem,
  at_multazam,
  hadisha_salem
} from '../../audios/mekkah'
import { t } from 'ttag'

const DuaMekkahPage = () => {
  const { setCurrentPrayer, showPlayerModal } = useSystem()
  const navigate = useNavigate()
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
            setCurrentPrayer(mekkah_enter)
            showPlayerModal()
          }}
        >
          {t`Мекке Мүкәррамаға кірерде оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(al_haram_enter)
            showPlayerModal()
          }}
        >
          {t`әл-Харамға кірерде оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(see_kaabah_muaz)
            showPlayerModal()
          }}
        >
          {t`Қағба муаззаманы көргенде оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(al_haram_exit)
            showPlayerModal()
          }}
        >
          {t`әл-Харамнан шығарда оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(at_multazam)
            showPlayerModal()
          }}
        >
          {t`Мүлтазамда оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(hadisha_salem)
            showPlayerModal()
          }}
        >
          {t`Хадиша анамызға сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(zhannat_salem)
            showPlayerModal()
          }}
        >
          {t`Жәннәт ул-мұғаллаға сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(bye_kaahbah_muaz)
            showPlayerModal()
          }}
        >
          {t`ҚАҒБА МУАЗЗАМАМЕН ҚОШТАСАРДА ОҚЫЛАТЫН ДҰҒА`}
        </UICell>
      </div>
    </>
  )
}

export default DuaMekkahPage
