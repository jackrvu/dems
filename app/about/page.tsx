import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { board, committees } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "about",
  description: "who we are, what we do, and the students who run it.",
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
          rice young democrats exists to give students a practical way to act on
          their politics.
        </p>
        <p className="mt-2 text-gray-600">
          that means the unglamorous work — registration tables, door knocking,
          phone banks, rides to the polls — alongside the conversations that
          make the work worth doing.
        </p>
        <p className="mt-2 text-gray-600">
          you do not need experience, a poli sci major, or a settled opinion on
          every issue. you need to be willing to show up.
        </p>
        <p className="mt-2 text-gray-500 italic">
          replace this copy in app/about/page.tsx with the club&rsquo;s own
          words.
        </p>
      </Panel>

      <Panel title="reach us">
        <a
          href={`mailto:${site.email}`}
          className="hover:text-indigo-400 transition-colors duration-200"
        >
          {site.email}
        </a>
        <p className="mt-2 text-gray-600">{site.mailingAddress}</p>
      </Panel>

      <Panel title="committees">
        <div className="row-divide">
          {committees.map((c) => (
            <div key={c.name}>
              <h3 className="font-bold lowercase">{c.name}</h3>
              <p className="text-gray-600">{c.description}</p>
              {c.lead ? (
                <p className="text-gray-600">lead: {c.lead}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Panel>
    </>
  );

  return (
    <Layout sidebar={sidebar}>
      <Panel title="executive board" aside={`${board.length} members`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {board.map((m, i) => (
            <div key={`${m.name}-${i}`}>
              {m.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full aspect-[4/5] object-cover border border-black mb-1"
                />
              ) : (
                <div
                  className="w-full aspect-[4/5] border border-black mb-1 flex items-center justify-center monogram text-base text-gray-500"
                  aria-hidden="true"
                >
                  {initials(m.name)}
                </div>
              )}
              <h3 className="font-bold">{m.name}</h3>
              <p className="text-dem-red lowercase">{m.role}</p>
              <p className="text-gray-600 lowercase">
                {[m.year, m.college, m.major].filter(Boolean).join(" · ")}
              </p>
              {m.bio ? <p className="text-gray-600 mt-1">{m.bio}</p> : null}
              {m.email ? (
                <p className="mt-1">
                  <a
                    href={`mailto:${m.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    email
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
