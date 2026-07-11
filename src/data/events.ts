/* ============================================================================
 * ACTIONEDGE — EVENTS LIST
 * ============================================================================
 *
 * This file controls what shows up on the /events page.
 *
 * ── HOW TO ADD AN EVENT ────────────────────────────────────────────────────
 * 1. Copy one whole event block below — from `{` down to the matching `},`
 * 2. Paste it inside the `events = [ ... ]` list
 * 3. Change the text between the quotes to match your new event
 * 4. Click "Publish" (top right) when you're done
 *
 * ── HOW TO REMOVE AN EVENT ─────────────────────────────────────────────────
 * Delete the whole block for that event (from `{` to the matching `},`).
 *
 * ── HOW TO REORDER EVENTS ──────────────────────────────────────────────────
 * The order in this list is the order they show on the page.
 * Move a whole block up or down to change the order.
 *
 * ── FIELDS (what each line means) ──────────────────────────────────────────
 *   title        — Name of the event (required)
 *   badge        — Small tag at the top, e.g. "Coming Soon", "Registration Open" (required)
 *   description  — 1–2 sentences about the event (required)
 *   date         — Any format you like, e.g. "March 14, 2027" or "TBD" (required)
 *   location     — City / venue / "Virtual" / "Caribbean" (required)
 *   registerUrl  — OPTIONAL. A link people click to register.
 *                  If you leave this out (or set it to ""), no button appears.
 *
 * ── TIPS ───────────────────────────────────────────────────────────────────
 * • Keep the quotes " " around every value.
 * • Keep the comma at the end of each line and after each `}`.
 * • If the page breaks, undo your last change (Ctrl+Z / Cmd+Z).
 * ============================================================================ */

export type EventItem = {
  title: string;
  badge: string;
  description: string;
  date: string;
  location: string;
  registerUrl?: string;
};

export const events: EventItem[] = [
  {
    title: "Event Title Placeholder 1",
    badge: "Coming Soon",
    description:
      "Details for this upcoming event will be posted here soon. Check back for dates, location, and registration information.",
    date: "TBD",
    location: "Caribbean",
    // registerUrl: "https://your-registration-link.com",
  },
  {
    title: "Event Title Placeholder 2",
    badge: "Coming Soon",
    description:
      "Details for this upcoming event will be posted here soon. Check back for dates, location, and registration information.",
    date: "TBD",
    location: "Caribbean",
    // registerUrl: "https://your-registration-link.com",
  },
  {
    title: "Event Title Placeholder 3",
    badge: "Coming Soon",
    description:
      "Details for this upcoming event will be posted here soon. Check back for dates, location, and registration information.",
    date: "TBD",
    location: "Caribbean",
    // registerUrl: "https://your-registration-link.com",
  },
];
