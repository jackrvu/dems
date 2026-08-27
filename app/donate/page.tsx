import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support voter registration, canvassing, and programming at Rice.",
};

export default function DonatePage() {
  const donateUrl = site.links.donate;

  return (
    <>
      <PageHeader
        eyebrow="Support us"
        title="Fund the work"
        lede="We run on a small budget. Contributions pay for the clipboards, printing, vans, and pizza that make organizing possible."
      />

      <section className="section">
        <div className="container narrow">
          <h2>Where the money goes</h2>
          <div className="grid grid-2" style={{ margin: "1.5rem 0 2.5rem" }}>
            <div className="card">
              <h3>Voter registration</h3>
              <p>
                Printing applications, tabling supplies, and deputy registrar
                materials for drives on campus.
              </p>
            </div>
            <div className="card">
              <h3>Getting to the turf</h3>
              <p>
                Gas, parking, and van rentals so members can canvass in
                neighborhoods off campus.
              </p>
            </div>
            <div className="card">
              <h3>Programming</h3>
              <p>
                Speaker travel, room and A/V costs, and food at meetings — the
                thing that actually gets people in the room.
              </p>
            </div>
            <div className="card">
              <h3>The banquet</h3>
              <p>
                One night a year to thank the members who knocked doors all
                semester.
              </p>
            </div>
          </div>

          {donateUrl ? (
            <div className="btn-row" style={{ marginTop: 0 }}>
              <a className="btn" href={donateUrl}>
                Give now
              </a>
              <a className="btn btn-outline" href={`mailto:${site.email}`}>
                Give another way
              </a>
            </div>
          ) : (
            <div className="note">
              <h4>Donations are not open yet</h4>
              <p className="small">
                Set up a payment link, then paste it into{" "}
                <code>site.links.donate</code> in <code>content/site.ts</code>.
                This panel is replaced by a &ldquo;Give now&rdquo; button as soon
                as that value is filled in. In the meantime, email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> to give or to
                sponsor a specific event.
              </p>
            </div>
          )}

          <hr />

          <h2>Before you turn this on</h2>
          <p className="muted">
            Political fundraising has rules, and a student chapter sits in an
            awkward spot between campus policy and campaign finance law. Confirm
            all of the following before publishing a donate link:
          </p>
          <ul className="checklist">
            <li>
              <strong>Rice policy.</strong> Check with Student Activities and the
              Student Association about what a registered student organization
              may solicit, and whether funds must be held in a university
              account.
            </li>
            <li>
              <strong>Committee status.</strong> Determine whether the chapter
              needs to register with the Texas Ethics Commission or the FEC, and
              what the resulting reporting and disclaimer obligations are.
            </li>
            <li>
              <strong>Disclaimer text.</strong> If a disclaimer is required, put
              the exact required language here and in the footer — replace the
              placeholder line currently in{" "}
              <code>components/SiteFooter.tsx</code>.
            </li>
            <li>
              <strong>Who may give.</strong> Contributions from foreign nationals
              are prohibited. Decide how you will screen for that and for
              corporate money.
            </li>
            <li>
              <strong>Tax treatment.</strong> Contributions to political
              organizations are generally <em>not</em> tax-deductible as
              charitable gifts. Do not imply otherwise.
            </li>
          </ul>
          <p className="small muted">
            This checklist is a prompt to go ask, not legal advice. Get an answer
            from the university and from the party before you take a dollar.
          </p>

          <hr />

          <h2>Other ways to help</h2>
          <p>
            Money is not the only thing we need — and for most students, time is
            worth more.{" "}
            <Link href="/events">Come to an event</Link>, bring a friend to a
            canvass, or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> if your
            organization wants to sponsor one.
          </p>
        </div>
      </section>
    </>
  );
}
