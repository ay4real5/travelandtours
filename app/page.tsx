import Link from "next/link";
import Image from "next/image";
import TourCard from "@/components/TourCard";
import { getTours } from "@/lib/db";

const HERO_IMG =
  "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1800&q=85&auto=format&fit=crop";

const MARQUEE_ITEMS = [
  "Maldives", "·", "Santorini", "·", "Bali", "·", "Dubai", "·",
  "Paris", "·", "Zanzibar", "·", "Amalfi", "·", "Seychelles", "·",
  "Maldives", "·", "Santorini", "·", "Bali", "·", "Dubai", "·",
  "Paris", "·", "Zanzibar", "·", "Amalfi", "·", "Seychelles", "·",
];

const testimonials = [
  {
    quote: "Five agencies in five years — Babz is in a different league. Every detail was flawless.",
    name: "Amaka O.",
    tag: "Dubai Ultra-Luxury",
  },
  {
    quote: "Our Zanzibar honeymoon was beyond anything we imagined. They handled absolutely everything.",
    name: "Tunde & Sola F.",
    tag: "Zanzibar Beach Escape",
  },
  {
    quote: "From visa to hotel check-in, it felt like having a personal travel director by my side.",
    name: "Chidi N.",
    tag: "Santorini Sunset Villa",
  },
];

export default async function HomePage() {
  const tours = await getTours();

  return (
    <>
      {/* ══════════════════════════════════════
          1. HERO — full-screen photo, dark
      ══════════════════════════════════════ */}
      <section className="relative w-full" style={{ height: "100vh", minHeight: "600px" }}>
        <Image
          src={HERO_IMG}
          alt="Maldives overwater villa"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient: heavy left for text, light right for scenery */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(14,12,10,0.92) 0%, rgba(14,12,10,0.6) 45%, rgba(14,12,10,0.15) 100%)",
          }}
        />
        <div className="shell absolute inset-0 flex flex-col justify-center">
          <p className="eyebrow-gold mb-6">Premium International Travel</p>
          <h1
            className="font-bold"
            style={{
              fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
              lineHeight: 1.0,
              maxWidth: "13ch",
              color: "#fff",
            }}
          >
            Beyond
            <br />
            <em style={{ color: "var(--gold-lt)", fontStyle: "italic" }}>
              the Expected.
            </em>
          </h1>
          <p
            className="mt-7"
            style={{
              color: "rgba(244,238,228,0.7)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              maxWidth: "44ch",
              lineHeight: 1.75,
            }}
          >
            We curate journeys to the world&apos;s most extraordinary places —
            so you arrive as a guest, not a tourist.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/tours" className="btn-gold">Explore Destinations</Link>
            <Link href="/booking" className="btn-outline-light">Plan My Trip →</Link>
          </div>
          {/* Stats */}
          <div
            className="hero-stats flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-16 pt-8 sm:pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { n: "500+", l: "Trips completed" },
              { n: "22", l: "Destinations" },
              { n: "4.9★", l: "Avg. rating" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.n}>
                <p
                  className="hero-stat-num font-bold text-white"
                  style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(1.3rem, 3.5vw, 1.75rem)" }}
                >
                  {s.n}
                </p>
                <p className="eyebrow-gold mt-1" style={{ fontSize: "0.53rem" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.45 }}>
          <span className="eyebrow-gold" style={{ fontSize: "0.48rem" }}>Scroll</span>
          <div className="w-px h-10" style={{ background: "rgba(244,238,228,0.5)" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. MARQUEE — warm charcoal strip
      ══════════════════════════════════════ */}
      <div
        className="marquee-wrap py-5"
        style={{ background: "var(--charcoal)" }}
      >
        <div className="marquee-inner">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="marquee-item"
              style={item === "·" ? { color: "rgba(244,238,228,0.25)" } : {}}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          3. FEATURED JOURNEY — warm linen
      ══════════════════════════════════════ */}
      {tours.length > 0 && (
        <section className="py-24" style={{ background: "var(--linen)" }}>
          <div className="shell">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow-gold">Signature Experience</p>
                <div className="gold-rule mt-3" />
                <h2
                  className="mt-5"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--ink-text)" }}
                >
                  Our Most Coveted Journey
                </h2>
              </div>
              <Link
                href="/tours"
                className="hidden md:block text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{ color: "var(--gold)" }}
              >
                All Journeys →
              </Link>
            </div>

            {/* Featured hero card */}
            <Link
              href={`/tours/${tours[0].slug}`}
              className="block relative overflow-hidden group"
              style={{ borderRadius: "6px", height: "clamp(340px, 50vw, 560px)", boxShadow: "0 20px 60px rgba(24,16,8,0.16)" }}
            >
              <Image
                src={tours[0].imageUrl}
                alt={tours[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(14,12,10,0.85) 0%, rgba(14,12,10,0.3) 55%, rgba(14,12,10,0.05) 100%)",
                }}
              />
              <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between">
                <span className="tag-gold self-start">Editor&apos;s Choice</span>
                <div>
                  <p className="eyebrow-gold mb-3">{tours[0].location}</p>
                  <h3 className="font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", maxWidth: "18ch" }}>
                    {tours[0].title}
                  </h3>
                  <div
                    className="flex items-center gap-6 mt-7 pt-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{tours[0].duration}</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                    <span className="font-bold" style={{ color: "var(--gold-lt)", fontSize: "1.1rem" }}>
                      from ₦{(tours[0].price / 1_000_000).toFixed(1)}M
                    </span>
                    <span className="ml-auto text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold-lt)" }}>
                      Discover →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          4. DESTINATIONS GRID — linen-alt
      ══════════════════════════════════════ */}
      {tours.length > 1 && (
        <section className="pb-28" style={{ background: "var(--linen-alt)" }}>
          <div className="shell">
            <div className="flex items-end justify-between py-14 mb-2">
              <div>
                <p className="eyebrow-gold">All Destinations</p>
                <div className="gold-rule mt-3" />
                <h2 className="mt-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--ink-text)" }}>
                  Where Will You Go Next?
                </h2>
              </div>
              <Link
                href="/tours"
                className="hidden md:block text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{ color: "var(--gold)" }}
              >
                Browse All →
              </Link>
            </div>
            <div className="tours-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.slice(1).map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          5. PHILOSOPHY — deep forest green
      ══════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: "var(--forest)" }}>
        <div className="shell">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="eyebrow-gold mb-6">Our Philosophy</p>
              <p
                className="font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  fontStyle: "italic",
                  color: "var(--pearl)",
                }}
              >
                &ldquo;Travel should feel&nbsp;
                <span style={{ color: "var(--gold-lt)" }}>effortless,</span>
                <br />not exhausting.&rdquo;
              </p>
              <p className="mt-7 leading-relaxed" style={{ color: "rgba(244,238,228,0.65)", fontSize: "1rem", maxWidth: "42ch" }}>
                We are not a booking engine. We are your personal travel team — a Nigeria-based
                agency that knows every route, resort, and shortcut to making your journey extraordinary.
              </p>
              <Link href="/booking" className="btn-gold mt-10 inline-flex">
                Start Planning
              </Link>
            </div>
            <div>
              {[
                { n: "01", title: "Bespoke Itineraries", desc: "No two trips look alike. Every detail designed around you." },
                { n: "02", title: "Zero-Stress Logistics", desc: "Visa, flights, hotels, transfers — completely handled." },
                { n: "03", title: "On-Call Support", desc: "WhatsApp or call us at 2am — we will pick up." },
                { n: "04", title: "Transparent Pricing", desc: "You know exactly what you pay, and why." },
              ].map((f) => (
                <div
                  key={f.n}
                  className="flex gap-6 py-6"
                  style={{ borderBottom: "1px solid rgba(244,238,228,0.08)" }}
                >
                  <span
                    className="font-bold shrink-0 mt-0.5"
                    style={{
                      fontFamily: "var(--font-display), serif",
                      color: "var(--gold)",
                      opacity: 0.5,
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {f.n}
                  </span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--pearl)" }}>{f.title}</p>
                    <p className="text-sm mt-1" style={{ color: "rgba(244,238,228,0.5)" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. TESTIMONIALS — warm linen
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: "var(--linen)" }}>
        <div className="shell">
          <p className="eyebrow-gold text-center mb-4">Client Stories</p>
          <div className="gold-rule mx-auto mb-16" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col justify-between p-8"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-light)",
                  borderRadius: "6px",
                  boxShadow: "0 4px 20px rgba(24,16,8,0.06)",
                }}
              >
                <p className="leading-relaxed" style={{ color: "var(--muted-lt)", fontSize: "0.95rem" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border-light)" }}>
                  <p className="font-semibold text-sm" style={{ color: "var(--ink-text)" }}>{t.name}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--gold)" }}>{t.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. CTA — warm charcoal
      ══════════════════════════════════════ */}
      <section className="relative py-32 text-center overflow-hidden" style={{ background: "var(--charcoal)" }}>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "700px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(192,139,40,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div className="shell relative z-10">
          <p className="eyebrow-gold mb-4">Ready when you are</p>
          <h2
            className="font-bold mx-auto"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", maxWidth: "20ch", color: "var(--pearl)" }}
          >
            Your next chapter starts here.
          </h2>
          <p className="mt-5 mx-auto" style={{ color: "rgba(244,238,228,0.5)", maxWidth: "46ch", fontSize: "1rem" }}>
            Tell us where you want to go. We&apos;ll make it the trip of your life.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="btn-gold">Start Planning</Link>
            <Link href="/tours" className="btn-outline-light">Browse Destinations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
