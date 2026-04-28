import { getTours } from "@/lib/db";

export default async function BookingPage() {
  const tours = await getTours();

  return (
    <div className="container-shell py-10 md:py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--reef)]">
        Booking
      </p>
      <h1 className="mt-2 text-4xl md:text-5xl">Reserve Your Tour</h1>

      <form
        className="glass-card mt-8 grid gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-8"
        method="post"
        action="/api/bookings"
      >
        <label className="space-y-1">
          <span className="text-sm font-semibold">Full Name</span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-[var(--stroke)] bg-white px-4 py-2"
            placeholder="Jane Doe"
          />
        </label>

        <label className="space-y-1">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-[var(--stroke)] bg-white px-4 py-2"
            placeholder="you@example.com"
          />
        </label>

        <label className="space-y-1">
          <span className="text-sm font-semibold">Tour</span>
          <select
            name="tour_id"
            required
            defaultValue=""
            className="w-full rounded-xl border border-[var(--stroke)] bg-white px-4 py-2"
          >
            <option value="" disabled>
              Select a tour
            </option>
            {tours.map((tour) => (
              <option key={tour.id} value={tour.id}>
                {tour.title}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-sm font-semibold">Preferred Date</span>
          <input
            type="date"
            name="date"
            required
            className="w-full rounded-xl border border-[var(--stroke)] bg-white px-4 py-2"
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex w-fit rounded-full bg-[var(--sea)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--reef)] md:col-span-2"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
