"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0) 100%)" }}
      />
      <div className="shell relative flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-bold tracking-[0.04em]"
            style={{ fontFamily: "var(--font-display), serif", fontSize: "1.1rem", color: "var(--pearl)" }}
          >
            Babz Travels
          </span>
          <span
            className="font-bold uppercase tracking-[0.3em]"
            style={{ color: "var(--gold)", fontSize: "0.52rem" }}
          >
            &amp; Tours
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/tours", label: "Destinations" },
            { href: "/booking", label: "Book" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors"
              style={{ color: "rgba(245,240,232,0.65)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,240,232,0.65)")}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="btn-gold" style={{ padding: "0.65rem 1.6rem", fontSize: "0.72rem" }}>
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--pearl)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{ background: "rgba(8,8,8,0.97)", borderTop: "1px solid var(--border)", backdropFilter: "blur(20px)" }}
        >
          <div className="shell py-6 flex flex-col gap-5">
            {[
              { href: "/tours", label: "Destinations" },
              { href: "/booking", label: "Book a Trip" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "var(--pearl)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
