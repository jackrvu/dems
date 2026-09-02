import type { EventItem } from "@/content/events";
import { formatCompact, formatCompactYear } from "@/lib/format";

/* Date on the left in mono, details on the right.
   `detailed` adds the description and an RSVP link. */

export default function EventList({
  events,
  detailed = false,
  showYear = false,
  empty = "Nothing on the calendar right now.",
}: {
  events: EventItem[];
  detailed?: boolean;
  showYear?: boolean;
  empty?: string;
}) {
  if (events.length === 0) {
    return <p className="text-ink/55 italic">{empty}</p>;
  }

  return (
    <ul className={detailed ? "row-divide" : "space-y-3"}>
      {events.map((e) => (
        <li key={e.slug} className="flex gap-4">
          <span className="font-mono text-xs text-dem-red uppercase tracking-wide shrink-0 w-20 pt-0.5 tabular-nums">
            {showYear ? formatCompactYear(e.date) : formatCompact(e.date)}
          </span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="font-semibold">{e.title}</h3>
              {e.tag ? (
                <span className="eyebrow rounded border border-line bg-surface px-1.5 py-0.5">
                  {e.tag}
                </span>
              ) : null}
            </div>

            <p className="text-sm text-ink/60">
              {[e.time, e.location].filter(Boolean).join(" · ")}
            </p>

            {detailed ? (
              <>
                <p className="mt-2 max-w-prose text-ink/80">{e.description}</p>
                {e.rsvpUrl ? (
                  <p className="mt-2">
                    <a href={e.rsvpUrl} className="btn btn-outline text-xs py-1 px-3">
                      RSVP
                    </a>
                  </p>
                ) : null}
              </>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
