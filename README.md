# Zeffo Homepage

Static marketing website for Zeffo — a mutual fund gift card product.

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, flexbox/grid, mobile-first media queries
- **Vanilla JS** — minimal, progressive enhancement only

No build tools. No dependencies. Just open `index.html` in a browser.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, value proposition, CTA |
| FAQs | `faqs.html` | Frequently asked questions |
| About Us | `about.html` | About Zeffo, mission, team |
| How It Works | `how-it-works.html` | Step-by-step user guide |

## Design Priorities

1. **Responsiveness** — mobile-first design, works on all screen sizes
2. **Speed** — no frameworks, minimal assets, fast load times
3. **Accessibility** — semantic HTML, ARIA where needed, keyboard navigation, WCAG 2.1 AA

## Project Structure

```
├── index.html
├── faqs.html
├── about.html
├── how-it-works.html
├── css/
│   └── style.css        # All styles (custom properties, layout, responsive)
├── js/
│   └── main.js          # Minimal JS (mobile menu, accordion, etc.)
├── assets/
│   ├── images/          # Optimized images (WebP preferred)
│   └── icons/           # SVG icons
├── README.md
└── progress.md
```

## Local Development

Open `index.html` directly in a browser, or use any simple server:

```bash
# Python
python3 -m http.server 8000

# Node (if available)
npx serve .
```

## Deployment

Upload files to any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a basic web server.

## Contributing

1. Create a feature branch from `develop`
2. Make changes and test locally across devices/browsers
3. Open a PR to `develop`
