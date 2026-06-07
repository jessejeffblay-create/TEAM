# RoofAI Growth — Demo Landing Page

A high-converting single-page marketing site for **RoofAI Growth**, the complete AI-powered growth system for UK roofing companies.

## Sections

- **Hero** — "Never Miss Another Roofing Lead" headline with stats
- **Features** — 6 feature cards (AI Receptionist, Booking, Follow-Ups, Reviews, Website, Analytics)
- **How It Works** — 4-step process flow
- **Booking Demo** — Live chat simulation showing AI booking in 47 seconds
- **Testimonials** — 3 review cards from roofing companies
- **Pricing** — 3 tiers: Essentials (£1k + £495/mo), Growth (£1.5k + £795/mo), Enterprise (£2.5k + £1,295/mo)
- **Case Study** — Bristol Roofing Ltd revenue stats
- **Contact Form** — 5-field lead capture form
- **Footer** — Links & branding

## Tech Stack

- [Vite](https://vitejs.dev/) (build tool)
- [React](https://react.dev/) (UI library)
- Vanilla CSS (no external CSS framework)
- [Inter](https://fonts.google.com/specimen/Inter) font from Google Fonts

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
landing-page/
├── public/            # Static assets
├── src/
│   ├── App.jsx        # Main app component (all sections)
│   ├── App.css        # All styles
│   ├── index.css      # Base reset
│   └── main.jsx       # Entry point
├── dist/              # Production build output
├── index.html         # HTML shell with meta tags
├── vite.config.js     # Vite configuration
├── package.json
└── .gitignore
```

## Deployment

The dev server runs on `http://localhost:5173/` (bound to `0.0.0.0`). For production, deploy the `dist/` directory to any static host.
