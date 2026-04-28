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
    <div className="container-shell py-10 md:py-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div className="overflow-hidden rounded-3xl border border-[var(--stroke)] bg-white">
          <Image
            src={tour.imageUrl}
            alt={tour.title}
            width={1200}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        <aside className="glass-card rounded-3xl p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--reef)]">
            {tour.location}
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl">{tour.title}</h1>
          <p className="mt-4 text-[var(--muted)]">{tour.description}</p>

          <div className="mt-6 space-y-3 text-sm">
            <p>
              <span className="font-semibold">Duration:</span> {tour.duration}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {formatNaira(tour.price)}
            </p>
          </div>

          <Link
            href="/booking"
            className="mt-8 inline-flex rounded-full bg-[var(--sea)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--reef)]"
          >
            Book This Tour
          </Link>
        </aside>
      </div>
    </div>
  );
}
