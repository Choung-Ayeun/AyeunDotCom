# Choung A Yeun — Personal Portfolio

A dark, interactive personal portfolio built with Next.js 15, Framer Motion, and a WebGL galaxy background.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| WebGL Background | OGL (custom GLSL shader) |
| Fonts | Cormorant Garamond · DM Mono · Press Start 2P |

---

## Features

- **Full-page galaxy** — interactive WebGL star field that reacts to mouse movement across the entire site
- **Parallax hero** — two image layers (`name.png`, `images.png`) scroll horizontally at different speeds (1.0× and 2.8× viewport width), creating a cinematic depth effect
- **Scroll-snap hero** — proximity snap locks the hero in place; `scroll-snap-stop: always` prevents accidental skips
- **Scroll-driven timeline** — pink progress line animates from top to bottom as you scroll through the Experience section
- **Auto-scrolling skill cards** — tech stack icons marquee sideways on hover; pink glow accent on card focus
- **Responsive** — hamburger nav on mobile, single-column skills grid, contact form collapses to a button on small screens
- **Left sidebar** — page scroll progress rendered as a filling pink bar

---

## Sections

| Section | Description |
|---|---|
| Hero | Horizontal parallax with two image layers |
| About | Bio, three stat cards, education table |
| Projects | Data analytics project + Google certification |
| Experience | Scroll-animated vertical timeline |
| Skills | Four hover-to-scroll tech stack cards |
| Contact | Full form on desktop, toggled on mobile |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Design System

| Token | Value |
|---|---|
| Background | `#1B1A1A` |
| Card | `#252424` |
| Pink accent | `#D4607A` |
| Cream | `#F5E6D0` |
| Muted text | `#88847E` |

---

## Hero Image Specs

For the parallax effect to work as intended, the source images should follow these dimensions:

| File | Size | Contents |
|---|---|---|
| `public/name.png` | 3600 × 1080 px | Character poses staggered across the width (~x = 200, 900, 1900, 2900) |
| `public/images.png` | 5200 × 1080 px | Name text, large and centred, optionally repeated at different opacities |

Both images are positioned at full height (`h-screen`) with `width: auto`. The parallax multipliers can be adjusted in `src/components/HeroSection.tsx`:

```ts
nameX.set(-latest * vp * 1.0);   // characters — adjust first number for speed
imagesX.set(-latest * vp * 2.8); // name text  — adjust first number for speed
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, glass card, marquee, snap styles
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Page assembly + full-page Galaxy
└── components/
    ├── Galaxy.tsx         # WebGL star field (OGL + custom GLSL)
    ├── Navbar.tsx         # Fixed top nav with mobile hamburger
    ├── Sidebar.tsx        # Fixed left sidebar with scroll progress bar
    ├── HeroSection.tsx    # Sticky parallax hero (280 vh wrapper)
    ├── AboutSection.tsx   # Bio, stat cards, education table
    ├── ProjectsSection.tsx
    ├── ExperienceSection.tsx  # Scroll-driven timeline
    ├── SkillsSection.tsx      # Hover-to-scroll marquee cards
    ├── ContactSection.tsx     # Form with mobile toggle
    └── Footer.tsx
```

---

## Deployment

The site is configured for static export compatibility. Deploy to [Vercel](https://vercel.com) by connecting this repository — no additional configuration needed.

```bash
# Or deploy via Vercel CLI
npx vercel
```

---

© 2026 Choung A Yeun
