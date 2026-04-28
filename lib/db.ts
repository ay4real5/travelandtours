import { createClient } from "@supabase/supabase-js";
import { tours as staticTours, type Tour } from "@/lib/tours";

type Database = {
  public: {
    Tables: {
      tours: {
        Row: {
          id: number;
          slug: string;
          title: string;
          description: string;
          price: number;
          location: string;
          image_url: string;
          duration: string;
        };
        Insert: {
          id?: never;
          slug: string;
          title: string;
          description: string;
          price: number;
          location: string;
          image_url: string;
          duration: string;
        };
        Update: {
          id?: never;
          slug?: string;
          title?: string;
          description?: string;
          price?: number;
          location?: string;
          image_url?: string;
          duration?: string;
        };
        Relationships: [];
      };
      bookings: {
        Row: {
          id: number;
          name: string;
          email: string;
          tour_id: number;
          date: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: never;
          name: string;
          email: string;
          tour_id: number;
          date: string;
          status?: string;
          created_at?: never;
        };
        Update: {
          id?: never;
          name?: string;
          email?: string;
          tour_id?: number;
          date?: string;
          status?: string;
          created_at?: never;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_tour_id_fkey";
            columns: ["tour_id"];
            referencedRelation: "tours";
            referencedColumns: ["id"];
            isOneToOne: false;
          },
        ];
      };
    };
  };
};

export type CreateBookingInput = {
  name: string;
  email: string;
  tour_id: number;
  date: string;
  status?: string;
};

function mapTourRowToTour(row: Database["public"]["Tables"]["tours"]["Row"]): Tour {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    price: Number(row.price),
    location: row.location,
    imageUrl: row.image_url,
    duration: row.duration,
  };
}

export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function getTours(): Promise<Tour[]> {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return staticTours;
  }

  const { data, error } = await supabase
    .from("tours")
    .select("id, slug, title, description, price, location, image_url, duration")
    .order("id", { ascending: true });

  if (error || !data || data.length === 0) {
    return staticTours;
  }

  return (data as Database["public"]["Tables"]["tours"]["Row"][]).map(
    mapTourRowToTour,
  );
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return staticTours.find((tour) => tour.slug === slug);
  }

  const { data, error } = await supabase
    .from("tours")
    .select("id, slug, title, description, price, location, image_url, duration")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    return staticTours.find((tour) => tour.slug === slug);
  }

  return mapTourRowToTour(data as Database["public"]["Tables"]["tours"]["Row"]);
}

export async function createBooking(input: CreateBookingInput) {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return {
      ok: false,
      error:
        "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    };
  }

  const { error } = await supabase.from("bookings").insert({
    name: input.name,
    email: input.email,
    tour_id: input.tour_id,
    date: input.date,
    status: input.status ?? "pending",
  });

  if (error) {
    return {
      ok: false,
      error: "Failed to create booking.",
      details: error.message,
    };
  }

  return { ok: true };
}
