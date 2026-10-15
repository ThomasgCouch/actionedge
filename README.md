# ActionEDGE

**Live site:** [actionedgett.com](https://actionedgett.com/)

The website for ActionEDGE, a Caribbean leadership and organisational consulting firm. It presents the firm's services, lets visitors book a discovery call or join the mailing list, and includes an admin area for managing upcoming events.

<!-- Add a screenshot: drag an image into this file on GitHub, or save one as docs/screenshot.png -->
<!-- ![ActionEDGE homepage](docs/screenshot.png) -->

## Features

- **Service pages:** Strategic Thinking & Execution, People Development, Organisational Design & Culture, and DISC assessments
- **Events page:** public listing of workshops and events, loaded from the database
- **Admin dashboard:** a login-protected area where admins create, edit and delete events and upload event images
- **Role-based access:** Supabase Row Level Security, so anyone can *view* events but only users with the `admin` role can change them
- **Bookings and newsletter:** discovery-call booking and mailing-list sign-up
- **Responsive design:** works on mobile, tablet and desktop, with an animated hero section

## Tech stack

| Area | Tools |
|---|---|
| Frontend | React 19, TypeScript, TanStack Start / Router |
| Styling | Tailwind CSS, shadcn/ui (Radix) |
| Backend | Supabase (Postgres database, authentication, file storage) |
| Forms | React Hook Form, Zod |
| Hosting | Cloudflare |

## How it was built

I built the site with [Lovable](https://lovable.dev) for initial scaffolding, quick iteration and for demoing mockup site designs. I refined it from there: the page structure and content, the events system and admin access rules, and deployment to the client's custom domain.



## Project structure

```
src/
  routes/            pages (home, about, services, events, contact, admin)
  components/site/   site components (navbar, hero, newsletter)
  components/ui/     reusable UI components
  integrations/      Supabase client and auth
supabase/migrations/ database tables and security policies
```

---
## License

© 2026 Thomas Couch. All rights reserved.
This code is shared for portfolio purposes only. The ActionEDGE name, logo, content
and images belong to ActionEDGE and may not be reused.

Built by [Thomas Couch](https://github.com/ThomasgCouch)
