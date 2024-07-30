/* disable ttag */
import left from './svg/left.svg'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { useSystem } from '../../store/system'
import { useCallback, useEffect, useRef, useState } from 'react'
import { gettext } from 'ttag'

const FONT_SIZE = 15
const ModulePlayerModal: React.FC = () => {
  const { playerModalIsOpen, closePlayerModal, currentPrayer } = useSystem()
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const playerRef = useRef(null)
  const [fontNumber, setFontNumber] = useState(0)
  const [fontNumber2, setFontNumber2] = useState(0)
  const speeds = [0.5, 0.8, 1, 1.3, 1.7, 2, 2.5]
  const locale = localStorage.getItem('locale')

  const changeSpeed = useCallback(() => {
    const index = speeds.findIndex((x) => x === playbackSpeed)
    const speed = speeds[index + 1] || speeds[0]

    applySpeed(speed)
  }, [playerRef, speeds, setPlaybackSpeed])

  const applySpeed = useCallback(
    (speed: number) => {
      if (playerRef.current) {
        ;(playerRef.current as any).audio.current.playbackRate = speed
        setPlaybackSpeed(speed)
      }
    },
    [playerRef, speeds, setPlaybackSpeed]
  )

  useEffect(() => {
    if (playerModalIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [playerModalIsOpen])

  return (
    <>
      <div
        className={`
        ${
          playerModalIsOpen
            ? 'translate-x-0 '
            : 'translate-y-full -bottom-[-100%]'
        } fixed transition-transform duration-300 z-50 top-0 pt-inset-top w-full h-full bg-white px-6 overflow-auto`}
      >
        {/* HEADER */}
        <div className="flex bg-white z-[5] sticky top-0 justify-between  py-4">
          <div
            onClick={() => {
              if (playerRef.current) {
                ;(playerRef.current as any).audio.current.pause()
              }
              closePlayerModal()
            }}
            className="w-[32px] h-[24px] flex justify-center ml-[-10px]"
          >
            <img src={left} alt="" />
          </div>
          <div
            className={`
            ${locale === 'tt-KZ' ? 'text-right' : ''}
            text-[#7E7E7E] font-semibold uppercase`}
          >
            {currentPrayer ? gettext(currentPrayer.title) : ''}
          </div>
          <div className="opacity-0">left</div>
        </div>
        {/* HEADER ENDS */}
        <div className="relative">
          <div
            style={{
              fontSize: 23 + fontNumber
            }}
            className="mt-2 leading-[200%] overflow-auto w-full text-[#202020] min-h-[60vh] text-[15px] bg-[#D9D9D9] shadow-inner rounded-[10px]  p-4 text-right max-h-[65vh]"
          >
            {currentPrayer ? gettext(currentPrayer.prayer_text) : ''}
          </div>
          <div className="absolute right-3 -bottom-3 items-center flex bg-white p-1 rounded-full border border-[#ECEAEA]">
            <IconMinus
              onClick={() => {
                let val = fontNumber - 1
                setFontNumber(val < 0 ? 0 : val)
              }}
            />
            <div className="leading-[100%] mx-2">{fontNumber}</div>
            <IconPlus
              onClick={() => {
                let val = fontNumber + 1
                setFontNumber(val > 8 ? 8 : val)
              }}
            />
          </div>
        </div>

        <div className="py-4 relative">
          <AudioPlayer
            onPlay={() => {
              const index = speeds.findIndex((x) => x === playbackSpeed)
              const speed = speeds[index]
              applySpeed(speed)
            }}
            ref={playerRef}
            showSkipControls={false}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={currentPrayer ? currentPrayer.audio_url : ''}
          />
          <div className="flex absolute bottom-8 right-4 text-[#202020] text-[20px]">
            <button onClick={() => changeSpeed()}>
              {playbackSpeed.toFixed(1)}x
            </button>
          </div>
        </div>
        <div className="relative">
          <div
            style={{
              fontSize: 18 + fontNumber2
            }}
            className={`
        ${locale === 'tt-KZ' ? 'text-right' : ''}
               my-2 leading-[140%] w-full relative text-[#202020] min-h-[245px] text-[15px] overflow-auto bg-[#D9D9D9] shadow-inner rounded-[10px]  p-4 text-left max-h-[75vh]`}
          >
            {currentPrayer
              ? locale === 'kk-KZ'
                ? currentPrayer.translation_text
                : locale === 'ru-RU'
                ? currentPrayer.translation_text_ru
                : locale === 'tt-KZ'
                ? currentPrayer.translation_text_tt
                : locale + ' is a unsupported locale'
              : 'empty'}
          </div>
          <div className="absolute right-3 -bottom-3 items-center flex bg-white p-1 rounded-full border border-[#ECEAEA]">
            <IconMinus
              onClick={() => {
                let val = fontNumber2 - 1
                setFontNumber2(val < 0 ? 0 : val)
              }}
            />
            <div className="leading-[100%] mx-2">{fontNumber2}</div>
            <IconPlus
              onClick={() => {
                let val = fontNumber2 + 1
                setFontNumber2(val > 8 ? 8 : val)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ModulePlayerModal

const IconMinus: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="10.5299"
        cy="10.5001"
        rx="10.1282"
        ry="10.1087"
        fill="#C3B8AC"
      />
      <path
        d="M6.47864 10.5H14.5812"
        stroke="#88816E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const IconPlus: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="10.4701"
        cy="10.5001"
        rx="10.1282"
        ry="10.1087"
        fill="#C3B8AC"
      />
      <path
        d="M10.4702 6.45654V14.5435"
        stroke="#88816E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.41882 10.5H14.5214"
        stroke="#88816E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
