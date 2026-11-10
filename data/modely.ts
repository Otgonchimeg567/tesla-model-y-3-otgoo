import { autonomous, safetyText, specSheet } from "./specs";
import type { ModelData } from "./types";

const img = (file: string, alt: string) => ({ src: `/assets/modely/${file}`, alt });

export const modely: ModelData = {
  slug: "modely",
  name: "Model Y",

  hero: {
    image: img("hero.jpg", "Улаан хадны дэргэдүүр явж буй Model Y"),
    subtitle: "Жилийн 2.49% хүүтэй санхүүжилт",
    stats: [
      { value: "355", unit: "миль", label: "Нэг цэнэглэлтээр" },
      { value: "7", label: "Хүртэл суудал" },
      { value: "76", unit: "куб фут", label: "Ачааны багтаамж" },
    ],
  },

  meet: {
    eyebrow: "Дунд оврын цахилгаан SUV",
    title: "Model Y-тай танилц",
    description: "Model Y бүрт стандартаар ирэх онцлогууд.",
    cards: [
      { image: img("meet-safety.jpg", "Model Y аюулгүй байдал"), label: "Аюулгүй байдал" },
      { image: img("meet-convenience.png", "Model Y тав тух"), label: "Тав тух" },
      { image: img("meet-fsd.jpg", "Бүрэн автомат жолоодлого"), label: "Автомат жолоодлого" },
      { image: img("meet-warranty.jpg", "Model Y баталгаа"), label: "Баталгаа" },
      { image: img("meet-utility.jpg", "Model Y ачаа"), label: "Ачаа тээш" },
      { image: img("meet-entertainment.png", "Model Y энтертайнмент"), label: "Энтертайнмент" },
    ],
  },

  trims: [
    {
      id: "standard",
      tab: "Model Y",
      name: "Model Y",
      price: "Түрээс: сарын $499-өөс",
      image: img("trim-standard.jpg", "Model Y"),
      stats: [
        { value: "321", unit: "миль", label: "Нэг цэнэглэлтээр" },
        { value: "5", unit: "од", label: "Аюулгүй байдлын үнэлгээ", note: 2 },
        { value: "74", unit: "куб фут", label: "Ачааны багтаамж" },
      ],
    },
    {
      id: "premium",
      tab: "Premium",
      name: "Model Y Premium",
      price: "Жилийн 2.49% хүү",
      image: img("trim-premium.jpg", "Model Y Premium"),
      stats: [
        { value: "327", unit: "миль", label: "Нэг цэнэглэлтээр" },
        { value: "4.3", unit: "сек", label: "0-60 миль/ц" },
        { value: "169", unit: "миль", label: "15 минутад цэнэглэнэ", note: 3 },
      ],
    },
    {
      id: "l",
      tab: "Model Y L",
      name: "Model Y L Premium · Урт тэнхлэг",
      price: "$61,990-аас",
      priceNote: 1,
      image: img("trim-l.jpg", "Model Y L Premium"),
      stats: [
        { value: "332", unit: "миль", label: "Нэг цэнэглэлтээр" },
        { value: "6", label: "Суудал" },
        { value: "172", unit: "миль", label: "15 минутад цэнэглэнэ", note: 3 },
      ],
    },
    {
      id: "performance",
      tab: "Performance",
      name: "Model Y Performance",
      price: "Жилийн 3.99% хүү",
      image: img("trim-performance.jpg", "Улаан Model Y Performance"),
      stats: [
        { value: "306", unit: "миль", label: "Нэг цэнэглэлтээр" },
        { value: "3.3", unit: "сек", label: "0-60 миль/ц" },
        { value: "155", unit: "миль/ц", label: "Дээд хурд" },
      ],
    },
  ],

  blocks: [
    {
      type: "photoBand",
      image: img("hero-l.jpg", "Зам дээрх Model Y L"),
      title: "Гадна дизайн",
      text: "Өнцөг бүр нь гоо үзэмж, аэродинамикт зориулагдсан.",
      features: [
        { title: "Цэвэр шугам", text: "Урд тал нь гоолиг, хүчирхэг харагдана." },
        { title: "Зөөлөн явалт", text: "Түдгэлзүүр, дугуй хамтдаа ажиллаж, салон нам гүм." },
        { title: "Өвөрмөц гэрэл", text: "Хөндлөн нэг ширхэг хойд гэрэл — анхных нь." },
      ],
    },
    {
      type: "splitRows",
      rows: [
        {
          image: img("efficiency.jpg", "Намрын замаар явж буй цагаан Model Y"),
          title: "Тав тухтай салон",
          lead: "Шилэн дээвэр дор 7 хүртэл хүн тухтай сууна.",
          note: 4,
          text: "Урд, хойд мэдрэгч дэлгэц. HEPA шүүлтүүр агаарыг цэвэршүүлнэ.",
        },
        {
          image: img("affordable.jpg", "Гэрийн гадаа зогсож буй Model Y"),
          title: "Том ачаа тээш",
          lead: "76 куб фут багтаамж — 7 хүн болон тэдний ачаа багтана.",
          note: 4,
          text: "Ойртоход ачааны хаалга өөрөө нээгдэнэ. Суудлыг эвхэж зай нэмээрэй.",
        },
      ],
    },
    {
      type: "cardGrid",
      title: "Утсаараа удирд",
      description: "Tesla апп-аар машинаа хаанаас ч хянаарай.",
      cards: [
        { title: "Агаарын хэм", text: "Суухаасаа өмнө салоноо дулаацуул. Тэжээвэр амьтан, кемпийн горимтой." },
        { title: "Нэг товшилтоор түгжих", text: "Хол байхдаа бусдад нэвтрэх эрх өг." },
        { title: "Хамгаалалтын горим", text: "Машиныхаа орчныг хол байхдаа ч хянаарай." },
        { title: "Цэнэгээ хяна", text: "Цэнэглэх цагаа тохируулж, явцыг нь хар." },
      ],
    },
    { type: "safety", ...safetyText, image: img("safety.jpg", "Model Y аюулгүй байдал") },
    {
      type: "photoBand",
      image: img("range.jpg", "Аялалд гарсан Model Y"),
      title: "Хангалттай зай",
      text: "Нэг цэнэглэлтээр 321 миль хүртэл. Урт аялалд Trip Planner цэнэглэх цэгүүдийг автоматаар нэмнэ.",
      stats: [
        { value: "15", unit: "мин", label: "160 миль хүртэл цэнэглэнэ", note: 3 },
        { value: "80,000", unit: "+", label: "Дэлхий даяарх Supercharger" },
        { value: "99", unit: "%", label: "Supercharger ажиллагаа" },
      ],
    },
    {
      type: "features",
      ...autonomous,
      items: [
        { title: "Автомат жолоодлого", text: "Таны хяналтан дор жолоодлогод тусална.", note: 5 },
        { title: "Урд камер", text: "Илүү сайн харагдац, хялбар зогсоолт." },
        { title: "Харалган бүсийн хяналт", text: "Анхааруулах гэрэл, дэлгэцээр орчноо хар." },
      ],
    },
  ],

  specs: {
    specsImage: img("specs.png", "Model Y хэмжээ"),
    sheets: [
      specSheet("s-standard", "Model Y", {
        drive: [["Нэг цэнэглэлтээр", "321 миль"], ["Хурдатгал", "0-60 миль/ц 6.8 сек"], ["Хөтлөгч", "Хойд дугуй"]],
        dimensions: [
          ["Жин", "4,061 фунт"], ["Ачаа", "74 куб фут"], ["Дугуй", '18" эсвэл 19"'], ["Суудал", "5"],
          ["Дэлгэц", '16" төв дэлгэц'], ["Газраас өндөр", '6.4"'], ["Өргөн", '78" (толь эвхсэн)'],
          ["Өндөр", '63.8"'], ["Урт", '188.7"'],
        ],
        charging: [["Supercharger", "225 кВт хүртэл"], ["15 минутад", "160 миль хүртэл", 3]],
        warranty: [["Машин", "4 жил эсвэл 50,000 миль"], ["Батарей, мотор", "8 жил эсвэл 100,000 миль"]],
      }),
      specSheet("s-premium", "Premium", {
        drive: [["Нэг цэнэглэлтээр", "327 миль"], ["Хурдатгал", "0-60 миль/ц 4.3 сек"], ["Хөтлөгч", "Хос мотор, 4 дугуй"]],
        dimensions: [
          ["Жин", "4,473 фунт"], ["Ачаа", "76 куб фут"], ["Дугуй", '19" эсвэл 20"'], ["Суудал", "7 хүртэл"],
          ["Дэлгэц", '16" төв + 8" хойд'], ["Газраас өндөр", '6.6"'], ["Өргөн", '78.0" (толь эвхсэн)'],
          ["Өндөр", '63.9"'], ["Урт", '188.6"'],
        ],
        charging: [["Supercharger", "250 кВт хүртэл"], ["15 минутад", "169 миль хүртэл", 3]],
        warranty: [["Машин", "4 жил эсвэл 50,000 миль"], ["Батарей, мотор", "8 жил эсвэл 120,000 миль"]],
      }),
      specSheet("s-performance", "Performance", {
        drive: [["Нэг цэнэглэлтээр", "306 миль"], ["Хурдатгал", "0-60 миль/ц 3.3 сек"], ["Хөтлөгч", "Хос мотор, 4 дугуй"]],
        dimensions: [
          ["Жин", "4,466 фунт"], ["Ачаа", "76 куб фут"], ["Дугуй", '21"'], ["Суудал", "5"],
          ["Дэлгэц", '16" төв + 8" хойд'], ["Газраас өндөр", '6"'], ["Өргөн", '78.0" (толь эвхсэн)'],
          ["Өндөр", '63.4"'], ["Урт", '188.8"'],
        ],
        charging: [["Supercharger", "250 кВт хүртэл"], ["15 минутад", "144 миль хүртэл", 3]],
        warranty: [["Машин", "4 жил эсвэл 50,000 миль"], ["Батарей, мотор", "8 жил эсвэл 120,000 миль"]],
      }),
    ],
  },

  footnotes: [
    "Зураг нь жишээ болно. Бодит машин өөр байж болно.",
    "1 Хүргэлт, татвар болон бусад төлбөр ороогүй. Үнэ өөрчлөгдөж болно.",
    "2 АНУ-ын NHTSA байгууллагын 5 одны үнэлгээ.",
    "3 Тогтмол хурдны тооцоолол дээр үндэслэсэн.",
    "4 Зөвхөн 7 суудалтай Model Y Premium-д.",
    "5 Жолооч үргэлж анхааралтай байх шаардлагатай. Машин бүрэн бие даан явахгүй.",
  ],

  end: {
    image: img("end.jpg", "Model Y"),
    otherModel: { label: "Model 3 үзэх", href: "/model3" },
  },
};
