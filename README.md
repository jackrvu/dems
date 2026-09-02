# Rice Young Democrats — website

A small, static Next.js site. Conventional layout — sticky header, hero,
contained column, cards, a real footer — with the type doing the personality:
Inter for reading copy, Azeret Mono for the wordmark, section labels, dates and
tags. All content lives in plain TypeScript files under `content/`, so anyone on
the board can update the site by editing one file and opening a pull request.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build; catches type errors
```

Requires Node 20 or newer.

## Editing content

You almost never need to touch the pages themselves. Nine times out of ten the
file you want is in `content/`:

| File | What it controls |
| --- | --- |
| `content/site.ts` | Club name, email, meeting blurb, social links, donate link, calendar embed |
| `content/events.ts` | Upcoming events and the past-events archive |
| `content/team.ts` | Executive board roster and committees |
| `content/stories.ts` | Everything on the Stories page |
| `content/resources.ts` | Grouped links on the Resources page |
| `content/partners.ts` | Partner organizations |
| `content/photos.ts` | The photo gallery |

Each file has comments at the top explaining its shape. Dates are always
`"YYYY-MM-DD"`.

### Adding an event

Add an object to `upcomingEvents` in `content/events.ts`. When the event has
passed, move that object down into `pastEvents`. The homepage shows the next
three automatically.

### Adding a story

Add an object to `stories` in `content/stories.ts` with a unique `slug`. The
`body` is an array of paragraphs. The index page, the individual story page, and
the homepage teasers all build themselves from that entry.

### Adding photos

Drop the files in `public/images/gallery/`, resize to roughly 1600 px wide, then
list them in `content/photos.ts` with alt text, a caption, and a credit. Get
permission before posting identifiable photos of people.

## Design

Tailwind. The repeating unit is `components/Panel.tsx` — a card with a mono
label strip over a body box. `components/Layout.tsx` is the page shell: header,
an optional title band (or a custom `hero`), the content column with an optional
1/3 sidebar, and the footer.

- `tailwind.config.ts` — colors (`ink`, `line`, `surface`, `dem-blue`,
  `dem-red`) and the `sans`/`mono` font families
- `app/globals.css` — `.container-site` (the content column), `.card` /
  `.card-head` / `.card-body`, `.btn` / `.btn-primary` / `.btn-outline`,
  `.eyebrow` (small mono label), `.prose-link`, `.row-divide`, `.dotted`

Two conventions worth keeping consistent: panel titles stay lowercase (they're
labels, not headings), and everything else is sentence case. The dotted field
appears only on title bands and monogram tiles — it's an accent, not wallpaper.

## Deploying

**Vercel (recommended).** Import the GitHub repo at vercel.com, accept the
detected Next.js settings, deploy. Every push to `main` ships.

**GitHub Pages.** Uncomment `output: "export"` and `images.unoptimized` in
`next.config.ts`, then serve the generated `out/` directory from a Pages
workflow. Nothing on the site needs a server.

## Before this goes live

- [ ] Replace the placeholder board roster in `content/team.ts`
- [ ] Replace the sample events in `content/events.ts`
- [ ] Replace the placeholder partners in `content/partners.ts` — confirm with
      each organization before listing them
- [ ] Fill in real social and contact links in `content/site.ts`
- [ ] Rewrite the mission copy in `app/about/page.tsx` in the club's own words
- [ ] Verify every link on the Resources page still resolves
- [ ] Read the fundraising checklist on `/donate` and clear it with Rice Student
      Activities and the party before enabling a donate link
- [ ] Replace the placeholder disclaimer line in `components/SiteFooter.tsx`
      with whatever language is actually required
