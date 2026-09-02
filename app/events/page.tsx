import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import EventList from "@/components/EventList";
import { upcomingEvents, pastEvents } from "@/content/events";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Meetings, canvasses, registration drives, and everything else on the calendar.",
};

export default function EventsPage() {
  const embed = site.links.calendarEmbed;

  return (
    <Layout
      title="Events"
      intro="Meetings, canvasses, registration drives, and everything else on the calendar."
    >
      <Panel title="upcoming" aside={`${upcomingEvents.length} scheduled`}>
        <EventList
          events={upcomingEvents}
          detailed
          empty="Nothing scheduled at the moment. Email us to get on the list."
        />
      </Panel>

      {embed ? (
        <Panel title="calendar" bodyClassName="p-0">
          <iframe
            src={embed}
            title="rice young democrats calendar"
            loading="lazy"
            className="w-full h-[520px] border-0 block"
          />
        </Panel>
      ) : (
        <Panel title="calendar">
          <p className="text-ink/70">
            Optional: make the club&rsquo;s Google Calendar public, copy its
            embed URL, and paste it into <code>site.links.calendarEmbed</code>{" "}
            in <code>content/site.ts</code> — this panel is then replaced by the
            calendar itself. Setup steps are in <code>content/events.ts</code>.
          </p>
        </Panel>
      )}

      <Panel title="recently" aside={`${pastEvents.length} archived`}>
        <EventList
          events={pastEvents.slice(0, 5)}
          showYear
          empty="No past events recorded yet."
        />
        <p className="mt-2">
          <Link
            href="/events/past"
            className="prose-link"
          >
            Full archive
          </Link>
        </p>
      </Panel>
    </Layout>
  );
}
