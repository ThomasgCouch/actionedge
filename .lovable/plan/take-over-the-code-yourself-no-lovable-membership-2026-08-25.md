# Take over the code yourself (no Lovable membership)

Goal: be able to edit and deploy this site without a paid Lovable plan, and without the "Edit with Lovable" badge coming back.

## Key facts

- The badge only appears on **Lovable-hosted** deployments (`actionedge.lovable.app` / your custom domain served by Lovable). If you host the site yourself, there is no badge at all, on any plan.
- Viewing code in Lovable is free; editing it inside Lovable needs a paid plan. Editing it **in GitHub / on your own machine** does not.
- Your database, auth, storage and the `/admin` events panel run on Lovable Cloud (Supabase). Those keep working, but if you fully leave Lovable you will need your own Supabase project. See "Backend" below.

## Steps

1. **Push the code to GitHub** — in Lovable: Plus (+) in the chat input -> GitHub -> connect account -> create repo. You now own a full copy of the source.
2. **Host it yourself for free** — connect that repo to Netlify, Vercel or Cloudflare Pages. Build command `npm run build`, and add the env vars from `.env` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`).
3. **Move the domain** — point `actionedgett.com` at the new host (they give you the DNS records), then unpublish from Lovable. No badge, no subscription.
4. **Editing after that** — small text/content changes can be made straight in the GitHub web editor (pencil icon on a file, Commit changes); the host rebuilds automatically in ~1 minute. Files most likely to change: `src/routes/*.tsx` for page text, `src/data/events.ts` for static events.

## Backend (the /admin events panel)

- Easiest: keep Lovable Cloud running for the database only, and just self-host the frontend. The keys in `.env` are all the frontend needs.
- Fully independent: create a free Supabase account, recreate the `events` + `user_roles` tables, RLS policies and the `event-images` bucket there, then swap the env vars. I can export the exact SQL migration and setup instructions for this if you want.

## What I would do in the project

Nothing is required in the code for this. Optionally I can add a `docs/SELF-HOSTING.md` with these steps plus the exact SQL for recreating the backend, so it lives with the repo after you leave.
