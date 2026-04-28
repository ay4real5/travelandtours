# Babz Travels & Tours

Lean MVP for a travel agency website, built with Next.js App Router and Tailwind CSS.

## MVP Scope

- Homepage (hero, featured tours, testimonials, CTA)
- Tours listing page
- Dynamic tour details page
- Booking form
- Contact page
- Booking API route (Supabase-ready)

## Tech Stack

- Frontend: Next.js 16 + React 19
- Styling: Tailwind CSS 4
- Backend: Next.js Route Handlers
- Database: Supabase (PostgreSQL)
- Hosting: Vercel (recommended)

## Project Structure

app/
- page.tsx -> Homepage
- tours/page.tsx -> Tours list
- tours/[slug]/page.tsx -> Tour details
- booking/page.tsx -> Booking form
- contact/page.tsx -> Contact page
- api/bookings/route.ts -> Booking API

components/
- Navbar.tsx
- TourCard.tsx
- Footer.tsx

lib/
- tours.ts -> Tour dataset + helpers
- db.ts -> Supabase server client

## Local Development

1. Install dependencies:

	npm install

2. Create env file:

	cp .env.example .env.local

3. Fill in your Supabase credentials in .env.local.

4. Run dev server:

	npm run dev

## Environment Variables

Create .env.example with the following keys:

- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

## Database Schema

Use this SQL in Supabase:

```sql
create table if not exists public.tours (
  id bigint generated always as identity primary key,
  title text not null,
  description text not null,
  price numeric not null,
  location text not null,
  image_url text not null,
  duration text not null,
  slug text unique not null
);

create table if not exists public.bookings (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  tour_id bigint not null references public.tours(id),
  date date not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);
```

## Deployment

1. Push repository to GitHub.
2. Import project in Vercel.
3. Add environment variables in Vercel project settings.
4. Deploy.

## Next Phase (Post-MVP)

- Admin panel for managing tours and bookings
- Authentication with Supabase Auth
- Payment integration
