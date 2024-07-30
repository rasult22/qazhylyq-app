import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import ModuleHeader from '../../modules/header/module-header'
import { useSystem } from '../../store/system'
import {
  abubakr_salaam,
  baqi_salaam,
  madina_enter,
  prophet_bye,
  prophet_salaam,
  uhud_warriors_salaam,
  umar_salaam,
  usman_salaam
} from '../../audios/medina'
import { t } from 'ttag'
import { useEffect } from 'react'

const DuaMadinaPage = () => {
  const {
    setCurrentPrayer,
    showPlayerModal,
    duaCompletedIds,
    addDuaCompleteId
  } = useSystem()
  const navigate = useNavigate()
  const checkIfAllPresent = () => {
    const elementsToCheck = [
      abubakr_salaam.id,
      baqi_salaam.id,
      madina_enter.id,
      prophet_bye.id,
      prophet_salaam.id,
      uhud_warriors_salaam.id,
      umar_salaam.id,
      usman_salaam.id
    ]

    const allPresent = elementsToCheck.every((id) =>
      duaCompletedIds.includes(id)
    )

    if (allPresent) {
      addDuaCompleteId('/dua/madina')
    }
  }
  useEffect(() => {
    if (duaCompletedIds.includes('/dua/madina')) {
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
          navigate('/dua', {
            replace: true
          })
        }}
      />
      <div className="px-4 space-y-4 pt-2 pb-[80px]">
        <UICell
          completed={duaCompletedIds.includes(madina_enter.id)}
          onClick={() => {
            setCurrentPrayer(madina_enter)
            addDuaCompleteId(madina_enter.id)
            showPlayerModal()
          }}
        >
          {t`Мәдина мүнәууараға кірерде оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(prophet_salaam.id)}
          onClick={() => {
            setCurrentPrayer(prophet_salaam)
            addDuaCompleteId(prophet_salaam.id)
            showPlayerModal()
          }}
        >
          {t`Пайғамбарымызға (с.а.у.) сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(abubakr_salaam.id)}
          onClick={() => {
            setCurrentPrayer(abubakr_salaam)
            addDuaCompleteId(abubakr_salaam.id)
            showPlayerModal()
          }}
        >
          {t`Әбу Бәкірге (р.а.) сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(umar_salaam.id)}
          onClick={() => {
            setCurrentPrayer(umar_salaam)
            addDuaCompleteId(umar_salaam.id)
            showPlayerModal()
          }}
        >
          {t`Омарға (р.а.) сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(baqi_salaam.id)}
          onClick={() => {
            setCurrentPrayer(baqi_salaam)
            addDuaCompleteId(baqi_salaam.id)
            showPlayerModal()
          }}
        >
          {t`Бақи жұртына сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(usman_salaam.id)}
          onClick={() => {
            setCurrentPrayer(usman_salaam)
            addDuaCompleteId(usman_salaam.id)
            showPlayerModal()
          }}
        >
          {t`Османға (р.а.) сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(uhud_warriors_salaam.id)}
          onClick={() => {
            setCurrentPrayer(uhud_warriors_salaam)
            addDuaCompleteId(uhud_warriors_salaam.id)
            showPlayerModal()
          }}
        >
          {t`Ұхұд шейіттеріне сәлем беру`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(prophet_bye.id)}
          onClick={() => {
            setCurrentPrayer(prophet_bye)
            addDuaCompleteId(prophet_bye.id)
            showPlayerModal()
          }}
        >
          {t`Пайғамбарымызбен (с.а.у.) қоштасардағы дұға`}
        </UICell>
      </div>
    </>
  )
}

export default DuaMadinaPage
