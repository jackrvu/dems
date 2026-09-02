import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { partners } from "@/content/partners";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Partners",
  description: "Campus organizations, county and state parties, and coalitions we work with.",
};

const order = ["Campus", "Local", "State", "National"] as const;

export default function PartnersPage() {
  const grouped = order
    .map((cat) => ({ cat, items: partners.filter((p) => p.category === cat) }))
    .filter((g) => g.items.length > 0);

  const sidebar = (
    <Panel title="partner with us">
      <p className="text-ink/70">
        We co-host events, share volunteers, and turn out members for causes we
        support. Email{" "}
        <a
          href={`mailto:${site.email}`}
          className="prose-link"
        >
          {site.email}
        </a>{" "}
        and tell us what you have in mind.
      </p>
    </Panel>
  );

  return (
    <Layout
      sidebar={sidebar}
      title="Partners"
      intro="Campus organizations, county and state parties, and coalitions we work with."
    >
      {grouped.map((g) => (
        <Panel
          key={g.cat}
          title={g.cat.toLowerCase()}
          aside={`${g.items.length}`}
        >
          <div className="row-divide">
            {g.items.map((p) => (
              <div key={p.name}>
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.logo} alt={p.name} className="h-8 w-auto mb-1" />
                ) : null}
                <h3 className="font-semibold">
                  {p.url ? (
                    <a
                      href={p.url}
                      className="prose-link"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <p className="text-ink/70 max-w-prose">{p.description}</p>
              </div>
            ))}
          </div>
        </Panel>
      ))}
    </Layout>
  );
}
