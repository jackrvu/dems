import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { resourceGroups } from "@/content/resources";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "How to register, how to vote in Texas, and how to get involved beyond campus.",
};

export default function ResourcesPage() {
  const sidebar = (
    <>
      <Panel title="the short version">
        <p>
          Texas has no online voter registration. You must mail or hand-deliver
          a paper application, and the deadline is 30 days before an election.
        </p>
        <p className="mt-3 text-ink/70">
          If you&rsquo;re registered at home and going to school elsewhere, read
          the mail ballot rules before assuming you can vote here.
        </p>
      </Panel>

      <Panel title="caveat">
        <p className="text-ink/70">
          Deadlines and ID rules change. Every link here points to an official
          state or county page — check it directly rather than trusting a
          screenshot. If something is out of date, tell us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="prose-link"
          >
            {site.email}
          </a>
          .
        </p>
      </Panel>
    </>
  );

  return (
    <Layout
      sidebar={sidebar}
      title="Resources"
      intro="How to register, how to vote in Texas, and how to get involved beyond campus."
    >
      {resourceGroups.map((group) => (
        <Panel
          key={group.heading}
          title={group.heading}
          aside={`${group.items.length} links`}
        >
          {group.blurb ? (
            <p className="text-ink/70 mb-2 max-w-prose">{group.blurb}</p>
          ) : null}

          <ul className="row-divide">
            {group.items.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  className="font-semibold prose-link"
                >
                  {r.title}
                </a>
                <p className="text-ink/70 max-w-prose">{r.description}</p>
              </li>
            ))}
          </ul>
        </Panel>
      ))}
    </Layout>
  );
}
