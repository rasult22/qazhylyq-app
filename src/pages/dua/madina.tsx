import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import ModuleHeader from '../../modules/header/module-header'

const DuaMadinaPage = () => {
  const navigate = useNavigate()
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
        <UICell level={99}>Мәдина мүнәууараға кірерде оқылатын дұға</UICell>
        <UICell level={9}>Пайғамбарымызға (с.а.у.) сәлем беру</UICell>
        <UICell level={8}>Хазірет Әбу Бәкірге  (р.а.) сәлем беру</UICell>
        <UICell level={7}>Хазірет Омарға  (р.а.) сәлем беру</UICell>
        <UICell level={6}>Бақи жұртына сәлем беру</UICell>
        <UICell level={5}>Хазірет Османға  (р.а.) сәлем беру</UICell>
        <UICell level={5}>Ұхұд шейіттеріне сәлем беру</UICell>
        <UICell level={5}>Пайғамбарымызбен (с.а.у.) қоштасардағы дұға</UICell>
      </div>
    </>
  )
}

export default DuaMadinaPage
