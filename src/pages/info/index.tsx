import { t } from 'ttag'
import UIButton from '../../ui/button/ui-btn'
import { useSystem } from '../../store/system'
import { motion } from 'framer-motion'

const InfoPage = () => {
  const { showLangSelector, locale } = useSystem()
  return (
    <>
      <motion.div
        initial={{
          opacity: 0.8,
          scale: 0.98
        }}
        animate={{
          translateX: '0%',
          opacity: 1,
          scale: 1
        }}
        exit={{
          transition: {
            duration: 0.01
          }
        }}
        className="pb-[79px]"
      >
        <div className="pt-10 px-6">
          {locale === 'kk-KZ' ? (
            <InfoKZ />
          ) : locale === 'tt-KZ' ? (
            <InfoTT />
          ) : (
            <InfoRU />
          )}
          <div className="mt-4">
            <UIButton
              onClick={() => showLangSelector()}
              className="w-full"
            >{t`Тіл ауыстыру`}</UIButton>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default InfoPage

const InfoKZ = () => {
  return (
    <>
      <div className="border-[8px] shadow-inner text-[#606060] font-semibold bg-[#E4D8CA] border-[#C1AB93] rounded-[12px] px-3 py-6 h-[74vh] overflow-auto space-y-2">
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Қажылық:</span> Белгілі
          уақытта (қажылық айларында), арнайы орында, қажылық амалдарын орындау.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Ұмра:</span> Жылдың
          кез-келген уақытында ихраммен Қағбаны тауап етіп, Сафа мен Маруа
          арасында сағи жасау.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Ихрам:</span> Қажылыққа
          немесе ұмраға ниет еткенен кейін, қажылық немесе ұмра тыйымдарының
          басталуы. Ихрамға кірген адам ниет етіп, сосын тәлбия айтады.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Хажар ул-әсуад:</span>{' '}
          Жәннәттан әу баста түскенде аппақ болған үлкендеу жақұт тас. Ішінде
          адамдардың рухтар әлемінде берген уәдесінің бір нұсқасы сақталған.
          Баста ақ болған тас күнәһар пенделердің қолы мен беті тигендіктен
          қарайып, «Хажар ул-әсуад (қара тас)» деп аталған.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Хатим:</span> Қағбаның
          солтүстігіндегі жарты шеңберлі дуал.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Хижр:</span> Қағбаның
          хатиммен қоршалған бөлігі. Қағбаның бір бөлігі болып есептелгендіктен
          тауап хатимнің сыртынан жасалады.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Мүлтәзәм:</span> Қара тас
          қойылған бұрыш пен Қағба есігінің арасы. Дұға қабыл болатын орындардың
          бірі.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Ибраһим мақамы:</span>{' '}
          Ибраһим (а.с.) пайғамбардың аяқ іздері сақталған тастың тұрған орны.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Зәмзәм:</span> Алланың
          әмірімен Жәбірейіл (а.с.) шығарған қасиетті су.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Шаут:</span> Қағбаны бір
          рет айналып шығу немесе Сафа мен Мәруа арасында бір рет жүріп өту.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Тауап:</span> Қағба
          муаззаманы жеті рет айналу. Жеті шаут бір тауап болады.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Сафа мен Мәруа:</span>{' '}
          әл-Харамның шығысындағы сағи жасайтын, аралары 350 м болатын екі төбе.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Сағи:</span> Сафадан
          Мәруаға 4 рет, Мәруадан Сафаға 3 рет жүріп өту арқылы жеті шаут жасау.
          Сағи – қажылық пен ұмра уәжіптерінің бірі.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Уақфа:</span> Арапа күні
          бесін намазынан кейін Құрбан айт күні таң бозарғанша бір сәт болса да
          Арафатта тұру. Бұдан бөлек Мұздалифа уақфасы бар. Ол айттың бірінші
          күні сәресіден бастап күн туғанша Мұздалифа шекарасында болу.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Арафат:</span> Мекке
          мүкарраманың оңтүстік-шығысында шамамен 25 км қашықтықта орналасқан
          қасиетті мекен. Қажылық рүкіндерінің бірі Арафат уақфасы осы жерде
          жасалады.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Мұздалифа:</span> Мина
          мен Арафаттың аралығында Харам шекараларының ішінде орналасқан жердің
          атауы.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Мина:</span> Харам
          шекарасында Қағба мен Мұздалифа арасындағы мекен. Харам мешітінен 6,5
          км қашықтықта орналасқан. Жәмралар (шайтанға тас лақтыратын жерлер)
          осы Минада.
        </div>
      </div>
    </>
  )
}
const InfoTT = () => {
  return (
    <>
      <div className="border-[8px] text-right shadow-inner text-[#606060] font-semibold bg-[#E4D8CA] border-[#C1AB93] rounded-[12px] px-3 py-6 h-[74vh] overflow-auto space-y-2">
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">قاجىلىق: </span>
          بەلگىلى ۋاقىتتا (قاجىلىق ايلارىندا)، ارنايى ورىندا، قاجىلىق امالدارىن
          ورىنداۋ.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">ۇمرا:</span> جىلدىڭ
          كەز-كەلگەن ۋاقىتىندا يحراممەن قاعبانى تاۋاپ ەتىپ، سافا مەن مارۋا
          اراسىندا ساعي جاساۋ.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">يحرام:</span> قاجىلىققا
          نەمەسە ۇمراعا نيەت ەتكەنەن كەيىن، قاجىلىق نەمەسە ۇمرا تىيىمدارىنىڭ
          باستالۋى. يحرامعا كىرگەن ادام نيەت ەتىپ، سوسىن ءتالبيا ايتادى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">حاجار ۋل-ءاسۋاد:</span>{' '}
          ءجانناتتان ءاۋ باستا تۇسكەندە اپپاق بولعان ۇلكەندەۋ جاقۇت تاس. ىشىندە
          ادامداردىڭ رۋحتار الەمىندە بەرگەن ۋادەسىنىڭ ءبىر نۇسقاسى ساقتالعان.
          باستا اق بولعان تاس كۇناھار پەندەلەردىڭ قولى مەن بەتى تيگەندىكتەن
          قارايىپ، «حاجار ۋل-ءاسۋاد (قارا تاس)» دەپ اتالعان.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">حاتيم:</span> قاعبانىڭ
          سولتۇستىگىندەگى جارتى شەڭبەرلى دۋال.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">حيجر:</span> قاعبانىڭ
          حاتيممەن قورشالعان بولىگى. قاعبانىڭ ءبىر بولىگى بولىپ ەسەپتەلگەندىكتەن
          تاۋاپ ءحاتيمنىڭ سىرتىنان جاسالادى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">ءمۇلتازام::</span> قارا
          تاس قويىلعان بۇرىش پەن قاعبا ەسىگىنىڭ اراسى. دۇعا قابىل بولاتىن
          ورىنداردىڭ ءبىرى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">يبراھيم ماقامى: </span>{' '}
          يبراھيم (ا.س.) پايعامباردىڭ اياق ىزدەرى ساقتالعان تاستىڭ تۇرعان ورنى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">ءزامزام:</span> اللانىڭ
          امىرىمەن جابىرەيىل (ا.س.) شىعارعان قاسيەتتى سۋ.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">شاۋت:</span> قاعبانى ءبىر
          رەت اينالىپ شىعۋ نەمەسە سافا مەن ءمارۋا اراسىندا ءبىر رەت ءجۇرىپ ءوتۋ.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">تاۋاپ:</span>
          قاعبا مۋاززامانى جەتى رەت اينالۋ. جەتى شاۋت ءبىر تاۋاپ بولادى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">سافا مەن ءمارۋا:</span>{' '}
          ءال-حارامنىڭ شىعىسىنداعى ساعي جاسايتىن، ارالارى 350 م بولاتىن ەكى
          توبە.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">ساعي:</span> سافادان
          مارۋاعا 4 رەت، ءمارۋادان سافاعا 3 رەت ءجۇرىپ ءوتۋ ارقىلى جەتى شاۋت
          جاساۋ. ساعي – قاجىلىق پەن ۇمرا ۋاجىپتەرىنىڭ ءبىرى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">ۋاقفا:</span>
          اراپا كۇنى بەسىن نامازىنان كەيىن قۇربان ايت كۇنى تاڭ بوزارعانشا ءبىر
          ءسات بولسا دا ارافاتتا تۇرۋ. بۇدان بولەك مۇزداليفا ۋاقفاسى بار. ول
          ايتتىڭ ءبىرىنشى كۇنى سارەسىدەن باستاپ كۇن تۋعانشا مۇزداليفا
          شەكاراسىندا بولۋ.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">ارافات:</span> مەككە
          مۇكاررامانىڭ وڭتۇستىك-شىعىسىندا شامامەن 25 كم قاشىقتىقتا ورنالاسقان
          قاسيەتتى مەكەن. قاجىلىق رۇكىندەرىنىڭ ءبىرى ارافات ۋاقفاسى وسى جەردە
          جاسالادى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">مۇزداليفا:</span> مينا
          مەن ارافاتتىڭ ارالىعىندا حارام شەكارالارىنىڭ ىشىندە ورنالاسقان جەردىڭ
          اتاۋى.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[18px] ml-2">مينا:</span>
          حارام شەكاراسىندا قاعبا مەن مۇزداليفا اراسىنداعى مەكەن. حارام
          مەشىتىنەن 6،5 كم قاشىقتىقتا ورنالاسقان. ءجامرالار (شايتانعا تاس
          لاقتىراتىن جەرلەر) وسى مينادا.
        </div>
      </div>
    </>
  )
}

const InfoRU = () => {
  return (
    <>
      <div className="border-[8px] shadow-inner text-[#606060] font-semibold bg-[#E4D8CA] border-[#C1AB93] rounded-[12px] px-3 py-6 h-[74vh] overflow-auto space-y-2">
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Хадж:</span> Посещение
          определенного места в определенное время с совершением определенных
          действий.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Умра:</span>Таваф (обход)
          Каабы в состоянии ихрама и совершение са’я (ритуального бега) между
          Сафой и Марвой.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Ихрам:</span>Состояние
          ритуальной чистоты, которое включает в себя намерение совершить хадж
          или умру, или оба вида паломничества, и произнесение тальбии.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Хаджар аль-Асвад:</span>{' '}
          Большой белый яхонт, внутри которого находится копия завета, данного
          людьми в мире душ. Он был белого цвета, но почернел от прикосновений
          грешников, поэтому его называют «Хаджар аль-Асвад» (Черный камень).
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Хатем:</span>
          Полукруглая стена, расположенная напротив северной стены Каабы.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Хиджр:</span>
          Место между Каабой и Хатемом. Так как это место считается частью
          Каабы, таваф проходит за его пределами.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Мультазам:</span>
          Промежуток между углом, в котором расположен Хаджар аль-Асвад, и
          дверью Каабы. Одно из мест, где принимаются дуа.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Макам Ибрахима:</span>{' '}
          Камень, на котором отчетливо видны отпечатки ног Ибрахима (а.с)
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Зам-зам:</span>Источник,
          который появился от удара Джабраила алейхиссалям.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Шавт:</span> Один обход
          вокруг Каабы или одна хождения между холмами Сафа и Марва.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Таваф:</span> Семикратный
          обход вокруг Каабы, т.е. один таваф состоит из семи шавтов.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1"> Сафа и Марва:</span> Два
          холма, расположенные к востоку от Запретной Мечети на расстоянии 350 м
          друг от друга, между которых совершается са’й.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Са’й:</span> состоит из
          семи шавтов — четырех хождений от Сафы к Марве и трех хождений от
          Марвы к Сафе. Са’й является действием «ваджиб» для совершения хаджа и
          умры.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Вакфа:</span>
          Стояние на Арафате, пусть даже в течение очень короткого времени, в
          день Арафа после полуденного намаза до восхода солнца в день
          праздника. Есть также стояние на Муздалифе, которое заключается в
          нахождении в пределах Муздалифы в день праздника между появлением
          утренней зари и восходом солнца.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Арафат:</span>
          Гора, расположенная к юго-востоку от Мекки в шести часах пешего пути
          (25 км), где совершается стояние на Арафате, которое является одним из
          ритуалов хаджа.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Муздалифа:</span>
          Название долины, расположенной между Миной и Арафатом в пределах
          Харама.
        </div>
        <div className="text-[14px]">
          <span className="font-bold text-[16px] mr-1">Мина:</span>Долина в
          пределах Харама, расположенная между Каабой и Муздалифой. Находится в
          6,5 км от Запретной Мечети. Джамраты (для обряда побивания камнями
          Шайтана) находятся в Мине.
        </div>
      </div>
    </>
  )
}
