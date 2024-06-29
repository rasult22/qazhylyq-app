import React from 'react'
import TopBtn from './top-btn'
import BottomBtn from './bottom-btn'
import arrowUp from './svgs/arrow-up.svg'
import arrowUpLong from './svgs/arrow-up-long.svg'
import {
  green_area,
  mountain_1,
  mountain_2,
  mountain_3,
  mountain_4,
  mountain_5,
  mountain_6,
  mountain_7,
  safa_and_marua
} from '../../audios/mountain'
import { useSystem } from '../../store/system'
const ModuleMountain: React.FC = () => {
  const { showPlayerModal, setCurrentPrayer } = useSystem()
  const items = [
    {
      direction: 'TOP',
      num: 1
    },
    {
      direction: 'BOTTOM',
      num: 2
    },
    {
      direction: 'TOP',
      num: 3
    },
    {
      direction: 'BOTTOM',
      num: 4
    },
    {
      direction: 'TOP',
      num: 5
    },
    {
      direction: 'BOTTOM',
      num: 6
    },
    {
      direction: 'TOP',
      num: 7
    }
  ]

  const onBtnClick = (num: number) => {
    console.log('onBtnClick')
    switch (num) {
      case 1:
        setCurrentPrayer(mountain_1)
        break
      case 2:
        setCurrentPrayer(mountain_2)
        break
      case 3:
        setCurrentPrayer(mountain_3)
        break
      case 4:
        setCurrentPrayer(mountain_4)
        break
      case 5:
        setCurrentPrayer(mountain_5)
        break
      case 6:
        setCurrentPrayer(mountain_6)
        break
      case 7:
        setCurrentPrayer(mountain_7)
        break
    }
    showPlayerModal()
  }
  const onGreenBtnClick = (num: number) => {
    setCurrentPrayer(green_area)
    showPlayerModal()
  }
  return (
    <div className="flex flex-col py-4 items-center relative space-y-8">
      <TopBtn
        onClick={() => {
          setCurrentPrayer(safa_and_marua)
          showPlayerModal()
        }}
      />
      <div className="flex space-x-[16px] text-[#7E7E7E] relative px-8">
        <span className="absolute text-[#7E7E7E] uppercase -left-[45px] -rotate-90 bottom-[25vh]">
          Жасыл шамдар
        </span>
        {items.map((x) => {
          return (
            <LongBtn
              key={x.num}
              direction={x.direction}
              num={x.num}
              onBtnClick={onBtnClick}
              onGreenBtnClick={onGreenBtnClick}
            />
          )
        })}
      </div>
      <BottomBtn
        onClick={() => {
          setCurrentPrayer(safa_and_marua)
          showPlayerModal()
        }}
      />
    </div>
  )
}

export default ModuleMountain

const LongBtn: React.FC<{
  onGreenBtnClick: (num: number) => void
  onBtnClick: (num: number) => void
  direction: string
  num: number
}> = ({ direction, num, onBtnClick, onGreenBtnClick }) => {
  const onGreenClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    onGreenBtnClick(num)
  }
  return (
    <>
      <div
        onClick={() => onBtnClick(num)}
        className="bg-[#E0D5C9] active:opacity-[0.9] active:scale-[1.02] transition-transform relative shadow-lg w-[30px] h-[55vh] rounded-[66px] flex flex-wrap justify-center items-start"
      >
        <img
          className={`
        ${
          direction === 'BOTTOM' ? 'rotate-180' : ''
        } absolute h-[20%] top-[10%]`}
          src={arrowUp}
          alt=""
        />
        <span className="absolute top-[40%] -rotate-90 text-center">
          {direction === 'TOP' ? 'БАРУ' : 'ҚАЙТУ'}
        </span>
        <div
          tabIndex={0}
          onClick={(e) => onGreenClick(e)}
          className="z-10 active:scale-[1.2] transition-transform rounded-[10px] w-[30px] h-[15vh] mt-auto mb-[9vh] bg-[rgba(118,177,119,0.2)] border-dashed border border-[#7E7E7E]"
        ></div>
        <img
          className={`${
            direction === 'BOTTOM' ? 'rotate-180' : ''
          } absolute h-[35%] translate-y-[50%] bottom-[30%]`}
          src={arrowUpLong}
          alt=""
        />
        <span className="absolute bottom-2 text-[16px]">{num}</span>
      </div>
    </>
  )
}
