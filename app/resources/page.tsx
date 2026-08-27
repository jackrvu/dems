import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { resourceGroups } from "@/content/resources";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "How to register, how to vote in Texas, and how to get involved beyond campus.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="How to register, vote, and plug in"
        lede="Texas makes voting harder than most states. Here is what you actually need to know, with links to the official sources."
      />

      <section className="section">
        <div className="container">
          <div className="note" style={{ marginBottom: "2.5rem" }}>
            <h4>Verify before you rely on it</h4>
            <p className="small">
              Deadlines and ID rules change. These links point to official state
              and county pages — check them directly rather than trusting a
              screenshot. If something here is out of date, tell us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>

          {resourceGroups.map((group) => (
            <div key={group.heading} className="year-block">
              <h2 className="year-heading">{group.heading}</h2>
              {group.blurb ? (
                <p className="muted" style={{ maxWidth: "68ch" }}>
                  {group.blurb}
                </p>
              ) : null}

              <ul className="resource-list">
                {group.items.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} className="resource-title">
                      {r.title}
                    </a>
                    <p className="small muted">{r.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
