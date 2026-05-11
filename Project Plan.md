# Project Plan — Engineers Door

## Overview

**Engineers Door** is an IT Farm startup focused on delivering technology solutions, services, and talent. This document outlines the plan for building the official website for the company.

---

## About the Company

- **Name:** Engineers Door
- **Type:** IT Farm (Startup)
- **Focus:** IT services, software development, tech talent, and solutions

---

## Website Goals

- Establish a strong online presence for the brand
- Showcase services offered by Engineers Door
- Attract clients and potential partners
- Allow talent/engineers to connect or apply
- Build credibility and trust through portfolio and testimonials

---

## Tech Stack Recommendation

### Frontend
- **Framework:** Next.js (React-based)
  - Great for SEO (Server-Side Rendering)
  - Fast performance
  - Easy to scale
- **Styling:** Tailwind CSS
  - Rapid UI development
  - Clean, modern design with minimal effort
- **Animations:** Framer Motion
  - Smooth, professional animations

### Backend (if needed)
- **Runtime:** Node.js with Express or Next.js API Routes
  - Keep it simple within the same project initially
- **Database:** PostgreSQL (via Supabase or PlanetScale)
  - For contact forms, job applications, etc.

### Hosting & Deployment
- **Platform:** Vercel (perfect for Next.js)
  - Free tier available
  - Auto-deploy from GitHub
- **Domain:** Custom domain (e.g., engineersdoor.com)

### Other Tools
- **CMS (optional):** Sanity.io or Contentful — for managing blog/news content
- **Email:** Resend or EmailJS — for contact form submissions
- **Analytics:** Google Analytics or Vercel Analytics

---

## Website Pages / Structure

```
Engineers Door Website
├── Home (Landing Page)
│   ├── Hero Section (tagline + CTA)
│   ├── Services Overview
│   ├── Why Choose Us
│   ├── Stats / Numbers
│   └── Call to Action
│
├── About Us
│   ├── Our Story
│   ├── Mission & Vision
│   └── Team Members
│
├── Services
│   ├── Web Development
│   ├── Mobile App Development
│   ├── Cloud & DevOps
│   ├── UI/UX Design
│   ├── IT Consulting
│   └── Talent Solutions
│
├── Portfolio / Projects
│   └── Case Studies
│
├── Careers
│   ├── Open Positions
│   └── Apply Form
│
├── Blog / Insights (optional)
│
├── Contact Us
│   ├── Contact Form
│   ├── Location / Map
│   └── Social Links
│
└── Footer
    ├── Quick Links
    ├── Social Media
    └── Legal (Privacy Policy, Terms)
```

---

## Project Phases

### Phase 1 — Planning & Design (Week 1–2)
- [ ] Finalize brand identity (logo, colors, fonts)
- [ ] Define content for each page
- [ ] Create wireframes / mockups (Figma recommended)
- [ ] Set up GitHub repository

### Phase 2 — Development Setup (Week 2–3)
- [ ] Initialize Next.js project with Tailwind CSS
- [ ] Set up project folder structure
- [ ] Configure deployment on Vercel
- [ ] Set up version control (Git/GitHub)

### Phase 3 — Core Development (Week 3–6)
- [ ] Build reusable UI components (Navbar, Footer, Buttons, Cards)
- [ ] Develop Home / Landing Page
- [ ] Develop About Us page
- [ ] Develop Services page
- [ ] Develop Portfolio page
- [ ] Develop Careers page
- [ ] Develop Contact page with working form

### Phase 4 — Polish & Optimization (Week 6–7)
- [ ] Add animations and transitions
- [ ] Ensure mobile responsiveness
- [ ] SEO optimization (meta tags, Open Graph, sitemap)
- [ ] Performance optimization (image compression, lazy loading)
- [ ] Cross-browser testing

### Phase 5 — Launch (Week 8)
- [ ] Final review and QA
- [ ] Connect custom domain
- [ ] Go live!
- [ ] Set up analytics

---

## Brand Identity Suggestions

- **Primary Color:** Deep Blue or Dark Navy (#0A0F2C or similar) — conveys trust and tech
- **Accent Color:** Electric Blue or Cyan (#00C2FF) — modern and energetic
- **Font:** Inter or Poppins — clean and professional
- **Tone:** Professional, innovative, approachable

---

## Notes

- Start simple — launch with core pages first, add blog/CMS later
- Keep the design clean and modern to reflect a tech-forward brand
- Mobile-first approach is a must
- Focus on fast load times for better user experience and SEO

---

*Last Updated: May 11, 2026*
