import Image from "next/image";
import { Container } from "@/components/ui/Section";

/** Large "Find your charge" heading over a full-width map. */
export default function ChargeMap() {
  return (
    <section className="overflow-hidden bg-surface">
      <div className="px-page py-section">
        <Container>
          <h2 className="max-w-[768px] text-h1">Цэнэглэх цэгээ олоорой</h2>
        </Container>
      </div>
      <div className="relative aspect-[1440/810] w-full">
        <Image src="/assets/charge-map.png" alt="Цэнэглэх станцуудын газрын зураг" fill sizes="100vw" className="object-cover" />
      </div>
    </section>
  );
}
