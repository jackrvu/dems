import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import EventCard from "@/components/EventCard";
import { pastEvents } from "@/content/events";
import { parseDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Past events",
  description: "An archive of what the chapter has organized.",
};

export default function PastEventsPage() {
  const byYear = pastEvents.reduce<Record<string, typeof pastEvents>>(
    (acc, e) => {
      const year = String(parseDate(e.date).getFullYear());
      (acc[year] ||= []).push(e);
      return acc;
    },
    {}
  );
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Past events"
        lede="What we've organized, semester by semester. A record for members, and for whoever runs this club next."
      />

      <section className="section">
        <div className="container">
          {years.length > 0 ? (
            years.map((year) => (
              <div key={year} className="year-block">
                <h2 className="year-heading">{year}</h2>
                <div className="event-list">
                  {byYear[year].map((e) => (
                    <EventCard key={e.slug} event={e} past />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="muted">No past events recorded yet.</p>
          )}

          <p className="small muted" style={{ marginTop: "2.5rem" }}>
            <Link href="/events">&larr; Back to upcoming events</Link>
          </p>
        </div>
      </section>
    </>
  );
}
