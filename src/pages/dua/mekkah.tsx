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
          level={99}
        >
          Мекке Мүкәррамаға кірерде оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(al_haram_enter)
            showPlayerModal()
          }}
          level={9}
        >
          әл-Харамға кірерде оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(see_kaabah_muaz)
            showPlayerModal()
          }}
          level={8}
        >
          Қағба муаззаманы көргенде оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(al_haram_exit)
            showPlayerModal()
          }}
          level={7}
        >
          әл-Харамнан шығарда оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(at_multazam)
            showPlayerModal()
          }}
          level={6}
        >
          Мүлтазамда оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(hadisha_salem)
            showPlayerModal()
          }}
          level={5}
        >
          Хадиша анамызға сәлем беру
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(zhannat_salem)
            showPlayerModal()
          }}
          level={5}
        >
          Жәннәт ул-мұғаллаға сәлем беру
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(bye_kaahbah_muaz)
            showPlayerModal()
          }}
          level={5}
        >
          ҚАҒБА МУАЗЗАМАМЕН ҚОШТАСАРДА ОҚЫЛАТЫН ДҰҒА
        </UICell>
      </div>
    </>
  )
}

export default DuaMekkahPage
