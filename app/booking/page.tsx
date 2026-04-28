import { getTours } from "@/lib/db";

export default async function BookingPage() {
  const tours = await getTours();

  return (
    <>
      {/* Header */}
      <section className="relative pt-44 pb-28 overflow-hidden" style={{ background: "var(--ink)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(192,139,40,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="shell relative z-10">
          <p className="eyebrow-gold">Reserve Your Journey</p>
          <div className="gold-rule mt-3" />
          <h1
            className="mt-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "var(--pearl)" }}
          >
            Book a Tour
          </h1>
          <p
            className="mt-5 leading-relaxed"
            style={{ color: "rgba(244,238,228,0.55)", maxWidth: "52ch", fontSize: "1rem" }}
          >
            Fill in your details and our team will reach out within 24 hours to confirm your booking.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20" style={{ background: "var(--linen)" }}>
        <div className="shell">
          <form
            method="post"
            action="/api/bookings"
            className="max-w-2xl grid gap-5 sm:grid-cols-2"
          >
            <label className="flex flex-col gap-2">
              <span className="text-[0.63rem] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--muted-lt)" }}>
                Full Name
              </span>
              <input
                name="name"
                required
                placeholder="Jane Doe"
                className="field-input"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[0.63rem] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--muted-lt)" }}>
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="field-input"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[0.63rem] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--muted-lt)" }}>
                Tour
              </span>
              <select
                name="tour_id"
                required
                defaultValue=""
                className="field-input"
              >
                <option value="" disabled>Select a tour</option>
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.id}>
                    {tour.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[0.63rem] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--muted-lt)" }}>
                Preferred Date
              </span>
              <input
                type="date"
                name="date"
                required
                className="field-input"
              />
            </label>

            <div className="sm:col-span-2 mt-3">
              <button type="submit" className="btn-gold">
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
