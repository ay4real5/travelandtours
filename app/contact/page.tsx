export default function ContactPage() {
  return (
    <div className="container-shell py-10 md:py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--reef)]">
        Contact
      </p>
      <h1 className="mt-2 text-4xl md:text-5xl">Speak With Our Team</h1>
      <div className="glass-card mt-8 max-w-2xl rounded-3xl p-6 md:p-8">
        <p className="text-[var(--muted)]">
          Reach us for custom packages, group travel, and visa assistance.
        </p>
        <dl className="mt-6 space-y-3">
          <div>
            <dt className="text-sm font-semibold">Email</dt>
            <dd>hello@babztravelsandtours.com</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Phone</dt>
            <dd>+234 800 123 4567</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Office Hours</dt>
            <dd>Mon - Fri, 9:00am - 5:00pm</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
