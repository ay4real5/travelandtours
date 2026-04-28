import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTourBySlug } from "@/lib/db";

type TourDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

function formatNaira(value: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function TourDetailsPage({ params }: TourDetailsPageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ height: "clamp(320px, 55vw, 580px)", minHeight: "320px" }}
      >
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(14,12,10,0.9) 0%, rgba(14,12,10,0.45) 55%, rgba(14,12,10,0.1) 100%)",
          }}
        />
        <div className="shell absolute inset-0 flex flex-col justify-end pb-10 md:pb-20">
          <p className="eyebrow-gold mb-2">{tour.location}</p>
          <h1
            className="font-bold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1, maxWidth: "20ch" }}
          >
            {tour.title}
          </h1>
          <div
            className="flex flex-wrap gap-6 mt-6 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>{tour.duration}</span>
            <span style={{ color: "var(--gold-lt)", fontWeight: 700, fontSize: "1rem" }}>
              {formatNaira(tour.price)}
            </span>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-20" style={{ background: "var(--linen)" }}>
        <div className="shell">
          <div className="grid gap-8 md:gap-12 md:grid-cols-[1fr_320px] md:items-start">
            {/* Description */}
            <div>
              <p className="eyebrow-gold mb-3">About This Tour</p>
              <div className="gold-rule mb-6" />
              <p
                className="leading-relaxed"
                style={{ color: "var(--ink-text)", fontSize: "1rem", maxWidth: "60ch" }}
              >
                {tour.description}
              </p>
            </div>

            {/* Summary card */}
            <div
              className="p-6 md:p-8 md:sticky md:top-28"
              style={{
                background: "#fff",
                border: "1px solid var(--border-light)",
                borderRadius: "6px",
                boxShadow: "0 4px 24px rgba(24,16,8,0.06)",
              }}
            >
              <p className="eyebrow-gold mb-5">Tour Summary</p>
              <div className="space-y-4 text-sm">
                <div>
                  <p style={{ color: "var(--muted-lt)", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Location</p>
                  <p className="mt-1 font-semibold" style={{ color: "var(--ink-text)" }}>{tour.location}</p>
                </div>
                <div>
                  <p style={{ color: "var(--muted-lt)", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Duration</p>
                  <p className="mt-1 font-semibold" style={{ color: "var(--ink-text)" }}>{tour.duration}</p>
                </div>
                <div>
                  <p style={{ color: "var(--muted-lt)", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Price</p>
                  <p className="mt-1 font-bold" style={{ color: "var(--gold)", fontSize: "1.15rem" }}>{formatNaira(tour.price)}</p>
                </div>
              </div>
              <Link href="/booking" className="btn-gold mt-8 w-full justify-center">
                Book This Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
