/* ------------------------------------------------------------------
   Partner organizations, coalitions, and campus allies.
   Logos (optional) go in public/images/partners/.
   ------------------------------------------------------------------ */

export type Partner = {
  name: string;
  category: "Campus" | "Local" | "State" | "National";
  description: string;
  url?: string;
  logo?: string;
};

/* ---- PLACEHOLDER — replace with real partners before publishing.
   Do not list an organization as a partner without their okay. ---- */

export const partners: Partner[] = [
  { name: "[Campus organization]", category: "Campus", description: "How you work together — co-hosted events, shared programming, joint advocacy." },
  { name: "[County party or club]", category: "Local", description: "How you work together." },
  { name: "[State federation]",     category: "State", description: "How you work together." },
];
