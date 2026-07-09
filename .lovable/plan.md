## Goal

Rebuild the content of **ActionEDGE TT** (actionedgett.com) as a fresh, redesigned single-page marketing site, styled in the visual language of **Great People Solutions** (greatpeoplesolutions.com): clean white background, bold cyan/blue accents (#00A8F0-ish) on dark navy text, generous whitespace, oversized headlines, playful illustrated hero graphic, minimal top nav.

## Content ported from ActionEDGE TT

- **Brand**: ActionEDGE TT — leadership, strategy, and people development consultancy.
- **Hero rotator (3 messages)**:
  1. "Is poor execution slowing your growth?" — Translate strategy into results.
  2. "Are your people equipped to perform at the level your business demands?"
  3. "Is your culture strengthening performance — or silently limiting your potential?"
- **How We Deliver Results** intro block (innovation, resilience, commitment, abundance, agility, fun; behavioural science + instructional design).
- **Three service pillars** with "Explore More" links:
  - Strategic Thinking & Execution Planning
  - People Development
  - Organizational Design & Culture Transformation
- **Meet Our Master Coach** section (Dr. Couch) + "Book a Discovery Call" CTA.
- **Mailing list** block: workshops, insights, tips — "Join Here" CTA.

## Design direction (GPS-inspired)

- Palette: white background, deep navy (#0F1B3D) text, bright cyan (#1AB5FF) accent, subtle grey dividers.
- Typography: modern geometric sans (e.g. Outfit / Space Grotesk) with oversized bold headlines and light body.
- Layout: full-width sections, asymmetric split-screen hero with illustrated accent graphic on the right, pill-shaped outline buttons, minimal top nav (Home, Services, About, Contact).
- Motion: gentle fade/slide on section reveal, hero headline rotator.

## Build steps

1. Update `src/routes/__root.tsx` head: title "ActionEDGE TT — Strategy, People & Culture", matching description, og/twitter meta.
2. Rewrite `src/routes/index.tsx` as the redesigned landing page.
3. Add design tokens (navy, cyan, accent gradient, shadows) in `src/styles.css`.
4. Build sections as small components under `src/components/site/`: `Navbar`, `HeroRotator`, `ApproachIntro`, `ServicePillars`, `MasterCoach`, `Newsletter`, `Footer`.
5. Generate 2 supporting images with `imagegen`: hero illustration (dart-on-target style, cyan line art) and coach portrait placeholder.
6. Wire "Book a Discovery Call" to the existing Zcform URL and "Join Here" to the existing Google Form URL; internal service links scroll to the pillar cards (single-page site).

## Out of scope

- No backend, no forms handling (external links only).
- No separate service detail pages — single-page site with anchor sections.
- No logo asset from the original; use a wordmark "ActionEDGE TT".
