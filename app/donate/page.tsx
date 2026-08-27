import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "donate",
  description: "support voter registration, canvassing, and programming at rice.",
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
              className="font-semibold text-dem-red hover:text-red-800 transition-colors duration-200"
            >
              give now
            </a>
            <p className="mt-2 text-gray-600">
              or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {site.email}
              </a>{" "}
              to give another way or sponsor a specific event.
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600">
              donations are not open yet. set up a payment link, then paste it
              into <code>site.links.donate</code> in{" "}
              <code>content/site.ts</code> — this panel becomes a give button.
            </p>
            <p className="mt-2 text-gray-600">
              in the meantime, email{" "}
              <a
                href={`mailto:${site.email}`}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {site.email}
              </a>
              .
            </p>
          </>
        )}
      </Panel>

      <Panel title="other ways to help">
        <p className="text-gray-600">
          money is not the only thing we need — for most students, time is worth
          more.{" "}
          <Link
            href="/events"
            className="hover:text-green-500 transition-colors duration-200"
          >
            come to an event
          </Link>
          , bring a friend to a canvass, or ask your organization to sponsor
          one.
        </p>
      </Panel>
    </>
  );

  return (
    <Layout sidebar={sidebar}>
      <Panel title="where the money goes">
        <div className="row-divide">
          <div>
            <h3 className="font-bold">voter registration</h3>
            <p className="text-gray-600">
              printing applications, tabling supplies, and deputy registrar
              materials for drives on campus.
            </p>
          </div>
          <div>
            <h3 className="font-bold">getting to the turf</h3>
            <p className="text-gray-600">
              gas, parking, and van rentals so members can canvass in
              neighborhoods off campus.
            </p>
          </div>
          <div>
            <h3 className="font-bold">programming</h3>
            <p className="text-gray-600">
              speaker travel, room and a/v costs, and food at meetings — the
              thing that actually gets people in the room.
            </p>
          </div>
          <div>
            <h3 className="font-bold">the banquet</h3>
            <p className="text-gray-600">
              one night a year to thank the members who knocked doors all
              semester.
            </p>
          </div>
        </div>
      </Panel>

      <Panel title="before you turn this on">
        <p className="text-gray-600 mb-2 max-w-prose">
          political fundraising has rules, and a student chapter sits between
          campus policy and campaign finance law. confirm all of this before
          publishing a donate link:
        </p>
        <ul className="row-divide">
          <li>
            <span className="font-bold">rice policy.</span>{" "}
            <span className="text-gray-600">
              check with student activities and the sa about what a registered
              student organization may solicit, and whether funds must sit in a
              university account.
            </span>
          </li>
          <li>
            <span className="font-bold">committee status.</span>{" "}
            <span className="text-gray-600">
              determine whether the chapter must register with the texas ethics
              commission or the fec, and what reporting that triggers.
            </span>
          </li>
          <li>
            <span className="font-bold">disclaimer text.</span>{" "}
            <span className="text-gray-600">
              if a disclaimer is required, put the exact required language here
              and in the footer — replace the placeholder in{" "}
              <code>components/Footer.tsx</code>.
            </span>
          </li>
          <li>
            <span className="font-bold">who may give.</span>{" "}
            <span className="text-gray-600">
              contributions from foreign nationals are prohibited. decide how
              you screen for that, and for corporate money.
            </span>
          </li>
          <li>
            <span className="font-bold">tax treatment.</span>{" "}
            <span className="text-gray-600">
              contributions to political organizations are generally not
              tax-deductible as charitable gifts. do not imply otherwise.
            </span>
          </li>
        </ul>
        <p className="mt-2 text-gray-500 italic">
          this is a prompt to go ask, not legal advice. get an answer from the
          university and the party before you take a dollar.
        </p>
      </Panel>
    </Layout>
  );
}
