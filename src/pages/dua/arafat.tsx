import { useNavigate } from 'react-router-dom'
import ModuleHeader from '../../modules/header/module-header'
import UICell from '../../ui/cell/ui-cell'
import { useSystem } from '../../store/system'
import {
  arafat_arrival,
  arafat,
  arafat_to_muzdalifa
} from '../../audios/arafat'
import { t } from 'ttag'
import { useEffect } from 'react'

const DuaArafatPage = () => {
  const navigate = useNavigate()
  const {
    setCurrentPrayer,
    showPlayerModal,
    duaCompletedIds,
    addDuaCompleteId
  } = useSystem()

  const checkIfAllPresent = () => {
    const elementsToCheck = [
      arafat_arrival.id,
      arafat.id,
      arafat_to_muzdalifa.id
    ]
    const allPresent = elementsToCheck.every((id) =>
      duaCompletedIds.includes(id)
    )

    if (allPresent) {
      addDuaCompleteId('/dua/arafat')
    }
  }

  useEffect(() => {
    if (duaCompletedIds.includes('/dua/arafat')) {
      return
    }
    if (duaCompletedIds.length > 2) {
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
          completed={duaCompletedIds.includes(arafat_arrival.id)}
          onClick={() => {
            setCurrentPrayer(arafat_arrival)
            addDuaCompleteId(arafat_arrival.id)
            showPlayerModal()
          }}
        >
          {t`Арафатқа барғанда оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(arafat.id)}
          onClick={() => {
            setCurrentPrayer(arafat)
            addDuaCompleteId(arafat.id)
            showPlayerModal()
          }}
        >
          {t`Арафат дұғасы`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(arafat_to_muzdalifa.id)}
          onClick={() => {
            setCurrentPrayer(arafat_to_muzdalifa)
            addDuaCompleteId(arafat_to_muzdalifa.id)
            showPlayerModal()
          }}
        >
          {t`Арафаттан Мұздалифаға барар кезде оқылатын дұға`}
        </UICell>
      </div>
    </>
  )
}

export default DuaArafatPage
