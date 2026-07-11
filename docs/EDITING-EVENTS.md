# How to update the Events page

The Events page on your website is powered by **one file**. You don't need to know how to code — you're just filling in blanks between quotation marks.

**File to edit:** `src/data/events.ts`

After any change, click the **Publish** button (top right) for it to go live.

---

## The shape of one event

Every event on the page looks like this in the file:

```ts
{
  title: "Leadership Intensive",
  badge: "Registration Open",
  description: "A two-day workshop for senior leaders on strategy and execution.",
  date: "March 14, 2027",
  location: "Port of Spain, Trinidad",
  registerUrl: "https://forms.gle/your-registration-link",
},
```

### What each line means

| Field         | Required? | Notes                                                                 |
| ------------- | --------- | --------------------------------------------------------------------- |
| `title`       | Yes       | The event name.                                                       |
| `badge`       | Yes       | The small pill at the top. E.g. `Coming Soon`, `Registration Open`, `Sold Out`. |
| `description` | Yes       | One or two sentences.                                                 |
| `date`        | Yes       | Any format. Use `TBD` if not confirmed.                              |
| `location`    | Yes       | City, venue, `Virtual`, or `Caribbean`.                              |
| `registerUrl` | Optional  | A link. If you leave it out, no "Register" button appears.           |

---

## Add a new event

1. Open `src/data/events.ts`.
2. Copy this template and paste it inside the `events = [ ... ]` list, wherever you want it to appear:

```ts
{
  title: "Your event name",
  badge: "Coming Soon",
  description: "One or two sentences about the event.",
  date: "Month Day, Year",
  location: "City / Virtual",
  registerUrl: "https://your-registration-link.com",
},
```

3. Replace the text between the quotes with your event's info.
4. Click **Publish**.

> If there's no registration link yet, delete the whole `registerUrl` line. That's fine — the button just won't appear.

---

## Remove an event

Find the event's block in the file (from `{` down to the matching `},`) and delete the whole thing. Then click **Publish**.

---

## Reorder events

The order in the file is the order on the page. Cut a whole event block and paste it above or below another one to move it. Then click **Publish**.

---

## Rules to keep it from breaking

- Always keep the **quotes** `" "` around each value.
- Always keep the **comma** at the end of each line and after each `}`.
- If you paste something and the page breaks, press **Undo** (Ctrl+Z / Cmd+Z) until it works again.

---

## What if there are no events at all?

That's fine. If you delete every event block and leave the list empty, the page will automatically show a friendly "No events scheduled right now" message with a link to the mailing list. Nothing extra to do.
