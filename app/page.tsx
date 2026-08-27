import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import EventList from "@/components/EventList";
import { site } from "@/content/site";
import { upcomingEvents } from "@/content/events";
import { stories } from "@/content/stories";
import { partners } from "@/content/partners";
import { formatCompact } from "@/lib/format";

export default function HomePage() {
  const sidebar = (
    <>
      <Panel title="about us">
        <p className="tracking-very-tight">
          the student chapter of the democratic party at rice university.
        </p>
        <p className="mt-2 text-gray-600">
          we register voters, knock doors, host speakers, and build a political
          community on campus. open to every rice student.
        </p>
      </Panel>

      <Panel title="status">
        <p>{site.meetingBlurb.toLowerCase()}</p>
      </Panel>

      <Panel title="contacts">
        <ul className="space-y-1">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              {site.email}
            </a>
          </li>
          {site.links.instagram ? (
            <li>
              <a
                href={site.links.instagram}
                className="hover:text-fuchsia-400 transition-colors duration-200"
              >
                instagram
              </a>
            </li>
          ) : null}
          {site.links.groupme ? (
            <li>
              <a
                href={site.links.groupme}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                groupme
              </a>
            </li>
          ) : null}
          <li>
            <Link
              href="/about"
              className="hover:text-green-500 transition-colors duration-200"
            >
              meet the board
            </Link>
          </li>
        </ul>
      </Panel>

      <Panel title="get involved">
        <ul className="space-y-1">
          <li>
            <Link
              href="/resources"
              className="hover:text-green-500 transition-colors duration-200"
            >
              register to vote in texas
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="hover:text-green-500 transition-colors duration-200"
            >
              come to a meeting
            </Link>
          </li>
          <li>
            <Link
              href="/donate"
              className="hover:text-dem-red transition-colors duration-200"
            >
              fund the chapter
            </Link>
          </li>
        </ul>
      </Panel>

      <Panel title="partners" aside={`${partners.length}`}>
        <ul className="space-y-1">
          {partners.slice(0, 5).map((p) => (
            <li key={p.name} className="flex items-baseline gap-2">
              <span className="text-gray-600 text-3xs shrink-0 lowercase">
                {p.category}
              </span>
              {p.url ? (
                <a
                  href={p.url}
                  className="hover:text-green-500 transition-colors duration-200"
                >
                  {p.name}
                </a>
              ) : (
                <span>{p.name}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-2">
          <Link
            href="/partners"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            all partners
          </Link>
        </p>
      </Panel>
    </>
  );

  return (
    <Layout sidebar={sidebar}>
      <Panel title="upcoming" aside={`${upcomingEvents.length} scheduled`}>
        <EventList events={upcomingEvents.slice(0, 5)} />
        <p className="mt-2">
          <Link
            href="/events"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            full calendar
          </Link>
        </p>
      </Panel>

      <Panel title="what we do">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold">register voters</h3>
            <p className="text-gray-600">
              texas still has no online registration. we table on campus with
              certified deputy registrars so students can register, update an
              address, or request a mail ballot.
            </p>
          </div>
          <div>
            <h3 className="font-bold">knock doors</h3>
            <p className="text-gray-600">
              we canvass and phonebank for democratic candidates in harris
              county and across texas. training provided, no experience needed.
            </p>
          </div>
          <div>
            <h3 className="font-bold">host the conversation</h3>
            <p className="text-gray-600">
              speakers, candidate forums, debate watch parties, and arguments
              among ourselves about what the party should be doing.
            </p>
          </div>
          <div>
            <h3 className="font-bold">build a community</h3>
            <p className="text-gray-600">
              politics is easier with people. meetings, dinners, and a group of
              students who care about the same things you do.
            </p>
          </div>
        </div>
      </Panel>

      <Panel title="stories">
        {stories.length > 0 ? (
          <ul className="space-y-1">
            {stories.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/stories/${s.slug}`}
                  className="flex flex-row items-baseline gap-3 group"
                >
                  <span className="text-gray-600 shrink-0 tabular-nums">
                    {formatCompact(s.date)}
                  </span>
                  <span className="group-hover:text-green-500 transition-colors duration-200">
                    {s.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">nothing published yet.</p>
        )}
        <p className="mt-2">
          <Link
            href="/stories"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            all stories
          </Link>
        </p>
      </Panel>
    </Layout>
  );
}
