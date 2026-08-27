import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
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

  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Who we work with"
        lede="Almost nothing we do happens alone. These are the organizations we organize alongside."
      />

      <section className="section">
        <div className="container">
          {grouped.map((g) => (
            <div key={g.cat} className="year-block">
              <h2 className="year-heading">{g.cat}</h2>
              <div className="grid grid-3">
                {g.items.map((p) => (
                  <div key={p.name} className="card">
                    {p.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="partner-logo" src={p.logo} alt={p.name} />
                    ) : null}
                    <h3>
                      {p.url ? <a href={p.url}>{p.name}</a> : p.name}
                    </h3>
                    <p>{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="note" style={{ marginTop: "2.5rem" }}>
            <h4>Want to partner with us?</h4>
            <p className="small">
              We co-host events, share volunteers, and turn out members for
              causes we support. Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> and tell us what
              you have in mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
