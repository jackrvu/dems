import Link from "next/link";
import { site } from "@/content/site";
import { upcomingEvents } from "@/content/events";
import { stories } from "@/content/stories";
import EventCard from "@/components/EventCard";
import { formatDate } from "@/lib/format";

export default function HomePage() {
  const nextThree = upcomingEvents.slice(0, 3);
  const latest = stories.slice(0, 3);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Rice University · Student chapter</p>
          <h1>
            Organizing students for Democratic
            <br className="hide-sm" /> values in Houston and Texas.
          </h1>
          <p className="lede">{site.description}</p>
          <div className="btn-row">
            <a className="btn" href={`mailto:${site.email}?subject=Joining%20Rice%20Young%20Democrats`}>
              Join the club
            </a>
            <Link className="btn btn-outline" href="/events">
              See upcoming events
            </Link>
          </div>
          <p className="small muted" style={{ marginTop: "1.5rem" }}>
            {site.meetingBlurb}
          </p>
        </div>
      </section>

      {/* ---------- What we do ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Four things, every semester</h2>
          </div>
          <div className="grid grid-4">
            <div className="card">
              <h3>Register voters</h3>
              <p>
                Texas still has no online registration. We table on campus with
                certified deputy registrars so students can register, update an
                address, or request a mail ballot.
              </p>
            </div>
            <div className="card">
              <h3>Knock doors</h3>
              <p>
                We canvass and phonebank for Democratic candidates in Harris
                County and across Texas. Training is provided; no experience
                needed.
              </p>
            </div>
            <div className="card">
              <h3>Host the conversation</h3>
              <p>
                Speakers, candidate forums, debate watch parties, and arguments
                among ourselves about what the party should be doing.
              </p>
            </div>
            <div className="card">
              <h3>Build a community</h3>
              <p>
                Politics is easier with people. Meetings, dinners, and a group
                of students who care about the same things you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Upcoming ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head split">
            <div>
              <p className="eyebrow">Calendar</p>
              <h2>Upcoming events</h2>
            </div>
            <Link href="/events" className="more-link">
              Full calendar &rarr;
            </Link>
          </div>

          {nextThree.length > 0 ? (
            <div className="event-list">
              {nextThree.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          ) : (
            <p className="muted">
              Nothing on the calendar right now — check back after the semester
              starts.
            </p>
          )}
        </div>
      </section>

      {/* ---------- Stories ---------- */}
      {latest.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="section-head split">
              <div>
                <p className="eyebrow">Stories</p>
                <h2>From our members</h2>
              </div>
              <Link href="/stories" className="more-link">
                All stories &rarr;
              </Link>
            </div>

            <div className="grid grid-3">
              {latest.map((s) => (
                <article key={s.slug} className="card">
                  <p className="small muted" style={{ marginBottom: "0.4rem" }}>
                    {formatDate(s.date)}
                    {s.kind ? ` · ${s.kind}` : ""}
                  </p>
                  <h3>
                    <Link href={`/stories/${s.slug}`}>{s.title}</Link>
                  </h3>
                  <p>{s.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Closing CTA ---------- */}
      <section className="cta">
        <div className="container narrow" style={{ textAlign: "center" }}>
          <h2>Get on the list</h2>
          <p className="lede" style={{ margin: "0 auto" }}>
            Meeting announcements, canvass sign-ups, and deadlines you should
            not miss. A few emails a month, no more.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <a className="btn" href={`mailto:${site.email}?subject=Add%20me%20to%20the%20list`}>
              Email us
            </a>
            <Link className="btn btn-outline" href="/donate">
              Support the chapter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
