import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import EventList from "@/components/EventList";
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
    <Layout
      title="Past events"
      intro="An archive of what the chapter has organized."
    >
      {years.length > 0 ? (
        years.map((year) => (
          <Panel
            key={year}
            title={year}
            aside={`${byYear[year].length} event${byYear[year].length === 1 ? "" : "s"}`}
          >
            <EventList events={byYear[year]} detailed />
          </Panel>
        ))
      ) : (
        <Panel title="archive">
          <p className="text-ink/55 italic">No past events recorded yet.</p>
        </Panel>
      )}

      <p className="mt-2">
        <Link
          href="/events"
          className="prose-link"
        >
          Back to upcoming events
        </Link>
      </p>
    </Layout>
  );
}
