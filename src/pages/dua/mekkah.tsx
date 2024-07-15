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
import { useEffect } from 'react'

const DuaMekkahPage = () => {
  const {
    setCurrentPrayer,
    showPlayerModal,
    duaCompletedIds,
    addDuaCompleteId
  } = useSystem()
  const navigate = useNavigate()

  const checkIfAllPresent = () => {
    const elementsToCheck = [
      mekkah_enter.id,
      al_haram_exit.id,
      bye_kaahbah_muaz.id,
      mekkah_enter.id,
      see_kaabah_muaz.id,
      zhannat_salem.id,
      at_multazam.id,
      hadisha_salem.id
    ]

    const allPresent = elementsToCheck.every((id) =>
      duaCompletedIds.includes(id)
    )

    if (allPresent) {
      addDuaCompleteId('/dua/mekkah')
    }
  }

  useEffect(() => {
    if (duaCompletedIds.includes('/dua/mekkah')) {
      return
    }
    if (duaCompletedIds.length > 7) {
      checkIfAllPresent()
    }
  }, [duaCompletedIds])
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
          completed={duaCompletedIds.includes(mekkah_enter.id)}
          onClick={() => {
            addDuaCompleteId(mekkah_enter.id)
            setCurrentPrayer(mekkah_enter)
            showPlayerModal()
          }}
        >
          {t`Мекке Мүкәррамаға кірерде оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(al_haram_enter.id)}
          onClick={() => {
            addDuaCompleteId(al_haram_enter.id)
            setCurrentPrayer(al_haram_enter)
            showPlayerModal()
          }}
        >
          {t`әл-Харамға кірерде оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(see_kaabah_muaz.id)}
          onClick={() => {
            addDuaCompleteId(see_kaabah_muaz.id)
            setCurrentPrayer(see_kaabah_muaz)
            showPlayerModal()
          }}
        >
          {t`Қағба муаззаманы көргенде оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(al_haram_exit.id)}
          onClick={() => {
            addDuaCompleteId(al_haram_exit.id)
            setCurrentPrayer(al_haram_exit)
            showPlayerModal()
            checkIfAllPresent()
          }}
        >
          {t`әл-Харамнан шығарда оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(at_multazam.id)}
          onClick={() => {
            addDuaCompleteId(at_multazam.id)
            setCurrentPrayer(at_multazam)
            showPlayerModal()
          }}
        >
          {t`Мүлтазамда оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(hadisha_salem.id)}
          onClick={() => {
            addDuaCompleteId(hadisha_salem.id)
            setCurrentPrayer(hadisha_salem)
            showPlayerModal()
          }}
        >
          {t`Хадиша анамызға сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(zhannat_salem.id)}
          onClick={() => {
            addDuaCompleteId(zhannat_salem.id)
            setCurrentPrayer(zhannat_salem)
            showPlayerModal()
          }}
        >
          {t`Жәннәт ул-мұғаллаға сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(bye_kaahbah_muaz.id)}
          onClick={() => {
            addDuaCompleteId(bye_kaahbah_muaz.id)
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
