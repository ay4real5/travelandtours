import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/lib/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  const priceM = (tour.price / 1_000_000).toFixed(1);

  return (
    <Link href={`/tours/${tour.slug}`} className="tour-card block">
      {/* Photo */}
      <div className="tour-card-photo">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          className="tour-card-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Duration badge */}
        <span
          className="absolute top-3 right-3 text-[0.58rem] font-bold uppercase tracking-widest px-2.5 py-1"
          style={{
            background: "rgba(14,12,10,0.65)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "2px",
            color: "var(--pearl)",
          }}
        >
          {tour.duration}
        </span>
      </div>

      {/* Info panel — white, dark text */}
      <div className="tour-card-body">
        <div>
          <p className="eyebrow-gold" style={{ fontSize: "0.57rem" }}>
            {tour.location}
          </p>
          <h3
            className="mt-2 font-semibold leading-snug"
            style={{ fontSize: "1.05rem", color: "var(--ink-text)" }}
          >
            {tour.title}
          </h3>
        </div>
        <div
          className="flex items-center justify-between mt-4 pt-4"
          style={{ borderTop: "1px solid var(--border-light)" }}
        >
          <span className="font-bold" style={{ color: "var(--gold)", fontSize: "1rem" }}>
            from ₦{priceM}M
          </span>
          <span
            className="text-[0.62rem] font-bold uppercase tracking-widest"
            style={{ color: "var(--muted-lt)" }}
          >
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
