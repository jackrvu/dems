import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { board, committees } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, what we do, and the students who run it.",
};

function initials(name: string) {
  const clean = name.replace(/\[|\]/g, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "ryd";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toLowerCase();
}

export default function AboutPage() {
  const sidebar = (
    <>
      <Panel title="mission">
        <p>
          Rice Young Democrats exists to give students a practical way to act on
          their politics.
        </p>
        <p className="mt-3 text-ink/70">
          That means the unglamorous work — registration tables, door knocking,
          phone banks, rides to the polls — alongside the conversations that
          make the work worth doing.
        </p>
        <p className="mt-3 text-ink/70">
          You don&rsquo;t need experience, a poli sci major, or a settled
          opinion on every issue. You need to be willing to show up.
        </p>
        <p className="mt-3 text-sm text-ink/55 italic">
          Replace this copy in app/about/page.tsx with the club&rsquo;s own
          words.
        </p>
      </Panel>

      <Panel title="reach us">
        <a
          href={`mailto:${site.email}`}
          className="prose-link"
        >
          {site.email}
        </a>
        <p className="mt-2 text-ink/70">{site.mailingAddress}</p>
      </Panel>

      <Panel title="committees">
        <div className="row-divide">
          {committees.map((c) => (
            <div key={c.name}>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-ink/70">{c.description}</p>
              {c.lead ? (
                <p className="text-ink/70">lead: {c.lead}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Panel>
    </>
  );

  return (
    <Layout
      sidebar={sidebar}
      title="About"
      intro="Who we are, what we do, and the students who run it."
    >
      <Panel title="executive board" aside={`${board.length} members`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {board.map((m, i) => (
            <div key={`${m.name}-${i}`}>
              {m.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full aspect-[4/5] object-cover border border-line rounded mb-1"
                />
              ) : (
                <div
                  className="w-full aspect-[4/5] border border-line rounded mb-1 flex items-center justify-center monogram text-base text-ink/55"
                  aria-hidden="true"
                >
                  {initials(m.name)}
                </div>
              )}
              <h3 className="font-semibold">{m.name}</h3>
              <p className="font-mono text-xs text-dem-red uppercase tracking-wide mt-0.5">
                {m.role}
              </p>
              <p className="text-sm text-ink/60">
                {[m.year, m.college, m.major].filter(Boolean).join(" · ")}
              </p>
              {m.bio ? <p className="text-sm text-ink/70 mt-2">{m.bio}</p> : null}
              {m.email ? (
                <p className="mt-1">
                  <a
                    href={`mailto:${m.email}`}
                    className="prose-link text-sm"
                  >
                    Email
                  </a>
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Panel>
    </Layout>
  );
}
