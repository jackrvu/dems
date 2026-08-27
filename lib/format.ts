/* Date helpers. Dates in content/ are plain "YYYY-MM-DD" strings, parsed
   as local calendar dates so an event never renders a day early. */

export function parseDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function formatDate(iso: string): string {
  return parseDate(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** "Tue, Sep 8" — used in compact listings. */
export function formatShort(iso: string): string {
  return parseDate(iso).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function monthAbbr(iso: string): string {
  return parseDate(iso).toLocaleDateString("en-US", { month: "short" }).toUpperCase();
}

export function dayNum(iso: string): string {
  return String(parseDate(iso).getDate());
}

/** "sep 8" — the compact lowercase form used in list rows. */
export function formatCompact(iso: string): string {
  return parseDate(iso)
    .toLocaleDateString("en-US", { month: "short", day: "numeric" })
    .toLowerCase();
}

/** "sep 8, 2026" — lowercase, with the year. */
export function formatCompactYear(iso: string): string {
  return parseDate(iso)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toLowerCase();
}
