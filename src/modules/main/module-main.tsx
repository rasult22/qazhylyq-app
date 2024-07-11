import React from 'react'
import UIButton from '../../ui/button/ui-btn'
import kaaba from './kaaba.svg'
import arrows from './arrows.svg'
import {
  tavaf_begin,
  tavaf_end,
  ibrahim,
  iraq_and_sham,
  sham_and_yemen,
  yemen_and_hajar,
  multazam
} from '../../audios/buttons'
import { useSystem } from '../../store/system'
import circles from '../../audios/circles'
import { t } from 'ttag'
import { useNavigate } from 'react-router-dom'
const ModuleMain: React.FC = () => {
  const navigate = useNavigate()
  const { showPlayerModal, setCurrentPrayer, completedIds, addCompleteId } =
    useSystem()

  const onCircleClick = (n: number) => {
    setCurrentPrayer(circles[n])
    if (circles[n - 1]) {
      if (completedIds.includes(circles[n - 1].id)) {
        addCompleteId(circles[n].id)
      }
    } else {
      addCompleteId(circles[n].id)
    }
    showPlayerModal()
  }
  return (
    <div>
      <div className="mt-[-110%]">
        <svg height="1130" width="100%">
          <Circle7
            completed={completedIds.includes(circles[6].id)}
            onClick={() => onCircleClick(6)}
          />
          <Circle6
            completed={completedIds.includes(circles[5].id)}
            onClick={() => onCircleClick(5)}
          />
          <Circle5
            completed={completedIds.includes(circles[4].id)}
            onClick={() => onCircleClick(4)}
          />
          <Circle4
            completed={completedIds.includes(circles[3].id)}
            onClick={() => onCircleClick(3)}
          />
          <Circle3
            completed={completedIds.includes(circles[2].id)}
            onClick={() => onCircleClick(2)}
          />
          <Circle2
            completed={completedIds.includes(circles[1].id)}
            onClick={() => onCircleClick(1)}
          />
          <Circle1
            completed={completedIds.includes(circles[0].id)}
            onClick={() => onCircleClick(0)}
          />
        </svg>
      </div>
      <div className="px-4">
        <div className="flex space-x-[11px] items-stretch">
          <UIButton
            onClick={() => {
              navigate('/qazhylyq-app/info')
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 3.66667C10.5523 3.66667 11 4.11438 11 4.66667V5C11 5.55228 10.5523 6 10 6C9.44772 6 9 5.55228 9 5V4.66667C9 4.11438 9.44772 3.66667 10 3.66667ZM9.99909 16.3333C9.4468 16.3328 8.9995 15.8847 9 15.3324L9.00639 8.33242C9.00689 7.78014 9.45502 7.33283 10.0073 7.33333C10.5596 7.33384 11.0069 7.78196 11.0064 8.33425L11 15.3342C10.9995 15.8865 10.5514 16.3338 9.99909 16.3333ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                fill="#A2815D"
              />
            </svg>
          </UIButton>
          <UIButton
            completed={completedIds.includes(tavaf_begin.id)}
            onClick={() => {
              addCompleteId(tavaf_begin.id)
              setCurrentPrayer(tavaf_begin)
              showPlayerModal()
            }}
            className="w-full normal-case"
          >
            {t`Таупқа бастау дұғасы`}
          </UIButton>
        </div>
        <UIButton
          completed={completedIds.includes(tavaf_end.id)}
          onClick={() => {
            addCompleteId(tavaf_end.id)
            setCurrentPrayer(tavaf_end)
            showPlayerModal()
          }}
          className="mt-[18px] w-full normal-case"
        >
          {t`Тауап намазынан кейін оқылатын дұға`}
        </UIButton>
      </div>
      <div className="relative flex justify-center pt-10 pb-10 mt-5">
        <img className="w-[361px]" src={arrows} alt="" />
        <UIButton
          completed={completedIds.includes(sham_and_yemen.id)}
          onClick={() => {
            addCompleteId(sham_and_yemen.id)
            setCurrentPrayer(sham_and_yemen)
            showPlayerModal()
          }}
          className="w-[85%] max-w-[320px] max-h-[70px] absolute top-[10px] left-[49px] normal-case"
        >
          {t`Шам бұрышы және Йемен бұрышы арасында оқылатын дұға`}
        </UIButton>
        <UIButton
          completed={completedIds.includes(yemen_and_hajar.id)}
          onClick={() => {
            addCompleteId(yemen_and_hajar.id)
            setCurrentPrayer(yemen_and_hajar)
            showPlayerModal()
          }}
          className="w-[80%] absolute top-[80px] right-[45px] normal-case"
        >
          {t`Йемен бұрышы және Хажар ул-әсуад арасында оқылатын дұға`}
        </UIButton>
        <UIButton
          completed={completedIds.includes(iraq_and_sham.id)}
          onClick={() => {
            addCompleteId(iraq_and_sham.id)
            setCurrentPrayer(iraq_and_sham)
            showPlayerModal()
          }}
          className="w-[75%] absolute bottom-[137px] right-[45px] normal-case"
        >
          {t`Ирак бұрышы мен Шам бұрышы арасында оқылатын дұға`}
        </UIButton>
        <UIButton
          completed={completedIds.includes(ibrahim.id)}
          onClick={() => {
            addCompleteId(ibrahim.id)
            setCurrentPrayer(ibrahim)
            showPlayerModal()
          }}
          className="w-[75%] absolute bottom-[75px] right-[40px] normal-case"
        >
          {t`Ибраһим мақамы тұсында оқылатын дұға`}
        </UIButton>
        <UIButton
          completed={completedIds.includes(multazam.id)}
          onClick={() => {
            addCompleteId(multazam.id)
            setCurrentPrayer(multazam)
            showPlayerModal()
          }}
          className="w-[75%] absolute bottom-[25px] right-[40px] normal-case"
        >
          {t`Мүлтәзамда оқылатын дұға`}
        </UIButton>
      </div>
    </div>
  )
}

export default ModuleMain

const Circle1: React.FC<{ completed?: boolean; onClick?: () => void }> = ({
  completed = false,
  onClick = () => {}
}) => {
  return (
    <>
      <g className="relative">
        <circle
          onClick={() => {
            onClick()
          }}
          className="drop-shadow-custom active:opacity-[0.8] transition-opacity"
          cx="50%"
          cy="50%"
          r="100"
          stroke={completed ? '#76B177' : '#E0D5C9'}
          strokeWidth="40"
          fill="transparent"
        ></circle>

        <image
          className="translate-x-[-30px] translate-y-[-35px]"
          width={60}
          height={70}
          x="50%"
          y="50%"
          href={kaaba}
        />
        <text
          onClick={() => {
            onClick()
          }}
          x="50%"
          y="59.2%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          1-{t`айналым`}
        </text>
      </g>
    </>
  )
}
const Circle2: React.FC<{ completed?: boolean; onClick?: () => void }> = ({
  completed = false,
  onClick = () => {}
}) => {
  return (
    <>
      <g className="relative">
        <circle
          onClick={() => {
            onClick()
          }}
          className="drop-shadow-custom active:opacity-[0.8] transition-opacity"
          cx="50%"
          cy="50%"
          r="170"
          stroke={completed ? '#76B177' : '#E0D5C9'}
          strokeWidth="40"
          fill="transparent"
        ></circle>
        <text
          onClick={() => {
            onClick()
          }}
          x="50%"
          y="65.5%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          2-{t`айналым`}
        </text>
      </g>
    </>
  )
}
const Circle3: React.FC<{ completed?: boolean; onClick?: () => void }> = ({
  completed = false,
  onClick = () => {}
}) => {
  return (
    <>
      <g className="relative">
        <circle
          onClick={() => {
            onClick()
          }}
          className="drop-shadow-custom active:opacity-[0.8] transition-opacity"
          cx="50%"
          cy="50%"
          r="240"
          stroke={completed ? '#76B177' : '#E0D5C9'}
          strokeWidth="40"
          fill="transparent"
        ></circle>
        <text
          onClick={() => {
            onClick()
          }}
          x="50%"
          y="71.6%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          3-{t`айналым`}
        </text>
      </g>
    </>
  )
}
const Circle4: React.FC<{ completed?: boolean; onClick?: () => void }> = ({
  completed = false,
  onClick = () => {}
}) => {
  return (
    <>
      <g className="relative">
        <circle
          onClick={() => {
            onClick()
          }}
          className="drop-shadow-custom active:opacity-[0.8] transition-opacity"
          cx="50%"
          cy="50%"
          r="310"
          stroke={completed ? '#76B177' : '#E0D5C9'}
          strokeWidth="40"
          fill="transparent"
        ></circle>
        <text
          onClick={() => {
            onClick()
          }}
          x="50%"
          y="77.9%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          4-{t`айналым`}
        </text>
      </g>
    </>
  )
}
const Circle5: React.FC<{ completed?: boolean; onClick?: () => void }> = ({
  completed = false,
  onClick = () => {}
}) => {
  return (
    <>
      <g className="relative">
        <circle
          onClick={() => {
            onClick()
          }}
          className="drop-shadow-custom active:opacity-[0.8] transition-opacity"
          cx="50%"
          cy="50%"
          r="380"
          stroke={completed ? '#76B177' : '#E0D5C9'}
          strokeWidth="40"
          fill="transparent"
        ></circle>
        <text
          onClick={() => {
            onClick()
          }}
          x="50%"
          y="84%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          5-{t`айналым`}
        </text>
      </g>
    </>
  )
}
const Circle6: React.FC<{ completed?: boolean; onClick?: () => void }> = ({
  completed = false,
  onClick = () => {}
}) => {
  return (
    <>
      <g className="relative">
        <circle
          onClick={() => {
            onClick()
          }}
          className="drop-shadow-custom active:opacity-[0.8] transition-opacity"
          cx="50%"
          cy="50%"
          r="450"
          stroke={completed ? '#76B177' : '#E0D5C9'}
          strokeWidth="40"
          fill="transparent"
        ></circle>
        <text
          onClick={() => {
            onClick()
          }}
          x="50%"
          y="90.2%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          6-{t`айналым`}
        </text>
      </g>
    </>
  )
}
const Circle7: React.FC<{ completed?: boolean; onClick?: () => void }> = ({
  completed = false,
  onClick = () => {}
}) => {
  return (
    <>
      <g className="relative">
        <circle
          onClick={() => {
            onClick()
          }}
          className="drop-shadow-custom active:opacity-[0.8] transition-opacity"
          cx="50%"
          cy="50%"
          r="520"
          stroke={completed ? '#76B177' : '#E0D5C9'}
          strokeWidth="40"
          fill="transparent"
        ></circle>
        <text
          onClick={() => {
            onClick()
          }}
          x="50%"
          y="96.5%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          7-{t`айналым`}
        </text>
      </g>
    </>
  )
}
