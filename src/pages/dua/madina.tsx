import { useNavigate } from 'react-router-dom'
import UICell from '../../ui/cell/ui-cell'
import ModuleHeader from '../../modules/header/module-header'
import { useSystem } from '../../store/system'
import {
  abubakr_salaam,
  baqi_salaam,
  madina_enter,
  prophet_bye,
  prophet_salaam,
  uhud_warriors_salaam,
  umar_salaam,
  usman_salaam
} from '../../audios/medina'
import { t } from 'ttag'

const DuaMadinaPage = () => {
  const { setCurrentPrayer, showPlayerModal } = useSystem()
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
        <UICell
          onClick={() => {
            setCurrentPrayer(madina_enter)
            showPlayerModal()
          }}
        >
          {t`Мәдина мүнәууараға кірерде оқылатын дұға`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(prophet_salaam)
            showPlayerModal()
          }}
        >
          {t`Пайғамбарымызға (с.а.у.) сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(abubakr_salaam)
            showPlayerModal()
          }}
        >
          {t`Әбу Бәкірге (р.а.) сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(umar_salaam)
            showPlayerModal()
          }}
        >
          {t`Омарға (р.а.) сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(baqi_salaam)
            showPlayerModal()
          }}
        >
          {t`Бақи жұртына сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(usman_salaam)
            showPlayerModal()
          }}
        >
          {t`Османға (р.а.) сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(uhud_warriors_salaam)
            showPlayerModal()
          }}
        >
          {t`Ұхұд шейіттеріне сәлем беру`}
        </UICell>
        <UICell
          onClick={() => {
            setCurrentPrayer(prophet_bye)
            showPlayerModal()
          }}
        >
          {t`Пайғамбарымызбен (с.а.у.) қоштасардағы дұға`}
        </UICell>
      </div>
    </>
  )
}

export default DuaMadinaPage
