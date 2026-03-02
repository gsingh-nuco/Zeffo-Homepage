# Zeffo Homepage — Progress Tracker

## Phase 1: Project Setup
- [x] Initialize git repository
- [x] Create README.md and progress.md
- [ ] Set up project structure (css/, js/, assets/)
- [ ] Create base HTML template with shared header/footer
- [ ] Set up CSS reset and custom properties (colors, fonts, spacing)

## Phase 2: Core Pages
- [ ] Homepage — hero section, value proposition, CTA
- [ ] About Us page
- [ ] FAQs page (with accordion)
- [ ] How It Works page

## Phase 3: Polish
- [ ] Responsive testing across breakpoints (mobile, tablet, desktop)
- [ ] Accessibility audit (Lighthouse, axe)
- [ ] Performance optimization (image compression, lazy loading)
- [ ] SEO meta tags and Open Graph
- [ ] Favicon and branding assets

## Phase 4: Launch
- [ ] Cross-browser testing
- [ ] Final review and QA
- [ ] Production deployment
- [ ] Analytics setup (if needed)

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-19 | Plain HTML + CSS + JS | No build tools needed, zero dependencies, maximum simplicity for a static site |
| 2026-02-19 | Mobile-first CSS | Start with mobile layout, scale up with media queries |
| 2026-02-19 | Branch strategy: `develop` → `main` | Feature branches merge to `develop`, releases go to `main` |
