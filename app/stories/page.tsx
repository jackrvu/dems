import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { stories } from "@/content/stories";
import { formatCompactYear } from "@/lib/format";

export const metadata: Metadata = {
  title: "stories",
  description: "recaps, explainers, and arguments from members of rice young democrats.",
};

export default function StoriesPage() {
  return (
    <Layout>
      <Panel title="stories" aside={`${stories.length} published`}>
        {stories.length > 0 ? (
          <div className="row-divide">
            {stories.map((s) => (
              <article key={s.slug}>
                <div className="flex flex-row items-baseline gap-3">
                  <span className="text-gray-600 shrink-0 tabular-nums">
                    {formatCompactYear(s.date)}
                  </span>
                  <Link
                    href={`/stories/${s.slug}`}
                    className="font-semibold hover:text-green-500 transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                  {s.kind ? (
                    <span className="text-3xs text-dem-red lowercase shrink-0">
                      {s.kind}
                    </span>
                  ) : null}
                </div>
                <p className="text-gray-600 mt-1 max-w-prose">{s.excerpt}</p>
                <p className="text-gray-600 mt-1 lowercase">
                  by {s.author}
                  {s.role ? `, ${s.role}` : ""}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">
            nothing published yet. add a story to content/stories.ts.
          </p>
        )}
      </Panel>

      <Panel title="want to write?">
        <p className="text-gray-600">
          event recaps, explainers on how local elections actually work, and
          arguments members want to make under their own name. talk to the
          communications director.
        </p>
      </Panel>
    </Layout>
  );
}
