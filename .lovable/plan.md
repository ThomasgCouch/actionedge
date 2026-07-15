## Plan: Refine About Page Commitment Band

### Current state
- Located in `src/routes/about.tsx` lines 234–244.
- Text currently reads: “We bring clarity, energy, and an unwavering commitment to every partnership — consistently going beyond expectations to deliver meaningful, lasting impact.”
- Layout is a two-column grid with left-aligned text.
- A long em dash sits between the two sentence halves.

### Changes to make

1. **Remove the em dash**
   - Delete “ —” from the first paragraph and close the sentence naturally.
   - New text: “We bring clarity, energy, and an unwavering commitment to every partnership, consistently going beyond expectations to deliver meaningful, lasting impact.”

2. **Improve alignment and elegance**
   - Convert the two-column grid into a single, centered column for a more editorial/quote-like presentation.
   - Increase the line-height and add generous top/bottom padding so the block breathes.
   - Consider a light background tint (e.g. `bg-[var(--muted)]`) to separate it visually from the hero above and the values section below.
   - Keep the brand green text color and medium font weight for continuity.

### Files to edit
- `src/routes/about.tsx` (lines 234–244)

### No new dependencies or routes needed.

### Approval needed
- Should the second paragraph (“Our solutions are tailored…”) stay directly below the commitment line, or do you want it removed/moved elsewhere?