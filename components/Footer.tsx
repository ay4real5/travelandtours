import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid rgba(244,238,228,0.06)" }}>
      <div className="shell py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display), serif", fontSize: "1.2rem", color: "var(--pearl)" }}
            >
              Babz Travels &amp; Tours
            </p>
            <p className="mt-1 font-bold uppercase tracking-[0.25em]" style={{ color: "var(--gold)", fontSize: "0.57rem" }}>
              Premium International Journeys
            </p>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(244,238,228,0.4)", maxWidth: "30ch" }}>
              Nigeria&apos;s travel partner for unforgettable journeys across the world. Real people, real care.
            </p>
          </div>
          {/* Explore */}
          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "var(--pearl)" }}>Explore</p>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(244,238,228,0.45)" }}>
              {[["All Tours", "/tours"], ["Book a Trip", "/booking"], ["Contact Us", "/contact"]].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="transition-colors hover:text-[var(--gold)]" style={{ color: "inherit" }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Destinations */}
          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "var(--pearl)" }}>Destinations</p>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(244,238,228,0.45)" }}>
              {["Maldives", "Santorini", "Bali", "Dubai", "Zanzibar"].map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "var(--pearl)" }}>Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@babztravelsandtours.com" style={{ color: "rgba(244,238,228,0.45)" }} className="hover:text-[var(--gold)] transition-colors">
                  hello@babztravelsandtours.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/234000000000" style={{ color: "rgba(244,238,228,0.45)" }} className="hover:text-[var(--gold)] transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row md:justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(244,238,228,0.06)", color: "rgba(244,238,228,0.28)" }}
        >
          <p>© {year} Babz Travels &amp; Tours. All rights reserved.</p>
          <p>Licensed Travel Agency · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
