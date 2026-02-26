# Suvicorp - Financial Intelligence Consulting

A modern, professional website for Suvicorp Financial Intelligence Consulting built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display, DM Sans

## 📁 Project Structure

```
suvicortlatest/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page assembling all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── SectionTag.tsx
│   │   ├── SectionTitle.tsx
│   │   └── index.ts
│   ├── layout/             # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Services.tsx
│       ├── Dashboard.tsx
│       ├── Pricing.tsx
│       ├── SuccessStories.tsx
│       ├── About.tsx
│       ├── CTA.tsx
│       └── index.ts
├── tailwind.config.ts      # Tailwind configuration with custom colors
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Colors
- **Navy:** `#0a1628` (primary dark)
- **Navy Mid:** `#112240`
- **Blue:** `#1a3a6b`
- **Blue Accent:** `#3b82f6`
- **Teal:** `#06b6d4` (accent)
- **Light:** `#e2e8f0`
- **Gray:** `#94a3b8`

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** DM Sans (sans-serif)

## 🧩 Component Architecture

### UI Components
- **Button:** Reusable button with primary/outline variants
- **SectionTag:** Small tag labels for section headers
- **SectionTitle:** Consistent section heading styling

### Layout Components
- **Navigation:** Fixed header with smooth scroll navigation
- **Footer:** Site footer with links and branding

### Section Components
Each major section is a standalone component:
- **Hero:** Landing section with stats
- **Features:** Grid of service features
- **Services:** Tabbed service details
- **Dashboard:** Interactive dashboard mockup
- **Pricing:** Three-tier pricing cards
- **SuccessStories:** Client testimonials
- **About:** Company information
- **CTA:** Email signup form

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `app/` - App Router pages and layouts
- `app/layout.tsx` - Root layout component
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind CSS
- `components/` - Reusable React components organized by type
- `public/` - Static assets

## ✨ Features

- ✅ Fully responsive design
- ✅ Type-safe with TypeScript
- ✅ Modular component architecture
- ✅ Smooth scroll navigation
- ✅ Animated sections with intersection observer
- ✅ Tailwind CSS for styling
- ✅ Custom color scheme
- ✅ Professional typography
- ✅ Interactive service tabs
- ✅ Email CTA form

## 📝 Code Quality

- Clean separation of concerns
- Reusable component patterns
- TypeScript for type safety
- Consistent naming conventions
- Organized folder structure

## 🔧 Customization

### Updating Content
All content is defined as constants within each component for easy updates.

### Styling
Tailwind classes are used throughout. Custom colors are defined in `tailwind.config.ts`.

### Adding Sections
1. Create a new component in `components/sections/`
2. Export it from `components/sections/index.ts`
3. Import and add to `app/page.tsx`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ for Suvicorp Financial Intelligence Consulting
