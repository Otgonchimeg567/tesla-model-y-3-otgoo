import { autonomous, safetyText, specSheet } from "./specs";
import type { ModelData } from "./types";

const img = (file: string, alt: string) => ({ src: `/assets/model3/${file}`, alt });

const warranty100 = [
  ["Машин", "4 жил эсвэл 50,000 миль"],
  ["Батарей, мотор", "8 жил эсвэл 100,000 миль"],
] as [string, string][];
const warranty120 = [
  ["Машин", "4 жил эсвэл 50,000 миль"],
  ["Батарей, мотор", "8 жил эсвэл 120,000 миль"],
] as [string, string][];

export const model3: ModelData = {
  slug: "model3",
  name: "Model 3",

  hero: {
    image: img("hero.jpg", "Model 3 Premium"),
    subtitle: "Түрээс: сарын $439-өөс · Жилийн 1.99% хүү",
    stats: [
      { value: "363", unit: "миль", label: "Нэг цэнэглэлтээр" },
      { value: "2.9", unit: "сек", label: "0-60 миль/ц хүртэл" },
      { value: "528", unit: "м.х.", label: "Дээд хүч" },
    ],
  },

  meet: {
    eyebrow: "Спорт седан",
    title: "Model 3-тай танилц",
    description: "Model 3 бүрт стандартаар ирэх онцлогууд.",
    cards: [
      { image: img("meet-convenience.png", "Гэртээ цэнэглэж буй Model 3"), label: "Тав тух" },
      { image: img("meet-safety.png", "Model 3 аюулгүй байдал"), label: "Аюулгүй байдал" },
      { image: img("meet-fsd.jpg", "Бүрэн автомат жолоодлого"), label: "Автомат жолоодлого" },
      { image: img("meet-warranty.jpg", "Model 3 баталгаа"), label: "Баталгаа" },
      { image: img("meet-efficiency.png", "Model 3 хэмнэлт"), label: "Хэмнэлт" },
      { image: img("meet-design.jpg", "Model 3 дизайн"), label: "Дизайн" },
    ],
  },

  trims: [
    {
      id: "standard",
      tab: "Model 3",
      name: "Model 3",
      price: "$36,990-аас",
      priceNote: 1,
      image: img("trim-standard.jpg", "Model 3"),
      stats: [
        { value: "321", unit: "миль", label: "Нэг цэнэглэлтээр" },
        { value: "5.8", unit: "сек", label: "0-60 миль/ц" },
        { value: "24", unit: "куб фут", label: "Ачааны багтаамж" },
      ],
    },
    {
      id: "premium",
      tab: "Premium",
      name: "Model 3 Premium",
      price: "$42,490-аас",
      priceNote: 1,
      image: img("trim-premium.jpg", "Model 3 Premium"),
      stats: [
        { value: "346", unit: "миль", label: "Нэг цэнэглэлтээр" },
        { value: "15", unit: "мин", label: "185 миль цэнэглэнэ" },
        { value: "AWD", label: "Хос мотор, 4 дугуй хөтлөгч" },
      ],
    },
    {
      id: "performance",
      tab: "Performance",
      name: "Model 3 Performance",
      price: "$54,990-аас",
      priceNote: 1,
      image: img("trim-performance.jpg", "Model 3 Performance"),
      stats: [
        { value: "528", unit: "м.х.", label: "Дээд хүч" },
        { value: "2.9", unit: "сек", label: "0-60 миль/ц" },
        { value: "163", unit: "миль/ц", label: "Дээд хурд" },
      ],
    },
  ],

  blocks: [
    {
      type: "photoBand",
      image: img("affordable.jpg", "Зам дээрх Model 3"),
      title: "Хамгийн хямд Tesla",
      text: "Шилдэг онцлогууд, хамгийн бага эзэмшлийн зардал.",
      cards: [
        {
          image: img("afford-1.jpg", "Энгийн дизайн"),
          title: "Энгийн дизайн",
          text: "Чанар, найдвартай байдлыг алдалгүй үнийг бага байлгадаг.",
        },
        {
          image: img("afford-2.jpg", "Хэмнэлттэй"),
          title: "Хэмнэлттэй",
          text: "Цэнэглэх нь бензин хийхээс хямд. Нэг цэнэглэлт аль болох удаан хүрнэ.",
        },
        {
          image: img("afford-3.jpg", "Засвар бага"),
          title: "Засвар бага",
          text: "Бензин хөдөлгүүргүй тул жил бүрийн засвар үйлчилгээ цөөн.",
        },
      ],
    },
    {
      type: "splitRows",
      title: "Салон",
      description: "Цэвэрхэн, хэрэгтэй бүхэн нь бэлэн.",
      rows: [
        {
          image: img("comfort.jpg", "Халаалттай суудал"),
          title: "Тав тухтай",
          lead: "Урд суудал болон жолооны хүрд халаалттай. Чанартай материалаар хийгдсэн.",
        },
        {
          image: img("control.jpg", "Мэдрэгч дэлгэц"),
          title: "Бүгдийг дэлгэцээр",
          lead: "Суудлаа мэдрэгч дэлгэцээр тохируул. Эргэлтийн дохионы бариултай.",
        },
        {
          image: img("audio.jpg", "Дууны систем"),
          title: "Дуу чимээ",
          lead: "7 чанга яригчтай. Дуугаа дуут командаар асаа.",
        },
      ],
    },
    {
      type: "cardGrid",
      title: "Утсаараа удирд",
      description: "Tesla апп-аар машинаа хаанаас ч хянаарай.",
      cards: [
        { title: "Агаарын хэм", text: "Суухаасаа өмнө салоноо дулаацуул эсвэл сэрүүцүүл." },
        { title: "Утас түлхүүр", text: "Ойртоход хаалга өөрөө нээгдэнэ." },
        { title: "Тэжээвэр амьтны горим", text: "Таныг байхгүй үед тэжээвэр амьтан тань тухтай." },
        { title: "Хамгаалалтын горим", text: "Машиныхаа орчныг хол байхдаа ч хянаарай." },
      ],
    },
    { type: "safety", ...safetyText, image: img("safety.jpg", "Model 3 аюулгүй байдал") },
    {
      type: "features",
      ...autonomous,
      items: [
        { title: "Автомат жолоодлого", text: "Таны хяналтан дор жолоодлогод тусална.", note: 2 },
        { title: "Урд камер", text: "Илүү сайн харагдац, хялбар зогсоолт." },
        { title: "Харалган бүсийн хяналт", text: "Анхааруулах гэрэл, дэлгэцээр орчноо хар." },
      ],
    },
  ],

  specs: {
    specsImage: img("specs.png", "Model 3 хэмжээ"),
    sheets: [
      specSheet("s-standard", "Model 3", {
        drive: [["Нэг цэнэглэлтээр", "321 миль"], ["Хурдатгал", "0-60 миль/ц 5.8 сек"], ["Хөтлөгч", "Хойд дугуй"]],
        dimensions: [
          ["Жин", "3,759 фунт"], ["Ачаа", "24 куб фут"], ["Дугуй", '18" эсвэл 19"'], ["Суудал", "5"],
          ["Дэлгэц", '16" төв дэлгэц'], ["Газраас өндөр", '5.4"'], ["Өргөн", '76.1" (толь эвхсэн)'],
          ["Өндөр", '56.7"'], ["Урт", '185.8"'],
        ],
        charging: [["Supercharger", "225 кВт хүртэл"], ["15 минутад", "170 миль хүртэл", 3]],
        warranty: warranty100,
      }),
      specSheet("s-premium", "Premium", {
        drive: [["Нэг цэнэглэлтээр", "346 миль"], ["Хурдатгал", "0-60 миль/ц 3.8 сек"], ["Хөтлөгч", "Хос мотор, 4 дугуй"]],
        dimensions: [
          ["Жин", "4,030 фунт"], ["Ачаа", "24 куб фут"], ["Дугуй", '18" эсвэл 19"'], ["Суудал", "5"],
          ["Дэлгэц", '16" төв + 8" хойд'], ["Газраас өндөр", '5.4"'], ["Өргөн", '76.1" (толь эвхсэн)'],
          ["Өндөр", '56.7"'], ["Урт", '185.8"'],
        ],
        charging: [["Supercharger", "250 кВт хүртэл"], ["15 минутад", "185 миль хүртэл", 3]],
        warranty: warranty120,
      }),
      specSheet("s-performance", "Performance", {
        drive: [["Нэг цэнэглэлтээр", "316 миль"], ["Хурдатгал", "0-60 миль/ц 2.9 сек"], ["Хөтлөгч", "Хос мотор, 4 дугуй"]],
        dimensions: [
          ["Жин", "4,054 фунт"], ["Ачаа", "24 куб фут"], ["Дугуй", '20" Warp'], ["Суудал", "5"],
          ["Дэлгэц", '16" төв + 8" хойд'], ["Газраас өндөр", '5.0"'], ["Өргөн", '76.1" (толь эвхсэн)'],
          ["Өндөр", '56.3"'], ["Урт", '185.9"'],
        ],
        charging: [["Supercharger", "250 кВт хүртэл"], ["15 минутад", "147 миль хүртэл", 3]],
        warranty: warranty120,
      }),
    ],
  },

  footnotes: [
    "Зураг нь жишээ болно. Бодит машин өөр байж болно.",
    "1 Хүргэлт, татвар болон бусад төлбөр ороогүй. Үнэ өөрчлөгдөж болно.",
    "2 Жолооч үргэлж анхааралтай байх шаардлагатай. Машин бүрэн бие даан явахгүй.",
    "3 Тогтмол хурдны тооцоолол дээр үндэслэсэн.",
  ],

  end: {
    image: img("end.jpg", "Model 3"),
    otherModel: { label: "Model Y үзэх", href: "/modely" },
  },
};
