## Goal
Let the client edit the Events page by changing one small, well-commented file — no database, no login.

## What I'll build

1. **New file: `src/data/events.ts`**
   - Exports an `events` array. Each entry has: `title`, `badge` (e.g. "Coming Soon", "Registration Open"), `description`, `date` (free text, e.g. "March 14, 2027"), `location`, and optional `registerUrl`.
   - Heavy comments at the top explaining exactly how to add, edit, remove, or reorder events — written for a non-developer.
   - Ships with the current 3 placeholder events so the page looks identical on day one.

2. **Update `src/routes/events.tsx`**
   - Import the `events` array and render one card per entry (instead of the hardcoded `[0,1,2].map`).
   - Middle card stays brand-green automatically (every 2nd card highlighted), so visual rhythm is preserved regardless of how many events exist.
   - If `registerUrl` is set, the card shows a "Register" link; otherwise it just shows the date/location footer as today.
   - Empty state: if the array is empty, show a friendly "No events scheduled right now — join the mailing list" block instead of blank cards.

3. **New file: `docs/EDITING-EVENTS.md`**
   - Plain-English, screenshot-free walkthrough the client can follow:
     - Where the file lives
     - How to copy an existing event block to add a new one
     - Which fields are required vs optional
     - How to delete an event (remove the block)
     - How to reorder (drag the blocks)
     - A note that changes go live after Publish
   - Includes a copy-paste template block they can duplicate.

## What stays the same
- Page layout, hero, mailing-list CTA, colors, and card styling are unchanged.
- No new dependencies, no backend, no auth.

## Handoff to the client
After this ships, I'll tell you exactly what to send them: the path to `src/data/events.ts`, the doc at `docs/EDITING-EVENTS.md`, and the reminder to hit **Publish** after editing.