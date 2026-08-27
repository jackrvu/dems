import type { EventItem } from "@/content/events";
import { dayNum, monthAbbr, formatDate } from "@/lib/format";

export default function EventCard({
  event,
  past = false,
}: {
  event: EventItem;
  past?: boolean;
}) {
  return (
    <article className={`event${past ? " event-past" : ""}`}>
      <div className="event-date" aria-hidden="true">
        <span className="mo">{monthAbbr(event.date)}</span>
        <span className="dy">{dayNum(event.date)}</span>
      </div>

      <div className="event-body">
        <div className="event-meta">
          <span>{formatDate(event.date)}</span>
          {event.time ? <span>{event.time}</span> : null}
          {event.location ? <span>{event.location}</span> : null}
          {event.tag ? <span className="tag">{event.tag}</span> : null}
        </div>

        <h3>{event.title}</h3>
        <p>{event.description}</p>

        {event.rsvpUrl ? (
          <p className="small" style={{ marginTop: "0.8rem" }}>
            <a href={event.rsvpUrl}>RSVP &rarr;</a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
