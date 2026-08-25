# Running this site without Lovable

This guide covers moving the ActionEDGE site off Lovable so you can edit and deploy it
yourself, with no subscription and no "Edit with Lovable" badge.

---

## 1. Get the code onto GitHub

In the Lovable editor: **Plus (+) in the chat input -> GitHub -> Connect / Create repository**.

That creates a GitHub repository containing the full source. Every future change you make in
GitHub is yours; Lovable is no longer needed.

---

## 2. Host it yourself (free)

Connect the GitHub repo to any of these:

- **Netlify** (netlify.com) - "Add new site" -> "Import an existing project"
- **Vercel** (vercel.com) - "Add New" -> "Project"
- **Cloudflare Pages** (pages.cloudflare.com)

Build settings:

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Node version     | 20 or newer     |

Environment variables (copy the values from the project's `.env` file):

```
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
VITE_SUPABASE_PROJECT_ID
```

Push to `main` -> the host rebuilds and the live site updates in about a minute.

### Cloudflare Pages step-by-step

1. **Log in to Cloudflare** at https://dash.cloudflare.com (create a free account if you don't have one).
2. Go to **Workers & Pages** in the left sidebar, then click the **Pages** tab and click **Create project**.
3. Choose **Connect to Git**. Select your GitHub account/organisation and choose the repository you created in step 1.
4. Click **Begin setup**.
5. In the **Build settings** section:
   - **Project name**: pick anything (e.g. `actionedge-tt`).
   - **Production branch**: `main`.
   - **Framework preset**: choose **None** / leave blank.
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Scroll to **Environment variables (advanced)** and add these three variables with the values from your `.env` file:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
7. Click **Save and Deploy**.
8. Cloudflare Pages will build and deploy. After a minute or two you will get a `*.pages.dev` URL where you can preview the site.
9. To add your custom domain, go to the Cloudflare Pages project -> **Custom domains** and click **Set up a custom domain**. Enter `actionedgett.com` (and optionally `www.actionedgett.com`). Cloudflare will guide you through DNS — if your domain is already in Cloudflare it usually just needs one click to approve.
10. Once the custom domain is working and the site looks correct, unpublish from Lovable (**Project Settings -> Unpublish**).

---

## 3. Move the domain

1. In your new host, add the custom domain `actionedgett.com` (and `www.actionedgett.com`).
2. The host shows you the DNS records to use. In GoDaddy: **My Products -> Domain -> DNS ->
   Manage DNS**, and replace the existing A / CNAME records with the ones the host gives you.
3. Once the domain resolves to the new host, unpublish from Lovable
   (**Project Settings -> Unpublish**).

No badge appears on a self-hosted deployment, regardless of plan.

---

## 4. Making edits after the move

For text and content changes you do not need any tools installed:

1. Open the repo on github.com.
2. Navigate to the file, click the **pencil** icon.
3. Change the text, then **Commit changes**.
4. The host rebuilds and the live site updates in ~1 minute.

Files you are most likely to touch:

| What                       | File                                |
| -------------------------- | ----------------------------------- |
| Home page copy             | `src/routes/index.tsx`              |
| About page                 | `src/routes/about.tsx`              |
| Contact details            | `src/routes/contact.tsx`            |
| DISC page                  | `src/routes/disc.tsx`               |
| Service pages              | `src/routes/strategic-thinking.tsx`, `src/routes/people-development.tsx`, `src/routes/org-design-culture.tsx` |
| Header links               | `src/components/site/Navbar.tsx`    |
| Footer + social links      | `src/components/site/Newsletter.tsx`|
| Colours / fonts            | `src/styles.css`                    |
| Google Analytics ID        | `src/lib/analytics.ts`              |

Events are managed from the `/admin` page in the browser, not from code - see
[EDITING-EVENTS.md](./EDITING-EVENTS.md).

---

## 5. The backend (events, login, image uploads)

The `/admin` panel, the events list and event image uploads run on a Supabase database
provisioned through Lovable Cloud.

### Option A - simplest: keep the existing database

Self-host only the frontend and keep using the current Supabase project via the three
`VITE_SUPABASE_*` environment variables. Nothing else to do. This still depends on the
Lovable Cloud backend remaining active.

### Option B - fully independent: your own Supabase project

1. Create a free account at supabase.com and start a new project.
2. Open **SQL Editor** and run the script in section 6 below.
3. In **Authentication -> Providers -> Email**, enable email sign-up and turn on
   "Confirm email" only if you want confirmation emails.
4. In **Storage**, confirm the `event-images` bucket exists (the script creates it).
5. Copy **Project URL** and the **publishable / anon key** from **Project Settings -> API**
   into your host's environment variables (`VITE_SUPABASE_URL`,
   `VITE_SUPABASE_PUBLISHABLE_KEY`) and redeploy.
6. Visit `/auth` on the site and sign up - **the first account created automatically becomes
   the admin**.

---

## 6. Full database setup script

Paste this into the Supabase SQL Editor of the new project and run it once.

```sql
-- ---------- Roles ----------
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- ---------- Events ----------
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  badge text NOT NULL DEFAULT 'Coming Soon',
  description text NOT NULL,
  event_date text NOT NULL,
  location text NOT NULL,
  register_url text,
  image_url text,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.events TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read events" ON public.events
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Admins insert events" ON public.events
  FOR INSERT TO authenticated WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role));

CREATE POLICY "Admins update events" ON public.events
  FOR UPDATE TO authenticated USING (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role));

CREATE POLICY "Admins delete events" ON public.events
  FOR DELETE TO authenticated USING (EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'::public.app_role));

-- ---------- updated_at trigger ----------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER events_updated_at BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ---------- First signup becomes admin ----------
CREATE OR REPLACE FUNCTION public.bootstrap_first_admin()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created_bootstrap_admin
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.bootstrap_first_admin();

REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin() FROM PUBLIC, anon, authenticated;

-- ---------- Storage bucket for event images ----------
INSERT INTO storage.buckets (id, name, public)
VALUES ('event-images', 'event-images', false)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read event-images" ON storage.objects
  FOR SELECT TO anon, authenticated USING (bucket_id = 'event-images');

CREATE POLICY "Admins upload event-images" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'event-images' AND EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins update event-images" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'event-images' AND EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'))
  WITH CHECK (bucket_id = 'event-images' AND EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins delete event-images" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'event-images' AND EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));

-- ---------- Optional: placeholder events ----------
INSERT INTO public.events (title, badge, description, event_date, location, sort_order) VALUES
('Event Title Placeholder 1', 'Coming Soon', 'Details for this upcoming event will be posted here soon.', 'TBD', 'Caribbean', 1),
('Event Title Placeholder 2', 'Coming Soon', 'Details for this upcoming event will be posted here soon.', 'TBD', 'Caribbean', 2),
('Event Title Placeholder 3', 'Coming Soon', 'Details for this upcoming event will be posted here soon.', 'TBD', 'Caribbean', 3);
```

---

## 7. Running the site on your own computer (optional)

```bash
npm install
npm run dev
```

Then open http://localhost:8080. You need a `.env` file in the project root containing the
three `VITE_SUPABASE_*` variables.
