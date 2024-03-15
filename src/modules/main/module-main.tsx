import React from 'react'
import UIButton from '../../ui/button/ui-btn'
import kaaba from './kaaba.svg'
import arrows from './arrows.svg'
import { useSystem } from '../../store/system'

const ModuleMain: React.FC = () => {
  const { showPlayerModal } = useSystem()
  return (
    <div>
      <div className="mt-[-110%]">
        <svg height="1130" width="100%">
          <Circle7 onClick={() => showPlayerModal()} />
          <Circle6 onClick={() => showPlayerModal()} />
          <Circle5 onClick={() => showPlayerModal()} />
          <Circle4 onClick={() => showPlayerModal()} />
          <Circle3 onClick={() => showPlayerModal()} />
          <Circle2 onClick={() => showPlayerModal()} />
          <Circle1 onClick={() => showPlayerModal()} />
        </svg>
      </div>
      <div className="px-6">
        <div className="flex space-x-[11px] items-stretch">
          <UIButton onClick={() => showPlayerModal()}>
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
          <UIButton onClick={() => showPlayerModal()} className="w-full">
            Таупқа бастау дұғасы
          </UIButton>
        </div>
        <UIButton
          onClick={() => showPlayerModal()}
          className="mt-[18px] w-full"
        >
          Тауап намазынан кейін оқы. дұға
        </UIButton>
      </div>
      <div className="relative flex justify-center pt-10 pb-10">
        <img src={arrows} alt="" />
        <UIButton
          onClick={() => showPlayerModal()}
          className="w-[65%] absolute top-[28px] left-[80px]"
        >
          Шам және Йемен
        </UIButton>
        <UIButton
          onClick={() => showPlayerModal()}
          className="w-[75%] absolute top-[85px] right-[60px]"
        >
          Йемен және Хажар ул-әсуад
        </UIButton>
        <UIButton
          onClick={() => showPlayerModal()}
          className="w-[75%] absolute bottom-[142px] right-[45px]"
        >
          Ирак-Шам
        </UIButton>
        <UIButton
          onClick={() => showPlayerModal()}
          className="w-[75%] absolute bottom-[85px] right-[40px]"
        >
          Ибраһим мақамы
        </UIButton>
        <UIButton
          onClick={() => showPlayerModal()}
          className="w-[75%] absolute bottom-[30px] right-[40px]"
        >
          МҮЛТӘЗӘМ
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
          x="50%"
          y="59.2%"
          className="text-[16px] font-medium"
          fill={completed ? 'white' : '#A2815D'}
          textAnchor="middle"
        >
          1-айналым
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
          2-айналым
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
          3-айналым
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
          4-айналым
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
          5-айналым
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
          6-айналым
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
          7-айналым
        </text>
      </g>
    </>
  )
}
