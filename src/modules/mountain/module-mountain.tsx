import React from 'react'
import TopBtn from './top-btn'
import BottomBtn from './bottom-btn'
import arrowUp from './svgs/arrow-up.svg'
import arrowUpLong from './svgs/arrow-up-long.svg'
import { useSystem } from '../../store/system'
const ModuleMountain: React.FC = () => {
  const { showPlayerModal } = useSystem()
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
    showPlayerModal()
  }
  const onGreenBtnClick = (num: number) => {
    showPlayerModal()
    console.log('onGreenBtnClick')
  }
  return (
    <div className="flex flex-col py-4 items-center relative space-y-8">
      <TopBtn onClick={() => onBtnClick(1)} />
      <span className="absolute text-[#7E7E7E] uppercase -left-[55px] -rotate-90 bottom-[250px]">
        Жасыл шамдар
      </span>
      <div className="flex space-x-[16px] text-[#7E7E7E] relative px-8">
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
      <BottomBtn onClick={() => onBtnClick(1)} />
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
        className="bg-[#E0D5C9] active:opacity-[0.9] active:scale-[1.02] transition-transform relative shadow-lg w-[30px] h-[518px] rounded-[66px] flex flex-wrap justify-center items-start"
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
          className="z-10 active:scale-[1.2] transition-transform rounded-[10px] w-[30px] h-[15vh] mt-auto mb-[90px] bg-[rgba(118,177,119,0.2)] border-dashed border border-[#7E7E7E]"
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
