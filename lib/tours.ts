export type Tour = {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  duration: string;
};

export const tours: Tour[] = [
  {
    id: 1,
    slug: "maldives-overwater-escape",
    title: "Maldives Overwater Escape",
    description:
      "Float above crystal-clear lagoons in a private overwater villa. Snorkel pristine reefs, watch rays glide beneath your glass floor, and disconnect completely.",
    price: 3200000,
    location: "Maldives",
    imageUrl:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1400&q=80&auto=format&fit=crop",
    duration: "7 days",
  },
  {
    id: 2,
    slug: "santorini-sunset-villa",
    title: "Santorini Sunset Villa",
    description:
      "A private cliffside villa above the caldera, curated wine tastings, and the most iconic sunset on earth. Pure Aegean luxury.",
    price: 2850000,
    location: "Santorini, Greece",
    imageUrl:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1400&q=80&auto=format&fit=crop",
    duration: "6 days",
  },
  {
    id: 3,
    slug: "bali-jungle-retreat",
    title: "Bali Jungle Retreat",
    description:
      "Rice terraces, ancient temples, waterfall treks, and silent mornings in a forest villa. Bali at its most spiritual and most beautiful.",
    price: 1950000,
    location: "Bali, Indonesia",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=80&auto=format&fit=crop",
    duration: "8 days",
  },
  {
    id: 4,
    slug: "dubai-ultra-luxury",
    title: "Dubai Ultra-Luxury",
    description:
      "Burj Al Arab suites, desert dune dinners, heli-tours over the skyline, and the world's finest shopping. The ultimate city of excess.",
    price: 4100000,
    location: "Dubai, UAE",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80&auto=format&fit=crop",
    duration: "5 days",
  },
  {
    id: 5,
    slug: "paris-art-gastronomy",
    title: "Paris — Art & Gastronomy",
    description:
      "After-hours Louvre, three Michelin dinners, a private bespoke perfumery session, and a suite with an Eiffel Tower view.",
    price: 3600000,
    location: "Paris, France",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80&auto=format&fit=crop",
    duration: "5 days",
  },
  {
    id: 6,
    slug: "zanzibar-beach-escape",
    title: "Zanzibar Beach Escape",
    description:
      "Powder-white beaches, spice island tours, dhow cruises at sunset, and barefoot luxury resorts on the Indian Ocean.",
    price: 1650000,
    location: "Zanzibar, Tanzania",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop",
    duration: "6 days",
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
