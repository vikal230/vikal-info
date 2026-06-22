# 🚀 Developer Portfolio — Master Setup & Deployment Guide

A premium, ultra-smooth developer portfolio built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          ← All CSS vars, glass utilities, animations
│   │   ├── layout.tsx           ← Root layout + metadata + ThemeProvider
│   │   └── page.tsx             ← Assembles all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Glassmorphism sticky nav, mobile drawer
│   │   │   └── Footer.tsx       ← Social links + scroll-to-top
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      ← Animated hero with orbs + stats
│   │   │   ├── SkillsSection.tsx    ← Bento grid skill cards
│   │   │   ├── ProjectsSection.tsx  ← Grid of 4 project cards
│   │   │   ├── EducationSection.tsx ← BCA education card
│   │   │   └── ContactSection.tsx   ← Form + social sidebar
│   │   └── ui/
│   │       ├── Button.tsx        ← Animated reusable button
│   │       ├── ProjectCard.tsx   ← Individual project card
│   │       ├── SectionWrapper.tsx ← Scroll-triggered section wrapper
│   │       └── ThemeToggle.tsx   ← Sun/Moon animated toggle
│   ├── hooks/
│   │   └── useInView.ts         ← IntersectionObserver hooks
│   └── lib/
│       ├── data.ts              ← All portfolio content / data
│       ├── theme-context.tsx    ← Dark/light mode context
│       └── utils.ts             ← cn() utility
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## ⚡ Step 1 — Project Initialization

> **Option A: Use the files provided directly** (just install deps):

```bash
# Navigate into the folder
cd portfolio

# Install all dependencies
npm install
```

> **Option B: Bootstrap fresh from scratch**:

```bash
npx create-next-app@latest portfolio \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git

cd portfolio

# Install additional packages
npm install framer-motion lucide-react clsx tailwind-merge
```

Then copy all the provided files into the project, overwriting boilerplate.

---

## 🔧 Step 2 — Configuration

### `tailwind.config.ts`
Already provided — includes:
- `darkMode: "class"` for manual dark/light toggle
- Custom brand colors, accent cyan, surface tokens
- `glass`, `glass-card`, `text-gradient` utility layers
- Keyframes for `float`, `pulse-slow`, `fade-up`, `shimmer`
- Custom box-shadows: `glass`, `glow`, `card-dark`

### `src/app/globals.css`
Already provided — includes:
- CSS custom properties (design tokens) for both themes
- `@layer utilities` for glassmorphism, gradients, noise
- Scrollbar styling
- `::selection` branding
- `@media (prefers-reduced-motion: reduce)` safety

### `src/app/layout.tsx`
Already provided — includes:
- Full Open Graph + Twitter card metadata
- Google Fonts (Inter + JetBrains Mono) preconnect
- `ThemeProvider` wrapping the app
- `suppressHydrationWarning` to prevent flicker

---

## 🎨 Step 3 — Shared Components

### ThemeToggle
Animated Sun ↔ Moon swap using `AnimatePresence`. Reads from `ThemeContext` and writes to `localStorage` + `document.documentElement.classList`.

### Navbar
- **Glassmorphism** effect on scroll (triggers at 20px)
- **Active section tracking** via `IntersectionObserver` with `layoutId` animation
- **Mobile drawer** — slides in from right with spring physics
- External links to GitHub + LinkedIn

### SectionWrapper
Wraps every section in a `motion.section` that fades up when scrolled into view. Provides consistent padding and max-width.

### Button
Polymorphic `<button>` or `<a>` with 3 variants: `primary`, `ghost`, `outline`. All have `whileHover` + `whileTap` Framer Motion.

---

## 📄 Step 4 — Update Your Personal Data

**Edit `src/lib/data.ts`** — this single file controls all portfolio content:

```ts
// Update these with your real links:
export const SOCIAL_LINKS = {
  github:   "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  email:    "mailto:YOUR@EMAIL.COM",
};

// Update project URLs:
export const PROJECTS = [
  {
    liveUrl:   "https://your-live-demo.vercel.app",
    sourceUrl: "https://github.com/you/repo",
    // ...rest stays the same
  },
  // ...
];
```

Also update the contact form in `ContactSection.tsx` to wire up your actual email API (see Step 4b).

### Step 4b — Wire Up the Contact Form

**Option 1: Resend (recommended)**
```bash
npm install resend
```

Create `src/app/api/contact/route.ts`:
```ts
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to:   ["your@email.com"],
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
  return NextResponse.json({ ok: true });
}
```

Then in `ContactSection.tsx`, replace the `setTimeout` simulation:
```ts
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error();
setStatus("success");
```

**Option 2: EmailJS (no backend)**
```bash
npm install @emailjs/browser
```

---

## 🏗️ Step 5 — Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint

# Production build (test locally before deploy)
npm run build
npm run start
```

---

## 🌐 Step 6 — Deploy to Vercel

### 6a. Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 6b. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Vercel auto-detects Next.js — leave all settings as-is
4. Click **Deploy**

### 6c. Environment Variables (if using Resend or EmailJS)

In Vercel dashboard → **Settings → Environment Variables**:

| Key                | Value                    | Environment   |
|--------------------|--------------------------|---------------|
| `RESEND_API_KEY`   | `re_xxxxxxxxxxxxxx`      | Production    |
| `EMAILJS_SERVICE`  | your EmailJS service ID  | Production    |
| `EMAILJS_TEMPLATE` | your EmailJS template ID | Production    |
| `EMAILJS_PUBLIC`   | your EmailJS public key  | Production    |

### 6d. Custom Domain (optional)

Vercel dashboard → **Settings → Domains** → Add your domain → Update DNS records with your registrar.

---

## 🎯 Key Design Decisions

| Choice | Reasoning |
|---|---|
| `darkMode: "class"` | Manual toggle persists across page loads via localStorage |
| CSS custom properties | Single source of truth for theme tokens, no JS needed for colors |
| `IntersectionObserver` for active nav | Zero layout thrash, no scroll listener polling |
| `AnimatePresence` on mobile drawer | Smooth enter/exit with spring physics |
| Framer Motion `layoutId` | Silky active-nav indicator that morphs between links |
| Bento grid for skills | Visual hierarchy showing category grouping at a glance |
| `[0.22, 1, 0.36, 1]` easing | Snappy spring-feel easing on all section reveals |

---

## 🔮 Optional Enhancements

```bash
# Smooth cursor (desktop)
npm install react-magic-mouse

# Analytics
npm install @vercel/analytics

# View transitions (Next.js 14+)
# Add <ViewTransitions /> to layout.tsx

# Blog with MDX
npm install @next/mdx @mdx-js/react

# 3D elements
npm install @react-three/fiber @react-three/drei
```

---

## ✅ Production Checklist

- [ ] Updated `SOCIAL_LINKS` in `data.ts` with real URLs
- [ ] Updated all project `liveUrl` and `sourceUrl` 
- [ ] Wired up contact form to real email API
- [ ] Added real name to page title in `layout.tsx`
- [ ] Added `favicon.ico` to `/public`
- [ ] Added Open Graph image to `/public/og.jpg` + updated metadata
- [ ] Tested on mobile (375px), tablet (768px), desktop (1280px)
- [ ] Run `npm run build` locally — zero errors
- [ ] Deployed to Vercel — green build

---

*Built with precision. Ship with confidence.* 🚀
