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
import { useEffect } from 'react'

const DuaMinaPage = () => {
  const navigate = useNavigate()
  const {
    showPlayerModal,
    setCurrentPrayer,
    duaCompletedIds,
    addDuaCompleteId
  } = useSystem()

  const checkIfAllPresent = () => {
    const elementsToCheck = [
      mina_after_muzdalifa.id,
      mina_arrival.id,
      mina_to_arafat.id
    ]
    const allPresent = elementsToCheck.every((id) =>
      duaCompletedIds.includes(id)
    )

    if (allPresent) {
      addDuaCompleteId('/dua/mina')
    }
  }
  useEffect(() => {
    if (duaCompletedIds.includes('/dua/mina')) {
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
          completed={duaCompletedIds.includes(mina_arrival.id)}
          onClick={() => {
            setCurrentPrayer(mina_arrival)
            showPlayerModal()
            addDuaCompleteId(mina_arrival.id)
          }}
        >
          {t`Минаға жеткенде оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(mina_to_arafat.id)}
          onClick={() => {
            setCurrentPrayer(mina_to_arafat)
            addDuaCompleteId(mina_to_arafat.id)
            showPlayerModal()
          }}
        >
          {t`Минадан Арафатқа шығар кезде оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(mina_after_muzdalifa.id)}
          onClick={() => {
            setCurrentPrayer(mina_after_muzdalifa)
            addDuaCompleteId(mina_after_muzdalifa.id)
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
