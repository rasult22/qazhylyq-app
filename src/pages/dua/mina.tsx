import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import ModuleHeader from '../../modules/header/module-header'

const DuaMinaPage = () => {
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
        <UICell level={99}>Минаға жеткенде оқылатын дұға</UICell>
        <UICell level={9}>Минадан Арафатқа шығар кезде оқылатын дұға</UICell>
        <UICell level={8}>Мұздалифадан кейін Минада оқылатын дұға</UICell>
      </div>
    </>
  )
}

export default DuaMinaPage
