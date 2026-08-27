import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { board, committees } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, what we do, and the students who run it.",
};

function initials(name: string) {
  const clean = name.replace(/\[|\]/g, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "RYD";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Who we are"
        lede="A student-run chapter that registers voters, works campaigns, and argues in good faith about where the party should go."
      />

      <section className="section">
        <div className="container narrow">
          <h2>Our mission</h2>
          <p>
            Rice Young Democrats exists to give students a practical way to act
            on their politics. That means the unglamorous work — registration
            tables, door knocking, phone banks, rides to the polls — alongside
            the conversations that make the work worth doing.
          </p>
          <p>
            We are open to every Rice student. You do not need experience, a
            political science major, or a settled opinion on every issue. You
            need to be willing to show up.
          </p>
          <p className="muted small">
            {/* TODO: replace this section with the club's own language —
                founding year, chapter affiliation, and what this board is
                prioritizing this year. */}
            Editor&rsquo;s note: replace this copy in{" "}
            <code>app/about/page.tsx</code> with the club&rsquo;s own words.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The team</p>
            <h2>Executive board</h2>
            <p>
              Reach any of us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>

          <div className="grid grid-3">
            {board.map((m, i) => (
              <article key={`${m.name}-${i}`} className="person">
                {m.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="person-photo" src={m.image} alt={m.name} />
                ) : (
                  <div className="person-photo person-monogram" aria-hidden="true">
                    {initials(m.name)}
                  </div>
                )}
                <h3>{m.name}</h3>
                <p className="person-role">{m.role}</p>
                <p className="small muted">
                  {[m.year, m.college, m.major].filter(Boolean).join(" · ")}
                </p>
                {m.bio ? <p>{m.bio}</p> : null}
                {m.email ? (
                  <p className="small">
                    <a href={`mailto:${m.email}`}>{m.email}</a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Committees</p>
            <h2>Where the work happens</h2>
            <p>
              Members pick a committee at the start of each semester. Most of
              the club&rsquo;s day-to-day runs through these four.
            </p>
          </div>

          <div className="grid grid-4">
            {committees.map((c) => (
              <div key={c.name} className="card">
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                {c.lead ? <p className="small">Lead: {c.lead}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
