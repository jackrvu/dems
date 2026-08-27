import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import EventCard from "@/components/EventCard";
import { upcomingEvents } from "@/content/events";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Meetings, canvasses, registration drives, and everything else on the calendar.",
};

export default function EventsPage() {
  const embed = site.links.calendarEmbed;

  return (
    <>
      <PageHeader
        eyebrow="Calendar"
        title="Upcoming events"
        lede="Everything open to members is listed here. Anything marked TBD gets a location by email the week of."
      />

      <section className="section">
        <div className="container">
          {upcomingEvents.length > 0 ? (
            <div className="event-list">
              {upcomingEvents.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          ) : (
            <p className="muted">
              Nothing scheduled at the moment. Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> to get on the
              list, and you&rsquo;ll hear when the next one is set.
            </p>
          )}

          <p className="small muted" style={{ marginTop: "2rem" }}>
            Looking for what we&rsquo;ve already done?{" "}
            <Link href="/events/past">Browse past events &rarr;</Link>
          </p>
        </div>
      </section>

      {embed ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Subscribe</p>
              <h2>Add us to your calendar</h2>
              <p>
                The same events, in a calendar you can subscribe to and take
                with you.
              </p>
            </div>
            <div className="calendar-embed">
              <iframe
                src={embed}
                title="Rice Young Democrats calendar"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container narrow">
            <div className="note">
              <h4>Optional: embed a live calendar</h4>
              <p className="small">
                Make the club&rsquo;s Google Calendar public, copy its embed URL,
                and paste it into <code>site.links.calendarEmbed</code> in{" "}
                <code>content/site.ts</code>. This panel is replaced by the
                calendar itself. Setup steps are in{" "}
                <code>content/events.ts</code>.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
