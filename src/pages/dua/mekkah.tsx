import { useNavigate } from 'react-router-dom'
import ModuleHeader from '../../modules/header/module-header'
import UICell from '../../ui/cell/ui-cell'

const DuaMekkahPage = () => {
  const navigate = useNavigate()
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
        <UICell level={99}>Мекке Мүкәррамаға кірерде оқылатын дұға</UICell>
        <UICell level={9}>әл-Харамға кірерде оқылатын дұға</UICell>
        <UICell level={8}>Қағба муаззаманы көргенде оқылатын дұға</UICell>
        <UICell level={7}>әл-Харамнан шығарда оқылатын дұға</UICell>
        <UICell level={6}>Мүлтазамда оқылатын дұға</UICell>
        <UICell level={5}>Хадиша анамызға сәлем беру</UICell>
        <UICell level={5}>Жәннәт ул-мұғаллаға сәлем беру</UICell>
        <UICell level={5}>ҚАҒБА МУАЗЗАМАМЕН ҚОШТАСАРДА ОҚЫЛАТЫН ДҰҒА</UICell>
      </div>
    </>
  )
}

export default DuaMekkahPage
