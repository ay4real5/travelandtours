export default function ContactPage() {
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
          <p className="eyebrow-gold">Get in Touch</p>
          <div className="gold-rule mt-3" />
          <h1
            className="mt-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "var(--pearl)" }}
          >
            Speak With Our Team
          </h1>
          <p
            className="mt-5 leading-relaxed"
            style={{ color: "rgba(244,238,228,0.55)", maxWidth: "52ch", fontSize: "1rem" }}
          >
            Reach us for custom packages, group travel, and visa assistance.
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-20" style={{ background: "var(--linen)" }}>
        <div className="shell">
          <div className="grid gap-5 sm:grid-cols-3 max-w-3xl">
            {([
              { label: "Email", value: "hello@babztravelsandtours.com", href: "mailto:hello@babztravelsandtours.com" },
              { label: "Phone", value: "+234 800 123 4567", href: "tel:+2348001234567" },
              { label: "WhatsApp", value: "Chat with us", href: "https://wa.me/234000000000" },
            ] as const).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block p-6 transition-shadow hover:shadow-md"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-light)",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <p className="eyebrow-gold mb-2">{item.label}</p>
                <p style={{ color: "var(--ink-text)", fontSize: "0.9rem", wordBreak: "break-word" }}>
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <div
            className="mt-5 p-6 max-w-3xl"
            style={{
              background: "#fff",
              border: "1px solid var(--border-light)",
              borderRadius: "6px",
            }}
          >
            <p className="eyebrow-gold mb-2">Office Hours</p>
            <p style={{ color: "var(--ink-text)", fontSize: "0.9rem" }}>
              Mon &ndash; Fri, 9:00 am &ndash; 5:00 pm (WAT)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
