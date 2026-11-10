import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StatItem from "@/components/ui/StatItem";

export default function ChargeStats() {
  return (
    <Section className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
      <div className="flex flex-col gap-8 lg:w-[616px] lg:shrink-0">
        <SectionTitle
          title="Цэнэглэх сүлжээ"
          description="Ойролцоох Supercharger болон Destination цэнэглэгчдийг үзээрэй."
        />
        <div className="flex flex-wrap items-center gap-6">
          <Button href="#" variant="secondary">
            Сүлжээг үзэх
          </Button>
          <Button href="#" variant="link">
            Дэлгэрэнгүй
          </Button>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-12">
        <StatItem value="39,513" label="Supercharger (хурдан цэнэглэгч)" />
        <StatItem value="401" label="Destination цэнэглэгч" />
      </div>
    </Section>
  );
}
