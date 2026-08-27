import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import EventList from "@/components/EventList";
import { pastEvents } from "@/content/events";
import { parseDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "past events",
  description: "an archive of what the chapter has organized.",
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
    <Layout>
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
          <p className="text-gray-500 italic">no past events recorded yet.</p>
        </Panel>
      )}

      <p className="mt-2">
        <Link
          href="/events"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          back to upcoming
        </Link>
      </p>
    </Layout>
  );
}
