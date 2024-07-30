import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import { useSystem } from '../../store/system'
import {
  travel_begin,
  qurban,
  throwing_stone_shaitan,
  when_entering_car,
  hairhut,
  at_muzdalifa,
  talbiya
} from '../../audios/list'
import { t } from 'ttag'

const DuaPage = () => {
  const {
    showPlayerModal,
    setCurrentPrayer,
    duaCompletedIds,
    addDuaCompleteId
  } = useSystem()
  const navigate = useNavigate()
  return (
    <>
      <div className="px-4 space-y-4 pt-4 pb-[90px]">
        <UICell
          accent
          completed={duaCompletedIds.includes(talbiya.id)}
          onClick={() => {
            addDuaCompleteId(talbiya.id)
            setCurrentPrayer(talbiya)
            showPlayerModal()
          }}
        >
          {t`тәлбия`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(travel_begin.id)}
          onClick={() => {
            addDuaCompleteId(travel_begin.id)
            setCurrentPrayer(travel_begin)
            showPlayerModal()
          }}
        >
          {t`САПАРҒА ШЫҒАРДА ОҚЫЛАТЫН ДҰҒА`}
        </UICell>
        <UICell
          accent
          completed={duaCompletedIds.includes(when_entering_car.id)}
          onClick={() => {
            addDuaCompleteId(when_entering_car.id)
            setCurrentPrayer(when_entering_car)
            showPlayerModal()
          }}
        >
          {t`КӨЛІККЕ МІНЕРДЕ ОҚЫЛАТЫН ДҰҒА`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes('/dua/mekkah')}
          onClick={() => {
            navigate('/dua/mekkah')
          }}
          isLink
        >
          {t`Мекке Мүкәррама дұғалары`}
        </UICell>
        <UICell
          accent
          completed={duaCompletedIds.includes('/dua/mina')}
          onClick={() => {
            navigate('/dua/mina')
          }}
          isLink
        >
          {t`Минада оқылатын дұғалар`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes('/dua/arafat')}
          onClick={() => {
            navigate('/dua/arafat')
          }}
          isLink
        >
          {t`арафат дұғалары`}
        </UICell>
        <UICell
          accent
          completed={duaCompletedIds.includes(at_muzdalifa.id)}
          onClick={() => {
            addDuaCompleteId(at_muzdalifa.id)
            setCurrentPrayer(at_muzdalifa)
            showPlayerModal()
          }}
        >
          {t`Мұздалифа уақфасында оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(throwing_stone_shaitan.id)}
          onClick={() => {
            addDuaCompleteId(throwing_stone_shaitan.id)
            setCurrentPrayer(throwing_stone_shaitan)
            showPlayerModal()
          }}
        >
          {t`Шайтанға тас лақтырарда оқылатын дұға`}
        </UICell>
        <UICell
          accent
          completed={duaCompletedIds.includes(qurban.id)}
          onClick={() => {
            addDuaCompleteId(qurban.id)
            setCurrentPrayer(qurban)
            showPlayerModal()
          }}
        >
          {t`Құрбандық шаларда оқылатын дұға`}
        </UICell>
        <UICell
          completed={duaCompletedIds.includes(hairhut.id)}
          onClick={() => {
            addDuaCompleteId(hairhut.id)
            setCurrentPrayer(hairhut)
            showPlayerModal()
          }}
        >
          {t`Шаш аларда оқылатын дұға`}
        </UICell>
        <UICell
          accent
          completed={duaCompletedIds.includes('/dua/madina')}
          onClick={() => {
            navigate('/dua/madina')
          }}
          isLink
        >
          {t`Мәдина мүнәууара дұғалары`}
        </UICell>
      </div>
    </>
  )
}

export default DuaPage
