import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { partners } from "@/content/partners";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "partners",
  description: "campus organizations, county and state parties, and coalitions we work with.",
};

const order = ["Campus", "Local", "State", "National"] as const;

export default function PartnersPage() {
  const grouped = order
    .map((cat) => ({ cat, items: partners.filter((p) => p.category === cat) }))
    .filter((g) => g.items.length > 0);

  const sidebar = (
    <Panel title="partner with us">
      <p className="text-gray-600">
        we co-host events, share volunteers, and turn out members for causes we
        support. email{" "}
        <a
          href={`mailto:${site.email}`}
          className="hover:text-indigo-400 transition-colors duration-200"
        >
          {site.email}
        </a>{" "}
        and tell us what you have in mind.
      </p>
    </Panel>
  );

  return (
    <Layout sidebar={sidebar}>
      {grouped.map((g) => (
        <Panel key={g.cat} title={g.cat} aside={`${g.items.length}`}>
          <div className="row-divide">
            {g.items.map((p) => (
              <div key={p.name}>
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.logo} alt={p.name} className="h-8 w-auto mb-1" />
                ) : null}
                <h3 className="font-bold">
                  {p.url ? (
                    <a
                      href={p.url}
                      className="hover:text-green-500 transition-colors duration-200"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <p className="text-gray-600 max-w-prose">{p.description}</p>
              </div>
            ))}
          </div>
        </Panel>
      ))}
    </Layout>
  );
}
