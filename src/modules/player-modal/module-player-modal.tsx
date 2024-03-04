import left from './svg/left.svg'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import audio from '../../../assets/audio.mp3'
import { useSystem } from '../../store/system'

const ModulePlayerModal: React.FC = () => {
  const { playerModalIsOpen, closePlayerModal } = useSystem()

  const arabicContent =
    'اَللّٰهُمَّ اِيمَانًا بِكَ وَتَصدِيقًا بِكِتابِكَ وَوَفاءً بِعَهْدِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ وَحَبِيبِكَ مُحَمَّدٍ صَلَى اَللهُ تَعَالَى عَلَيْهِ وَسَلَّمَ.'

  const translatedContent =
    'Уа, Алла! Өзіңе иман келтіріп, кітабыңды растап, Саған берген уәдемізді орындау үшін әрі сүйікті пайғамбарың Мұхаммедтің (с.а.у.) сүннетіне мойынсұнып құзырыңа келіп отырмын. Алланың игілігі мен сәлемі Пайғамбарымыз Мұхаммедке (с.а.у.) болсын.'

  return (
    <>
      <div
        className={`${
          playerModalIsOpen
            ? 'translate-x-0'
            : 'translate-y-full -bottom-[-100%]'
        } fixed transition-transform duration-300 z-50 top-0 w-full h-full bg-white px-6 overflow-auto`}
      >
        {/* HEADER */}
        <div className="flex bg-white sticky top-0 justify-between  py-4">
          <div onClick={closePlayerModal} className="">
            <img src={left} alt="" />
          </div>
          <div className="text-[#7E7E7E] font-semibold uppercase">1-бару</div>
          <div className="opacity-0">left</div>
        </div>
        {/* HEADER ENDS */}

        <div className="mt-2 w-full text-[#202020] min-h-[245px] text-[15px] leading-[30px] bg-[#D9D9D9] shadow-inner rounded-[10px]  p-4 text-right">
          {arabicContent}
        </div>

        <div className="py-4">
          <AudioPlayer showSkipControls={false} src={audio} />
        </div>

        <div className="my-2 w-full text-[#202020] min-h-[245px] text-[15px] leading-[20px] bg-[#D9D9D9] shadow-inner rounded-[10px]  p-4 text-left">
          {translatedContent}
          {translatedContent}
        </div>
      </div>
    </>
  )
}

export default ModulePlayerModal
