# Modern Responsive Portfolio & Contact Engine

A high-performance, accessible, and easily maintainable portfolio website designed specifically for creative professionals, web developers, and digital designers. Built in accordance with modern web design standards: bold minimalism, fluid typography, core web vitals optimization, zero-dependency lightweight stack, and automated contact form delivery.

## Key Features

1. **Clean, Modern UI & Fluid Typography**
   - Bespoke typography scale using CSS `clamp()`
   - Dark/Light mode theme toggle with persistent `localStorage` support
   - Fully responsive layout across mobile, tablet, and ultra-wide screens

2. **Automated Contact Form with Spam Defense**
   - Native integration with **Web3Forms** (direct email delivery without PHP/server management)
   - Built-in **Honeypot protection** (`_botcheck`) to automatically discard spam bots
   - Client-side real-time validation and animated feedback toast

3. **Interactive Portfolio Showcase**
   - Dynamic project categorization (`Web Development`, `UI/UX & Branding`, `Mobile & Web App`)
   - Modal preview dialog with full project case study, client metadata, and live site links
   - Centralized project data in `projects-data.js` for 1-minute updates

4. **SEO & Social Share Ready**
   - Complete Open Graph (Facebook, WhatsApp, LinkedIn) and Twitter Card tags
   - Schema.org `Person` JSON-LD structured data for Google Search snippet indexing
   - Semantic HTML5 markup (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)

5. **Client-Friendly Handoff**
   - Contains `PANDUAN_KLIEN.md` (Indonesian documentation explaining how to update projects, change contact email, and deploy in under 3 minutes).

## Quick Start / Local Preview

Simply open `index.html` in any modern web browser or start a local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Or using Node.js npx
npx serve .
```

Then visit `http://localhost:8000`.
