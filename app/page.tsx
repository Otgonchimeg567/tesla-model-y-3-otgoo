import GallerySlide from "@/components/cards/GallerySlide";
import SplitCard from "@/components/cards/SplitCard";
import VehicleCard from "@/components/cards/VehicleCard";
import ChargeMap from "@/components/home/ChargeMap";
import ChargeStats from "@/components/home/ChargeStats";
import FsdSection from "@/components/home/FsdSection";
import Hero from "@/components/home/Hero";
import RobotaxiBanner from "@/components/home/RobotaxiBanner";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Slider from "@/components/ui/Slider";
import { energy, promos } from "@/data/home";
import { getVehicles } from "@/lib/vehicles";

export default async function HomePage() {
  const vehicles = await getVehicles();

  return (
    <>
      <Hero
        title="Model 3"
        subtitle="Жилийн 1.99% хүүтэй санхүүжилт"
        alt="Model 3"
        desktop={{ src: "/assets/tesla/promo-03-model-3-desktop.jpg", width: 3370, height: 1430 }}
        mobile={{ src: "/assets/tesla/promo-03-model-3-mobile.jpg", width: 767, height: 1404 }}
        actions={[
          { label: "Захиалах", href: "/model3" },
          { label: "Дэлгэрэнгүй", href: "/model3", variant: "light" },
        ]}
      />

      <FsdSection />

      <Section className="flex flex-col gap-20">
        <SectionTitle narrow title="Машинууд" description="Урт тэнхлэгтэй Model Y L-ээс спорт седан Model 3 хүртэл." />
        <Slider dotCount={6}>
          {vehicles.map((v) => (
            <VehicleCard key={v.image.src} {...v} />
          ))}
        </Slider>
      </Section>

      {promos.map((p) => (
        <Section key={p.title}>
          <SplitCard media={p.image}>
            <SectionTitle title={p.title} description={p.text} />
            <div>
              <Button href="#">Дэлгэрэнгүй</Button>
            </div>
          </SplitCard>
        </Section>
      ))}

      <ChargeMap />
      <ChargeStats />
      <RobotaxiBanner />

      <Section className="flex flex-col gap-20">
        <SectionTitle narrow title="Эрчим хүч" description="Гэр, бизнест зориулсан нарны хавтан болон батарей." />
        <Slider dotCount={3} spacious>
          {energy.map((e) => (
            <GallerySlide key={e.title} {...e} />
          ))}
        </Slider>
      </Section>
    </>
  );
}
