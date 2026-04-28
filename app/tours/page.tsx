import TourCard from "@/components/TourCard";
import { getTours } from "@/lib/db";

export default async function ToursPage() {
  const tours = await getTours();

  return (
    <>
      {/* Header — dark with photo bg */}
      <section
        className="relative pt-44 pb-28 overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        {/* Subtle warm texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(192,139,40,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="shell relative z-10">
          <p className="eyebrow-gold">All Destinations</p>
          <div className="gold-rule mt-3" />
          <h1
            className="mt-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "var(--pearl)" }}
          >
            Curated Journeys,
            <br />
            <em style={{ color: "var(--gold-lt)" }}>Every Continent.</em>
          </h1>
          <p
            className="mt-5 leading-relaxed"
            style={{ color: "rgba(244,238,228,0.55)", maxWidth: "52ch", fontSize: "1rem" }}
          >
            Hand-picked destinations, fully managed from departure to return.
            Every trip is built around you.
          </p>
        </div>
      </section>

      {/* Grid — warm linen */}
      <section className="py-20" style={{ background: "var(--linen)" }}>
        <div className="shell">
          {tours.length > 0 ? (
            <div className="tours-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <p className="text-center py-24" style={{ color: "var(--muted-lt)" }}>
              No destinations yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
