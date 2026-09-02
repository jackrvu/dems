import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support voter registration, canvassing, and programming at Rice.",
};

export default function DonatePage() {
  const donateUrl = site.links.donate;

  const sidebar = (
    <>
      <Panel title="give">
        {donateUrl ? (
          <>
            <a
              href={donateUrl}
              className="btn btn-primary"
            >
              Give now
            </a>
            <p className="mt-3 text-ink/70">
              Or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="prose-link"
              >
                {site.email}
              </a>{" "}
              to give another way or sponsor a specific event.
            </p>
          </>
        ) : (
          <>
            <p className="text-ink/70">
              Donations aren&rsquo;t open yet. Set up a payment link, then
              paste it into <code>site.links.donate</code> in{" "}
              <code>content/site.ts</code> — this panel becomes a give button.
            </p>
            <p className="mt-3 text-ink/70">
              In the meantime, email{" "}
              <a
                href={`mailto:${site.email}`}
                className="prose-link"
              >
                {site.email}
              </a>
              .
            </p>
          </>
        )}
      </Panel>

      <Panel title="other ways to help">
        <p className="text-ink/70">
          Money isn&rsquo;t the only thing we need — for most students, time is
          worth more.{" "}
          <Link
            href="/events"
            className="prose-link"
          >
            Come to an event
          </Link>
          , bring a friend to a canvass, or ask your organization to sponsor
          one.
        </p>
      </Panel>
    </>
  );

  return (
    <Layout
      sidebar={sidebar}
      title="Support the chapter"
      intro="What the money pays for, and what has to be settled before we take a dollar."
    >
      <Panel title="where the money goes">
        <div className="row-divide">
          <div>
            <h3 className="font-semibold">Voter registration</h3>
            <p className="text-ink/70">
              Printing applications, tabling supplies, and deputy registrar
              materials for drives on campus.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Getting to the turf</h3>
            <p className="text-ink/70">
              Gas, parking, and van rentals so members can canvass in
              neighborhoods off campus.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Programming</h3>
            <p className="text-ink/70">
              Speaker travel, room and A/V costs, and food at meetings — the
              thing that actually gets people in the room.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">The banquet</h3>
            <p className="text-ink/70">
              One night a year to thank the members who knocked doors all
              semester.
            </p>
          </div>
        </div>
      </Panel>

      <Panel title="before you turn this on">
        <p className="text-ink/70 mb-2 max-w-prose">
          Political fundraising has rules, and a student chapter sits between
          campus policy and campaign finance law. Confirm all of this before
          publishing a donate link:
        </p>
        <ul className="row-divide">
          <li>
            <span className="font-semibold">Rice policy.</span>{" "}
            <span className="text-ink/70">
              Check with Student Activities and the SA about what a registered
              student organization may solicit, and whether funds must sit in a
              university account.
            </span>
          </li>
          <li>
            <span className="font-semibold">Committee status.</span>{" "}
            <span className="text-ink/70">
              Determine whether the chapter must register with the Texas Ethics
              Commission or the FEC, and what reporting that triggers.
            </span>
          </li>
          <li>
            <span className="font-semibold">Disclaimer text.</span>{" "}
            <span className="text-ink/70">
              If a disclaimer is required, put the exact required language here
              and in the footer — replace the placeholder in{" "}
              <code>components/Footer.tsx</code>.
            </span>
          </li>
          <li>
            <span className="font-semibold">Who may give.</span>{" "}
            <span className="text-ink/70">
              Contributions from foreign nationals are prohibited. Decide how
              you screen for that, and for corporate money.
            </span>
          </li>
          <li>
            <span className="font-semibold">Tax treatment.</span>{" "}
            <span className="text-ink/70">
              Contributions to political organizations are generally not
              tax-deductible as charitable gifts. Don&rsquo;t imply otherwise.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-ink/55 italic">
          This is a prompt to go ask, not legal advice. Get an answer from the
          university and the party before you take a dollar.
        </p>
      </Panel>
    </Layout>
  );
}
