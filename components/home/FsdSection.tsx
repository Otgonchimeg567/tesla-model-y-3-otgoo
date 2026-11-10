import SplitCard from "@/components/cards/SplitCard";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import VideoLightbox from "./VideoLightbox";

const stats = [
  { value: "7 дахин", label: "Цөөн мөргөлдөөн" },
  { value: "17,156,792,557", label: "Туулсан миль" },
];

export default function FsdSection() {
  return (
    <Section>
      <SplitCard
        tall
        media={<VideoLightbox src="/assets/tesla/fsd-section-desktop.mp4" poster="/assets/tesla/fsd-poster-desktop-tablet.jpg" />}
      >
        <div className="flex flex-col gap-8">
          <SectionTitle title="Бүрэн автомат жолоодлого (Хяналттай)" description="Аялал бүрийг хялбар болгоно. Сард $99." />
          <div className="flex flex-col gap-6 py-2 sm:flex-row">
            {stats.map((s) => (
              <div key={s.label} className="flex min-w-0 flex-1 flex-col gap-2">
                <p className="text-h2 wrap-anywhere">{s.value}</p>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Button href="#" variant="secondary">
            Туршиж үзэх
          </Button>
          <Button href="#" variant="link">
            Дэлгэрэнгүй
          </Button>
        </div>
      </SplitCard>
    </Section>
  );
}
