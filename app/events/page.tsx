import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import EventList from "@/components/EventList";
import { upcomingEvents, pastEvents } from "@/content/events";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "events",
  description: "meetings, canvasses, registration drives, and everything else on the calendar.",
};

export default function EventsPage() {
  const embed = site.links.calendarEmbed;

  return (
    <Layout>
      <Panel title="upcoming" aside={`${upcomingEvents.length} scheduled`}>
        <EventList
          events={upcomingEvents}
          detailed
          empty="nothing scheduled at the moment. email us to get on the list."
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
          <p className="text-gray-600">
            optional: make the club&rsquo;s google calendar public, copy its
            embed url, and paste it into <code>site.links.calendarEmbed</code> in{" "}
            <code>content/site.ts</code>. this panel is replaced by the calendar
            itself. setup steps are in <code>content/events.ts</code>.
          </p>
        </Panel>
      )}

      <Panel title="recently" aside={`${pastEvents.length} archived`}>
        <EventList
          events={pastEvents.slice(0, 5)}
          showYear
          empty="no past events recorded yet."
        />
        <p className="mt-2">
          <Link
            href="/events/past"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            full archive
          </Link>
        </p>
      </Panel>
    </Layout>
  );
}
