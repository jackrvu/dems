/* ------------------------------------------------------------------
   Site-wide settings. This is the first file to edit.
   ------------------------------------------------------------------ */

export const site = {
  name: "Rice Young Democrats",
  shortName: "RYD",
  tagline: "Organizing students for Democratic values at Rice University.",
  description:
    "Rice Young Democrats is the student chapter of the Democratic Party at Rice University. We register voters, knock doors, host speakers, and build a political community on campus.",

  // TODO: replace with the club's real contact details
  email: "youngdemocrats@rice.edu",
  meetingBlurb: "General meetings every other Tuesday, 7:00 p.m. — location announced by email.",
  mailingAddress: "Rice University, 6100 Main St., Houston, TX 77005",

  // TODO: replace with real links. Leave a value as "" to hide it.
  links: {
    instagram: "",
    x: "",
    facebook: "",
    groupme: "",
    newsletter: "",
    // Where the "Donate" button points. See app/donate/page.tsx for the copy.
    donate: "",
    // Public Google Calendar embed URL (see content/events.ts for setup notes)
    calendarEmbed: "",
  },
} as const;

/* Primary navigation. Order here is the order on the site. */
export const nav = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/stories", label: "Stories" },
  { href: "/resources", label: "Resources" },
  { href: "/photos", label: "Photos" },
  { href: "/partners", label: "Partners" },
] as const;
