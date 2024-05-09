import left from './svg/left.svg'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { useSystem } from '../../store/system'
import { useEffect, useRef } from 'react'

const ModulePlayerModal: React.FC = () => {
  const { playerModalIsOpen, closePlayerModal, currentPrayer } = useSystem()
  const playerRef = useRef(null)
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
        className={`${
          playerModalIsOpen
            ? 'translate-x-0 '
            : 'translate-y-full -bottom-[-100%]'
        } fixed transition-transform duration-300 z-50 top-0 pt-inset-top w-full h-full bg-white px-6 overflow-auto`}
      >
        {/* HEADER */}
        <div className="flex bg-white sticky top-0 justify-between  py-4">
          <div
            onClick={() => {
              if (playerRef.current) {
                ;(playerRef.current as any).audio.current.pause()
              }
              closePlayerModal()
            }}
            className=""
          >
            <img src={left} alt="" />
          </div>
          <div className="text-[#7E7E7E] font-semibold uppercase">
            {currentPrayer ? currentPrayer.title : ''}
          </div>
          <div className="opacity-0">left</div>
        </div>
        {/* HEADER ENDS */}

        <div className="mt-2 w-full text-[#202020] min-h-[245px] text-[15px] leading-[30px] bg-[#D9D9D9] shadow-inner rounded-[10px]  p-4 text-right">
          {currentPrayer ? currentPrayer.prayer_text : ''}
        </div>

        <div className="py-4">
          <AudioPlayer
            ref={playerRef}
            showSkipControls={false}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={currentPrayer ? currentPrayer.audio_url : ''}
          />
        </div>

        <div className="my-2 w-full text-[#202020] min-h-[245px] text-[15px] leading-[20px] bg-[#D9D9D9] shadow-inner rounded-[10px]  p-4 text-left">
          {currentPrayer ? currentPrayer.translation_text : ''}
        </div>
      </div>
    </>
  )
}

export default ModulePlayerModal
