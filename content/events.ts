/* ------------------------------------------------------------------
   Events. Add upcoming events to `upcomingEvents`; when one passes,
   move it down into `pastEvents` (optionally with a photo + recap).

   Dates are ISO strings: "YYYY-MM-DD". Times are free text so you can
   write "7:00 p.m." or "7–9 p.m." however reads best.
   ------------------------------------------------------------------ */

export type EventItem = {
  slug: string;
  title: string;
  date: string;        // "2026-09-15"
  time?: string;       // "7:00 p.m."
  location?: string;
  description: string;
  rsvpUrl?: string;    // link to a form, if any
  image?: string;      // e.g. "/images/events/canvass.jpg"
  tag?: string;        // "Canvass", "Speaker", "Social", "Voter Reg"
};

/* ---- SAMPLE DATA — replace all of this with real events ---- */

export const upcomingEvents: EventItem[] = [
  {
    slug: "fall-kickoff",
    title: "Fall Kickoff Meeting",
    date: "2026-09-08",
    time: "7:00 p.m.",
    location: "TBD — check email",
    tag: "Meeting",
    description:
      "First general meeting of the semester. Meet the board, hear what we're organizing this fall, and sign up for a committee. Pizza provided.",
  },
  {
    slug: "voter-reg-drive",
    title: "Campus Voter Registration Drive",
    date: "2026-09-22",
    time: "11 a.m. – 2 p.m.",
    location: "Rice Memorial Center",
    tag: "Voter Reg",
    description:
      "Volunteer deputy registrars will be tabling to register students to vote in Harris County. Stop by to register, update your address, or help staff the table.",
  },
  {
    slug: "canvass-launch",
    title: "Saturday Canvass Launch",
    date: "2026-10-03",
    time: "9:00 a.m.",
    location: "Meet at the Sallyport",
    tag: "Canvass",
    description:
      "Carpool to a neighborhood turf and knock doors with us. No experience needed — we'll train you on the script before we head out.",
  },
];

/* Most recent first. */
export const pastEvents: EventItem[] = [
  {
    slug: "spring-banquet-2026",
    title: "End-of-Year Banquet",
    date: "2026-04-18",
    location: "Rice Memorial Center",
    tag: "Social",
    description:
      "We closed out the year with dinner, senior send-offs, and the announcement of next year's board.",
  },
  {
    slug: "primary-phonebank-2026",
    title: "Primary Election Phonebank",
    date: "2026-02-24",
    location: "Fondren Library",
    tag: "Phonebank",
    description:
      "Members made calls to Harris County voters ahead of the March primary.",
  },
];

/* ------------------------------------------------------------------
   Optional: embed a public Google Calendar on the Events page.

   1. Open Google Calendar → Settings → your calendar → Access permissions
      → check "Make available to public".
   2. Under "Integrate calendar", copy the "Embed code" src URL.
   3. Paste it into site.links.calendarEmbed in content/site.ts.

   If that value is empty, the page just shows the list above instead.
   ------------------------------------------------------------------ */
