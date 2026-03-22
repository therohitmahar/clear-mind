# ClearMind Counseling

Marketing website for a counseling practice, built with Next.js App Router and a Tailwind-based design system.

## Tech Stack

- Framework: [Next.js 16](https://nextjs.org/) with the App Router
- Language: TypeScript
- Styling: Tailwind CSS v3
- Icons: Lucide React
- Fonts: Playfair Display and Manrope via `next/font`

## Local Commands

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# run the TypeScript static check
npm run lint

# create a production build
npm run build

# serve the production build
npm run start
```

For phone testing, start `npm run dev` and open the `Network:` URL shown in the terminal on a device connected to the same Wi-Fi network.

## Route Overview

- `/`: home page with hero, mission, therapist highlights, gallery, pricing, testimonials, FAQ, and primary CTA
- `/services`: service overview for individual, family, child, and corporate support
- `/about`: brand story, principles, stats, and clinic imagery
- `/contact`: contact details, map, and inquiry form
- `/booking`: multi-step booking request flow for therapist, schedule, and contact details
- `/resources`: searchable article listing with category filters
- `/resources/[slug]`: article detail pages generated from local data

## Structure

```text
app/
  about/page.tsx
  booking/page.tsx
  contact/
    ContactForm.tsx
    page.tsx
  resources/
    [slug]/page.tsx
    ResourcesPageClient.tsx
    page.tsx
  services/page.tsx
  layout.tsx
  page.tsx

components/
  layout/
  sections/
  ui/

lib/
  data.ts
  utils.ts

styles/
  globals.css
```

## Notes

- Site content is currently driven from `lib/data.ts`.
- The booking flow submits a request-style UX only; it does not include real payments or a backend scheduler yet.
- Remote images are enabled through `next.config.ts`.
