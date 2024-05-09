import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import { useSystem } from '../../store/system'
import {
  travel_begin,
  qurban,
  throwing_stone_shaitan,
  when_entering_car,
  hairhut
} from '../../audios/list'

const DuaPage = () => {
  const { showPlayerModal, setCurrentPrayer } = useSystem()
  const navigate = useNavigate()
  return (
    <>
      <div className="px-4 space-y-4 pt-4 pb-[90px]">
        <UICell
          onClick={() => {
            setCurrentPrayer(travel_begin)
            showPlayerModal()
          }}
          level={99}
        >
          САПАРҒА ШЫҒАРДА <br /> ОҚЫЛАТЫН ДҰҒА
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(when_entering_car)
            showPlayerModal()
          }}
          level={9}
        >
          КӨЛІККЕ МІНЕРДЕ ОҚЫЛАТЫН ДҰҒА
        </UICell>
        <UICell
          onClick={() => {
            navigate('/qazhylyq-app/dua/mekkah')
          }}
          isLink
          level={8}
        >
          Мекке Мүкәррама дұғалары
        </UICell>
        <UICell
          onClick={() => {
            navigate('/qazhylyq-app/dua/mina')
          }}
          isLink
          level={7}
        >
          Минада оқылатын дұғалар
        </UICell>
        <UICell
          onClick={() => {
            navigate('/qazhylyq-app/dua/arafat')
          }}
          level={6}
          isLink
        >
          арафат дұғалары
        </UICell>
        <UICell level={5}>Мұздалифа уақфасында оқылатын дұға</UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(throwing_stone_shaitan)
            showPlayerModal()
          }}
          level={5}
        >
          Шайтанға тас лақтырарда оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(qurban)
            showPlayerModal()
          }}
          level={5}
        >
          Құрбандық шаларда оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(hairhut)
            showPlayerModal()
          }}
          level={5}
        >
          Шаш аларда оқылатын дұға
        </UICell>
        <UICell
          onClick={() => {
            navigate('/qazhylyq-app/dua/madina')
          }}
          isLink
          level={5}
        >
          Мәдина мүнәууара дұғалары
        </UICell>
      </div>
    </>
  )
}

export default DuaPage
