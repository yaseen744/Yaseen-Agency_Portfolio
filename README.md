# Muhammad Yaseen — Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
The static output lands in `dist/` — deploy that folder to Vercel, Netlify, or any static host.

## Edit content
Everything text-based (name, bio, projects, skills, services, testimonials, agency links, WhatsApp number) lives in one file:
`src/config/siteData.js`

## Structure
- `src/components/Hero3D.jsx` — the animated 3D gem (Three.js)
- `src/components/*.jsx` — one component per section
- `src/index.css` — the full design system (colors, type, layout)
- `src/hooks/useRevealOnScroll.js` — scroll-in animation
