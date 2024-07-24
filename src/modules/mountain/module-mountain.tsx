import React from 'react'
import TopBtn from './top-btn'
import BottomBtn from './bottom-btn'
import ArrowUpLong from './svgs/arrow-up-long'
import ArrowUp from './svgs/arrow-up'
import { t } from 'ttag'

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
  const { showPlayerModal, setCurrentPrayer, completedIds, addCompleteId } =
    useSystem()
  const locale = localStorage.getItem('locale')

  const items = [
    {
      id: '1_TOP',
      direction: 'TOP',
      num: 1,
      item: mountain_1
    },
    {
      id: '2_BOTTOM',
      direction: 'BOTTOM',
      num: 2,
      item: mountain_2
    },
    {
      id: '3_TOP',
      direction: 'TOP',
      num: 3,
      item: mountain_3
    },
    {
      id: '4_BOTTOM',
      direction: 'BOTTOM',
      num: 4,
      item: mountain_4
    },
    {
      id: '5_TOP',
      direction: 'TOP',
      num: 5,
      item: mountain_5
    },
    {
      id: '6_BOTTOM',
      direction: 'BOTTOM',
      num: 6,
      item: mountain_6
    },
    {
      id: '7_TOP',
      direction: 'TOP',
      num: 7,
      item: mountain_7
    }
  ]

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
        <span
          className={`absolute text-[#7E7E7E] uppercase ${
            locale === 'tt-KZ' ? '-left-[15px]' : '-left-[40px]'
          } -rotate-90 bottom-[15vh]`}
        >
          {t`Жасыл шамдар`}
        </span>
        {items.map((x) => {
          return (
            <LongBtn
              key={x.num}
              completed={completedIds.includes(x.id)}
              direction={x.direction}
              num={x.num}
              onBtnClick={(num) => {
                const prevItem = items.find((x) => x.num === num - 1)
                if (prevItem) {
                  const prevItemFound = completedIds.find(
                    (id) => id === prevItem.id
                  )
                  if (prevItemFound) {
                    addCompleteId(x.id)
                  }
                }
                if (num === 1) {
                  addCompleteId(x.id)
                }
                setCurrentPrayer(x.item)
                showPlayerModal()
              }}
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
  completed?: boolean
  num: number
}> = ({ direction, num, onBtnClick, onGreenBtnClick, completed = false }) => {
  const onGreenClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    onGreenBtnClick(num)
  }
  return (
    <>
      <div
        onClick={() => onBtnClick(num)}
        className={`${
          completed ? 'bg-[#76B177] text-white' : 'bg-[#E0D5C9]'
        }  active:opacity-[0.9] active:scale-[1.02] transition-transform relative shadow-lg w-[30px] h-[55vh] rounded-[66px] flex flex-wrap justify-center items-start`}
      >
        <ArrowUp
          completed={completed}
          className={`
        ${
          direction === 'BOTTOM' ? 'rotate-180' : ''
        } absolute h-[20%] top-[10%]`}
        />
        <span className="absolute top-[40%] -rotate-90 text-center">
          {direction === 'TOP' ? t`БАРУ` : t`ҚАЙТУ`}
        </span>
        <div
          tabIndex={0}
          onClick={(e) => onGreenClick(e)}
          className={`${
            completed
              ? 'bg-[rgba(256,256,256,0.2)]'
              : 'bg-[rgba(118,177,119,0.2)] '
          } border-[#7E7E7E] z-10 active:scale-[1.2] transition-transform rounded-[10px] w-[30px] h-[15vh] mt-auto mb-[9vh]  border-dashed border `}
        ></div>
        <ArrowUpLong
          completed={completed}
          className={`${
            direction === 'BOTTOM' ? 'rotate-180' : ''
          } absolute h-[35%] translate-y-[50%] bottom-[30%]`}
        />
        <span className="absolute bottom-2 text-[16px]">{num}</span>
      </div>
    </>
  )
}
