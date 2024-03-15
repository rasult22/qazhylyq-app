import { useNavigate } from 'react-router-dom'
import ModuleHeader from '../../modules/header/module-header'
import UICell from '../../ui/cell/ui-cell'

const DuaArafatPage = () => {
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
        <UICell level={99}>Арафатқа барғанда оқылатын дұға</UICell>
        <UICell level={9}>Арафат дұғасы</UICell>
        <UICell level={8}>
          Арафаттан Мұздалифаға барар кезде оқылатын дұға
        </UICell>
      </div>
    </>
  )
}

export default DuaArafatPage
