import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { resourceGroups } from "@/content/resources";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "resources",
  description: "how to register, how to vote in texas, and how to get involved beyond campus.",
};

export default function ResourcesPage() {
  const sidebar = (
    <>
      <Panel title="the short version">
        <p>
          texas has no online voter registration. you must mail or hand-deliver
          a paper application, and the deadline is 30 days before an election.
        </p>
        <p className="mt-2 text-gray-600">
          if you are registered at home and going to school elsewhere, look at
          the mail ballot rules before you assume you can vote here.
        </p>
      </Panel>

      <Panel title="caveat">
        <p className="text-gray-600">
          deadlines and id rules change. every link here points to an official
          state or county page — check it directly rather than trusting a
          screenshot. if something is out of date, tell us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            {site.email}
          </a>
          .
        </p>
      </Panel>
    </>
  );

  return (
    <Layout sidebar={sidebar}>
      {resourceGroups.map((group) => (
        <Panel
          key={group.heading}
          title={group.heading}
          aside={`${group.items.length} links`}
        >
          {group.blurb ? (
            <p className="text-gray-600 mb-2 max-w-prose">{group.blurb}</p>
          ) : null}

          <ul className="row-divide">
            {group.items.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  className="font-semibold hover:text-green-500 transition-colors duration-200"
                >
                  {r.title}
                </a>
                <p className="text-gray-600 max-w-prose">{r.description}</p>
              </li>
            ))}
          </ul>
        </Panel>
      ))}
    </Layout>
  );
}
