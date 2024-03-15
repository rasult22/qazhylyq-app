import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'

const DuaPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="px-4 space-y-4 pt-4 pb-[90px]">
        <UICell level={99}>
          САПАРҒА ШЫҒАРДА <br /> ОҚЫЛАТЫН ДҰҒА
        </UICell>
        <UICell level={9}>КӨЛІККЕ МІНЕРДЕ ОҚЫЛАТЫН ДҰҒА</UICell>
        <UICell level={8}>Мекке Мүкәррама дұғалары</UICell>
        <UICell
          onClick={() => {
            navigate('/dua/mekkah')
          }}
          isLink
          level={7}
        >
          Мекке Мүкәррама дұғалары
        </UICell>
        <UICell
          onClick={() => {
            navigate('/dua/mina')
          }}
          isLink
          level={6}
        >
          Минада оқылатын дұғалар
        </UICell>
        <UICell
          onClick={() => {
            navigate('/dua/arafat')
          }}
          level={5}
          isLink
        >
          арафат дұғалары
        </UICell>
        <UICell level={5}>Мұздалифа уақфасында оқылатын дұға</UICell>
        <UICell level={5}>Шайтанға тас лақтырарда оқылатын дұға</UICell>
        <UICell level={5}>Құрбандық шаларда оқылатын дұға</UICell>
        <UICell level={5}>Шаш аларда оқылатын дұға</UICell>
        <UICell
          onClick={() => {
            navigate('/dua/madina')
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
