import type { Metadata } from "next";
import Image from "next/image";
import FeatureCard from "@/components/cards/FeatureCard";
import InfoCard from "@/components/cards/InfoCard";
import SplitCard from "@/components/cards/SplitCard";
import PhotoBand from "@/components/model/PhotoBand";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Slider from "@/components/ui/Slider";
import StatItem, { FeatureItem } from "@/components/ui/StatItem";
import Tabs from "@/components/ui/Tabs";
import CssVar from "@/components/styleguide/CssVar";
import SgSection, { Code, SgHeading, SgPanel } from "@/components/styleguide/SgSection";
import Swatch from "@/components/styleguide/Swatch";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Дизайн систем | Styleguide",
  description: "Сайтын өнгө, үсэг, зай, хэлбэр, компонентуудын сан.",
};

const sections = [
  ["principles", "Зарчим"],
  ["brand", "Брэнд"],
  ["color", "Өнгө"],
  ["type", "Үсэг"],
  ["spacing", "Зай"],
  ["shape", "Хэлбэр"],
  ["stroke", "Шугам"],
  ["shade", "Сүүдэр, бүрхүүл"],
  ["icons", "Дүрс"],
  ["components", "Компонент"],
  ["sections", "Хэсгүүд"],
  ["motion", "Хөдөлгөөн"],
] as const;

const num = (id: string) => String(sections.findIndex(([s]) => s === id) + 1).padStart(2, "0");

const colors = [
  { token: "--color-surface", className: "bg-surface", fallback: "#f2f2f2", usage: "Хуудасны дэвсгэр, navbar, footer", cls: "bg-surface" },
  { token: "--color-card", className: "bg-card", fallback: "#ffffff", usage: "Карт", cls: "bg-card" },
  { token: "--color-ink", className: "bg-ink", fallback: "#020208", usage: "Үндсэн бичвэр, идэвхтэй tab", cls: "text-ink, bg-ink" },
  { token: "--color-ink-5", className: "bg-ink-5", fallback: "rgba(2, 2, 8, 0.05)", usage: "Хоёрдогч товч, tab", cls: "bg-ink-5" },
  { token: "--color-line", className: "bg-line", fallback: "rgba(2, 2, 8, 0.15)", usage: "Шугам, хүрээ", cls: "border-line" },
  { token: "--color-primary", className: "bg-primary", fallback: "#15803d", usage: "Гол үйлдэл (товч)", cls: "bg-primary" },
];

const textStyles = [
  { label: "h1 · text-h1", meta: "Inter 500 · 1.2 · -0.01em", className: "text-h1", sample: "Model 3" },
  { label: "h2 · text-h2", meta: "Inter 500 · 1.2 · -0.01em", className: "text-h2", sample: "Загвараа сонго" },
  { label: "Картын гарчиг · text-[40px]", meta: "Inter 500 · 1.25 · утсан дээр 28px", className: "text-[28px] font-medium leading-tight sm:text-[40px]", sample: "Model Y L" },
  { label: "h6 · text-h6", meta: "Inter 500 · 22px/1.4", className: "text-h6", sample: "Хамгаалалтын горим" },
  { label: "Lead · text-md", meta: "Inter 400 · 18px/1.5", className: "text-md", sample: "Аялал бүрийг хялбар болгоно. Сард $99." },
  { label: "Бичвэр · text-base", meta: "Inter 400 · 16px/1.5", className: "text-base", sample: "Суухаасаа өмнө салоноо дулаацуул эсвэл сэрүүцүүл." },
  { label: "Eyebrow · font-semibold", meta: "Inter 600 · 16px/1.5", className: "font-semibold", sample: "Спорт седан" },
  { label: "Тоо · font-roboto font-bold", meta: "Roboto 700 · 80px/1.3 · утсан дээр 56px", className: "font-roboto text-[56px] font-bold leading-[1.3] sm:text-[80px]", sample: "39,513" },
  { label: "Тайлбар · text-xs text-ink/60", meta: "Inter 400 · 12px/1.33", className: "text-xs text-ink/60", sample: "1 Хүргэлт, татвар болон бусад төлбөр ороогүй." },
];

const scale = [
  { cls: "text-xs", token: "--text-xs", fallback: "0.75rem", use: "Тайлбар" },
  { cls: "text-sm", token: "--text-sm", fallback: "0.875rem", use: "Footer, үзүүлэлтийн нэр" },
  { cls: "text-base", token: "--text-base", fallback: "1rem", use: "Бичвэр, товч" },
  { cls: "text-md", token: "--text-md", fallback: "18px", use: "Lead" },
  { cls: "text-h6", token: "--text-h6", fallback: "22px", use: "Картын гарчиг" },
  { cls: "text-h2", token: "--text-h2", fallback: "52px", use: "Хэсгийн гарчиг" },
  { cls: "text-h1", token: "--text-h1", fallback: "72px", use: "Hero гарчиг" },
];

const space = [
  { cls: "1", px: 4, use: "Тоо ба нэгжийн зай" },
  { cls: "2", px: 8, use: "Товчны дотор, tab хооронд" },
  { cls: "3", px: 12, use: "Товч, слайдер сумны padding" },
  { cls: "4", px: 16, use: "Товч хооронд" },
  { cls: "6", px: 24, use: "Гарчиг ба тайлбар" },
  { cls: "8", px: 32, use: "Карт хооронд, картын padding" },
  { cls: "12", px: 48, use: "Картын том padding" },
  { cls: "20", px: 80, use: "Хэсгийн гарчиг ба агуулга" },
];

const radii = [
  { cls: "rounded", value: "4px", use: "Слайдерын сум" },
  { cls: "rounded-md", value: "6px", use: "Товч, tab" },
  { cls: "rounded-card", value: "16px", use: "Карт, зураг, бичлэг" },
  { cls: "rounded-none", value: "0", use: "Бүтэн өргөнтэй hero, газрын зураг" },
];

const overlays = [
  { cls: "bg-black/40", label: "bg-black/40", use: "Бичлэг тоглохоос өмнө" },
  { cls: "bg-linear-to-t from-black/65 to-transparent to-60%", label: "from-black/65 → 60%", use: "Машины карт, том зураг" },
  { cls: "bg-linear-to-b from-black/45 to-transparent to-50%", label: "from-black/45 ↓ 50%", use: "Hero-ийн гарчгийн ард" },
  { cls: "bg-linear-to-t from-black/70 to-transparent to-60%", label: "from-black/70 → 60%", use: "Robotaxi бичлэг" },
];

const icons = [
  { src: "/assets/chevron-down.svg", name: "chevron-down", size: 24, use: "Дэлгүүр цэс" },
  { src: "/assets/chevron-right.svg", name: "chevron-right", size: 24, use: "Link товч" },
  { src: "/assets/arrow-back.svg", name: "arrow-back", size: 24, use: "Слайдер" },
  { src: "/assets/arrow-forward.svg", name: "arrow-forward", size: 24, use: "Слайдер" },
  { src: "/assets/play-button.svg", name: "play-button", size: 64, use: "FSD бичлэг" },
];

const motion = [
  { what: "Товчны hover", how: "opacity → 85%", time: "150ms", ease: "ease (Tailwind default)" },
  { what: "Tab сонголт", how: "background, color", time: "150ms", ease: "ease (Tailwind default)" },
  { what: "Бичлэг тоглох", how: "бүрхүүл, play товч алга болно", time: "300ms", ease: "ease" },
  { what: "Слайдер", how: "scroll-behavior: smooth, snap", time: "хөтөч", ease: "хөтөч" },
];

export default function StyleguidePage() {
  return (
    <div className="px-page py-section">
      <Container className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left table of contents */}
        <nav aria-label="Агуулга" className="lg:sticky lg:top-8 lg:h-fit lg:w-48 lg:shrink-0">
          <ol className="flex flex-wrap gap-x-6 gap-y-2 text-sm lg:flex-col lg:gap-3">
            {sections.map(([id, title], i) => (
              <li key={id}>
                <a href={`#${id}`} className="flex items-baseline gap-3 hover:underline">
                  <span className="text-xs text-ink/50">{String(i + 1).padStart(2, "0")}</span>
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="min-w-0 flex-1">
          <header className="mb-20 flex max-w-[768px] flex-col gap-6">
            <p className="text-sm tracking-[0.08em] text-ink/60 uppercase">Design system · Styleguide</p>
            <h1 className="text-h1">Дизайн систем</h1>
            <p className="text-md text-ink/70">
              Сайтын бодит код дээрээс зурагдсан токен, компонентын сан. Өнгө, хэмжээний утгыг хөтөч{" "}
              <Code>app/globals.css</Code>-ээс шууд уншдаг тул тэр файл өөрчлөгдөхөд энэ хуудас ч өөрчлөгдөнө.
              Компонентууд нь сайт дээрхтэй яг ижил React component-ууд.
            </p>
          </header>

          <SgSection id="principles" number={num("principles")} title="Зарчим">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Цэвэрхэн саарал гадаргуу", "Саарал дэвсгэр, цагаан карт, бараан бичвэр. Өнгө зөвхөн гол үйлдэлд: ногоон товч."],
                ["Зураг тэргүүлнэ", "Машины зураг, бичлэг том, бүтэн өргөнтэй. Бичвэр нь зураг дээр gradient-ээр уншигдана."],
                ["Нэг гэр бүлийн үсэг", "Inter: гарчиг, бичвэр, товч. Roboto Bold: зөвхөн том тоо."],
                ["Токеноор бичнэ", "Өнгө, хэмжээг px биш Tailwind токеноор: bg-primary, text-h2, px-page."],
              ].map(([title, text]) => (
                <SgPanel key={title} className="flex flex-col gap-3">
                  <h3 className="text-h6">{title}</h3>
                  <p className="text-ink/70">{text}</p>
                </SgPanel>
              ))}
            </div>
          </SgSection>

          <SgSection id="brand" number={num("brand")} title="Брэнд">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { bg: "bg-surface", invert: false, label: "Цайвар дээр · text-ink" },
                { bg: "bg-ink", invert: true, label: "Бараан дээр · white" },
                { bg: "bg-primary", invert: true, label: "Ногоон дээр · white" },
              ].map((b) => (
                <div
                  key={b.label}
                  className={cn("flex aspect-[4/3] flex-col items-center justify-center gap-6 rounded-card border border-line", b.bg)}
                >
                  <Image
                    src="/assets/tesla/logo-tesla-wordmark-black.png"
                    alt="Tesla"
                    width={274}
                    height={28}
                    className={cn("h-7 w-auto", b.invert && "brightness-0 invert")}
                  />
                  <p className={cn("text-sm", b.invert ? "text-white/80" : "text-ink/60")}>{b.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink/60">
              <Code>components/layout/Logo.tsx</Code> · 14px өндөр, navbar болон footer дээр ижил.
            </p>
          </SgSection>

          <SgSection id="color" number={num("color")} title="Өнгө">
            <div>
              <SgHeading>
                Үндсэн токен · <Code>@theme</Code>
              </SgHeading>
              <SgPanel className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-6">
                {colors.map((c) => (
                  <Swatch key={c.token} token={c.token} className={c.className} fallback={c.fallback} usage={c.usage} />
                ))}
              </SgPanel>
              <p className="mt-3 text-sm text-ink/60">Тоо нь цагаан дэвсгэр дээрх тодролт (WCAG). Бичвэрт 4.5:1-ээс дээш байх ёстой.</p>
            </div>
            <div>
              <SgHeading>Токен ба Tailwind класс</SgHeading>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="py-3 pr-4 font-semibold">Токен</th>
                      <th className="py-3 pr-4 font-semibold">Класс</th>
                      <th className="py-3 font-semibold">Хаана</th>
                    </tr>
                  </thead>
                  <tbody>
                    {colors.map((c) => (
                      <tr key={c.token} className="border-b border-line">
                        <td className="py-3 pr-4 font-mono">{c.token}</td>
                        <td className="py-3 pr-4 font-mono text-ink/70">{c.cls}</td>
                        <td className="py-3 text-ink/70">{c.usage}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-line">
                      <td className="py-3 pr-4 font-mono">—</td>
                      <td className="py-3 pr-4 font-mono text-ink/70">bg-white/90</td>
                      <td className="py-3 text-ink/70">Зураг дээрх цайвар товч</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-3 pr-4 font-mono">—</td>
                      <td className="py-3 pr-4 font-mono text-ink/70">text-ink/60</td>
                      <td className="py-3 text-ink/70">Туслах бичвэр, тайлбар</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SgSection>

          <SgSection id="type" number={num("type")} title="Үсэг">
            <div>
              <SgHeading>Үсгийн гэр бүл</SgHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                <SgPanel className="flex flex-col gap-3">
                  <p className="text-[48px] leading-none font-medium">Аа Өө Үү 0123</p>
                  <p>
                    <strong>Inter</strong> · 400, 500, 600 · <Code>font-sans</Code>
                  </p>
                  <p className="text-sm text-ink/60">Гарчиг, бичвэр, товч, цэс. Латин + кирилл.</p>
                </SgPanel>
                <SgPanel className="flex flex-col gap-3">
                  <p className="font-roboto text-[48px] leading-none font-bold">39,513</p>
                  <p>
                    <strong>Roboto</strong> · 400, 700 · <Code>font-roboto</Code>
                  </p>
                  <p className="text-sm text-ink/60">Том тоо, машины картын тайлбар.</p>
                </SgPanel>
              </div>
            </div>

            <div>
              <SgHeading>Хэмжээний шатлал</SgHeading>
              <SgPanel className="flex flex-col divide-y divide-line p-0">
                {scale.map((s) => (
                  <div key={s.cls} className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                    <div className="flex shrink-0 gap-3 font-mono text-xs sm:w-56">
                      <span className="font-semibold">{s.cls}</span>
                      <span className="text-ink/60">
                        <CssVar name={s.token} fallback={s.fallback} />
                      </span>
                    </div>
                    <p className={cn("min-w-0 truncate", s.cls)}>Model Y</p>
                    <p className="text-sm text-ink/60 sm:ml-auto sm:shrink-0">{s.use}</p>
                  </div>
                ))}
              </SgPanel>
              <p className="mt-3 text-sm text-ink/60">
                <Code>text-h1</Code>, <Code>text-h2</Code> дэлгэцээс хамаарч багасна: 72/56/40px ба 52/44/32px. Цонхоо
                жижигрүүлж үзээрэй, утга нь шинэчлэгдэнэ.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <SgHeading>Мөрийн өндөр</SgHeading>
                <SgPanel className="flex flex-col gap-3 text-sm">
                  {[
                    ["1.2", "h1, h2"],
                    ["1.3", "Roboto том тоо"],
                    ["1.4", "h6, картын гарчиг"],
                    ["1.5", "Бичвэр, lead"],
                  ].map(([v, use]) => (
                    <p key={v} className="flex justify-between gap-4">
                      <span className="font-mono">{v}</span>
                      <span className="text-ink/60">{use}</span>
                    </p>
                  ))}
                </SgPanel>
              </div>
              <div>
                <SgHeading>Үсэг хоорондын зай</SgHeading>
                <SgPanel className="flex flex-col gap-3 text-sm">
                  <p className="flex justify-between gap-4">
                    <span className="font-mono">-0.01em</span>
                    <span className="text-ink/60">Бүх гарчиг</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span className="font-mono">0</span>
                    <span className="text-ink/60">Бичвэр, товч</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span className="font-mono">0.08em</span>
                    <span className="text-ink/60">Styleguide-ийн жижиг label</span>
                  </p>
                </SgPanel>
              </div>
            </div>

            <div>
              <SgHeading>Бичвэрийн хэв маяг</SgHeading>
              <SgPanel className="flex flex-col divide-y divide-line p-0">
                {textStyles.map((t) => (
                  <div key={t.label} className="flex flex-col gap-2 px-6 py-5">
                    <p className={cn("min-w-0 wrap-anywhere", t.className)}>{t.sample}</p>
                    <p className="font-mono text-xs text-ink/60">
                      {t.label} — {t.meta}
                    </p>
                  </div>
                ))}
              </SgPanel>
            </div>
          </SgSection>

          <SgSection id="spacing" number={num("spacing")} title="Зай">
            <div>
              <SgHeading>4px шатлал (Tailwind spacing)</SgHeading>
              <SgPanel className="flex flex-col gap-3">
                {space.map((s) => (
                  <div key={s.cls} className="grid grid-cols-[3rem_1fr] items-center gap-4 text-sm sm:grid-cols-[3rem_6rem_1fr]">
                    <span className="font-mono">{s.cls}</span>
                    <span className="hidden font-mono text-ink/60 sm:block">{s.px}px</span>
                    <div className="flex items-center gap-4">
                      <div className="h-4 shrink-0 rounded-sm bg-primary" style={{ width: s.px }} />
                      <span className="text-ink/60">{s.use}</span>
                    </div>
                  </div>
                ))}
              </SgPanel>
            </div>
            <div>
              <SgHeading>Байршил</SgHeading>
              <SgPanel className="flex flex-col divide-y divide-line p-0 text-sm">
                {[
                  { cls: "px-page", token: "--spacing-page", fallback: "64px", use: "Хуудасны хажуугийн зай (64 / 32 / 16px)" },
                  { cls: "py-section", token: "--spacing-section", fallback: "112px", use: "Хэсгийн дээд, доод зай (112 / 80 / 64px)" },
                  { cls: "max-w-site", token: "--container-site", fallback: "1280px", use: "Агуулгын дээд өргөн" },
                ].map((l) => (
                  <div key={l.cls} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
                    <span className="font-mono font-semibold sm:w-32">{l.cls}</span>
                    <span className="font-mono text-ink/60 sm:w-24">
                      <CssVar name={l.token} fallback={l.fallback} />
                    </span>
                    <span className="text-ink/60">{l.use}</span>
                  </div>
                ))}
                <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
                  <span className="font-mono font-semibold sm:w-32">h-[72px]</span>
                  <span className="font-mono text-ink/60 sm:w-24">72px</span>
                  <span className="text-ink/60">Navbar-ийн өндөр</span>
                </div>
                <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
                  <span className="font-mono font-semibold sm:w-32">sm: / lg:</span>
                  <span className="font-mono text-ink/60 sm:w-24">640 / 1024px</span>
                  <span className="text-ink/60">Утас → таблет → компьютер</span>
                </div>
              </SgPanel>
            </div>
          </SgSection>

          <SgSection id="shape" number={num("shape")} title="Хэлбэр">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {radii.map((r) => (
                <SgPanel key={r.cls} className="flex flex-col gap-4">
                  <div className={cn("h-24 border border-line bg-ink-5", r.cls)} />
                  <div className="text-sm">
                    <p className="font-mono font-semibold">{r.cls}</p>
                    <p className="font-mono text-ink/60">{r.value}</p>
                    <p className="text-ink/60">{r.use}</p>
                  </div>
                </SgPanel>
              ))}
            </div>
          </SgSection>

          <SgSection id="stroke" number={num("stroke")} title="Шугам">
            <SgPanel className="flex flex-col divide-y divide-line p-0 text-sm">
              <div className="flex flex-col gap-3 px-6 py-5">
                <hr className="border-line" />
                <p>
                  <strong>Hairline</strong> · 1px <Code>border-line</Code> · footer, хүснэгт, үзүүлэлтийн бүлэг
                </p>
              </div>
              <div className="flex flex-col gap-3 px-6 py-5">
                <div className="border-l border-line pl-8 text-h6">39,513</div>
                <p>
                  <strong>Зүүн шугам</strong> · <Code>border-l border-line pl-8</Code> · StatItem, FeatureItem
                </p>
              </div>
              <div className="flex flex-col gap-3 px-6 py-5">
                <span className="flex w-fit rounded border border-line bg-card p-3">
                  <Image src="/assets/arrow-forward.svg" alt="" width={24} height={24} />
                </span>
                <p>
                  <strong>Слайдерын сум</strong> · <Code>border-surface</Code> (саарал дэвсгэр дээр харагдахгүй тул энд line-аар харуулав)
                </p>
              </div>
              <div className="flex flex-col gap-3 px-6 py-5">
                <p>
                  <strong>Focus</strong> · хөтчийн үндсэн focus хүрээ (тусгай загвар одоогоор алга)
                </p>
              </div>
            </SgPanel>
          </SgSection>

          <SgSection id="shade" number={num("shade")} title="Сүүдэр, бүрхүүл">
            <p className="max-w-[640px] text-ink/70">
              Drop shadow ашигладаггүй. Зураг дээрх бичвэрийг хар өнгийн тунгалаг бүрхүүл эсвэл gradient-ээр уншигдуулна.
            </p>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {overlays.map((o) => (
                <div key={o.label} className="flex flex-col gap-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                    <Image src="/assets/modely/hero.jpg" alt="" fill sizes="300px" className="object-cover" />
                    <div className={cn("absolute inset-0", o.cls)} />
                    <p className="absolute bottom-4 left-4 font-medium text-white">Model Y</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-mono font-semibold">{o.label}</p>
                    <p className="text-ink/60">{o.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </SgSection>

          <SgSection id="icons" number={num("icons")} title="Дүрс">
            <p className="max-w-[640px] text-ink/70">
              SVG файлууд <Code>public/assets/</Code> дотор. <Code>next/image</Code>-ээр тогтмол хэмжээтэй харуулна.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {icons.map((i) => (
                <SgPanel key={i.name} className="flex flex-col items-center gap-3 text-center text-sm">
                  <div className="flex h-16 items-center justify-center">
                    <Image src={i.src} alt="" width={i.size} height={i.size} />
                  </div>
                  <p className="font-mono font-semibold">{i.name}</p>
                  <p className="text-ink/60">
                    {i.size}px · {i.use}
                  </p>
                </SgPanel>
              ))}
            </div>
          </SgSection>

          <SgSection id="components" number={num("components")} title="Компонент">
            <div>
              <SgHeading>
                Button · <Code>components/ui/Button.tsx</Code>
              </SgHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                <SgPanel className="flex flex-wrap items-center gap-4">
                  <Button href="#components">Захиалах</Button>
                  <Button href="#components" variant="secondary">
                    Туршиж үзэх
                  </Button>
                  <Button href="#components" variant="link">
                    Дэлгэрэнгүй
                  </Button>
                  <Button href="#components" size="sm">
                    Жижиг
                  </Button>
                </SgPanel>
                <div className="relative flex flex-wrap items-center gap-4 overflow-hidden rounded-card p-6">
                  <Image src="/assets/model3/hero.jpg" alt="" fill sizes="600px" className="object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative flex flex-wrap gap-4">
                    <Button href="#components">Захиалах</Button>
                    <Button href="#components" variant="light">
                      Дэлгэрэнгүй
                    </Button>
                  </div>
                </div>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-ink/70 sm:grid-cols-2">
                <li>
                  <Code>primary</Code> Гол үйлдэл: захиалах. Ногоон, цагаан бичвэр.
                </li>
                <li>
                  <Code>secondary</Code> Цайвар дэвсгэр дээрх хоёрдогч үйлдэл.
                </li>
                <li>
                  <Code>light</Code> Зураг дээрх хоёрдогч үйлдэл.
                </li>
                <li>
                  <Code>link</Code> Сумтай текст холбоос.
                </li>
              </ul>
            </div>

            <div>
              <SgHeading>
                SectionTitle · <Code>components/ui/SectionTitle.tsx</Code>
              </SgHeading>
              <SgPanel>
                <SectionTitle narrow eyebrow="Спорт седан" title="Model 3-тай танилц" description="Model 3 бүрт стандартаар ирэх онцлогууд." />
              </SgPanel>
            </div>

            <div>
              <SgHeading>
                StatItem, FeatureItem · <Code>components/ui/StatItem.tsx</Code>
              </SgHeading>
              <SgPanel className="grid gap-8 lg:grid-cols-3">
                <StatItem value="39,513" label="Supercharger" />
                <StatItem value="321" unit="миль" label="Нэг цэнэглэлтээр" size="medium" />
                <FeatureItem title="Урд камер" text="Илүү сайн харагдац, хялбар зогсоолт." />
              </SgPanel>
            </div>

            <div>
              <SgHeading>
                Tabs · <Code>components/ui/Tabs.tsx</Code>
              </SgHeading>
              <SgPanel>
                <Tabs
                  title="Загвараа сонго"
                  className="gap-6"
                  tabs={[
                    { id: "a", label: "Model 3", content: <p className="text-md">Model 3: 321 миль, 5.8 сек.</p> },
                    { id: "b", label: "Premium", content: <p className="text-md">Premium: 346 миль, хос мотор.</p> },
                    { id: "c", label: "Performance", content: <p className="text-md">Performance: 528 м.х., 2.9 сек.</p> },
                  ]}
                />
              </SgPanel>
            </div>

            <div>
              <SgHeading>
                Картууд · <Code>components/cards/</Code>
              </SgHeading>
              <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
                <FeatureCard image={{ src: "/assets/model3/meet-safety.png", alt: "Аюулгүй байдал" }} label="FeatureCard" />
                <div className="grid content-start gap-8 sm:grid-cols-2">
                  <InfoCard
                    image={{ src: "/assets/model3/afford-1.jpg", alt: "Энгийн дизайн" }}
                    title="InfoCard (зурагтай)"
                    text="Чанар, найдвартай байдлыг алдалгүй үнийг бага байлгадаг."
                  />
                  <InfoCard title="InfoCard (зураггүй)" text="Суухаасаа өмнө салоноо дулаацуул эсвэл сэрүүцүүл." />
                </div>
              </div>
            </div>

            <div>
              <SgHeading>
                Slider · <Code>components/ui/Slider.tsx</Code>
              </SgHeading>
              <div className="overflow-hidden">
                <Slider dotCount={6}>
                  {["meet-convenience.png", "meet-fsd.jpg", "meet-warranty.jpg", "meet-design.jpg"].map((f, i) => (
                    <FeatureCard key={f} image={{ src: `/assets/model3/${f}`, alt: "" }} label={`Слайд ${i + 1}`} />
                  ))}
                </Slider>
              </div>
            </div>
          </SgSection>

          <SgSection id="sections" number={num("sections")} title="Хэсгүүд">
            <p className="max-w-[640px] text-ink/70">
              Хуудсууд эдгээр хэсгээс бүтдэг. Model хуудсуудын хэсгүүдийг <Code>data/model3.ts</Code>,{" "}
              <Code>data/modely.ts</Code> дахь <Code>blocks</Code> жагсаалт удирдана.
            </p>
            <div>
              <SgHeading>
                PhotoBand · <Code>components/model/PhotoBand.tsx</Code>
              </SgHeading>
              <PhotoBand
                image={{ src: "/assets/modely/range.jpg", alt: "Model Y" }}
                title="Хангалттай зай"
                text="Нэг цэнэглэлтээр 321 миль хүртэл."
              />
            </div>
            <div>
              <SgHeading>
                SplitCard · <Code>components/cards/SplitCard.tsx</Code>
              </SgHeading>
              <SplitCard media={{ src: "/assets/offers.png", alt: "Урамшуулал" }}>
                <SectionTitle title="Одоогийн урамшуулал" description="Хугацаатай урамшууллын саналуудтай танилцаарай." />
                <div>
                  <Button href="#sections">Дэлгэрэнгүй</Button>
                </div>
              </SplitCard>
            </div>
            <div>
              <SgHeading>Бусад хэсгүүд</SgHeading>
              <SgPanel className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                {[
                  ["Hero", "Гарчиг дээр, үзүүлэлт доор (model хуудас)"],
                  ["FsdSection", "SplitCard + VideoLightbox"],
                  ["TrimSwitcher", "Tabs + загвар бүрийн карт"],
                  ["SplitRow", "Зураг, текст ээлжилсэн мөр"],
                  ["SpecsSection", "Tabs + үзүүлэлтийн хүснэгт"],
                  ["ChargeMap, ChargeStats", "Газрын зураг, тоо"],
                  ["RobotaxiBanner", "Арын бичлэгтэй карт"],
                  ["EndCta", "Хуудасны төгсгөлийн том зураг"],
                ].map(([name, use]) => (
                  <p key={name}>
                    <Code>{name}</Code> <span className="text-ink/60">{use}</span>
                  </p>
                ))}
              </SgPanel>
            </div>
          </SgSection>

          <SgSection id="motion" number={num("motion")} title="Хөдөлгөөн">
            <p className="max-w-[640px] text-ink/70">
              Хөдөлгөөн цөөн, богино: зөвхөн hover, tab солих, бичлэг тоглох үед. Доорх товч дээр хулганаа аваачиж үзээрэй.
            </p>
            <SgPanel className="flex flex-col divide-y divide-line p-0 text-sm">
              {motion.map((m) => (
                <div key={m.what} className="grid gap-1 px-6 py-4 sm:grid-cols-4 sm:gap-6">
                  <span className="font-semibold">{m.what}</span>
                  <span className="text-ink/70">{m.how}</span>
                  <span className="font-mono">{m.time}</span>
                  <span className="font-mono text-ink/60">{m.ease}</span>
                </div>
              ))}
            </SgPanel>
            <div className="flex flex-wrap gap-4">
              <Button href="#motion">Hover хийж үзэх</Button>
              <Button href="#motion" variant="secondary">
                Hover хийж үзэх
              </Button>
            </div>
            <p className="text-sm text-ink/60">
              Анхаар: <Code>prefers-reduced-motion</Code> тохиргоог одоогоор тусгайлан дэмжээгүй.
            </p>
          </SgSection>
        </div>
      </Container>
    </div>
  );
}
