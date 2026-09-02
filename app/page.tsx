import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import EventList from "@/components/EventList";
import { site } from "@/content/site";
import { upcomingEvents } from "@/content/events";
import { stories } from "@/content/stories";
import { partners } from "@/content/partners";
import { formatCompact } from "@/lib/format";

const work = [
  {
    title: "Register voters",
    body: "Texas still has no online registration. We table on campus with certified deputy registrars so students can register, update an address, or request a mail ballot.",
  },
  {
    title: "Knock doors",
    body: "We canvass and phonebank for Democratic candidates in Harris County and across Texas. Training provided, no experience needed.",
  },
  {
    title: "Host the conversation",
    body: "Speakers, candidate forums, debate watch parties, and arguments among ourselves about what the party should be doing.",
  },
  {
    title: "Build a community",
    body: "Politics is easier with people. Meetings, dinners, and a group of students who care about the same things you do.",
  },
];

export default function HomePage() {
  const hero = (
    <div className="border-b border-line bg-surface dotted">
      <div className="container-site py-14 sm:py-20">
        <p className="eyebrow">Rice University · Student chapter</p>
        <h1 className="hero-title mt-3 font-mono font-semibold text-3xl sm:text-4xl max-w-3xl">
          Politics you can actually show up to.
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink/75">
          We register voters, knock doors, host speakers, and build a political
          community on campus. Open to every Rice student — no experience, no
          poli sci major, and no settled opinion on every issue required.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/events" className="btn btn-primary">
            Come to a meeting
          </Link>
          <Link href="/resources" className="btn btn-outline">
            Register to vote
          </Link>
        </div>
      </div>
    </div>
  );

  const sidebar = (
    <>
      <Panel title="next up" aside={`${upcomingEvents.length} scheduled`}>
        <EventList events={upcomingEvents.slice(0, 3)} />
        <p className="mt-4">
          <Link href="/events" className="prose-link">
            Full calendar
          </Link>
        </p>
      </Panel>

      <Panel title="meetings">
        <p className="text-ink/80">{site.meetingBlurb}</p>
      </Panel>

      <Panel title="contact">
        <ul className="space-y-1.5">
          <li>
            <a href={`mailto:${site.email}`} className="prose-link">
              {site.email}
            </a>
          </li>
          {site.links.instagram ? (
            <li>
              <a href={site.links.instagram} className="prose-link">
                Instagram
              </a>
            </li>
          ) : null}
          {site.links.groupme ? (
            <li>
              <a href={site.links.groupme} className="prose-link">
                GroupMe
              </a>
            </li>
          ) : null}
          <li>
            <Link href="/about" className="prose-link">
              Meet the board
            </Link>
          </li>
        </ul>
      </Panel>

      <Panel title="partners" aside={`${partners.length}`}>
        <ul className="space-y-2">
          {partners.slice(0, 5).map((p) => (
            <li key={p.name}>
              <span className="eyebrow mr-2">{p.category}</span>
              {p.url ? (
                <a href={p.url} className="prose-link">
                  {p.name}
                </a>
              ) : (
                <span>{p.name}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link href="/partners" className="prose-link">
            All partners
          </Link>
        </p>
      </Panel>
    </>
  );

  return (
    <Layout hero={hero} sidebar={sidebar}>
      <Panel title="what we do">
        <div className="grid gap-6 sm:grid-cols-2">
          {work.map((w) => (
            <div key={w.title}>
              <h3 className="font-semibold">{w.title}</h3>
              <p className="mt-1 text-ink/70">{w.body}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="stories">
        {stories.length > 0 ? (
          <ul className="space-y-3">
            {stories.slice(0, 6).map((s) => (
              <li key={s.slug} className="flex gap-4">
                <span className="font-mono text-xs text-ink/50 uppercase tracking-wide shrink-0 w-20 pt-0.5 tabular-nums">
                  {formatCompact(s.date)}
                </span>
                <Link
                  href={`/stories/${s.slug}`}
                  className="font-semibold hover:text-dem-blue transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-ink/55 italic">Nothing published yet.</p>
        )}
        <p className="mt-4">
          <Link href="/stories" className="prose-link">
            All stories
          </Link>
        </p>
      </Panel>
    </Layout>
  );
}
