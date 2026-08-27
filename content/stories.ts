/* ------------------------------------------------------------------
   Stories — dispatches, endorsements, op-eds, event recaps.

   Each story's `body` is an array of paragraphs. That keeps this file
   dependency-free; if the club ever wants full Markdown, swap `body`
   for .md files and add a parser then.

   Newest first.
   ------------------------------------------------------------------ */

export type Story = {
  slug: string;
  title: string;
  date: string;          // "2026-04-02"
  author: string;
  role?: string;         // "Communications Director"
  kind?: string;         // "Recap" | "Op-Ed" | "Endorsement" | "Explainer"
  excerpt: string;       // one or two sentences for the index page
  image?: string;        // "/images/stories/slug.jpg"
  body: string[];
};

/* ---- SAMPLE POST — delete once real writing goes up ---- */

export const stories: Story[] = [
  {
    slug: "welcome",
    title: "Why we're publishing here",
    date: "2026-08-26",
    author: "[Author]",
    role: "Communications Director",
    kind: "Note",
    excerpt:
      "A short note on what this section is for: recaps, explainers, and arguments from members, published under our own name.",
    body: [
      "This is a placeholder post. Replace it with real writing — or delete it and add your first story to content/stories.ts.",
      "The idea is simple. Campus political coverage is thin, and a lot of what we do never gets written down anywhere. This is where we can put event recaps, explainers on how local elections actually work, and arguments from members who want to make them under their own name.",
      "Every post lives in one file. Add an entry to the `stories` array with a slug, a date, an author, a short excerpt, and the body as an array of paragraphs. The index page and the individual story page build themselves from that.",
      "If you want to write something, talk to the communications director.",
    ],
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
