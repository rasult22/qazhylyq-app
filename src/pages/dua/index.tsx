import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import { useSystem } from '../../store/system'
import {
  travel_begin,
  qurban,
  throwing_stone_shaitan,
  when_entering_car,
  hairhut,
  at_muzdalifa
} from '../../audios/list'
import { t } from 'ttag'

const DuaPage = () => {
  const { showPlayerModal, setCurrentPrayer } = useSystem()
  const navigate = useNavigate()
  return (
    <>
      <div className="px-4 space-y-4 pt-4 pb-[90px]">
        <UICell
          accent
          onClick={() => {
            setCurrentPrayer(travel_begin)
            showPlayerModal()
          }}
        >
          {t`тәлбия`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(travel_begin)
            showPlayerModal()
          }}
        >
          {t`САПАРҒА ШЫҒАРДА ОҚЫЛАТЫН ДҰҒА`}
        </UICell>
        <UICell
          accent
          onClick={() => {
            setCurrentPrayer(when_entering_car)
            showPlayerModal()
          }}
        >
          {t`КӨЛІККЕ МІНЕРДЕ ОҚЫЛАТЫН ДҰҒА`}
        </UICell>
        <UICell
          onClick={() => {
            navigate('/qazhylyq-app/dua/mekkah')
          }}
          isLink
        >
          {t`Мекке Мүкәррама дұғалары`}
        </UICell>
        <UICell
          accent
          onClick={() => {
            navigate('/qazhylyq-app/dua/mina')
          }}
          isLink
        >
          {t`Минада оқылатын дұғалар`}
        </UICell>
        <UICell
          onClick={() => {
            navigate('/qazhylyq-app/dua/arafat')
          }}
          isLink
        >
          {t`арафат дұғалары`}
        </UICell>
        <UICell
          accent
          onClick={() => {
            setCurrentPrayer(at_muzdalifa)
            showPlayerModal()
          }}
        >
          {t`Мұздалифа уақфасында оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(throwing_stone_shaitan)
            showPlayerModal()
          }}
        >
          {t`Шайтанға тас лақтырарда оқылатын дұға`}
        </UICell>
        <UICell
          accent
          onClick={() => {
            setCurrentPrayer(qurban)
            showPlayerModal()
          }}
        >
          {t`Құрбандық шаларда оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(hairhut)
            showPlayerModal()
          }}
        >
          {t`Шаш аларда оқылатын дұға`}
        </UICell>
        <UICell
          accent
          onClick={() => {
            navigate('/qazhylyq-app/dua/madina')
          }}
          isLink
        >
          {t`Мәдина мүнәууара дұғалары`}`
        </UICell>
      </div>
    </>
  )
}

export default DuaPage
