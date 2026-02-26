# Component Reference Guide

## 🧱 Component Hierarchy

```
App
├── Navigation (Fixed header)
├── Main
│   ├── Hero (Full-screen landing)
│   ├── Features (6-card grid)
│   ├── Services (Tabbed content)
│   ├── Dashboard (Interactive mockup)
│   ├── Pricing (3-tier cards)
│   ├── SuccessStories (Testimonials)
│   ├── About (Company info)
│   └── CTA (Email form)
└── Footer (Multi-column footer)
```

## 📦 UI Components

### Button
**Location:** `components/ui/Button.tsx`

**Props:**
```typescript
{
  href: string;           // Link destination
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;     // Additional Tailwind classes
}
```

**Usage:**
```tsx
<Button href="#cta" variant="primary">
  Get Started →
</Button>
```

---

### SectionTag
**Location:** `components/ui/SectionTag.tsx`

**Props:**
```typescript
{
  children: React.ReactNode;
  variant?: 'blue' | 'teal';
}
```

**Usage:**
```tsx
<SectionTag variant="teal">
  Financial Intelligence Platform
</SectionTag>
```

---

### SectionTitle
**Location:** `components/ui/SectionTitle.tsx`

**Props:**
```typescript
{
  children: React.ReactNode;
  className?: string;
}
```

**Usage:**
```tsx
<SectionTitle className="text-white">
  Your Title Here
</SectionTitle>
```

---

## 🏗️ Layout Components

### Navigation
**Location:** `components/layout/Navigation.tsx`

**Features:**
- Fixed positioning
- Smooth scroll navigation
- Responsive (mobile menu ready)
- Backdrop blur effect

**Sections:**
- Logo
- Navigation links
- CTA button

---

### Footer
**Location:** `components/layout/Footer.tsx`

**Sections:**
- Brand column (logo + description)
- Services links
- Company links
- Resources links
- Bottom bar (copyright + legal)

---

## 📄 Section Components

### Hero
**Location:** `components/sections/Hero.tsx`

**Features:**
- Gradient background
- Grid pattern overlay
- Radial glow effects
- 4 stat cards
- CTA buttons
- Floating animation

**Data:**
- Stats array (500+, $2.4B, 25yrs, 98%)

---

### Features
**Location:** `components/sections/Features.tsx`

**Features:**
- 3-column grid (responsive)
- Hover effects with color bar
- Intersection observer animations
- Icon + title + description cards

**Data:**
- 6 features with icons and descriptions

---

### Services
**Location:** `components/sections/Services.tsx`

**Features:**
- Tab navigation (6 services)
- Active state management
- Grid layout for service points
- Interactive content switching

**Data:**
- 6 service objects with full details

---

### Dashboard
**Location:** `components/sections/Dashboard.tsx`

**Features:**
- Dashboard mockup with:
  - KPI cards (3 metrics)
  - Animated bar chart (12 bars)
  - Budget vs Actuals panel
  - Revenue Recognition panel
- Feature value cards (4 items)

---

### Pricing
**Location:** `components/sections/Pricing.tsx`

**Features:**
- 3-column pricing cards
- "Most Popular" badge
- Different card styles (outline/solid)
- Feature lists with checkmarks

**Data:**
- 3 pricing tiers (Essentials, Growth, Enterprise)

---

### SuccessStories
**Location:** `components/sections/SuccessStories.tsx`

**Features:**
- 3-column testimonial grid
- Large quote marks
- Avatar with initials
- Author info

**Data:**
- 3 client testimonials

---

### About
**Location:** `components/sections/About.tsx`

**Features:**
- 2-column layout
- Visual placeholder (large "S")
- 4 value cards in 2x2 grid
- Gradient background

---

### CTA
**Location:** `components/sections/CTA.tsx`

**Features:**
- Email form with validation
- Gradient background
- Centered layout
- Form submission handler

---

## 🎨 Styling Reference

### Custom Tailwind Classes

**Colors:**
```css
bg-navy           /* #0a1628 */
bg-navy-mid       /* #112240 */
bg-blue           /* #1a3a6b */
bg-blue-accent    /* #3b82f6 */
bg-teal           /* #06b6d4 */
text-navy
text-teal
border-light      /* #e2e8f0 */
```

**Fonts:**
```css
font-playfair     /* Playfair Display */
font-sans         /* DM Sans */
```

**Animations:**
```css
animate-fadeUp              /* Fade in + slide up */
animation-delay-300         /* 300ms delay */
floating                    /* Subtle pulse */
```

### Common Patterns

**Section Container:**
```tsx
<section className="py-24 px-[5%]">
  {/* content */}
</section>
```

**Grid Layout:**
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* items */}
</div>
```

**Card with Hover:**
```tsx
<div className="border border-light rounded-2xl p-8 transition-all duration-300 hover:border-blue-accent hover:-translate-y-1">
  {/* content */}
</div>
```

---

## 🔄 State Management

### Services Component
```typescript
const [activeService, setActiveService] = useState('cfo');
```
Manages which service tab is active.

### CTA Component
```typescript
const [email, setEmail] = useState('');
```
Manages email input value.

### Features Component
```typescript
const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
```
Manages refs for intersection observer animations.

---

## 🎯 Key Interactions

1. **Navigation Links** - Smooth scroll to section anchors
2. **Service Tabs** - Click to switch between services
3. **CTA Form** - Email input with submit handler
4. **Hover Effects** - Cards lift and change border color
5. **Scroll Animations** - Sections fade up when visible

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (default)
- **Tablet:** md: (≥ 768px)
- **Desktop:** lg: (≥ 1024px)

Most layouts switch from single column to multi-column at `md:` breakpoint.

---

## 🚀 Quick Customization Guide

### Change Colors
Edit `tailwind.config.ts` → `theme.extend.colors`

### Update Content
Each section component has a data array/object at the top

### Add New Section
1. Create `components/sections/YourSection.tsx`
2. Export from `components/sections/index.ts`
3. Import in `app/page.tsx`
4. Add to main element

### Modify Fonts
Edit `app/layout.tsx` → import different Google Fonts

### Add Animation
Add keyframes to `app/globals.css` → use in Tailwind classes

---

**Last Updated:** February 2026
**Maintainer:** Suvicorp Development Team
