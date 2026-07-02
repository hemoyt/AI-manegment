# Al-Ghufran Educational Consultancy — Website

Source code for [al-ghufran.com](https://al-ghufran.com) — a bilingual (Arabic/English) educational consultancy website helping students study at Malaysian universities.

Built with **React + Vite + Tailwind CSS v4**.

## Features

- Bilingual Arabic (RTL) / English (LTR) with live language toggle
- Home, About, Majors (34 programs), Universities (34 partners), Language Institutes, and Contact pages
- Hash-based routing with per-page titles
- WhatsApp integration for student inquiries; email form for B2B/partner contact
- Full SEO: Open Graph, Twitter cards, geo/local-SEO meta, `EducationalOrganization` + `FAQPage` structured data, sitemap, robots.txt

## Development

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Deployment

Upload the contents of `dist/` to the web hosting for al-ghufran.com.

## Project Structure

```
src/
  components/   # page sections and pages (Hero, About, Services, Majors, ...)
  data/         # majors, universities, institutes datasets (AR/EN)
  i18n/         # translations dictionary + language context
  index.css     # design tokens + Tailwind
public/
  image/        # logos and photos
  robots.txt
  sitemap.xml
```
