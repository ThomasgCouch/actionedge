# Content & Design Refresh Plan

Based on all Canva screenshots and the new coach headshot, here's what I'll implement.

## Assets
- Upload `Indira_Couch-0686-Edit-2.jpg` as a Lovable asset → new coach photo.
- Generate 3–4 supporting illustrations (KPI/leadership imagery style, matte photographic) for hero cards and service pages.

## 1. Home Page — full rebuild
Replace the current home layout with the structure from `HOME.png`:

1. **Three-card hero stack** (replaces the sliding rotator):
   - Card A: "Is poor execution slowing your growth? Translate your strategy to drive your results…" → Learn More → `/strategic-thinking`
   - Card B: "Are your people equipped to perform at the level your business demands?" → Learn More → `/people-development`
   - Card C: "Is your culture strengthening performance or silently limiting your organization's potential?" → Learn More → `/org-design-culture`
   - Each card = left text + right image, alternating soft beige/white bands.
2. **How We Deliver Results** — intro paragraph block from Canva.
3. **Building High Performance, Driving Results** — dark green band with 3 green pillar cards (Strategic Thinking & Execution Planning, People Development, Organizational Design & Culture Transformation) — each with the bullet list from Canva and an "Explore More" link.
4. **Meet Our Master Coach** — coach photo (new upload) + "Dr. Indira Persad Couch — Recognized for Impact That Matters" + 4 stat tiles (30+ Years, Multi-Award Winning Coach, Trusted by Leaders and Organizations, Focused On Real Results).
5. **From strategy to leadership…** CTA block with "Book a Discovery Call".
6. **Mailing list** block (kept, restyled to match Canva).

Remove: current MasterCoach + ApproachIntro + ServicePillars + HeroRotator components from home (kept in codebase but not imported).

## 2. About Page
- Remove the "Our Philosophy" section entirely.
- Remove dashes from "ActionEDGE TT" → "ActionEDGE" throughout the About copy.
- **Values** section: rebuild as 6 rounded tiles (Abundance, Fun, Innovation, Agility, Resilience, Commitment) alternating green/grey backgrounds; each tile shows title, and reveals Canva description text on hover (fade + slide, same style as Why Choose cards).
- **Why Choose ActionEDGE** — already hover-based; keep, refine animation (add subtle scale + border glow).
- **Track Record** — update copy to "With over 30 years of excellence…" + 5 stats (300+ Companies Coached, 200+ Executive Coaching Engagements, 200+ Leadership Programmes, 1000+ Regional Leaders, 20% Annual Growth) with descriptions.
- **Let's Build What's Next Together** — replace with Canva text: "Your next level starts with the right partner. Whether you're developing your career, strengthening your leadership, or transforming your organization, we're here to help you achieve meaningful, measurable results." + "Connect With ActionEDGE" button → `/contact`.
- Add subtle GIF/animated SVG accents (animated arrow, gear rotation) in relevant sections.

## 3. Contact Page
Add a **Contact Us** block above the existing CTAs with three contact rows from Canva:
- To reach the CEO and book meetings → **Business Analyst** — administrator@actionedgett.com — 868-377-7891
- General inquiries → **Business Operations Lead** — karen.achong@actionedgett.com — 868-374-6816
- Workshops & DISC bookings → **Business Development Officer** — bdo@actionedgett.com — 868-305-2845
Add a placeholder **FAQs** accordion section below (3–4 starter Q&As, easily editable).

## 4. Strategy Page (`/strategic-thinking`)
Full rewrite from Canva:
- Green hero band: "Strategic Thinking & Execution Planning — Turning Vision into Focused, Measurable Action".
- Intro paragraph ("Many organizations don't struggle because they lack ideas…").
- Outcomes list with icon arrows: Clarity & Strategic Direction, Leadership Alignment, Execution & Accountability, Sustainable Results, Business Growth & Performance.
- **Our Strategy & Execution Offers** — 8-card grid: Strategic Planning & Facilitation, Execution Planning & Accountability, Business Growth Strategy, Sales and Performance Strategy, Leadership Strategy Sessions, Quarterly Planning, Performance Alignment Workshops, Business Advisory & Consulting.
- **Turn Strategy Into Results** closing block + "Schedule a Strategy Conversation" CTA.

## 5. People Development Page
Full rewrite from Canva:
- Green hero band: "People Development — Developing People Who Drive Performance".
- Intro paragraph + outcomes arrows list.
- **Our People Development Offers** — 8-card grid (Leadership Coaching & Performance, Business Coaching, Customized Training Solutions, Sales Training & Development, Executive & Team Coaching, Communication & Team Effectiveness, Professional & Career Development, Wellness & Psychometric Tools).
- **Invest in Your Greatest Asset – Your People** closing CTA.

## 6. Org Design & Culture Page
Full rewrite from Canva:
- Green hero band + subhead "Building Organizations That Perform, Align, and Thrive".
- Outcomes arrows list.
- **Our Organizational Design & Culture Transformation Offers** — 9-card grid from Canva.
- **Strengthen Your Organization from Within** closing CTA.

## 7. DISC Page — full rebuild
- Green hero: "DISC Assessments".
- 4 letter tiles (D/I/S/C) with Canva colors (red/yellow/green/blue) + names.
- **What is DISC?** and **What is the DISC assessment used for?** two-column band (dark green + grey card look from Canva).
- **Customized Application / Integrated Business Application / Coaching Interpretation** three text blocks.
- **6 Use-Case Tiles** (Leadership Development, Hiring & Selection, Performance Evaluation, Sales Training, Communication Management, Customer Service) — green pill cards.
- **DISC EIQ / DISC KIDS / DISC 360** — three stacked info rows.
- Closing: "The right insight changes everything. Explore the power of DISC today." + CTA.

## 8. Events Page
- Make the middle event card use brand green background with white text (per request).
- Update hero to match Canva green-band style: "UPCOMING EVENTS — Transform the way you lead, communicate, and perform. Register for an upcoming event and take the next step in your professional journey."

## 9. Global tweaks
- Increase font size of blue-accent eyebrow headers (was `text-xs`, bump to `text-sm` + tighter tracking, and enlarge H2 blue accents where used).
- Replace all "20+ years" → "30+ years".
- Replace "Meet Our Master Coach" copy with the Canva version (Impact That Matters).
- Subtle motion: use `framer-motion` for section fade-ins, arrow SVG animations on service pages (mimics Canva arrow diagrams).

## Technical Notes
- New components: `HomeHeroStack`, `HowWeDeliver`, `HighPerformanceBand`, `CoachSpotlight`, `ContactDirectory`, `FAQs`, `ValuesGrid`, `ArrowDiagram`, `OfferGrid`.
- Reuse `PageShell`/`PageHero` (extend `PageHero` to accept a green filled variant + optional subtitle).
- Keep brand tokens (`--brand-green` #006e3c, `--brand-blue` #00c8ef, `--brand-grey` #4c4f53, beige #faf5e8) — no palette changes.
- Coach headshot via `lovable-assets create` (no binary in repo).

## Open questions before I build
1. **FAQs content** — do you have specific Q&As, or should I write 4 sensible starter ones you can edit later?
2. **"GIFs in about and others"** — want real animated GIFs, or animated SVG/CSS motion (lighter, crisper)? I'd recommend animated SVG unless you have specific GIFs to upload.
3. **Home stat tile icons** — the Canva shows small icons on the 4 coach stats (globe, trophy, shield, target). OK if I use lucide-react icons in brand green?

I'll proceed once you confirm those three (or say "your call").
