import type { EventItem } from "@/content/events";
import { formatCompact, formatCompactYear } from "@/lib/format";

/* Compact rows: date on the left, title and details on the right.
   `detailed` adds the description and location beneath each title. */

export default function EventList({
  events,
  detailed = false,
  showYear = false,
  empty = "nothing on the calendar right now.",
}: {
  events: EventItem[];
  detailed?: boolean;
  showYear?: boolean;
  empty?: string;
}) {
  if (events.length === 0) {
    return <p className="text-gray-500 italic">{empty}</p>;
  }

  return (
    <ul className={detailed ? "row-divide" : "space-y-1"}>
      {events.map((e) => (
        <li key={e.slug}>
          <div className="flex flex-row items-baseline gap-3">
            <span className="text-gray-600 shrink-0 tabular-nums">
              {showYear ? formatCompactYear(e.date) : formatCompact(e.date)}
            </span>
            <span className="font-semibold">{e.title}</span>
            {e.tag ? (
              <span className="text-3xs text-dem-red lowercase shrink-0">
                {e.tag}
              </span>
            ) : null}
          </div>

          {detailed ? (
            <>
              <p className="text-gray-600 mt-1">
                {[e.time, e.location].filter(Boolean).join(" · ")}
              </p>
              <p className="mt-1 max-w-prose">{e.description}</p>
              {e.rsvpUrl ? (
                <p className="mt-1">
                  <a
                    href={e.rsvpUrl}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    rsvp
                  </a>
                </p>
              ) : null}
            </>
          ) : (
            <p className="text-gray-600">
              {[e.time, e.location].filter(Boolean).join(" · ")}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
